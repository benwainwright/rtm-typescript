import { vi } from "vitest";
import { when } from "jest-when";
import { mock } from "vitest-mock-extended";

import { ClientPermissions } from "@types";

import { initialiseApi } from "./initialise-api";
import { RememberTheMilkApi } from "./remember-the-milk-api";

vi.mock("./remember-the-milk-api");

beforeEach(() => {
  vi.resetAllMocks();
});

describe("initialise-api", () => {
  it("instantiates a new instance of the RTM client", () => {
    const key = "key";
    const secret = "secret";
    const perms = ClientPermissions.Read;
    const token = "token";
    const mockClient = mock<RememberTheMilkApi>();

    when(vi.mocked(RememberTheMilkApi))
      .calledWith({ key, secret, permissions: perms, token })
      .mockReturnValue(mockClient);

    const client = initialiseApi({ key, secret, permissions: perms, token });

    expect(client).toBe(mockClient);
  });

  it("passes the throttle option to the client if supplied", () => {
    const key = "key";
    const secret = "secret";
    const perms = ClientPermissions.Read;
    const token = "token";
    const mockClient = mock<RememberTheMilkApi>();
    const throttle = true;

    when(vi.mocked(RememberTheMilkApi))
      .calledWith({ key, secret, permissions: perms, token, throttle })
      .mockReturnValue(mockClient);

    const client = initialiseApi({
      key,
      secret,
      permissions: perms,
      token,
      throttle,
    });

    expect(client).toBe(mockClient);
  });
});
