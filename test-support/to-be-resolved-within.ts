interface MatcherResult {
  pass: boolean;
  message: () => string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Matchers<R> {
      toBeResolvedWithin: (milliseconds: number) => Promise<R>;
    }
  }
}

export const toBeResolvedWithin = async (
  received: Promise<unknown>,
  milliseconds: number,
): Promise<MatcherResult> => {
  let resolved = false;
  let elapsedTime = 0;
  const startTime = Date.now();
  const checkPromise = received.then(() => {
    resolved = true;
    elapsedTime = Date.now() - startTime;
  });

  const delayPromise = new Promise((resolve) =>
    setTimeout(resolve, milliseconds),
  );

  await Promise.race([checkPromise, delayPromise]);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const pass = resolved && elapsedTime <= milliseconds;

  return {
    message: () =>
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      pass
        ? `expected promise not to resolve within ${milliseconds} ms`
        : `expected promise to resolve within ${milliseconds} ms`,
    pass,
  };
};
