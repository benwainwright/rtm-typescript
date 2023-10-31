import { TaskList } from "./task-list";
import { User } from "./domain-objects/user";

export interface ApiMethods {
  "rtm.auth.getToken": {
    requestArgs: {
      frob: string;
    };
    responseArgs: {
      auth: {
        token: string;
        perms: string;
        user: User;
      };
    };
  };
  "rtm.auth.getFrob": {
    requestArgs: Record<string, string>;
    responseArgs: {
      frob: string;
    };
  };
  "rtm.tasks.getList": {
    requestArgs: {
      list_id?: string;
      filter?: string;
      last_sync?: string;
    };
    responseArgs: {
      tasks: {
        list: TaskList[];
      };
    };
  };
}

type GetStringBeforePeriod<S extends String> =
  S extends `${infer First}.${string}` ? First : never;

type GetStringAfterPeriod<S extends String> =
  S extends `${string}.${infer Rest}` ? Rest : never;

type GetApiMethods<T, N extends string> = {
  [K in keyof T as K extends `${N}.${string}`
    ? GetStringAfterPeriod<GetStringAfterPeriod<K>>
    : never]: string;
};

type ApiSurface<T> = {
  [K in keyof T as K extends string
    ? GetStringBeforePeriod<GetStringAfterPeriod<K>>
    : never]: K extends string
    ? GetApiMethods<
        T,
        `${GetStringBeforePeriod<K>}.${GetStringBeforePeriod<
          GetStringAfterPeriod<K>
        >}`
      >
    : never;
};

type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;

export interface DefaultArgs {
  api_key: string;
  auth_token?: string;
}

export type MappedApiSurface = ExpandRecursively<ApiSurface<ApiMethods>>;

export type NameSpace<T extends keyof MappedApiSurface> = MappedApiSurface[T];
export type MappedTasks = MappedApiSurface["tasks"];
