import { ApiSurface } from "../types/api-methods";
import { ClientPermissions } from "../types/permissions";
import { RtmClient } from "./core";
import { Auth } from "./namespaces/Auth";
import { Tasks } from "./namespaces/Tasks";

/**
 * Remember The Milk API client
 * @public
 */
export class RememberTheMilkApi implements ApiSurface {
  /**
   * API methods relating to authentication
   */
  public auth: Auth;

  /**
   * API methods relating to RTM Tasks
   */
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
