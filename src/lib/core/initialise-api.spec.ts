import { vi } from "vitest";
import { initialiseApi } from "./initialise-api";
import { ClientPermissions } from "../..";
import { when } from "jest-when";
import { mock } from "vitest-mock-extended";
import { RememberTheMilkApi } from "../remember-the-milk-api";

vi.mock("../remember-the-milk-api");

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
      .calledWith(key, secret, perms, token)
      .mockReturnValue(mockClient);

    const client = initialiseApi(key, secret, perms, token);

    expect(client).toBe(mockClient);
  });
});
