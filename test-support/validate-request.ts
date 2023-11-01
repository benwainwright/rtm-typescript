import { DefaultBodyType, HttpResponse, StrictRequest } from "msw";
import { makeFailureResponse } from "./make-failure-response";
import { checkSignature } from "./check-signature";
import { TEST_API_KEY } from "./testing-values";
import { HTTP } from "../src/lib/constants";
import { API_ERROR_CODES } from "../src/types/response-codes";

export const validateRequest = (request: StrictRequest<DefaultBodyType>) => {
  const url = new URL(request.url);

  const method = url.searchParams.get("method");

  if (!method) {
    return HttpResponse.json(
      makeFailureResponse(API_ERROR_CODES.notFound, 'Method "" not found'),
      {
        // @ts-expect-error Incorrect types in msw
        status: HTTP.statusCodes.Ok,
      },
    );
  }

  const signature = url.searchParams.get("api_sig");
  if (!signature) {
    return HttpResponse.json(
      makeFailureResponse(
        API_ERROR_CODES.missingSignature,
        "Missing signature",
      ),
      {
        // @ts-expect-error Incorrect types in msw
        status: HTTP.statusCodes.Ok,
      },
    );
  }

  if (!checkSignature(request, signature)) {
    return HttpResponse.json(
      makeFailureResponse(
        API_ERROR_CODES.invalidSignature,
        "Invalid signature",
      ),
      {
        // @ts-expect-error Incorrect types in msw
        status: HTTP.statusCodes.Ok,
      },
    );
  }

  const key = url.searchParams.get("api_key");
  if (!key || key !== TEST_API_KEY) {
    return HttpResponse.json(
      makeFailureResponse(API_ERROR_CODES.invalidApiKey, "Invalid API Key"),
      {
        // @ts-expect-error tsc types are incorrect
        status: HTTP.statusCodes.Ok,
      },
    );
  }

  return { key, method };
};
