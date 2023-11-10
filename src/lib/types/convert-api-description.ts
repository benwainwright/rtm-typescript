type DeepRecord<K extends string, V> = K extends `${infer K0}.${infer KR}`
  ? { [P in K0]: DeepRecord<KR, V> }
  : { [P in K]: V };

// eslint-disable-next-line @typescript-eslint/ban-types
type DeepIntersect<T> = [T] extends [Function]
  ? T
  : T extends object
  ? { [K in keyof T]: DeepIntersect<T[K]> }
  : T;

/**
 * An internal helper type that this package uses to convert a simple typed description of
 *  the entire API surface to something that can be used to typecheck a series of different classes containing
 *  simple, readable methods
 *
 * @public
 */
export type ConvertApiDescription<
  T extends Record<keyof T, { requestArgs: unknown; responseArgs: unknown }>,
> = DeepIntersect<
  {
    [K in string & keyof T]: (
      x: DeepRecord<
        K,
        (arg: T[K]["requestArgs"]) => Promise<T[K]["responseArgs"]>
      >,
    ) => void;
  } extends Record<string, (x: infer I) => void>
    ? I
    : never
>;
