export const makeFailureResponse = (
  code: number,
  message: string,
): Record<string, unknown> => {
  return {
    rsp: {
      stat: "fail",
      err: {
        code,
        msg: message,
      },
    },
  };
};
