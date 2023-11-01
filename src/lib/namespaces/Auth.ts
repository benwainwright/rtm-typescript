import { SuccessResponse } from "../../types";
import { NameSpace } from "../../types/api-methods";

export class Auth implements NameSpace<"auth"> {
    getToken: (args: { frob: string; }) => SuccessResponse<"rtm.auth.getToken">;
    getFrob: (args: Record<string, string>) => SuccessResponse<"rtm.auth.getFrob">;

}
