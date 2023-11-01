import { expect, describe, it, vi } from "vitest";
import { Auth } from "./Auth";
import { RtmClient } from "../client";
import { ClientPermissions } from "../../types/permissions";
import { when } from "jest-when";

vi.mock("../client");

describe("the auth namespace", () => {
  it("constructs without errors", () => {
    const client = new RtmClient("key", "secret", ClientPermissions.Delete);
    expect(() => new Auth(client));
  });

  it.each`
    method        | clientMethod           | params
    ${"getFrob"}  | ${"rtm.auth.getFrob"}  | ${{}}
    ${"getToken"} | ${"rtm.auth.getToken"} | ${{ frob: "foo" }}
  `(
    "calls the $method method and returns the result",
    async ({ method, clientMethod, params }) => {
      const client = new RtmClient("key", "secret", ClientPermissions.Delete);

      const returnValue: any = "foo";
      when(client.get)
        .calledWith(clientMethod, params)
        .mockReturnValue(returnValue);

      const auth = new Auth(client);

      const response = await (auth as any)[method](params);
      expect(response).toEqual(returnValue);
    },
  );
});
