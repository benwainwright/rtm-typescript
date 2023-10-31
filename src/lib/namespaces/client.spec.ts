import { it, describe, expect } from "vitest";
import { RtmClient } from "../client";
import { RtmTypescriptError } from "../core/rtm-typescript-error";

describe("RtmClient", (test) => {
  it("should generate the correct authUrl without frob", () => {
    const rtmClient = new RtmClient(
      "your_api_key",
      "your_shared_secret",
      "delete",
    );

    const expectedAuthUrl =
      "https://www.rememberthemilk.com/services/auth/?api_key=your_api_key&perms=delete&api_sig=f0b8891dc9b77dfa65aeff1b46bb240d";

    const authUrl = rtmClient.getAuthUrl();

    expect(authUrl).toBe(expectedAuthUrl);
  });

  it("constructor should throw an error if the key is empty", () => {
    expect(() => new RtmClient("", "your_shared_secret", "delete")).toThrow(
      new RtmTypescriptError("API key and secret must not be empty"),
    );
  });

  it("constructor should throw an error if the secret is empty", () => {
    expect(() => new RtmClient("your_api_key", "", "delete")).toThrow(
      new RtmTypescriptError("API key and secret must not be empty"),
    );
  });
});
