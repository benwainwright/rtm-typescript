import { expect, describe, it, vi } from "vitest";
import { Tasks } from "./Tasks";
import { RtmClient } from "../client";
import { ClientPermissions } from "../../types/permissions";
import { when } from "jest-when";

vi.mock("../client");

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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const returnValue: any = "foo";
      when(client.get)
        .calledWith(clientMethod, params)
        .mockReturnValue(returnValue);

      const auth = new Tasks(client);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await (auth as any)[method](params);
      expect(response).toEqual(returnValue);
    },
  );
});
