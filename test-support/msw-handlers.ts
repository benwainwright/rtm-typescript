import { HttpResponse, http } from "msw";
import { getFrob } from "./method-handlers/auth/get-frob";
import { validateRequest } from "./validate-request";
import { REST_API_URL } from "../src/lib/core/constants";
import { makeFailureResponse } from "./make-failure-response";
import { API_ERROR_CODES } from "../src/types/response-codes";
import { HTTP_STATUS_CODES } from "../src/lib/core/http-status-codes";

export const handlers = [
  http.get(REST_API_URL, ({ request }) => {
    const paramsOrResponse = validateRequest(request);

    if (!("key" in paramsOrResponse)) {
      return paramsOrResponse;
    }

    const { key, method } = paramsOrResponse;

    switch (method) {
      case "rtm.auth.getFrob":
        return getFrob(request, key);
    }

    return HttpResponse.json(
      makeFailureResponse(
        API_ERROR_CODES.notFound,
        `Method "${method}" not found`,
      ),
      {
        status: HTTP_STATUS_CODES.ok,
      },
    );
  }),
];
