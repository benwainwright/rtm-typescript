import { vi } from "vitest";
import { when } from "jest-when";
import { mock } from "vitest-mock-extended";

import { ApiMethods, ClientPermissions, SuccessResponse } from "@types";

import { RememberTheMilkApi } from "./remember-the-milk-api";
import { Tasks, Auth } from "@namespaces";

import { RtmClient } from "./client";
import { ClientThrottleWrapper } from "./client-throttle-wrapper";
import { API_THROTTLE_DELAY } from "../constants/api-throttle-delay";

vi.mock("./client");
vi.mock("./client-throttle-wrapper");

beforeEach(() => {
  vi.resetAllMocks();
});

describe("RememberTheMilkApi", () => {
  describe("constructor", () => {
    it("runs without errors", () => {
      expect(
        () =>
          new RememberTheMilkApi({
            key: "key",
            secret: "secret",
            permissions: ClientPermissions.Write,
          }),
      ).not.toThrow();
    });

    it.each`
      namespace  | instance
      ${"auth"}  | ${Auth}
      ${"tasks"} | ${Tasks}
    `("$namespace is wired up correctly", ({ namespace, instance }) => {
      const client = new RememberTheMilkApi({
        key: "key",
        secret: "secret",
        permissions: ClientPermissions.Write,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((client as any)[namespace]).toBeInstanceOf(instance);
    });

    it("wraps the client with the throttling decorator if throttle is not passed in", async () => {
      const key = "key";
      const secret = "secret";
      const permissions = ClientPermissions.Write;

      const mockWrapper = mock<ClientThrottleWrapper>();
      const mockClient = mock<RtmClient>();

      when(vi.mocked(RtmClient))
        .calledWith(key, secret, permissions, undefined)
        .mockReturnValue(mockClient);

      when(vi.mocked(ClientThrottleWrapper))
        .calledWith(mockClient, API_THROTTLE_DELAY)
        .mockReturnValue(mockWrapper);

      const mockResponse =
        mock<SuccessResponse<ApiMethods, "rtm.auth.getFrob">["rsp"]>();

      when(mockWrapper.get)
        .calledWith("rtm.auth.getFrob", {})
        .mockResolvedValue(mockResponse);

      const client = new RememberTheMilkApi({
        key,
        secret,
        permissions,
      });

      const result = await client.auth.getFrob();
      expect(mockWrapper.get).toHaveBeenCalledWith("rtm.auth.getFrob", {});
      expect(mockClient.get).not.toHaveBeenCalled();
      expect(result).toEqual(mockResponse);
    });

    it("wraps the client with the throttling decorator if throttle is set to true", async () => {
      const key = "key";
      const secret = "secret";
      const permissions = ClientPermissions.Write;

      const mockWrapper = mock<ClientThrottleWrapper>();
      const mockClient = mock<RtmClient>();

      when(vi.mocked(RtmClient))
        .calledWith(key, secret, permissions, undefined)
        .mockReturnValue(mockClient);

      when(vi.mocked(ClientThrottleWrapper))
        .calledWith(mockClient, API_THROTTLE_DELAY)
        .mockReturnValue(mockWrapper);

      const mockResponse =
        mock<SuccessResponse<ApiMethods, "rtm.auth.getFrob">["rsp"]>();

      when(mockWrapper.get)
        .calledWith("rtm.auth.getFrob", {})
        .mockResolvedValue(mockResponse);

      const client = new RememberTheMilkApi({
        key,
        secret,
        permissions,
        throttle: true,
      });

      const result = await client.auth.getFrob();
      expect(mockWrapper.get).toHaveBeenCalledWith("rtm.auth.getFrob", {});
      expect(mockClient.get).not.toHaveBeenCalled();
      expect(result).toEqual(mockResponse);
    });

    it("doesn't use the throttling decorator if throttle is set to false", async () => {
      const key = "key";
      const secret = "secret";
      const permissions = ClientPermissions.Write;

      const mockWrapper = mock<ClientThrottleWrapper>();
      const mockClient = mock<RtmClient>();

      when(vi.mocked(RtmClient))
        .calledWith(key, secret, permissions, undefined)
        .mockReturnValue(mockClient);

      when(vi.mocked(ClientThrottleWrapper))
        .calledWith(mockClient, API_THROTTLE_DELAY)
        .mockReturnValue(mockWrapper);

      const mockResponse =
        mock<SuccessResponse<ApiMethods, "rtm.auth.getFrob">["rsp"]>();

      when(mockClient.get)
        .calledWith("rtm.auth.getFrob", {})
        .mockResolvedValue(mockResponse);

      const client = new RememberTheMilkApi({
        key,
        secret,
        permissions,
        throttle: false,
      });

      const result = await client.auth.getFrob();
      expect(mockClient.get).toHaveBeenCalledWith("rtm.auth.getFrob", {});
      expect(mockWrapper.get).not.toHaveBeenCalled();
      expect(result).toEqual(mockResponse);
    });
  });

  describe("getAuthUrl", () => {
    it("delegates to the underlying client", () => {
      const mockClient = mock<RtmClient>();

      const frob = "frob";
      const url = "url";

      when(mockClient.getAuthUrl).calledWith(frob).mockReturnValue(url);

      when(vi.mocked(RtmClient))
        .calledWith("key", "secret", ClientPermissions.Write, undefined)
        .mockReturnValue(mockClient);

      const client = new RememberTheMilkApi({
        key: "key",
        secret: "secret",
        permissions: ClientPermissions.Write,
      });

      const finalUrl = client.getAuthUrl(frob);
      expect(finalUrl).toEqual(url);
    });
  });
});
