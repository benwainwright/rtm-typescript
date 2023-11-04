import { ApiSurface, ClientPermissions } from "../types";
import { Tasks, Test, Auth } from "./namespaces";
import { RtmClient } from "./core";

export class RememberTheMilkApi implements ApiSurface {
  public auth: Auth;
  public tasks: Tasks;
  public test: Test;

  private client: RtmClient;

  public constructor(
    key: string,
    secret: string,
    permissions: ClientPermissions,
    token?: string,
  ) {
    this.client = new RtmClient(key, secret, permissions, token);
    this.auth = new Auth(this.client);
    this.tasks = new Tasks(this.client);
    this.test = new Test(this.client);
  }

  public getAuthUrl(frob?: string) {
    return this.client.getAuthUrl(frob);
  }
}
