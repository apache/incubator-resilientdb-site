import blocks from "@/api/blockstatus.json";
import axios from "axios";
// import Block from "@/store/blocks";

// Temporary - maybe better to find a way to import the interface from store/blocks.ts
interface Block {
	id: number;
	number: string;
	hash: string;
	transactions: {
		txnHash: string;
		block: string;
		clientId: string;
		transactionData: string;
		clientSignature: string;
	}[];
	size: number;
	blockHeight: number;
	minedBy: string;
	blockReward: number;
	difficulty: number;
	totalDifficulty: number;
	gasUsed: string;
	parentHash: string;
	stateRoot: string;
	nounce: string;
	commitCertificate: string;
	createdAt: string;
}

export const getAvailableBlocks = async (address: string) => {
	//TODO: Fetch from network

	// let blockslist: Block[] = [];

	// axios
	// .get(address)
	// .then(response => (blockslist = response.data))

	// return blockslist;
	return blocks;
};
