<script lang="ts">
	import { useBlocksStore } from "@/store/blocks";
	import { storeToRefs } from "pinia";
	import { DownOutlined, FireTwoTone } from "@ant-design/icons-vue";
	import { defineComponent } from "vue";
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
		async setup() {
			const route = useRoute();
			const blocksStore = useBlocksStore();
			const { blocks } = storeToRefs(blocksStore);
			const { refreshBlocks } = blocksStore;
			await refreshBlocks();
			
			let block = blocks.value.filter(
				(b) => b.id === parseInt(route.query.id as string)
			);

			// Format transaction value JSON
			for (let i = 0; i < block[0].transactions.length; i++) {
				if (block[0].transactions[i].value) {
					let value_str = String(block[0].transactions[i].value);
					let value = JSON.parse(value_str);
					block[0].transactions[i].value = JSON.stringify(value, null, 4);;
				}
				else {
					block[0].transactions[i].value = "";
				}
			}
			
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
			<pre class="textWrapper"><a-table :columns="columns" :data-source="data" >
				<template #title><strong>Transactions</strong> for Block <a :href="'/block?id=' + blockInfo[0].id">{{blockInfo[0].number}}</a></template>
			</a-table></pre>
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
	.textWrapper {
		font-family: Poppins, 'Helvetica Neue', sans-serif;
	}
	
</style>