import { ClientPermissions } from "../..";
import { IRememberTheMilkApi } from "../../types/i-remember-the-milk-api";
import { RememberTheMilkApi } from "../remember-the-milk-api";

/**
 * Entry point to the API. Calling it with valid credentials will initialise and return an instantiated {@link IRememberTheMilkApi}
 *
 * @example
 * ```TypeScript
 * import { initialiseApi, ClientPermissions } from "rtm-typescript"
 *
 * // ...some code
 *
 * const client = initialiseApi("my-key", "my-secret", ClientPermissions.Read)
 *
 * const { frob } = await client.auth.getFrob()
 *
 * console.log(frob)
 * ```
 *
 * @param key - Remember the Milk API key
 * @param secret - Remember the Milk API shared secret
 * @param permissions - What permissions your client needs access to on the API
 * @param token - Previously authenticated request token
 * @public
 */
export const initialiseApi = (
  key: string,
  secret: string,
  permissions: ClientPermissions,
  token?: string,
): IRememberTheMilkApi => {
  return new RememberTheMilkApi(key, secret, permissions, token);
};
