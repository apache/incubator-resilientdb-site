<template>
	<div class="statistics">
		<a-card title="NexRes Blockchain (Sample Data)">
			<a-row style=" margin: 1.5rem">
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Active Replicas" :value="4"/>
					<a-divider />
					<a-statistic title="Workers" :value="64" />
					<a-divider />
					<a-statistic title="Minimum Data Received" :value="1" />
				</a-col>
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Active Clients" :value="1" />
					<a-divider />
					<a-statistic title="Input Workers" :value="1" />
					<a-divider />
					<a-statistic title="Max Malicious Replicas" :value="0" />
				</a-col>
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Client Batch Size" :value="100"/>
					<a-divider />
					<a-statistic title="Output Workers" :value="1" />
					<a-divider />
					<a-statistic title="Checkpoint Water Mark" :value="5" />
				</a-col>
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Client Batch Wait Time(MS)" :value="100" />
					<a-divider />
					<a-statistic title="Maximum TXN Process" :value="2048" />
					<a-divider />
					<a-statistic title="Client Timeout (MS)" :value="100000" />
				</a-col>
			</a-row>
				<chart />
		</a-card>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import Chart from "../explorer/Chart.vue";
	export default defineComponent({
		name: "MetaData",
		components: { Chart },
		props: {
			value: {
				type: Int8Array,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
		},
	});
</script>

<style scoped>
	.container {
		width: 100%;
		align-self: center;
		margin: auto;
	}

	.heading {
		display: flex;
		width: 100%;
		margin: 0 2rem;
	}

	.statistics {
		margin: 0 1rem;
		margin-bottom: 2rem;
		padding: 0 1rem;
	}
</style>
