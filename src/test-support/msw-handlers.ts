import { http } from "msw";
import { getFrob } from "./method-handlers/auth/get-frob";
import { validateRequest } from "./validate-request";
import { REST_API_URL } from "../lib/constants";

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
  }),
];
