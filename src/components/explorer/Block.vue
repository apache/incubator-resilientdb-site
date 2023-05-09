<script lang="ts">
	import { useBlocksStore } from "@/store/blocks";
	import { storeToRefs } from "pinia";
	import blocks from "../../api/blockstatus.json";
	import { DownOutlined, FireTwoTone } from "@ant-design/icons-vue";
	import { defineComponent } from "vue";
	import { useRoute } from "vue-router";
	const columns = [
		{
			title: "number",
			dataIndex: "number",
			key: "number",
		},
		{
			title: "hash",
			dataIndex: "hash",
			key: "hash",
		},
		{
			title: "size",
			dataIndex: "size",
			key: "size",
		},
		{
			title: "transactions",
			dataIndex: "transactions",
			key: "transactions",
		},
		{
			title: "commitSignatures",
			key: "commitSignatures",
			dataIndex: "commitSignatures",
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
		async setup() {
			const route = useRoute();
			const blocksStore = useBlocksStore();
			const { blocks } = storeToRefs(blocksStore);
			const { refreshBlocks } = blocksStore;
			await refreshBlocks();

			const block = blocks.value.filter(
				(b) => b.id === parseInt(route.query.id as string)
			);

			return {
				data: block,
				columns,
			};
		},
	});
</script>
<template>
	<div class="container timeline">
		<div class="grid letOverflow">
			<a-descriptions
				title="Block Info"	
				bordered
				:column="{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }"
			>
				<a-descriptions-item label="Block #">
					{{ data[0].number }}</a-descriptions-item
				>
				<a-descriptions-item label="Size">{{
					data[0].size + " bytes"
				}}</a-descriptions-item>
				<a-descriptions-item label="Transactions">
					<a-tag color="cyan">
							<a :href="'/transactions?id=' + data[0].id">
								{{ Object.keys(data[0].transactions).length }} transactions
							</a>
						</a-tag>
				</a-descriptions-item>
				<a-descriptions-item label="Created At">
					{{ data[0].createdAt }}
				</a-descriptions-item>
			</a-descriptions>
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
