import { http, HttpResponse } from "msw";
import {
  INVALID_API_KEY,
  MISSING_SIGNATURE,
  NOT_FOUND,
} from "../types/response-codes";
import { MY_TEST_FROB } from "./test-frob";

const makeFailureResponse = (
  code: number,
  message: string,
): Record<string, unknown> => {
  return {
    rsp: {
      stat: "fail",
      err: {
        code,
        msg: message,
      },
    },
  };
};

const makeSuccessResponse = (
  key: string,
  callback: string,
  otherParams: Record<string, unknown>,
) => {
  return {
    rsp: {
      stat: "ok",
      api_key: key,
      callback,
      ...otherParams,
    },
  };
};

export const handlers = [
  http.get("/services/rest/", ({ request }) => {
    const url = new URL(request.url);

    const method = url.searchParams.get("method");

    if (!method) {
      return HttpResponse.json(
        makeFailureResponse(NOT_FOUND, 'Method "" not found'),
        {
          // @ts-expect-error
          status: 200,
        },
      );
    }

    const sig = url.searchParams.get("api_sig");
    if (!sig) {
      return HttpResponse.json(
        makeFailureResponse(MISSING_SIGNATURE, "Missing signature"),
        {
          // @ts-expect-error
          status: 200,
        },
      );
    }

    console.log(url);

    const key = url.searchParams.get("api_key");
    if (!key) {
      return HttpResponse.json(
        makeFailureResponse(INVALID_API_KEY, "Invalid API Key"),
        {
          // @ts-expect-error
          status: 200,
        },
      );
    }

    return HttpResponse.json(
      makeSuccessResponse(key, "callback", { frob: MY_TEST_FROB }),
      // @ts-expect-error
      { status: 200 },
    );
  }),
];
