import { TaskList } from "./task-list";
import { User } from "./domain-objects/user";
import { SuccessResponse } from "./responses";
import { ExpandRecursively } from "./expand-recursively";

export interface ApiMethods {
  "rtm.test.echo": {
    requestArgs: Record<string, string>;
    responseArgs: {
      method: string;
    } & Record<string, string>;
  };

  "rtm.auth.checkToken": {
    requestArgs: {
      auth_token: string;
    };
    responseArgs: {
      auth: {
        token: string;
        perms: string;
        user: User;
      };
    };
  };
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

type DeepRecord<K extends string, V> = K extends `${infer K0}.${infer KR}`
  ? { [P in K0]: DeepRecord<KR, V> }
  : { [P in K]: V };

type Convert<
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

/**
 * @public
 */
export type ApiSurface = Convert<ApiMethods>["rtm"];

export interface DefaultArgs {
  api_key: string;
  auth_token?: string;
}

export type MappedApiSurface = ExpandRecursively<ApiSurface>;

export type NameSpace<T extends keyof ApiSurface> = ApiSurface[T];
