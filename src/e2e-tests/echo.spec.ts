import { RememberTheMilkApi } from "../lib/remember-the-milk-api";
import { ClientPermissions } from "../types/permissions";

describe("The RTM Api Client", () => {
  it("client correctly calls the live RTM API and returns the response", async () => {
    const key = process.env["RTM_API_KEY"];
    if (!key) {
      throw new Error("E2E Test misconfigured: Missing API key");
    }

    const secret = process.env["RTM_API_SECRET"];
    if (!secret) {
      throw new Error("E2E Test misconfigured: Missing API key");
    }

    const client = new RememberTheMilkApi(
      key,
      secret,
      ClientPermissions.Delete,
    );

    const result = await client.test.echo({ foo: "bar" });

    expect(result).toEqual(expect.objectContaining({ foo: "bar" }));
  });
});
