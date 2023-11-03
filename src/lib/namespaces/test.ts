import { NameSpace } from "../../types/api-methods";
import { RtmClient } from "../core";

export class Test implements NameSpace<"test"> {
  constructor(private client: RtmClient) {}

  /**
   *
   * A testing method which checks if the caller is logged in.
   *
   * @see {@link https://www.rememberthemilk.com/services/api/methods/rtm.test.echo.rtm|RTM Api Documentation} for more information
   *
   * @returns Remember the milk API response
   * @throws {@link RtmApiFailedResponseError} if the API responds with a failure
   * @throws {@link RtmHttpError} if the API responds with a non 200 response
   */
  async echo(args: Record<string, string>) {
    return await this.client.get("rtm.test.echo", args);
  }
}
