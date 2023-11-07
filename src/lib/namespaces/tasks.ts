import { NameSpaceClient, GetListParams } from "@types";
import { RtmClient } from "@core";

export class Tasks implements NameSpaceClient<"tasks"> {
  public constructor(private client: RtmClient) {}

  public async getList(params: GetListParams) {
    return this.client.get("rtm.tasks.getList", params);
  }
}
