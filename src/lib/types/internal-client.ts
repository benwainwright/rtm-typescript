import { ApiMethods, SuccessResponse } from ".";

export interface InternalClient {
  get<M extends keyof ApiMethods>(
    method: M,
    options: ApiMethods[M]["requestArgs"],
  ): Promise<SuccessResponse<ApiMethods, M>["rsp"]>;
}
