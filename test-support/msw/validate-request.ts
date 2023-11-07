import { DefaultBodyType, HttpResponse, StrictRequest } from "msw";
import { makeFailureResponse } from "./make-failure-response";
import { checkSignature } from "./check-signature";
import { TEST_API_KEY } from "../testing-values";
import { API_ERROR_CODES, HTTP_STATUS_CODES } from "@constants";

export const validateRequest = (request: StrictRequest<DefaultBodyType>) => {
  const url = new URL(request.url);

  const method = url.searchParams.get("method");

  if (!method) {
    return HttpResponse.json(
      makeFailureResponse(API_ERROR_CODES.notFound, 'Method "" not found'),
      {
        status: HTTP_STATUS_CODES.ok,
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
        status: HTTP_STATUS_CODES.ok,
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
        status: HTTP_STATUS_CODES.ok,
      },
    );
  }

  const key = url.searchParams.get("api_key");
  if (!key || key !== TEST_API_KEY) {
    return HttpResponse.json(
      makeFailureResponse(API_ERROR_CODES.invalidApiKey, "Invalid API Key"),
      {
        status: HTTP_STATUS_CODES.ok,
      },
    );
  }

  return { key, method };
};
