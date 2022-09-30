import { defineStore } from "pinia";

interface Cluster {
	replicaIds: number[];
}

interface NetworkConfigState {
	clusters: Cluster[];
}

export const useNetworkStore = defineStore("networkConfig", {
	state: () => {
		const state: NetworkConfigState = {
			clusters: [],
		};
		return state;
	},

	actions: {
		addCluster(replicaIds: number[]) {
			this.clusters.push({ replicaIds });
		},
	},
});
