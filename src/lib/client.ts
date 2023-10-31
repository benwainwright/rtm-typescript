import { ClientPermissions } from "../types/permissions";
import { AUTH_URL } from "./constants";
import { RtmTypescriptError } from "./core/rtm-typescript-error";
import crypto from "node:crypto";

export class RtmClient {
  public constructor(
    private key: string,
    private secret: string,
    private permissions: ClientPermissions,
  ) {
    if (!key || !secret) {
      throw new RtmTypescriptError("API key and secret must not be empty");
    }
  }

  // public get<M extends keyof ApiMethods>(method: M, options: ApiMethods[M]['requestArgs']): SuccessResponse<M> {

  // }
  //

  private md5(text: string) {
    return crypto.createHash("md5").update(text).digest("hex");
  }

  private generateSignature(
    secret: string,
    params: Record<string, string>,
  ): string {
    return this.md5(
      `${secret}${Object.entries(params)
        .toSorted((a, b) => (a[0] > b[0] ? 1 : -1))
        .flat()
        .join("")}`,
    );
  }

  public getAuthUrl(frob?: string) {
    const params = {
      api_key: this.key,
      perms: this.permissions,
    };

    const api_sig = this.generateSignature(this.secret, params);

    const queryString = Object.entries({ ...params, api_sig })
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&");

    return `${AUTH_URL}?${queryString}`;
  }
}
