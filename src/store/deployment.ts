import { defineStore } from "pinia";
import { deploy } from "@/api/endpoint";
import { stopDeployment } from "@/api/endpoint";
import { useEndpointsStore } from "@/store/endpoints";
import { useConsensusStore } from "@/store/consensusConfig";
import { useNodesStore } from "@/store/nodes";
import { useNetworkStore } from "@/store/networkConfig";
import type { ConsensusConfigState } from "@/store/consensusConfig";

interface DeploymentState {
  deployed: boolean;
  replicaIds: number[];
  consensusConfig?: ConsensusConfigState;
  deploymentConfig?: Record<string, any>;
}

let endpointRefreshId: NodeJS.Timeout;
export const useDeploymentStore = defineStore("deployment", {
  state: () => {
    const state: DeploymentState = {
      deployed: false,
      replicaIds: [],
    };
    return state;
  },

  actions: {
    async deploy() {
      if (this.deployed) {
        return;
      }
      this.deployed = true;
/*
      const clusters = useNetworkStore().clusters;
      const replicas = useNodesStore().replicas;
      const deployedReplicas = [];
      for (const cluster of clusters) {
        for (const replicaId of cluster.replicaIds) {
          deployedReplicas.push(replicas[replicaId]);
        }
      }
      this.replicaIds = deployedReplicas.map((replica) => replica.id);
      this.consensusConfig = { ...useConsensusStore().$state };

      const clustersCfgs = [];
      for (const cluster of clusters) {
        const cfg: { replicas: { id: number; ip: string; port: number }[] } = {
          replicas: [],
        };
        for (const replicaId of cluster.replicaIds) {
          cfg.replicas.push({
            id: replicas[replicaId].id,
            ip: replicas[replicaId].ip,
            port: replicas[replicaId].port,
          });
        }
        clustersCfgs.push(cfg);
      }
      this.deploymentConfig = {
        consensus_config: {
          consensus_protocol: this.consensusConfig.protocol,
          [this.consensusConfig.protocol]: {
            num_commitment_threads:
              this.consensusConfig.options.num_commitment_threads,
            watermark_width: this.consensusConfig.options.watermark_width,
          },
        },
        clusters: clustersCfgs,
      };
*/
      try {
        const endpointsStore = useEndpointsStore();
        deploy(endpointsStore.endpoints);
      } catch (e) {
        console.log(e);
      }
    },
    async killDeployment() {
      this.deployed = false;
      if (endpointRefreshId) clearInterval(endpointRefreshId);
      try {
        await stopDeployment(useEndpointsStore().endpoints);
      } catch (_e) {
        //ignored
      }
    },
  },
});
