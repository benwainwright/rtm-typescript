import { ApiSurface } from "./api-surface";

/**
 * A type describing an object that allows you to call methods attached to a specific RTM API namespace
 *
 * @public
 */
export type NameSpaceClient<T extends keyof ApiSurface> = ApiSurface[T];
