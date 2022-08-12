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
						categories: ["4", "16", "32", "64", "91"],
						title: {
							text: "Number of Replicas",
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
						data: [355, 365, 356, 242, 210],
					},
					{
						name: "PBFT",
						data: [191, 150, 95, 55, 38],
					},
				],
			};
		},
	};
</script>
