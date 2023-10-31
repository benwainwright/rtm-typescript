import { ApiMethods, SuccessResponse } from "../types";
import { ClientPermissions } from "../types/permissions";
import { AUTH_URL, REST_API_URL } from "./constants";
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

  private generateRequestQueryString(
    method: string,
    params: Record<string, string>,
  ) {
    const finalParams = {
      format: "json",
      api_key: this.key,
      method,
      ...params,
    };
    const api_sig = this.generateSignature(this.secret, finalParams);
    return this.generateQueryString({ ...finalParams, api_sig });
  }

  public async get<M extends keyof ApiMethods>(
    method: M,
    options: ApiMethods[M]["requestArgs"],
  ): Promise<SuccessResponse<M>> {
    const url = `${REST_API_URL}?${this.generateRequestQueryString(
      method,
      options,
    )}`;

    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new RtmTypescriptError("Request failed");
    }
    return (await response.json()) as SuccessResponse<M>;
  }

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

  private generateQueryString(params: Record<string, string>) {
    return Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
      )
      .join("&");
  }

  public getAuthUrl(frob?: string) {
    const params = {
      api_key: this.key,
      perms: this.permissions,
    };

    const api_sig = this.generateSignature(this.secret, params);
    const queryString = this.generateQueryString({ ...params, api_sig });

    return `${AUTH_URL}?${queryString}`;
  }
}
