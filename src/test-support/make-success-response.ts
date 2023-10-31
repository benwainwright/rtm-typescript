export const makeSuccessResponse = (
  key: string,
  callback: string,
  otherParams: Record<string, unknown>,
) => {
  return {
    rsp: {
      stat: "ok",
      api_key: key,
      callback,
      ...otherParams,
    },
  };
};
