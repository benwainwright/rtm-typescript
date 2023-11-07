import { ApiSurface } from "@types";
import { Tasks, Test, Auth } from "@namespaces";

import { RtmClient } from "./client";
import { RtmApiConfig } from "./initialise-api";

export class RememberTheMilkApi implements ApiSurface {
  public auth: Auth;
  public tasks: Tasks;
  public test: Test;

  private client: RtmClient;

  public constructor(config: RtmApiConfig) {
    this.client = new RtmClient(
      config.key,
      config.secret,
      config.permissions,
      config.token,
    );
    this.auth = new Auth(this.client);
    this.tasks = new Tasks(this.client);
    this.test = new Test(this.client);
  }

  public getAuthUrl(frob?: string) {
    return this.client.getAuthUrl(frob);
  }
}
