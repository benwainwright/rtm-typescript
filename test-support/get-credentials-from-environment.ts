export const getCredentialsFromEnvironment = () => {
  const key = process.env["RTM_API_KEY"];
  if (!key) {
    throw new Error("E2E Test misconfigured: Missing API key");
  }

  const secret = process.env["RTM_API_SECRET"];
  if (!secret) {
    throw new Error("E2E Test misconfigured: Missing API key");
  }
  return { key, secret };
};
