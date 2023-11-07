import { ClientPermissions } from "../..";
import { IRememberTheMilkApi } from "../types/i-remember-the-milk-api";
import { RememberTheMilkApi } from "./remember-the-milk-api";

/**
 * Configuration object for the API
 *
 * @public
 */
export interface RtmApiConfig {
  /**
   * Remember the Milk API key
   */
  key: string;

  /**
   * Remember the Milk API shared secret
   */
  secret: string;

  /**
   * What permissions your client needs access to on the API
   */
  permissions: ClientPermissions;

  /**
   * Previously authenticated request token
   */
  token?: string;

  /**
   * Throttle requests to the API to avoid hitting rate limits
   *
   * @default true
   */
  throttle?: boolean;
}

/**
 * Entry point to the API. Calling it with valid credentials will initialise and return an instantiated {@link IRememberTheMilkApi}
 *
 * @example
 * ```TypeScript
 * import { initialiseApi, ClientPermissions } from "rtm-typescript";
 *
 * // ...some code
 *
 * const client = initialiseApi({
 *   key: "my-key",
 *   secret: "my-secret",
 *   permissions: ClientPermissions.Read,
 * });
 *
 * const { frob } = await client.auth.getFrob();
 *
 * console.log(frob);
 * ```
 *
 * @param config - Configuration object for the API
 * @public
 */
export const initialiseApi = (config: RtmApiConfig): IRememberTheMilkApi => {
  return new RememberTheMilkApi(config);
};
