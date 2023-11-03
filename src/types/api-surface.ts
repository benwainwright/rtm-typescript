import { ApiMethods } from "./api-methods";
import { ConvertApiDescription } from "./convert-api-description";

/**
 * @public
 */
export type ApiSurface = ConvertApiDescription<ApiMethods>["rtm"];
