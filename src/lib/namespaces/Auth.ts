import { NameSpace } from "../../types/api-methods";
import { RtmClient } from "../client";

export class Auth implements NameSpace<"auth"> {
  constructor(private client: RtmClient) {}

  async getToken(params: { frob: string }) {
    return this.client.get("rtm.auth.getToken", params);
  }

  async getFrob() {
    return this.client.get("rtm.auth.getFrob", {});
  }
}
