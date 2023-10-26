<template>
	<div class="">
		<apexcharts
			height="300"
			type="line"
			:options="chartOptions"
			:series="series"
		></apexcharts>
	</div>
	<button @click="updateChart">Update</button>
</template>

<script>
	import VueApexCharts from "vue3-apexcharts";
	import { useBlocksStore } from "@/store/blocks";
	import { storeToRefs } from "pinia";

	export default {
		name: "Chart",
		components: {
			apexcharts: VueApexCharts,
		},
		data: function () {
			return {
				chartOptions: {
					chart: {
						id: "basic-line",
						toolbar: {
							show: false,
						},
					},
					xaxis: {
						categories: [
							"May 9",
							"May 10",
							"May 11",
							"May 12",
							"May 13",
							"May 14",
							"May 15",
							"May 16",
						],
					},
					grid: {
						show: false,
					},

					colors: ["#59b4a9"],

					fill: {
						color: "#59b4a9",
						type: "gradient",
					},
					title: {
						text: "Resilient Transaction History",
						style: {
							fontFamily: "Poppins, 'Helvetica Neue', sans-serif",
							fontWeight: "normal",
						},
					},
				},
				series: [
					{
						name: "transactions",
						data: [30, 40, 45, 50, 49, 60, 70, 91],
						
					},
				],
			};
		},
		methods: {
			async updateChart() {
				const blocksStore = useBlocksStore();
				const { blocks } = storeToRefs(blocksStore);
				const { refreshBlocks } = blocksStore;
				refreshBlocks();
			
				const arrayRange = (start, stop, step) =>
					Array.from(
					{ length: (stop - start) / step + 1 },
					(value, index) => start + index * step
				);

				const timezone = "GMT";
				const minuteInterval = 60*1000;
				const hourInterval = 60*60*1000;
				const dayInterval = 24*60*60*1000;
				let interval = 0;

				let timeStart = blocks.value.length > 0 ? 
								Date.parse(blocks.value[0].createdAt) : 0;
				let latestTime = blocks.value.length > 0 ? 
								Date.parse(blocks.value[blocks.value.length - 1].createdAt) 
								: 0;

				if (latestTime - timeStart <= hourInterval) {
					interval = minuteInterval;
				}
				else if (latestTime - timeStart <= dayInterval) {
					interval = hourInterval;
				}
				else {
					interval = dayInterval;
				}
				let timeRange = arrayRange(timeStart, latestTime, interval);

				const getChartDateString = (time) => {
					let str = new Date(time).toUTCString().substring(4);

					// keep in UTC to be consistent with the BlocksTable
					if (interval == dayInterval) {
						str = str.substring(0, str.indexOf(":") - 3);
					}
					return str;
				}

				const timeAxis = timeRange.map(timeRange => getChartDateString(timeRange));

				const transactionCount = Array(timeRange.length).fill(0);
				let timeIndex = 0;
				for (let i = 0; i < blocks.value.length; i++) {
					let timeVal = Date.parse(blocks.value[i].createdAt);

					// TODO: improve efficiency using binary search
					while (timeVal >= timeRange[timeIndex] + interval) {
						timeIndex++;
					}
					transactionCount[timeIndex] += blocks.value[i].transactions.length;
				}

				this.chartOptions = {
					xaxis: {
						categories: timeAxis,
					},
					yaxis: {
						min: 0,
					}
				};

				this.series = [{
					data: transactionCount,
				}]
			}
		},
	};
</script>