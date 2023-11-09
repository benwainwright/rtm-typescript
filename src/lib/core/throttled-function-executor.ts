type Call<T> = () => Promise<T>;

export class ThrottledFunctionExecutor {
  private readonly queuedRequests: Call<unknown>[] = [];

  private nextAllowedCallTime: number | undefined = undefined;
  private flushing = false;

  public constructor(private readonly throttleTime: number) {}

  private async flushCalls() {
    if (this.flushing) {
      return;
    }
    this.flushing = true;
    while (this.queuedRequests.length > 0) {
      const delayMilliseconds = (this.nextAllowedCallTime ?? 0) - Date.now();
      if (delayMilliseconds > 0) {
        await ThrottledFunctionExecutor.delay(delayMilliseconds);
      }
      const call = this.queuedRequests.shift();
      await call?.();
      this.nextAllowedCallTime = Date.now() + this.throttleTime;
    }
    this.flushing = false;
  }

  private static delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private queueCall<T>(call: Call<T>) {
    this.queuedRequests.push(call);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.flushCalls();
  }

  public async execute<T>(fn: Call<T>): Promise<T> {
    return await new Promise<T>((resolve, reject) => {
      const wrappedFunction = async () => {
        try {
          resolve(await fn());
        } catch (error) {
          reject(error);
        }
      };
      this.queueCall(wrappedFunction);
    });
  }
}
