import { it, describe, expect, vi } from "vitest";
import { mock } from "vitest-mock-extended";
import { when } from "jest-when";

import { ApiMethods, SuccessResponse, InternalClient } from "@types";
import { ClientThrottleWrapper } from "./client-throttle-wrapper";
import { ThrottledFunctionExecutor } from "./throttled-function-executor";

vi.mock("./throttled-function-executor");

beforeEach(() => {
  vi.resetAllMocks();
});

describe("ClientThrottleWrapper", () => {
  it("passes calls to the throttled executor", async () => {
    const mockClient = mock<InternalClient>();
    const wrapper = new ClientThrottleWrapper(mockClient, 1000);

    const mockResponse =
      mock<SuccessResponse<ApiMethods, "rtm.auth.getFrob">["rsp"]>();

    when(mockClient.get)
      .calledWith("rtm.auth.getFrob", {})
      .mockResolvedValue(mockResponse);

    vi.mocked(ThrottledFunctionExecutor.prototype.execute).mockImplementation(
      async (fn) => await fn(),
    );

    const result = await wrapper.get("rtm.auth.getFrob", {});

    expect(ThrottledFunctionExecutor.prototype.execute).toHaveBeenCalled();
    expect(result).toEqual(mockResponse);
  });
});
