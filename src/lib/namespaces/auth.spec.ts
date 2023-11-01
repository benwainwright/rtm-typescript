import { expect, describe, it, vi } from "vitest";
import { Auth } from "./auth";
import { RtmClient } from "../core";
import { ClientPermissions } from "../../types/permissions";
import { when } from "jest-when";

vi.mock("../core");

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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const returnValue: any = "foo";
      when(client.get)
        .calledWith(clientMethod, params)
        .mockReturnValue(returnValue);

      const auth = new Auth(client);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await (auth as any)[method](params);
      expect(response).toEqual(returnValue);
    },
  );
});
