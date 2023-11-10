/**
 * A successful response from the API
 *
 * @public
 */
export interface SuccessResponse<
  T extends Record<keyof T, { requestArgs: unknown; responseArgs: unknown }>,
  M extends keyof T,
> {
  rsp: {
    stat: "ok";
    api_key?: string;
    callback: string;
  } & T[M]["responseArgs"];
}
