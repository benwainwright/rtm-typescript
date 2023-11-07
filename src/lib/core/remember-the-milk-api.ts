import { ApiSurface } from "@types";
import { Tasks, Test, Auth } from "@namespaces";
import { API_THROTTLE_DELAY } from "@constants";

import { RtmClient } from "./client";
import { RtmApiConfig } from "./initialise-api";
import { ClientThrottleWrapper } from "./client-throttle-wrapper";

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

    const throttledClient = config.throttle
      ? new ClientThrottleWrapper(this.client, API_THROTTLE_DELAY)
      : this.client;

    this.auth = new Auth(throttledClient);
    this.tasks = new Tasks(throttledClient);
    this.test = new Test(throttledClient);
  }

  public getAuthUrl(frob?: string) {
    return this.client.getAuthUrl(frob);
  }
}
