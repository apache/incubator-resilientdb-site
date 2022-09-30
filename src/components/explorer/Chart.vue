<template>
	<div class="">
		<apexcharts
			height="300"
			type="line"
			:options="chartOptions"
			:series="series"
		></apexcharts>
	</div>
</template>

<script>
	import VueApexCharts from "vue3-apexcharts";

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
	};
</script>
