import { RtmTypescriptError } from "./rtm-typescript-error";

export class RtmApiFailedResponseError extends RtmTypescriptError {
  public constructor(
    public readonly code: number,
    message: string,
  ) {
    super(message);
  }
}
