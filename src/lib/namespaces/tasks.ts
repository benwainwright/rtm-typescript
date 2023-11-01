import { NameSpace } from "../../types/api-methods";
import { RtmClient } from "../core";

export class Tasks implements NameSpace<"tasks"> {
  public constructor(private client: RtmClient) {}

  public async getList(params: {
    list_id?: string;
    filter?: string;
    last_sync?: string;
  }) {
    return this.client.get("rtm.tasks.getList", params);
  }
}
