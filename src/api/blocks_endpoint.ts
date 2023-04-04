import blocks from "@/api/blockstatus.json";
import axios from "axios";

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

interface TempBlock {
	transactions: {
		cmd: string;
		key: string;
		value: string;
		seq: number;
		proxy_id: number;
	}[];
	createtime: number;
	local_id: number;
	seq: number;
}

export const getAvailableBlocks = async (address: string) => {

	try {
		let res = await axios({
			 url: 'http://localhost:18000/explorertest',
			 method: 'get',
			 timeout: 8000,
			 headers: {
				 'Content-Type': 'application/json',
			 }
		 })

		 return res.data
	 }
	 catch (err) {
		 console.error(err);
	 }

	// return blocks;
};
