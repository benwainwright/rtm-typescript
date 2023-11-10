import { RawTaskList } from "./domain-objects/task-list";
import { RawUser } from "./domain-objects/user";

/**
 * A simple typed description of the RTM api surface. This interface
 * is the source of truth that is used to type check the rest of the SDK
 *
 * @public
 */
export interface ApiMethods {
  "rtm.test.login": {
    requestArgs: Record<string, string>;
    responseArgs: {
      user: {
        /**
         * The id of the user
         */
        id: string;
        /**
         * The username of the user
         */
        username: string;
        fullname: string;
      };
    } & Record<string, string>;
  };
  "rtm.test.echo": {
    requestArgs: Record<string, string>;
    responseArgs: {
      method: string;
    } & Record<string, string>;
  };

  "rtm.auth.checkToken": {
    requestArgs: {
      /**
       * The auth token to check
       */
      auth_token: string;
    };
    responseArgs: {
      auth: {
        token: string;
        perms: string;
        user: RawUser;
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
        user: RawUser;
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
      callback?: string;
    };
    responseArgs: {
      tasks: {
        list: RawTaskList[];
      };
    };
  };
}
