// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Replace<T, O, N extends new (...args: any[]) => any> = T extends O
  ? InstanceType<N>
  : T extends Array<infer U>
  ? Array<Replace<U, O, N>>
  : T extends object
  ? { [K in keyof T]: Replace<T[K], O, N> }
  : T;

export type ConvertTypesWithin<
  T,
  O,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  N extends new (...args: any[]) => any,
> = {
  [P in keyof T]: Replace<T[P], O, N>;
};
