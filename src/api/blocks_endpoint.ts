import blocks from "@/api/blockstatus.json";
import axios from "axios";

export const getAvailableBlocks = async (address: string) => {

	try {
		let res = await axios({
			 url: 'http://localhost:18000/v1/blocks/1',
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
