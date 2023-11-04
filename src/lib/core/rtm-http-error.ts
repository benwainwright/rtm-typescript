import { RtmTypescriptError } from "./rtm-typescript-error";

/**
 * Raised when the API returns a non 200 HTTP response
 *
 * @public
 */
export class RtmHttpError extends RtmTypescriptError {
  /**
   * The HTTP status code that was returned
   */
  public readonly statusCode: number;

  /**
   * The response body of the error message
   */
  public readonly body: string;
  /**
   * @param statusCode - The HTTP status code that was returned
   * @param body - The response body of the error message
   */
  public constructor(statusCode: number, body: string) {
    super(`Rtm API returned a ${statusCode} response: ${body}`);
    this.statusCode = statusCode;
    this.body = body;
  }
}
