import { DefaultBodyType, HttpResponse, StrictRequest } from "msw";
import { makeSuccessResponse } from "../../make-success-response";
import {
  MY_TEST_FROB,
  MY_TEST_TOKEN,
  MY_TEST_USER,
} from "../../testing-values";
import { makeFailureResponse } from "../../make-failure-response";
import { API_ERROR_CODES } from "../../../src/types/response-codes";
import { HTTP_STATUS_CODES } from "../../../src/lib/core/http-status-codes";

export const getToken = (
  request: StrictRequest<DefaultBodyType>,
  apiKey: string,
) => {
  const url = new URL(request.url);

  const frob = url.searchParams.get("frob");
  if (!frob || frob !== MY_TEST_FROB) {
    return HttpResponse.json(
      makeFailureResponse(API_ERROR_CODES.invalidFrob, 'Method "" not found'),
      {
        status: HTTP_STATUS_CODES.ok,
      },
    );
  }

  const perms = url.searchParams.get("perms");

  return HttpResponse.json(
    makeSuccessResponse(apiKey, "callback", {
      token: MY_TEST_TOKEN,
      perms,
      user: MY_TEST_USER,
    }),
    { status: 200 },
  );
};
