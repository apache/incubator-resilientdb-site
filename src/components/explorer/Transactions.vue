<script lang="ts">
	import { useBlocksStore } from "@/store/blocks";
	import { storeToRefs } from "pinia";
	// import blocks from "../../api/blockstatus.json";
	import blocks from "../../api/transactions.json";
	import { DownOutlined, FireTwoTone } from "@ant-design/icons-vue";
	import { defineComponent, unref } from "vue";
	import { useRoute } from "vue-router";
	
	const columns = [
		{
			title: "Command Type",
			dataIndex: "cmd",
			key: "cmd",
		},
		{
			title: "Key",
			dataIndex: "key",
			key: "key",
		},
		{
			title: "Value",
			dataIndex: "value",
			key: "value",
		},
		{
			title: "Min Key",
			dataIndex: "min_key",
			key: "min_key",
		},
		{
			title: "Max Key",
			dataIndex: "max_key",
			key: "max_key",
		},
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
