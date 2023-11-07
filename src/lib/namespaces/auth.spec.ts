import { when } from "jest-when";
import { expect, describe, it, vi } from "vitest";

import { RtmClient } from "@core";
import { ClientPermissions } from "@types";

import { Auth } from "./auth";

vi.mock("@core");

beforeEach(() => {
  vi.resetAllMocks();
});

describe("the auth namespace", () => {
  it("constructs without errors", () => {
    const client = new RtmClient("key", "secret", ClientPermissions.Delete);
    expect(() => new Auth(client));
  });

  it.each`
    method          | clientMethod             | params
    ${"checkToken"} | ${"rtm.auth.checkToken"} | ${{ auth_token: "token" }}
    ${"getFrob"}    | ${"rtm.auth.getFrob"}    | ${{}}
    ${"getToken"}   | ${"rtm.auth.getToken"}   | ${{ frob: "foo" }}
  `(
    "calls the $method method and returns the result",
    async ({ method, clientMethod, params }) => {
      const client = new RtmClient("key", "secret", ClientPermissions.Delete);

      const returnValue = {} as ReturnType<typeof client.get>;
      when(client.get)
        .calledWith(clientMethod, params)
        .mockReturnValue(returnValue);

      const auth = new Auth(client);

      const response = await auth[method as keyof typeof auth](params);
      expect(response).toEqual(returnValue);
    },
  );
});
