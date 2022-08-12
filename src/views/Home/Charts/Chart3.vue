<template>
	<div class="">
		<apexcharts
			height="300"
			width="450"
			type="line"
			:options="chartOptions"
			:series="series"
		></apexcharts>
	</div>
</template>

<script>
	import VueApexCharts from "vue3-apexcharts";

	export default {
		name: "Chart2",
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
							"Partitioned Workload",
							"Low",
							"Medium",
							"High",
							"Extreme",
						],
						title: {
							text: "The Degree of Cross-shard Transactions Spanning All Shards",
						},
					},
					yaxis: [
						{
							title: {
								text: "Throughput (KTPS)",
								// style: {
								// 	color: "#FF1654",
								// },
							},
						},
						{
							opposite: true,

							title: {
								text: "Latency (Seconds)",
								// style: {
								// 	color: "#247BA0",
								// },
							},
						},
					],
					// yaxis: {
					// 	title: {
					// 		text: "Throughput (KTPS)",
					// 	},
					// },
					grid: {
						show: false,
					},

					colors: ["#59b4a9", "#FF5733"],

					fill: {
						color: "#59b4a9",
						type: "gradient",
					},

					legend: {
						position: "top",
					},
				},
				series: [
					{
						name: "Throughput",
						data: [1200, 254, 196, 167, 81],
					},
					{
						name: "Latency",
						data: [3, 6, 7, 6, 7],
					},
				],
			};
		},
	};
</script>
