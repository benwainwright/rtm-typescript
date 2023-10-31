import { ApiMethods } from "../api-methods";

export interface SuccessResponse<M extends keyof ApiMethods> {
  rsp: {
    stat: "ok";
    api_key?: string;
    callback: string;
  } & ApiMethods[M]["responseArgs"];
}
