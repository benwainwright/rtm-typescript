import {
  CheckTokenParams,
  GetTokenParams,
  NameSpaceClient,
  InternalClient,
} from "@types";

export class Auth implements NameSpaceClient<"auth"> {
  constructor(private readonly client: InternalClient) {}

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
