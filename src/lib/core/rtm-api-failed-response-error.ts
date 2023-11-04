import { RtmTypescriptError } from "./rtm-typescript-error";

/**
 * Thrown if the API returns an error response
 *
 * @see {@link https://www.rememberthemilk.com/services/api/response.rtm | RTM Api documentation} for more information
 * @public
 */
export class RtmApiFailedResponseError extends RtmTypescriptError {
  /**
   * The response code returned from the RTM Api
   */
  public readonly code: number;

  /**
   * The error message returned from the RTM Api
   */
  public readonly message: string;

  /**
   * @param code - The response code returned from the RTM Api
   * @param message - The error message returned from the RTM Api
   */
  public constructor(code: number, message: string) {
    super(message);
    this.code = code;
    this.message = message;
  }
}
