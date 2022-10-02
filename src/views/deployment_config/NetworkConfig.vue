<script setup>
	import { DeploymentUnitOutlined } from "@ant-design/icons-vue";
	import { MehOutlined } from "@ant-design/icons-vue";
	import { useNetworkStore } from "@/store/networkConfig";
	import { useNodesStore } from "@/store/nodes";
	import { ref, computed } from "vue";
	import { storeToRefs } from "pinia";

	const networkStore = useNetworkStore();
	const nodesStore = useNodesStore();
	const replicaOptions = computed(() => {
		return Object.keys(nodesStore.replicas)
			.filter((id) => {
				for (const cluster of networkStore.clusters) {
					if (cluster.replicaIds.includes(Number(id))) {
						return false;
					}
				}
				return true;
			})
			.map((id) => {
				return {
					label: `Replica ${id}`,
					value: id,
				};
			});
	});
	const selectedReplicas = ref([]);
	const clusterDialog = ref(false);

	async function addCluster() {
		if (selectedReplicas.value.length === 0) {
			return;
		}
		networkStore.addCluster(selectedReplicas.value.map((id) => Number(id)));
		selectedReplicas.value = [];
		clusterDialog.value = false;
	}

	function proceed() {
		return networkStore.clusters.length > 0;
	}

	defineExpose({
		proceed,
	});
</script>
<template>
	<div v-else style="margin-top: 50px" class="endpoints-container">
		<div
			v-for="(cluster, i) in networkStore.clusters"
			class="endpoint"
			:key="cluster"
		>
			<div class="title">
				<deployment-unit-outlined class="icon" />
				<div style="margin-left: 10px; font-weight: 500">
					Cluster {{ i + 1 }}
				</div>
			</div>
			<div class="info">
				<div>{{ cluster.replicaIds.length }} Replicas</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	@import "@/styles/variables.scss";

	.endpoints-container {
		width: 450px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.endpoint {
		width: 200px;
		color: #fff;
		background: $secondary-color-dark;
		text-overflow: ellipsis;
		align-items: center;
		margin-left: 10px;
		margin-top: 10px;
		border-radius: 5px;
	}

	.endpoint .title {
		padding: 10px;
		display: flex;
		align-items: center;
	}

	.endpoint .icon {
		color: $primary-color;
	}

	.endpoint .info {
		display: flex;
		flex-direction: column;
		padding: 10px;
		margin: 0 5px 5px 5px;
		background: lighten($secondary-color-dark, 10%);
		border-radius: 5px;
	}
</style>
