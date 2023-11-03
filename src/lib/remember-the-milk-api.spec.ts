import { ClientPermissions } from "../types/permissions";
import { RememberTheMilkApi } from "./remember-the-milk-api";
import { Tasks, Auth } from "./namespaces";
import { vi } from "vitest";
import { when } from "jest-when";
import { mock } from "vitest-mock-extended";
import { RtmClient } from "./core";

vi.mock("./core");

beforeEach(() => {
  vi.resetAllMocks();
});

describe("RememberTheMilkApi", () => {
  describe("constructor", () => {
    it("runs without errors", () => {
      expect(
        () => new RememberTheMilkApi("key", "secret", ClientPermissions.Write),
      ).not.toThrow();
    });

    it.each`
      namespace  | instance
      ${"auth"}  | ${Auth}
      ${"tasks"} | ${Tasks}
    `("$namespace is wired up correctly", ({ namespace, instance }) => {
      const client = new RememberTheMilkApi(
        "key",
        "secret",
        ClientPermissions.Write,
      );

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((client as any)[namespace]).toBeInstanceOf(instance);
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

      const client = new RememberTheMilkApi(
        "key",
        "secret",
        ClientPermissions.Write,
      );

      const finalUrl = client.getAuthUrl(frob);
      expect(finalUrl).toEqual(url);
    });
  });
});
