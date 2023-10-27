<script>
	import { useBlocksStore } from "@/store/blocks";
	import { storeToRefs } from "pinia";
	import {
		DownOutlined,
		FireTwoTone,
		SearchOutlined,
	} from "@ant-design/icons-vue";
	import { defineComponent, reactive, ref, toRefs } from "vue";
	const columns = [
		{
			title: "#",
			dataIndex: "id",
			key: "id",
			fixed: "left",
			width: 70,
			sorter: {
				compare: (a, b) => a.id - b.id,
				multiple: 1,
			},
		},
		{
			title: " Block #",
			dataIndex: "number",
			key: "number",
			width: 120,
			fixed: "left",
			slots: {
				filterDropdown: "filterDropdown",
				filterIcon: "filterIcon",
				customRender: "customRender",
			},
			onFilter: (value, record) =>
				record.number.toString().toLowerCase().includes(value.toLowerCase()),
			onFilterDropdownVisibleChange: (visible) => {
				if (visible) {
					setTimeout(() => {
						console.log(searchInput.value);
						searchInput.value.focus();
					}, 100);
				}
			},
		},
		{
			title: "Size",
			dataIndex: "size",
			key: "size",
			sorter: {
				compare: (a, b) => a.size - b.size,
				multiple: 1,
			},
		},
		{
			title: "Transactions",
			dataIndex: "transactions",
			key: "transactions",
		},
		{
			title: "Created At",
			key: "createdAt",
			dataIndex: "createdAt",
			fixed: "right",
			width: 130,
		},
	];

	// const transactions = [];
	// for (var i = 0; i < data.length; i++) {
	// 	var obj = data[i].transactions;
	// 	for (var key in obj) {
	// 		var val = obj[key];
	// 		transactions.push(val);
	// 	}
	// }

	// console.log(transactions[0].txnHash);

	export default defineComponent({
		components: {
			DownOutlined,
			FireTwoTone,
			SearchOutlined,
		},
		setup() {
			const state = reactive({
				searchText: "",
				searchedColumn: "",
			});

			const handleSearch = (selectedKeys, confirm, dataIndex) => {
				confirm();
				state.searchText = selectedKeys[0];
				state.searchedColumn = dataIndex;
			};

			const handleReset = (clearFilters) => {
				clearFilters();
				state.searchText = "";
			};

			const searchInput = ref();
			const blocksStore = useBlocksStore();
			const { blocks } = storeToRefs(blocksStore);

			const { refreshBlocks } = blocksStore;
			refreshBlocks(); // Populate table on initial load

			const socket = new WebSocket('ws://localhost:18000/blockupdatelistener'); 
			socket.addEventListener('open', function (event) { 
				console.log('Opened websocket for reading blocks'); 
			}); 

			socket.addEventListener('message', function (event) { 
				console.log(event.data);

				function delay(time) {
					return new Promise(resolve => setTimeout(resolve, time));
				}
				delay(1000).then(() => refreshBlocks());
			});

			socket.addEventListener('close', function (event) { 
				console.log('Websocket for reading blocks has been closed'); 
			});

			return {
				data: blocks,
				columns,
				handleSearch,
				handleReset,
				searchInput,
				...toRefs(state),
			};
		},
	});
</script>

<template>
	<div class="container timeline">
		<div class="grid letOverflow">
			<a-table :columns="columns" :data-source="data" bordered>
				<!-- <template #headerCell="{ column }">
					<template v-if="column.key === 'name'">
						<span>
							<smile-outlined />
							Name
						</span>
					</template>
				</template> -->

				<template #bodyCell="{ column, record }">
					<template v-if="column.key === 'size'">
						<span>
							{{ record.size }}
							bytes
						</span>
					</template>
					<template v-if="column.key === 'transactions'">
						<a-tag color="cyan">
							<a :href="'/transactions?id=' + record.id">
								View transaction
							</a>
						</a-tag>
					</template>
					<template v-else-if="column.key === 'gasUsed'">
						<div>
							<fire-two-tone two-tone-color="red" /> {{ record.gasUsed }}
						</div>
					</template>
				</template>
				<template #title><span>Latest Blocks</span></template>

				<template
					#filterDropdown="{
						setSelectedKeys,
						selectedKeys,
						confirm,
						clearFilters,
						column,
					}"
				>
					<div style="padding: 8px">
						<a-input
							ref="searchInput"
							:placeholder="`Search ${column.dataIndex}`"
							:value="selectedKeys[0]"
							style="width: 188px; margin-bottom: 8px; display: block"
							@change="
								(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
							"
							@pressEnter="
								handleSearch(selectedKeys, confirm, column.dataIndex)
							"
						/>
						<a-button
							type="primary"
							size="small"
							style="width: 90px; margin-right: 8px"
							@click="handleSearch(selectedKeys, confirm, column.dataIndex)"
						>
							<template #icon><SearchOutlined /></template>
							Search
						</a-button>
						<a-button
							size="small"
							style="width: 90px"
							@click="handleReset(clearFilters)"
						>
							Reset
						</a-button>
					</div>
				</template>
				<template #filterIcon="filtered">
					<search-outlined
						:style="{ color: filtered ? '#108ee9' : undefined }"
					/>
				</template>
				<template #customRender="{ text, record, column }">
					<span v-if="searchText && searchedColumn === column.dataIndex">
						<template
							v-for="(fragment, i) in text
								.toString()
								.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
						>
							<mark
								v-if="fragment.toLowerCase() === searchText.toLowerCase()"
								class="highlight"
								:key="i"
							>
								<a :href="'/block?id=' + record.id">{{ fragment }}</a>
							</mark>
							<template v-else>
								<a :href="'/block?id=' + record.id">{{ fragment }}</a></template
							>
						</template>
					</span>
					<template v-else>
						<a :href="'/block?id=' + record.id">
							{{ record.number }}
						</a>
					</template>
				</template>
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

	.blockDisplay {
		margin: 0 auto;
	}

	.letOverflow {
		overflow: scroll;
		flex-wrap: nowrap !important;
		overflow-x: scroll;
		overflow-y: none;
	}

	::-webkit-scrollbar {
		display: none;
	}

	#dash {
		margin-bottom: 1%;
	}

	.timeline:before {
		visibility: hidden !important;
	}
	.highlight {
		background-color: rgb(255, 192, 105);
		padding: 0px;
	}
</style>
