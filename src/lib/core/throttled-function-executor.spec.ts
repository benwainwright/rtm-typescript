import { vi } from "vitest";
import { ThrottledFunctionExecutor } from "./throttled-function-executor";

beforeEach(() => {
  vi.useFakeTimers();

  vi.setSystemTime(new Date(0));
});

afterEach(() => {
  vi.useRealTimers();
});

describe("throttled-function-executor", () => {
  describe("execute", () => {
    it("should resolve immediately when called once and return the function return values", async () => {
      const executor = new ThrottledFunctionExecutor(1000);
      const fn = vi.fn();
      fn.mockResolvedValue("foo");
      const result = executor.execute(fn);
      await vi.advanceTimersByTimeAsync(1);
      await expect(result).toBeResolvedWithin(0);
      expect(await result).toEqual("foo");
    });

    it("should still reject promises when the passed in function rejects", async () => {
      const executor = new ThrottledFunctionExecutor(1000);
      const functionOne = vi.fn();
      const error = new Error("foo");
      functionOne.mockRejectedValue(error);
      await expect(executor.execute(functionOne)).rejects.toThrow(error);
    });

    it("should not resolve the second function call immediately", async () => {
      const executor = new ThrottledFunctionExecutor(1000);
      const functionOne = vi.fn();
      functionOne.mockResolvedValue("foo");

      const functionTwo = vi.fn();
      functionTwo.mockResolvedValue("bar");

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      executor.execute(functionOne);
      const promiseTwo = executor.execute(functionTwo);

      const expectPromise = expect(promiseTwo).not.toBeResolvedWithin(50);
      await vi.advanceTimersByTimeAsync(100);
      vi.setSystemTime(new Date(100));
      await expectPromise;

      await vi.advanceTimersByTimeAsync(1000);
      vi.setSystemTime(new Date(1100));
      await expect(promiseTwo).toBeResolvedWithin(1001);
    });

    it("should space out three calls in a row", async () => {
      const executor = new ThrottledFunctionExecutor(1000);
      const functionOne = vi.fn();
      functionOne.mockResolvedValue("foo");

      const functionTwo = vi.fn();
      functionTwo.mockResolvedValue("bar");

      const functionThree = vi.fn();
      functionTwo.mockResolvedValue("baz");

      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      executor.execute(functionOne);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      executor.execute(functionTwo);
      const promise = executor.execute(functionThree);

      const expectPromise = expect(promise).not.toBeResolvedWithin(50);
      await vi.advanceTimersByTimeAsync(100);
      vi.setSystemTime(new Date(100));
      await expectPromise;

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const expectPromiseTwo = expect(promise).not.toBeResolvedWithin(1050);
      await vi.advanceTimersByTimeAsync(1100);
      vi.setSystemTime(new Date(1200));
      await expectPromise;

      await vi.advanceTimersByTimeAsync(1050);
      vi.setSystemTime(new Date(2250));
      await expect(promise).toBeResolvedWithin(2050);
    });
  });
});
