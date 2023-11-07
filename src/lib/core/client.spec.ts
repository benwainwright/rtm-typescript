import { HttpResponse, http } from "msw";
import { it, describe, expect, beforeAll, afterEach, afterAll } from "vitest";
import {
  RtmTypescriptError,
  RtmApiFailedResponseError,
  RtmHttpError,
} from "@errors";

import {
  server,
  MY_TEST_FROB,
  MY_TEST_TOKEN,
  TEST_API_KEY,
  TEST_SHARED_SECRET,
} from "@test-support";

import { API_ERROR_CODES, REST_API_URL, HTTP_STATUS_CODES } from "@constants";

import { ClientPermissions } from "@types";

import { RtmClient } from "./client";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("RtmClient", () => {
  it("should raise a http-error containing the error code if the api returns with a 5xx response", async () => {
    server.use(
      http.get(REST_API_URL, () => {
        return HttpResponse.text("Whoops!", {
          status: HTTP_STATUS_CODES.internalServerError,
        });
      }),
    );
    const rtmClient = new RtmClient(
      TEST_API_KEY,
      TEST_SHARED_SECRET,
      ClientPermissions.Delete,
    );

    await expect(rtmClient.get("rtm.auth.getFrob", {})).rejects.toThrow(
      new RtmHttpError(HTTP_STATUS_CODES.internalServerError, "Whoops!"),
    );
  });

  it("should correctly call an api method with a correct signature when I make a request", async () => {
    const rtmClient = new RtmClient(
      TEST_API_KEY,
      TEST_SHARED_SECRET,
      ClientPermissions.Delete,
    );

    const response = await rtmClient.get("rtm.auth.getFrob", {});

    expect(response).toEqual({
      api_key: TEST_API_KEY,
      callback: "callback",
      frob: MY_TEST_FROB,
      stat: "ok",
    });
  });

  it("Should include the token with the api call if one is passed into the constructor", async () => {
    const rtmClient = new RtmClient(
      TEST_API_KEY,
      TEST_SHARED_SECRET,
      ClientPermissions.Delete,
      MY_TEST_TOKEN,
    );

    const response = await rtmClient.get("rtm.tasks.getList", {});

    expect(response).toEqual({
      api_key: TEST_API_KEY,
      callback: "callback",
      frob: MY_TEST_FROB,
      stat: "ok",
    });
  });

  it("should correctly reject with an apiFailedResponseError if the response is a failure", async () => {
    const rtmClient = new RtmClient(
      TEST_API_KEY,
      "definitely-a-bad-secret",
      ClientPermissions.Delete,
    );

    await expect(rtmClient.get("rtm.auth.getFrob", {})).rejects.toThrow(
      new RtmApiFailedResponseError(
        API_ERROR_CODES.invalidSignature,
        "RTM api returned an error response: Invalid signature",
      ),
    );
  });

  it("should generate the correct authUrl with frob", () => {
    const rtmClient = new RtmClient(
      "your_api_key",
      "your_shared_secret",
      ClientPermissions.Delete,
    );

    const expectedAuthUrl =
      "https://www.rememberthemilk.com/services/auth?api_key=your_api_key&perms=delete&frob=my-frob&api_sig=89cc38f7da49bca7854f5e9dcd741434";

    const authUrl = rtmClient.getAuthUrl("my-frob");

    expect(authUrl).toBe(expectedAuthUrl);
  });

  it("should generate the correct authUrl without frob", () => {
    const rtmClient = new RtmClient(
      "your_api_key",
      "your_shared_secret",
      ClientPermissions.Delete,
    );

    const expectedAuthUrl =
      "https://www.rememberthemilk.com/services/auth?api_key=your_api_key&perms=delete&api_sig=f0b8891dc9b77dfa65aeff1b46bb240d";

    const authUrl = rtmClient.getAuthUrl();

    expect(authUrl).toBe(expectedAuthUrl);
  });

  it("constructor should throw an error if the key is empty", () => {
    expect(
      () => new RtmClient("", "your_shared_secret", ClientPermissions.Delete),
    ).toThrow(new RtmTypescriptError("API key and secret must not be empty"));
  });

  it("constructor should throw an error if the secret is empty", () => {
    expect(
      () => new RtmClient("your_api_key", "", ClientPermissions.Delete),
    ).toThrow(new RtmTypescriptError("API key and secret must not be empty"));
  });
});
