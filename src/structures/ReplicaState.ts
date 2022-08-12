export class ReplicaState {
  id: number;
  ip: string;
  port: number;
  endpointID: string;
  active = false;
  deployed = false;
  muted = false;
  constructor(id: number, endpointID: string, ip: string, port: number) {
    this.id = id;
    this.endpointID = endpointID;
    this.ip = ip;
    this.port = port;
  }
}
