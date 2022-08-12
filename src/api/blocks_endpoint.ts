import blocks from "@/api/blockstatus.json";

export const getAvailableBlocks = async (address: string) => {
	//TODO: Fetch from network
	return blocks;
};
