import { RtmTypescriptError } from "./rtm-typescript-error";

/**
 * Raised when the Api returns a non 200 HTTP response
 *
 * @public
 */
export class RtmHttpError extends RtmTypescriptError {
  public constructor(
    public readonly statusCode: number,
    public readonly body: string,
  ) {
    super(`Rtm API returned a ${statusCode} response: ${body}`);
  }
}
