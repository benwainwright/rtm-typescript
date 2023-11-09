import crypto from "node:crypto";

import {
  ApiMethods,
  FailResponse,
  SuccessResponse,
  ClientPermissions,
  InternalClient,
} from "@types";

import { AUTH_URL, REST_API_URL } from "@constants";

import {
  RtmApiFailedResponseError,
  RtmHttpError,
  RtmTypescriptError,
} from "@errors";

export class RtmClient implements InternalClient {
  public constructor(
    private readonly key: string,
    private readonly secret: string,
    private readonly permissions: ClientPermissions,
    private readonly token?: string,
  ) {
    if (!key || !secret) {
      throw new RtmTypescriptError("API key and secret must not be empty");
    }
  }

  public async get<M extends keyof ApiMethods>(
    method: M,
    options: ApiMethods[M]["requestArgs"],
  ): Promise<SuccessResponse<ApiMethods, M>["rsp"]> {
    const url = `${REST_API_URL}?${this.generateRequestQueryString(
      method,
      options,
    )}`;

    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      const body = await response.text();
      throw new RtmHttpError(response.status, body);
    }
    const { rsp } = (await response.json()) as
      | SuccessResponse<ApiMethods, M>
      | FailResponse;

    if (rsp.stat === "fail") {
      throw new RtmApiFailedResponseError(
        rsp.err.code,
        `RTM api returned an error response: ${rsp.err.msg}`,
      );
    }
    return rsp;
  }

  public getAuthUrl(frob?: string) {
    const frobObj: { frob: string } | Record<string, never> = frob
      ? { frob }
      : {};

    const params: Record<string, string> = {
      api_key: this.key,
      perms: this.permissions.toLowerCase(),
      ...frobObj,
    };

    const apiSig = this.generateSignature(this.secret, params);
    const queryString = this.generateQueryString({
      ...params,
      api_sig: apiSig,
    });

    return `${AUTH_URL}?${queryString}`;
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
        .slice()
        .sort((a, b) => (a[0] > b[0] ? 1 : -1))
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

    const finalParamsWithToken = this.token
      ? { ...finalParams, auth_token: this.token }
      : finalParams;

    const apiSig = this.generateSignature(this.secret, finalParamsWithToken);
    return this.generateQueryString({
      ...finalParamsWithToken,
      api_sig: apiSig,
    });
  }
}
