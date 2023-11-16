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

	// TODO: Create function to avoid duplicate code for creating chart data
	export default {
		name: "Chart",
		components: {
			apexcharts: VueApexCharts,
		},
		props: ['blocks'], // Passed from MetaData
		data: function () {
			const arrayRange = (start, stop, step) =>
				Array.from(
				{ length: (stop - start) / step + 1 },
				(value, index) => start + index * step
			);

			const minuteInterval = 60*1000;
			const hourInterval = 60*60*1000;
			const dayInterval = 24*60*60*1000;
			let interval = 0;

			let timeStart = 0;
			let latestTime = 0;

			if (this.blocks.length > 0) {
				timeStart = Date.parse(this.blocks[0].createdAt);
				latestTime = Date.parse(this.blocks[this.blocks.length - 1].createdAt);
			}

			if (latestTime - timeStart <= hourInterval) {
				interval = minuteInterval;
			}
			else if (latestTime - timeStart <= dayInterval) {
				interval = hourInterval;
			}
			else {
				interval = dayInterval;
			}

			if (this.blocks.length > 0) {
				// Round down to nearest interval tick
				timeStart -= timeStart % interval;
				latestTime -= latestTime % interval;
			}
			let timeRange = arrayRange(timeStart, latestTime, interval);

			const getChartDateString = (time) => {
				let str = new Date(time).toUTCString().substring(4);

				// keep in UTC to be consistent with the BlocksTable
				if (interval == dayInterval) {
					// remove HH:MM:SS
					str = str.substring(0, str.indexOf(":") - 3);
				}
				return str;
			}

			const timeAxis = timeRange.map(timeRange => getChartDateString(timeRange));

			const transactionCount = Array(timeRange.length).fill(0);
			let timeIndex = 0;
			for (let i = 0; i < this.blocks.length; i++) {
				let timeVal = Date.parse(this.blocks[i].createdAt);

				// TODO: improve efficiency using binary search
				while (timeVal >= timeRange[timeIndex] + interval) {
					timeIndex++;
				}
				transactionCount[timeIndex] += this.blocks[i].transactions.length;
			}

			return {
				chartOptions: {
					chart: {
						id: "basic-line",
						toolbar: {
							show: false,
						},
					},
					xaxis: {
						categories: timeAxis,
					},
					yaxis: {
						min: 0,
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
						data: transactionCount,
					},
				],
			};
		},
		methods: {
			async updateChart() {
				// blocks is kept up-to-date by BlocksTable
			
				const arrayRange = (start, stop, step) =>
					Array.from(
					{ length: (stop - start) / step + 1 },
					(value, index) => start + index * step
				);

				const minuteInterval = 60*1000;
				const hourInterval = 60*60*1000;
				const dayInterval = 24*60*60*1000;
				let interval = 0;

				let timeStart = 0;
				let latestTime = 0;

				if (this.blocks.length > 0) {
					timeStart = Date.parse(this.blocks[0].createdAt);
					latestTime = Date.parse(this.blocks[this.blocks.length - 1].createdAt);
				}

				if (latestTime - timeStart <= hourInterval) {
					interval = minuteInterval;
				}
				else if (latestTime - timeStart <= dayInterval) {
					interval = hourInterval;
				}
				else {
					interval = dayInterval;
				}

				if (this.blocks.length > 0) {
					// Round down to nearest interval tick
					timeStart -= timeStart % interval;
					latestTime -= latestTime % interval;
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
				for (let i = 0; i < this.blocks.length; i++) {
					let timeVal = Date.parse(this.blocks[i].createdAt);

					// TODO: improve efficiency using binary search
					while (timeVal >= timeRange[timeIndex] + interval) {
						timeIndex++;
					}
					transactionCount[timeIndex] += this.blocks[i].transactions.length;
				}

				this.chartOptions = {
					xaxis: {
						categories: timeAxis,
					}
				};

				this.series = [{
					data: transactionCount,
				}]
			}
		},
	};
</script>