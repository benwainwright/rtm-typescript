import { HttpResponse, http } from "msw";

import { API_ERROR_CODES, HTTP_STATUS_CODES, REST_API_URL } from "@constants";

import { getFrob } from "./msw/method-handlers/auth/get-frob";
import { validateRequest } from "./msw/validate-request";
import { makeFailureResponse } from "./msw/make-failure-response";
import { validateToken } from "./msw/validate-token";

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

    const badTokenResponse = validateToken(request);
    if (badTokenResponse) {
      return badTokenResponse;
    }

    switch (method) {
      case "rtm.tasks.getList":
        return getFrob(request, key);
    }

    console.log("FINISHED");
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
