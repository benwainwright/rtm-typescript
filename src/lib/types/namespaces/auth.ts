import { ApiMethods } from "../api-methods";
import { SuccessResponse } from "../responses/success-response";

/**
 * Parameters that can be passed with rtm.auth.checkToken
 *
 * @public
 */
export interface CheckTokenParams {
  /**
   * The authentication token to check
   */
  auth_token: string;
}

/**
 * Parameters that can be passed with rtm.auth.getToken
 *
 * @public
 */
export interface GetTokenParams {
  /**
   * Frob argument previously returned via a
   * call to rtm.auth.getFrob
   */
  frob: string;
}

/**
 * Authentication methods
 *
 * @public
 */
export interface Auth {
  /**
   * Returns the credentials attached to an authentication token.
   *
   * @see {@link https://www.rememberthemilk.com/services/api/methods/rtm.auth.checkToken.rtm|RTM Api Documentation} for more information
   *
   * @returns {@link SuccessResponse}
   * @throws {@link RtmApiFailedResponseError} if the API responds with a failure
   * @throws {@link RtmHttpError} if the API responds with a non 200 response
   */
  checkToken: (
    args: CheckTokenParams,
  ) => Promise<SuccessResponse<ApiMethods, "rtm.auth.checkToken">["rsp"]>;

  /**
   * Returns the auth token for the given frob, if one has been attached.
   *
   * @see {@link https://www.rememberthemilk.com/services/api/methods/rtm.auth.getToken.rtm|RTM Api Documentation} for more information
   *
   * @param param - Paramaters to be supplied with this method call
   * @returns {@link SuccessResponse}
   * @throws {@link RtmApiFailedResponseError} if the API responds with a failure
   * @throws {@link RtmHttpError} if the API responds with a non 200 response
   */
  getToken: (
    args: GetTokenParams,
  ) => Promise<SuccessResponse<ApiMethods, "rtm.auth.getToken">["rsp"]>;

  /**
   *
   * Returns a frob for use during authentication
   *
   * @see {@link https://www.rememberthemilk.com/services/api/methods/rtm.auth.getFrob.rtm|RTM Api Documentation} for more information
   *
   * @returns Remember the milk API response
   * @throws {@link RtmApiFailedResponseError} if the API responds with a failure
   * @throws {@link RtmHttpError} if the API responds with a non 200 response
   */
  getFrob: () => Promise<
    SuccessResponse<ApiMethods, "rtm.auth.getFrob">["rsp"]
  >;
}
