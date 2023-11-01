import { NameSpace } from "../../types/api-methods";
import { RtmClient } from "../client";

interface GetTokenArgs {
  /**
   * Frob argument previously returned via a
   * call to rtm.auth.getFrob
   */
  frob: string;
}

export class Auth implements NameSpace<"auth"> {
  constructor(private client: RtmClient) {}

  /**
   * @returns Remember the milk API response
   * @throws {RtmApiFailedResponseError} if the API responds with a failure
   */
  async getFrob() {
    return await this.client.get("rtm.auth.getFrob", {});
  }

  /**
   * Returns a frob to be used during authentication
   *
   * @see {@link https://www.rememberthemilk.com/services/api/methods/rtm.auth.getFrob.rtm|RTM Api Documentation} for more information
   * @returns Remember the milk API response
   * @throws {RtmApiFailedResponseError} if the API responds with a failure
   */
  async getToken(params: GetTokenArgs) {
    return await this.client.get("rtm.auth.getToken", params);
  }
}
