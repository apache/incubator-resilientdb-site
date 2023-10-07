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
						text: "NexRes Transaction History",
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
				console.log(blocks);

				const transactionCount = [];
				const createdAt = [];
				const minute = [];
				for (var i = 0; i < blocks.value.length; i++) {
					var obj = blocks.value[i].transactions;
					for (var j = 1; j < obj.length + 1; j++) {
						transactionCount[i] = j;
					}
					createdAt[i] = blocks.value[i].createdAt; 
					minute[i] = createdAt[i].split(" ")[1].split(":")[1];
				}
			
				const arrayRange = (start, stop, step) =>
					Array.from(
					{ length: (stop - start) / step + 1 },
					(value, index) => start + index * step
				);
				
				let timeStart = parseInt(blocks.value[0].createdAt.split(" ")[1].split(":")[1]); 
				let latestTime = parseInt(blocks.value[blocks.value.length - 1].createdAt.split(" ")[1].split(":")[1]);
				let timeRange = arrayRange(timeStart, latestTime, 1);
				let hour = parseInt(blocks.value[0].createdAt.split(" ")[1].split(":")[0]);
				let timeZone = blocks.value[0].createdAt.split(" ")[2];
				const time = timeRange.map(timeRange => hour + ':' + timeRange + ':00 ' + timeZone); 

				const transactions = [];
				let counter = 1;
				for (var i = 0; i < timeRange.length; i++){
					transactions[i] = 0; 
					while (parseInt(minute[0]) === timeStart) {
						if (minute.length === 0){
							break;
						}
						console.log("gets here" + counter);
						transactions[i] = counter++;
						minute.shift(); 
					}
					counter = 1; 
					timeStart++; 
				}

				this.chartOptions = {
					xaxis: {
						categories: time,
					}
				};

				this.series = [{
					data: transactions,
				}]
				}
		},
	};
</script>
