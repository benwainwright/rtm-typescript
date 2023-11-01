import { NameSpace } from "../../types/api-methods";

export class Tasks implements NameSpace<"tasks"> {
    getToken: (args: { frob: string; }) => void;
    getFrob: (args: Record<string, string>) => void;
    getList: (args: { list_id?: string | undefined; filter?: string | undefined; last_sync?: string | undefined; }) => void;
}
