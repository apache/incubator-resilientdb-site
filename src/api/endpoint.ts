import axios from "axios";
import type { ReplicaState } from "@/structures/ReplicaState";
import type { ClientState } from "@/structures/ClientState";

interface AvailableNodesResponse {
  replicas: ReplicaState[];
  clients: ClientState[];
}

export const getAvailableNodes = async (address: string) => {
  const res = await axios.get(`http://127.0.0.1:4080/node/available`);
  return res.data as AvailableNodesResponse;
};

export const deploy = async (
  addresses: string[],
) => {
  const params = new URLSearchParams();
  for (const address of addresses) {
	params.append('address', address);
  }
  axios.post('https://ec2-54-84-181-59.compute-1.amazonaws.com/deploy', params);
  //axios.post(`http://192.18.137.13:4080/node/deploy`, params);
};

export const stopDeployment = async (addresses: string[]) => {
    const res = await axios.get(`http://192.18.137.13:4080/node/stop`);
    return res.data;
};

export const execTransaction = async (
  addresses: string[],
  payload: { transaction: string }
) => {
  for (const address of addresses) {
    const res = await axios.post(
      `http://${address}/node/execTransaction`,
      payload
    );
    return res.data;
  }
};

export const replicaAction = async (
  endoint: string,
  payload: { replicaId: number; action: "start" | "kill" | "mute" | "unmute" }
) => {
  const res = await axios.post(`http://${endoint}/node/action`, payload);
  return res.data;
};
