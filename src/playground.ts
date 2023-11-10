import { getCredentialsFromEnvironment } from "test-support/get-credentials-from-environment";
import { initialiseApi } from "./lib/core/initialise-api";
import { ClientPermissions } from "./lib/types/permissions";

import "dotenv/config";

/**
 * This is just a playground file I use to test the library
 * manually. It should never form part of the implementation
 * or the API
 */
const run = async () => {
  const { key, secret } = getCredentialsFromEnvironment();

  const client = initialiseApi({
    key,
    secret,
    permissions: ClientPermissions.Delete,
  });

  const result = await client.tasks.getList({});
  console.log(result);
};

run().catch(console.error);
