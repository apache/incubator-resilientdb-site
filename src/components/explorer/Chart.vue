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

				const transactions = [];
				const createdAt = [];
				const dateTime = [];
				for (var i = 0; i < blocks.value.length; i++) {
					var obj = blocks.value[i].transactions;
					for (var j = 1; j < obj.length + 1; j++) {
						transactions[i] = j;
					}
					createdAt[i] = blocks.value[i].createdAt; 
					dateTime[i] = createdAt[i].split(" ")[1];
				}
				console.log("created at: " + createdAt);
				let timeStart = parseInt(blocks.value[0].createdAt.split(" ")[1].split(":")[1]); 
				let latestTime = parseInt(blocks.value[blocks.value.length - 1].createdAt.split(" ")[1].split(":")[1]); 
				// console.log("time start " + timeStart);
				// console.log("time end: " + latestTime);
			
				// const xtime = [];
				// const final = [];
				// let counter = 0;
				// for (var i = timeStart; i < latestTime + 1; i++){
				// 	xtime[i] = timeStart;
				// 	if (dateTime.length === 0){
				// 		break;
				// 	}
				// 	if (dateTime[0].split(":")[1] <= timeStart) {
				// 		while (dateTime[0].split(":")[1] <= timeStart){
				// 			if (dateTime.length === 0){
				// 				break;
				// 			}
				// 			counter = counter + 1
				// 			final[i] = counter; 
				// 			console.log("same category");
				// 			dateTime.shift(); 
				// 		}
				// 	} else {
				// 		counter = 0;
				// 		final[i] = counter; 
				// 	}
				// 	timeStart = timeStart + 1; 
				// }

				//  console.log(xtime);
				//  console.log(final);

				this.chartOptions = {
					xaxis: {
						categories: dateTime,
					}
				};

				this.series = [{
					data: transactions,
				}]
				}
		},
	};
</script>
