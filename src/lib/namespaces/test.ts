import { NameSpaceClient, InternalClient } from "@types";

export class Test implements NameSpaceClient<"test"> {
  constructor(private readonly client: InternalClient) {}

  async echo(args: Record<string, string>) {
    return await this.client.get("rtm.test.echo", args);
  }

  async login() {
    return await this.client.get("rtm.test.login", {});
  }
}
