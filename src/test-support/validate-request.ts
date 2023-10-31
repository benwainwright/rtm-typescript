import { DefaultBodyType, HttpResponse, StrictRequest } from "msw";
import { makeFailureResponse } from "./make-failure-response";
import {
  INVALID_API_KEY,
  INVALID_SIGNATURE,
  MISSING_SIGNATURE,
  NOT_FOUND,
} from "../types/response-codes";
import { HTTP } from "../lib/constants";
import { checkSignature } from "./check-signature";
import { TEST_API_KEY } from "./testing-values";

export const validateRequest = (request: StrictRequest<DefaultBodyType>) => {
  const url = new URL(request.url);

  const method = url.searchParams.get("method");

  if (!method) {
    return HttpResponse.json(
      makeFailureResponse(NOT_FOUND, 'Method "" not found'),
      {
        // @ts-expect-error
        status: HTTP.statusCodes.Ok,
      },
    );
  }

  const signature = url.searchParams.get("api_sig");
  if (!signature) {
    return HttpResponse.json(
      makeFailureResponse(MISSING_SIGNATURE, "Missing signature"),
      {
        // @ts-expect-error
        status: HTTP.statusCodes.Ok,
      },
    );
  }

  if (!checkSignature(request, signature)) {
    return HttpResponse.json(
      makeFailureResponse(INVALID_SIGNATURE, "Invalid signature"),
      {
        // @ts-expect-error
        status: HTTP.statusCodes.Ok,
      },
    );
  }

  const key = url.searchParams.get("api_key");
  if (!key || key !== TEST_API_KEY) {
    return HttpResponse.json(
      makeFailureResponse(INVALID_API_KEY, "Invalid API Key"),
      {
        // @ts-expect-error
        status: HTTP.statusCodes.Ok,
      },
    );
  }

  return { key, method };
};
