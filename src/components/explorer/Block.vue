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
		setup() {
			const route = useRoute();
			const { blocks } = storeToRefs(useBlocksStore());
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
				<a-descriptions-item label="Hash">{{
					data[0].hash
				}}</a-descriptions-item>
				<a-descriptions-item label="Size">{{
					data[0].size
				}}</a-descriptions-item>
				<a-descriptions-item label="Block Height">{{
					data[0].blockHeight
				}}</a-descriptions-item>
				<a-descriptions-item label="Transactions">
					<a-tag color="cyan">
							<a :href="'/transactions?id=' + data[0].id">
								{{ Object.keys(data[0].transactions).length }} transactions
							</a>
						</a-tag>
				</a-descriptions-item>
				<a-descriptions-item label="Mined By">{{
					data[0].minedBy
				}}</a-descriptions-item>
				<a-descriptions-item label="Difficulty">
					{{ data[0].difficulty }}
				</a-descriptions-item>
				<a-descriptions-item label="Total Difficulty">
					{{ data[0].totalDifficulty }}
				</a-descriptions-item>
				<a-descriptions-item label="Gas Used">
					{{ data[0].gasUsed }}
					<fire-two-tone two-tone-color="red" />
				</a-descriptions-item>
				<a-descriptions-item label="Parent Hash">
					{{ data[0].parentHash }}
				</a-descriptions-item>
				<a-descriptions-item label="State Root">
					{{ data[0].stateRoot }}
				</a-descriptions-item>
				<a-descriptions-item label="Nounce">
					{{ data[0].nounce }}
				</a-descriptions-item>
				<a-descriptions-item label="Commit Certificate">
					{{ data[0].commitCertificate }}
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
