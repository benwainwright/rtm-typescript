import { TaskList } from "./task-list";
import { User } from "./domain-objects/user";

export interface ApiMethods {
  "rtm.test.login": {
    requestArgs: Record<string, string>;
    responseArgs: {
      user: {
        id: string;
        username: string;
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
