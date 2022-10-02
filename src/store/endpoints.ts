import { defineStore } from "pinia";
import { getAvailableNodes } from "@/api/endpoint";
import { notification } from "ant-design-vue";
import { useNodesStore } from "@/store/nodes";

interface EndpointsStoreState {
	endpoints: string[];
}

export const useEndpointsStore = defineStore("endpoints", {
	state: () => {
		const state: EndpointsStoreState = {
			endpoints: [/*"127.0.0.1:3000"*/],
		};
		return state;
	},

	actions: {
		async addEndpoint(address: string) {
			const parts = address.split(":");
			const ip = parts[0];
			let port;
			try {
				port = parseInt(parts[1]);
			} catch (e) {
				return false;
			}
			if (isNaN(port)) return false;
			if (this.endpoints.includes(`${ip}:${port}`)) {
				notification.warning({
					message: "Error",
					description: "Endpoint with same address already added",
				});
				return false;
			}
			try {
				const endpoint = `${ip}:${port}`;
				this.endpoints.push(endpoint);
			} catch (e) {
				console.log(e);
				return false;
			}
			notification.success({
				message: "Done",
				description: "Successfully added endpoint",
			});
			return true;
		},

		async refresh() {
			for (const endpoint of this.endpoints) {
				try {
					const result = await getAvailableNodes(endpoint);
					const nodes = useNodesStore();
					result.replicas.forEach((replica) => {
						replica.endpointID = endpoint;
						nodes.updateReplica(replica);
					});
					result.clients.forEach((client) => {
						client.endpointID = endpoint;
						nodes.updateClient(client);
					});
				} catch (e) {
					console.log(e);
					return false;
				}
			}
		},
	},
});
