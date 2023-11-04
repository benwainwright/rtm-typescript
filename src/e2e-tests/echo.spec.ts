import { getCredsFromEnvironment } from "../../test-support/get-creds-from-environment";
import { initialiseApi } from "../../test-support/package-intercept";
import { ClientPermissions } from "../types/permissions";

describe("The RTM Api Client", () => {
  it("client correctly calls the live RTM API and returns the response", async () => {
    const { key, secret } = getCredsFromEnvironment();

    const client = initialiseApi(key, secret, ClientPermissions.Delete);

    const result = await client.test.echo({ foo: "bar" });

    expect(result).toEqual(expect.objectContaining({ foo: "bar" }));
  });
});
