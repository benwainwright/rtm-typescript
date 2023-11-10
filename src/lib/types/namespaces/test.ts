import { ApiMethods } from "..";

/**
 * Methods used for testing the API
 *
 * @public
 */
export interface Test {
  /**
   *
   * A testing method which echos all parameters back in the response.
   *
   * @see {@link https://www.rememberthemilk.com/services/api/methods/rtm.test.echo.rtm|RTM Api Documentation} for more information
   *
   * @returns {@link SuccessResponse}
   * @throws {@link RtmApiFailedResponseError} if the API responds with a failure
   * @throws {@link RtmHttpError} if the API responds with a non 200 response
   */
  echo: (
    args: Record<string, string>,
  ) => Promise<ApiMethods["rtm.test.echo"]["responseArgs"]>;

  /**
   *
   * A testing method which checks if the caller is logged in.
   *
   * @see {@link https://www.rememberthemilk.com/services/api/methods/rtm.test.echo.rtm|RTM Api Documentation} for more information
   *
   * @returns {@link SuccessResponse}
   * @throws {@link RtmApiFailedResponseError} if the API responds with a failure
   * @throws {@link RtmHttpError} if the API responds with a non 200 response
   */
  login: () => Promise<ApiMethods["rtm.test.login"]["responseArgs"]>;
}
