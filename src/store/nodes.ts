import { defineStore } from "pinia";
import { ReplicaState } from "@/structures/ReplicaState";
import { ClientState } from "@/structures/ClientState";
import { replicaAction, stopDeployment } from "@/api/endpoint";
import { useEndpointsStore } from "@/store/endpoints";

interface NodesState {
  replicas: { [id: number]: ReplicaState };
  clients: { [id: number]: ClientState };
}

export const useNodesStore = defineStore("nodes", {
  state: () => {
    const state: NodesState = {
      replicas: {
        /*0: {
          id: 0,
          ip: "127.0.0.1",
          port: 10000,
          endpointID: "127.0.0.1:3000",
          muted: false,
          deployed: false,
          active: false,
        },
        1: {
          id: 1,
          ip: "127.0.0.1",
          port: 10000,
          endpointID: "127.0.0.1:3000",
          muted: false,
          deployed: false,
          active: false,
        },
        2: {
          id: 2,
          ip: "127.0.0.1",
          port: 10003,
          endpointID: "127.0.0.1:3000",
          muted: false,
          deployed: false,
          active: false,
        },*/
      },
      clients: {},
    };
    return state;
  },

  actions: {
    addReplicas(
      replicas: { endpointID: string; id: number; ip: string; port: number }[]
    ) {
      for (const replica of replicas) {
        this.replicas[replica.id] = new ReplicaState(
          replica.id,
          replica.endpointID,
          replica.ip,
          replica.port
        );
      }
    },
    addClients(clients: { endpointID: string; id: number }[]) {
      for (const client of clients) {
        this.clients[client.id] = new ClientState(client.id, client.endpointID);
      }
    },
    updateReplica(state: ReplicaState) {
      if (this.replicas[state.id]) {
        this.replicas[state.id] = state;
      }
    },
    updateClient(state: ClientState) {
      if (this.clients[state.id]) {
        this.clients[state.id] = state;
      }
    },
    async startReplica(replicaId: number, endpoint: string) {
      try {
        await replicaAction(endpoint, { action: "start", replicaId });
      } catch (_e) {
        //ignored
      }
    },
    async killReplica(replicaId: number, endpoint: string) {
      try {
        await replicaAction(endpoint, { action: "kill", replicaId });
      } catch (_e) {
        //ignored
      }
    },
    async muteReplica(replicaId: number, endpoint: string) {
      try {
        await replicaAction(endpoint, { action: "mute", replicaId });
      } catch (_e) {
        //ignored
      }
    },
    async unmuteReplica(replicaId: number, endpoint: string) {
      try {
        await replicaAction(endpoint, { action: "unmute", replicaId });
      } catch (_e) {
        //ignored
      }
    },
  },
});
