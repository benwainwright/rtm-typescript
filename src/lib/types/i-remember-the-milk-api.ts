import { Auth, Tasks, Test } from "./namespaces";

/**
 * This is the public API surface for this package. At the present time it only exposes a small number of methods from the RTM API; in future it will be comprehensive.
 *
 * @example
 * ```TypeScript
 * import { initialiseApi, ClientPermissions } from "rtm-typescript";
 *
 * const key = "my-api-key";
 * const secret = "my-shared-secret";
 *
 * const myAsyncFunction = async () => {
 *
 *   const client = initialiseApi({
 *     key,
 *     secret,
 *     permissions: ClientPermissions.Read,
 *   });
 *
 *   const result = await client.tasks.getList({ list_id: "2"});
 * }
 *
 * ```
 *
 * @public
 */
export interface IRememberTheMilkApi {
  /**
   * Methods attached to the rtm.auth namespace
   */
  auth: Auth;

  /**
   * Methods attached to the rtm.tasks namespace
   */
  tasks: Tasks;

  /**
   * Methods attached to the rtm.test namespace
   */
  test: Test;

  /**
   * Return a valid authentication URL for the RTM API
   *
   * @see {@link https://www.rememberthemilk.com/services/api/authentication.rtm |RTM Api Documentation} for more information
   *
   * @returns A URL in the form of a string
   */
  getAuthUrl: (frob?: string) => string;
}
