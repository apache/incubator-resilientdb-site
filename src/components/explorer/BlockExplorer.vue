<script>
	import BlocksTable from "../explorer/BlocksTable.vue";
	import MetaData from "../explorer/MetaData.vue";

	export default {
		name: "BlocksExplorer",
		components: { BlocksTable, MetaData },
	};
</script>
<template>
	<div class="container timeline">
		<meta-data />
		<!-- <div class="search">
			<a-input-search
				v-model:value="value"
				placeholder="Search by Block/ Txn Hash "
				enter-button
				@search="onSearch"
			/>
		</div> -->

		<blocks-table />
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
	.search {
		margin-top: 3rem;
		margin: 0.5rem 2rem;
	}
</style>
