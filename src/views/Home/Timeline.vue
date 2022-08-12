<template>
	<vue-horizontal-timeline
		:items="items"
		min-width="100px"
		timeline-background="#00010300"
		title-class="_title"
		line-color="#59B4A9"
	/>
</template>

<script>
	import { VueHorizontalTimeline } from "vue-horizontal-timeline";

	export default {
		components: {
			VueHorizontalTimeline,
		},
		data: () => ({
			items: [
				{
					title: "Winter 2024",
					content: "Planet Scale",
				},
				{
					title: "Spring 2023",
					content: "Reconfigurable Ecosystem",
				},
				{
					title: "Fall 2022",
					content: "NexRes: A New Sustainable Foundation",
				},
				{
					title: "Summer 2022",
					content:
						"Hybrid Consensus: BFT + PoS + PoW, View-Change-Less Consensus, Hybrid Consensus: Power-of-Collaboration",
				},
				{
					title: "Spring 2022",
					content:
						"On the Correctness of Speculative Consensus, The Bedrock of BFT",
					stepCssClass: "has-step-green",
				},
				{
					title: "Winter 2022",
					content: "SGX Accelerated Consensus",
					stepCssClass: "has-step-green",
				},
				{
					title: "Fall 2021",
					content: "Fault-tolerant Serverless Infrastructure",
					stepCssClass: "has-step-green",
				},
				{
					title: "September 30, 2021",
					content: "ResilientDB 3.0 and ExpoBlog Release",
					stepCssClass: "has-step-green",
				},
				{
					title: "Summer 2021",
					content: "RingBFT: Practical Sharded Consensus on Ring Topology",
					stepCssClass: "has-step-green",
				},
				{
					title: "Spring 2021",
					content: "ByShard: Theoretical Sharding Foundation",
					stepCssClass: "has-step-green",
				},
				{
					title: "February 4, 2021",
					content: "Authoritative Blockchain Textbook",
					stepCssClass: "has-step-green",
				},

				{
					title: "November 2020",
					content: "Linear Consensus",
					stepCssClass: "has-step-green",
				},
				{
					title: "October 2020",
					content: "Concurrent Consensus",
					stepCssClass: "has-step-green",
				},
				{
					title: "August 2020",
					content: "Cerberus: Minimalistic Sharded Consensus",
					stepCssClass: "has-step-green",
				},
				{
					title: "May 2020",
					content:
						"Geo Consensus, Architectural Lessons Learned, The Story Behind Building ResilientDB",
					stepCssClass: "has-step-green",
				},
				{
					title: "April 2020",
					content: "Delayed Replication",
					stepCssClass: "has-step-green",
				},
				{
					title: "March 2020",
					content: "DB-based Chain, Smart Contract, Admin UI, Dashboard",
					stepCssClass: "has-step-green",
				},
				{
					title: "February 2020",
					content: "Wait-free Consensus",
					stepCssClass: "has-step-green",
				},
				{
					title: "January 2020",
					content: "Speculative Consensus",
					stepCssClass: "has-step-green",
				},
				{
					title: "December 2019",
					content: "Reliable Cluster Sending",
					stepCssClass: "has-step-green",
				},
				{
					title: "November 2019",
					content: "Release V1.0",
					stepCssClass: "has-step-green",
				},
				{
					title: "September 2019",
					content: "Off-Chain Management",
					stepCssClass: "has-step-green",
				},
				{
					title: "July 2019",
					content: "De-coupled Execution",
					stepCssClass: "has-step-green",
				},
				{
					title: "May 2019",
					content: "Out-of-order Communication",
					stepCssClass: "has-step-green",
				},
				{
					title: "March 2019",
					content: "Advanced Transaction Processing Textbook",
					stepCssClass: "has-step-green",
				},
				{
					title: "September 2018",
					content: "Deep Pipeline Architecture",
					stepCssClass: "has-step-green",
				},
				{
					title: "April 2018",
					content: "Optimal Batching",
					stepCssClass: "has-step-green",
				},
				{
					title: "January 2018",
					content: "ResilientDB Vision",
					stepCssClass: "has-step-green",
				},
			],
		}),
		created: function () {
			var myDiv = document.getElementById("scroll");
			console.log(myDiv);
			setTimeout(function () {
				myDiv.scrollLeft = myDiv.scrollWidth;
			}, 500);
		},
	};
</script>

<style>
	.vue-horizontal-timeline .timeline .title {
		font-size: 12px !important;
	}
	.vue-horizontal-timeline .timeline .content {
		font-size: 12px !important;
	}

	.has-step-green::after {
		background: rgb(76, 231, 128) !important;
	}

	.vue-horizontal-timeline .timeline ol li .time {
		/* backdrop-filter: saturate(180%) blur(10px) !important; */
		color: #000 !important;
		background: #eeeeee !important;
	}
	.vue-horizontal-timeline .timeline ol li:nth-child(odd) .time::before {
		border-color: #eeeeee transparent transparent transparent !important;
		-webkit-filter: none !important;
		filter: none !important;
		top: 98% !important;
	}
	.vue-horizontal-timeline .timeline ol li:nth-child(even) .time::before {
		border-color: transparent transparent transparent #eeeeee !important;
		-webkit-filter: none !important;
		filter: none !important;
		top: -6px !important;
	}
</style>
