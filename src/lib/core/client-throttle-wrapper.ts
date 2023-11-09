import { ApiMethods, SuccessResponse, InternalClient } from "@types";
import { ThrottledFunctionExecutor } from "./throttled-function-executor";

export class ClientThrottleWrapper implements InternalClient {
  private readonly throttledExecutor: ThrottledFunctionExecutor;

  constructor(
    private readonly client: InternalClient,
    throttle: number,
  ) {
    this.throttledExecutor = new ThrottledFunctionExecutor(throttle);
  }

  public async get<M extends keyof ApiMethods>(
    method: M,
    options: ApiMethods[M]["requestArgs"],
  ): Promise<SuccessResponse<ApiMethods, M>["rsp"]> {
    const call = () => {
      return this.client.get(method, options);
    };
    return await this.throttledExecutor.execute(call);
  }
}
