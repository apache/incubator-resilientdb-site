import { defineStore } from "pinia";
import { getAvailableBlocks } from "@/api/blocks_endpoint";
import { useEndpointsStore } from "@/store/endpoints";

interface Block {
	id: number;
	number: string;
	// hash: string;
	transactions: {
		// txnHash: string;
		// block: string;
		// clientId: string;
		// transactionData: string;
		// clientSignature: string;
		cmd: string;
		key?: string;
		value?: string;
		min_key?: string;
		max_key?: string;

	}[];
	size: number;
	// blockHeight: number;
	// minedBy: string;
	// blockReward: number;
	// difficulty: number;
	// totalDifficulty: number;
	// gasUsed: string;
	// parentHash: string;
	// stateRoot: string;
	// nounce: string;
	// commitCertificate: string;
	createdAt: string;
}
interface BlocksState {
	blocks: Block[];
}

export const useBlocksStore = defineStore("blocks", {
	state: () => {
		const state: BlocksState = {
			blocks: [],
		};
		return state;
	},

	actions: {
		async refreshBlocks() {
			const endpointsStore = useEndpointsStore();
			if (!endpointsStore.endpoints[0]) {
				throw new Error("No Endpoints Found.");
			}

			this.blocks = await getAvailableBlocks(endpointsStore.endpoints[0]);
		},
	},
});

export const initialize = function () {
};
