import { NameSpaceClient, GetListParams, InternalClient } from "@types";

export class Tasks implements NameSpaceClient<"tasks"> {
  public constructor(private readonly client: InternalClient) {}

  public async getList(params: GetListParams) {
    return this.client.get("rtm.tasks.getList", params);
  }
}
