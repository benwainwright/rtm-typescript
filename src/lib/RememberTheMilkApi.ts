import { ApiSurface } from "../types/api-methods";
import { ClientPermissions } from "../types/permissions";
import { RtmClient } from "./client";
import { Auth } from "./namespaces/Auth";
import { Tasks } from "./namespaces/Tasks";

export class RememberTheMilkApi implements ApiSurface {
  public auth: Auth;
  public tasks: Tasks;

  public constructor(
    key: string,
    secret: string,
    permissions: ClientPermissions,
  ) {
    const client = new RtmClient(key, secret, permissions);
    this.auth = new Auth(client);
    this.tasks = new Tasks(client);
  }
}

const foo = new RememberTheMilkApi("foo", "bar", "read");

foo.auth.getToken
