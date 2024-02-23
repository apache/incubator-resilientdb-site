export class ClientState {
  id: number;
  endpointID: string;
  active = false;
  deployed = false;
  constructor(id: number, endpointID: string) {
    this.id = id;
    this.endpointID = endpointID;
  }
}
