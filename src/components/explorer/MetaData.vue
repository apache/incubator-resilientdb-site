
<script lang="ts">
	import { defineComponent } from "vue";
	import Chart from "../explorer/Chart.vue";
	import { useBlocksStore, useLedgerStore } from "@/store/blocks";
	import { storeToRefs } from "pinia";
	
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
		async setup() {
			const ledgerStore = useLedgerStore();
			const { ledger } = storeToRefs(ledgerStore);
			const { populateTable } = ledgerStore;
			await populateTable();

			const blocksStore = useBlocksStore();
			const { blocks } = storeToRefs(blocksStore);
			const { refreshBlocks } = blocksStore;
			await refreshBlocks();

			return {
				data: ledger,
				blocks: blocks,
			};
		},
	});
</script>

<template>
	<div class="statistics">
		<a-card title="ResilientDB BlockChain Data">
			<a-row style="margin: 1.5rem">
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Active Replicas" :value="data[0].replicaNum"/>
					<a-divider />
					<a-statistic title="Workers" :value="data[0].workerNum" />
					<a-divider />
					<a-statistic title="Minimum Data Received" :value="data[0].minDataReceiveNum" />
					<a-divider />
					<a-statistic title="Blocks" :value="data[0].blockNum" />
				</a-col>
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Input Workers" :value="data[0].inputWorkerNum" />
					<a-divider />
					<a-statistic title="Output Workers" :value="data[0].outputWorkerNum" />
					<a-divider />
					<a-statistic title="Max Malicious Replicas" :value="data[0].maxMaliciousReplicaNum" />
					<a-divider />
					<a-statistic title="Chain Age (s)" :value="data[0].chainAge" />
				</a-col>
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Client Batch Size" :value="data[0].clientBatchNum"/>
					<a-divider />
					<a-statistic title="Client Batch Wait Time (MS)" :value="data[0].clientBatchWaitTime" />
					<a-divider />
					<a-statistic title="Checkpoint Water Mark" :value="data[0].checkpointWaterMark" />
				</a-col>
				<a-col :xs="12" :sm="12" :md="6">
					<a-statistic title="Maximum TXN Process" :value="data[0].maxProcessTxn" />
					<a-divider />
					<a-statistic title="Client Timeout (MS)" :value="data[0].clientTimeoutMs" />
					<a-divider />
					<a-statistic title="Transactions Committed" :value="data[0].transactionNum" />
				</a-col>
			</a-row>
			<!-- <a-col :md="12"> -->
				<Chart :blocks="blocks"/>
				<!-- </a-col> -->
		</a-card>
	</div>
</template>

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