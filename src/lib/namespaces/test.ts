import { NameSpaceClient } from "@types";
import { RtmClient } from "@core";

export class Test implements NameSpaceClient<"test"> {
  constructor(private client: RtmClient) {}

  async echo(args: Record<string, string>) {
    return await this.client.get("rtm.test.echo", args);
  }

  async login() {
    return await this.client.get("rtm.test.login", {});
  }
}
