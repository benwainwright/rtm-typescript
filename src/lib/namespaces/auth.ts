import { CheckTokenParams, GetTokenParams, NameSpaceClient } from "@types";
import { RtmClient } from "@core";

export class Auth implements NameSpaceClient<"auth"> {
  constructor(private client: RtmClient) {}

  async checkToken(args: CheckTokenParams) {
    return await this.client.get("rtm.auth.checkToken", args);
  }

  async getFrob() {
    return await this.client.get("rtm.auth.getFrob", {});
  }

  async getToken(params: GetTokenParams) {
    return await this.client.get("rtm.auth.getToken", params);
  }
}
