/**
 * A helper type that expands types so that they resolve to their final forma
 * in editor tooltips
 *
 * @public
 */
export type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;
