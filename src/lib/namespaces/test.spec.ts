import { expect, describe, it, vi } from "vitest";
import { when } from "jest-when";

import { RtmClient } from "@core";
import { ClientPermissions } from "@types";

import { Test } from "./test";

vi.mock("@core");

describe("the test namespace", () => {
  it("constructs without errors", () => {
    const client = new RtmClient("key", "secret", ClientPermissions.Delete);
    expect(() => new Test(client));
  });

  it.each`
    method     | clientMethod        | params
    ${"echo"}  | ${"rtm.test.echo"}  | ${{ bar: "baz" }}
    ${"login"} | ${"rtm.test.login"} | ${{}}
  `(
    "calls the $method method and returns the result",
    async ({ method, clientMethod, params }) => {
      const client = new RtmClient("key", "secret", ClientPermissions.Delete);

      const returnValue = {} as ReturnType<typeof client.get>;
      when(client.get)
        .calledWith(clientMethod, params)
        .mockReturnValue(returnValue);

      const test = new Test(client);

      const response = await test[method as keyof typeof test](params);
      expect(response).toEqual(returnValue);
    },
  );
});
