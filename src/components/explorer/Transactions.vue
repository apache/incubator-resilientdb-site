<script lang="ts">
	import { useBlocksStore } from "@/store/blocks";
	import { storeToRefs } from "pinia";
	import blocks from "../../api/blockstatus.json";
	import { DownOutlined, FireTwoTone } from "@ant-design/icons-vue";
	import { defineComponent } from "vue";
	import { useRoute } from "vue-router";
	const columns = [
		{
			title: "#",
			dataIndex: "id",
			key: "id",
		},
		{
			title: "Transaction Hash",
			dataIndex: "txnHash",
			key: "txnHash",
		},
		{
			title: "Block",
			dataIndex: "block",
			key: "block",
		},
		{
			title: "Client Id",
			dataIndex: "clientId",
			key: "clientId",
		},
		{
			title: "Transaction Data",
			key: "transactionData",
			dataIndex: "transactionData",
		},
        {
			title: "Client Signature",
			key: "clientSignature",
			dataIndex: "clientSignature",
		},
		// {
		// 	title: "Action",
		// 	key: "action",
		// },
	];

	const data = blocks;

	export default defineComponent({
		components: {
			DownOutlined,
			FireTwoTone,
		},
		setup() {
			const route = useRoute();
			const { blocks } = storeToRefs(useBlocksStore());
			const block = blocks.value.filter(
				(b) => b.id === parseInt(route.query.id as string)
			);

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
