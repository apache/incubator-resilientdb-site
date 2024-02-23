import { defineStore } from "pinia";

interface PBFTOptions {
  num_commitment_threads: number;
  watermark_width: number;
}
export interface ConsensusConfigState {
  protocol: string;
  options: PBFTOptions;
}

export const useConsensusStore = defineStore("consensusConfig", {
  state: () => {
    const state: ConsensusConfigState = {
      protocol: "pbft",
      options: {
        num_commitment_threads: 4,
        watermark_width: 300,
      },
    };
    return state;
  },

  actions: {
    modifyConfig(config: ConsensusConfigState) {
      this.$state = { ...config };
    },
  },
});
