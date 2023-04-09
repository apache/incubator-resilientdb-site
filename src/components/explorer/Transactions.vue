<script lang="ts">
	import { useBlocksStore } from "@/store/blocks";
	import { storeToRefs } from "pinia";
	// import blocks from "../../api/blockstatus.json";
	import { DownOutlined, FireTwoTone } from "@ant-design/icons-vue";
	import { defineComponent } from "vue";
	import { useRoute } from "vue-router";
	/*
	cmd: string;
		key?: string;
		value?: string;
		min_key?: string;
		max_key?: string;
		*/
	const columns = [
		{
			title: "cmd",
			dataIndex: "cmd",
			key: "cmd",
		},
		// {
		// 	title: "#",
		// 	dataIndex: "id",
		// 	key: "id",
		// },
		// {
		// 	title: "Transaction Hash",
		// 	dataIndex: "txnHash",
		// 	key: "txnHash",
		// },
		// {
		// 	title: "Block",
		// 	dataIndex: "block",
		// 	key: "block",
		// },
		// {
		// 	title: "Client Id",
		// 	dataIndex: "clientId",
		// 	key: "clientId",
		// },
		// {
		// 	title: "Transaction Data",
		// 	key: "transactionData",
		// 	dataIndex: "transactionData",
		// },
        // {
		// 	title: "Client Signature",
		// 	key: "clientSignature",
		// 	dataIndex: "clientSignature",
		// },
		// {
		// 	title: "Action",
		// 	key: "action",
		// },
	];

	// const data = blocks;

	export default defineComponent({
		components: {
			DownOutlined,
			FireTwoTone,
		},
		setup() {
			const route = useRoute();
			const blocksStore = useBlocksStore();
			const { blocks } = storeToRefs(blocksStore);
			const { refreshBlocks } = blocksStore;
			refreshBlocks();
			// setInterval(()=> { refreshBlocks() }, 5 * 1000);

			const block = blocks.value.filter(
				(b) => b.id === parseInt(route.query.id as string)
			);

			console.log(blocks);
			console.log(block);
			return {
				data: block[0].transactions,
                blockInfo: block,
				columns,
			};
		},
	});
</script>
<template>
	<div class="container timeline">
		<div class="grid letOverflow">
 
        <a-table :columns="columns" :data-source="data" >
   <template #title><strong>Transactions</strong> for Block <a :href="'/block?id=' + blockInfo[0].id">{{blockInfo[0].number}}</a></template>
  </a-table>
		
		</div>
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
	.grid {
		margin: 0 1rem;
		padding: 0 1rem;
	}
	
</style>
