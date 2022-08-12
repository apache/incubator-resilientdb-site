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
		name: "Chart1",
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
						categories: ["1", "2", "3", "4", "5", "6"],
						title: {
							text: "Number of Clusters (Regions)",
						},
					},
					yaxis: {
						title: {
							text: "Throughput (KTPS)",
						},
					},
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
						name: "ResilientDB",
						data: [10, 40, 42, 48, 52, 53],
					},
					{
						name: "PBFT",
						data: [34, 33, 30, 17, 16, 15],
					},
				],
			};
		},
	};
</script>
