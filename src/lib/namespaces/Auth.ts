import { NameSpace } from "../../types/api-methods";

export class Auth implements NameSpace<"auth"> {
    getToken: {};
    getFrob: {};
    getList: {};
}
