import { RtmTypescriptError } from "./rtm-typescript-error";

export class RtmHttpError extends RtmTypescriptError {
  public constructor(
    public readonly statusCode: number,
    public readonly body: string,
  ) {
    super(`Rtm API returned a ${statusCode} response: ${body}`);
  }
}
