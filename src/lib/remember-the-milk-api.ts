import { ApiSurface } from "../types/api-methods";
import { ClientPermissions } from "../types/permissions";
import { RtmClient } from "./core";
import { Auth } from "./namespaces/auth";
import { Tasks } from "./namespaces/tasks";
import { Test } from "./namespaces/test";

/**
 * This is the public API for this package.
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

  /**
   * API methods that exist to test the API
   */
  public test: Test;

  private client: RtmClient;

  /**
   * @param key - Remember the Milk API key
   * @param secret - Remember the Milk API shared secret
   * @param permissions - What permissions your client needs access to on the API
   * @param token - Previously authenticated request token
   */
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

  /**
   * Return a valid authentication URL for the RTM API
   *
   * @see {@link https://www.rememberthemilk.com/services/api/authentication.rtm |RTM Api Documentation} for more information
   *
   * @returns A URL in the form of a string
   */
  public getAuthUrl(frob?: string) {
    return this.client.getAuthUrl(frob);
  }
}
