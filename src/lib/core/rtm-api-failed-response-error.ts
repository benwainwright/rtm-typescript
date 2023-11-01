import { RtmTypescriptError } from "./rtm-typescript-error";

/**
 * Thrown if the API returns an error response
 *
 * @see {@link https://www.rememberthemilk.com/services/api/response.rtm | RTM Api documentation} for more information
 * @public
 */
export class RtmApiFailedResponseError extends RtmTypescriptError {
  public constructor(
    public readonly code: number,
    message: string,
  ) {
    super(message);
  }
}
