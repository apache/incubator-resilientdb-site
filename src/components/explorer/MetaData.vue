<template>
	<div class="statistics">
		<a-card title="NexRes Blockchain (Sample Data)">
			<a-row style="margin: 1.5rem">
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Active Replica" :value="11" />
					<a-divider />
					<a-statistic title="Batch Size (MB)" :value="112" />
					<a-divider />
					<a-statistic title="Client Timer" :value="3" />
				</a-col>
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Active Client" :value="2" />
					<a-divider />
					<a-statistic title="Checkpoint Window Size" :value="12" />
					<a-divider />
					<a-statistic title="Proposal Timer" :value="4" />
				</a-col>
				<a-col :md="12">
					<chart />
				</a-col>
			</a-row>
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
