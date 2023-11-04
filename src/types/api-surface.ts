import { ApiMethods } from "./api-methods";
import { ConvertApiDescription } from "./convert-api-description";

/**
 * A type which represents the complete API surface of the client, mapped from {@link ApiMethods}
 * using {@link ConvertApiDescription}
 *
 * @public
 */
export type ApiSurface = ConvertApiDescription<ApiMethods>["rtm"];
