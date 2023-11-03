import { ApiSurface } from "./api-surface";
export type NameSpace<T extends keyof ApiSurface> = ApiSurface[T];
