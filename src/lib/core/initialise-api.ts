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
   */
  throttle?: boolean;
}

/**
 * Entry point to the API. Calling it with valid credentials will initialise and return an instantiated {@link IRememberTheMilkApi}
 *
 * @example
 * ```TypeScript
 *  import { initialiseApi, ClientPermissions } from "rtm-typescript";
 *
 *  const key = "my-api-key";
 *  const secret = "my-shared-secret";
 *
 *  const myAsyncFunction = async () => {
 *
 *    const client = initialiseApi({
 *      key,
 *      secret,
 *      permissions: ClientPermissions.Read,
 *    });
 *
 *    const result = await client.tasks.getList({ list_id: "2"});
 *  }
 * ```
 *
 * @param config - Configuration object for the API
 * @public
 */
export const initialiseApi = (config: RtmApiConfig): IRememberTheMilkApi => {
  return new RememberTheMilkApi(config);
};
