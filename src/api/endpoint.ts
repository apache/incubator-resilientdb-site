import axios from "axios";
import type { ReplicaState } from "@/structures/ReplicaState";
import type { ClientState } from "@/structures/ClientState";

interface AvailableNodesResponse {
  replicas: ReplicaState[];
  clients: ClientState[];
}

/*const dummyResponse = {
  replicas: [
    {
      id: 0,
      ip: "127.0.0.1",
      port: "10000",
    },
    {
      id: 1,
      ip: "127.0.0.1",
      port: "10000",
    },
    {
      id: 3,
      ip: "127.0.0.1",
      port: "10003",
    },
  ],
  clients: [
    {
      id: 10,
    },
  ],
};*/
export const getAvailableNodes = async (address: string) => {
  //return dummyResponse as unknown as AvailableNodesResponse;
  const res = await axios.get(`http://${address}/node/available`);
  return res.data as AvailableNodesResponse;
};

export const deploy = async (
  addresses: string[],
  payload: { replicaIds: number[]; config: any }
) => {
  for (const address of addresses) {
    const res = await axios.post(`http://${address}/node/deploy`, payload);
    return res.data;
  }
};

export const stopDeployment = async (addresses: string[]) => {
  for (const address of addresses) {
    const res = await axios.get(`http://${address}/node/stopDeployment`);
    return res.data;
  }
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
