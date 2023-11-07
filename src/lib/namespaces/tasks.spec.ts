import { expect, describe, it, vi } from "vitest";
import { when } from "jest-when";

import { Tasks } from "./tasks";

import { ClientPermissions } from "@types";
import { RtmClient } from "@core";

vi.mock("@core");

describe("the task namespace", () => {
  it("constructs without errors", () => {
    const client = new RtmClient("key", "secret", ClientPermissions.Delete);
    expect(() => new Tasks(client));
  });

  it.each`
    method       | clientMethod           | params
    ${"getList"} | ${"rtm.tasks.getList"} | ${{ list_id: "foo" }}
  `(
    "calls the $method method and returns the result",
    async ({ method, clientMethod, params }) => {
      const client = new RtmClient("key", "secret", ClientPermissions.Delete);

      const returnValue = {} as ReturnType<typeof client.get>;
      when(client.get)
        .calledWith(clientMethod, params)
        .mockReturnValue(returnValue);

      const auth = new Tasks(client);

      const response = await auth[method as keyof typeof auth](params);
      expect(response).toEqual(returnValue);
    },
  );
});
