import { ApiMethods } from "./api-methods";
import { Convert } from "./convert-api-description";

/**
 * @public
 */
export type ApiSurface = Convert<ApiMethods>["rtm"];
