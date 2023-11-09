import { ApiSurface } from "@types";
import { Tasks, Test, Auth } from "@namespaces";
import { API_THROTTLE_DELAY } from "@constants";

import { RtmClient } from "./client";
import { RtmApiConfig } from "./initialise-api";
import { ClientThrottleWrapper } from "./client-throttle-wrapper";

export class RememberTheMilkApi implements ApiSurface {
  public readonly auth: Auth;

  public readonly tasks: Tasks;

  public readonly test: Test;

  private readonly client: RtmClient;

  public constructor({
    key,
    secret,
    permissions,
    token,
    throttle = true,
  }: RtmApiConfig) {
    this.client = new RtmClient(key, secret, permissions, token);

    const throttledClient = throttle
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
