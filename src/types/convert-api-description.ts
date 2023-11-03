import { SuccessResponse } from "./responses";

type DeepRecord<K extends string, V> = K extends `${infer K0}.${infer KR}`
  ? { [P in K0]: DeepRecord<KR, V> }
  : { [P in K]: V };

export type Convert<
  T extends Record<keyof T, { requestArgs: unknown; responseArgs: unknown }>,
> = DeepIntersect<
  {
    [K in string & keyof T]: (
      x: DeepRecord<
        K,
        (arg: T[K]["requestArgs"]) => Promise<SuccessResponse<T, K>["rsp"]>
      >,
    ) => void;
  } extends Record<string, (x: infer I) => void>
    ? I
    : never
>;

type DeepIntersect<T> = T extends () => unknown
  ? T
  : T extends object
  ? { [K in keyof T]: DeepIntersect<T[K]> }
  : T;
