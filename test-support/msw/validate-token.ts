import { DefaultBodyType, HttpResponse, StrictRequest } from "msw";
import { makeFailureResponse } from "./make-failure-response";
import { API_ERROR_CODES, HTTP_STATUS_CODES } from "@constants";

export const validateToken = (request: StrictRequest<DefaultBodyType>) => {
  const url = new URL(request.url);

  const token = url.searchParams.get("auth_token");

  if (!token) {
    return HttpResponse.json(
      makeFailureResponse(API_ERROR_CODES.invalidToken, "Token not valid"),
      {
        status: HTTP_STATUS_CODES.ok,
      },
    );
  }

  return undefined;
};
