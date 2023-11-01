import { ClientPermissions } from "../types/permissions";
import { RememberTheMilkApi } from "./RememberTheMilkApi";
import { Tasks } from "./namespaces";
import { Auth } from "./namespaces/Auth";

describe("RememberTheMilkApi", () => {
  it("constructs without errors", () => {
    expect(
      () => new RememberTheMilkApi("key", "secret", ClientPermissions.Write),
    ).not.toThrow();
  });

  it.each`
    namespace  | instance
    ${"auth"}  | ${Auth}
    ${"tasks"} | ${Tasks}
  `("$namespace is wired up correctly", ({ namespace, instance }) => {
    const client = new RememberTheMilkApi(
      "key",
      "secret",
      ClientPermissions.Write,
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((client as any)[namespace]).toBeInstanceOf(instance);
  });
});
