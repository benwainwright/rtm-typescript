import { DefaultBodyType, HttpResponse, StrictRequest } from "msw";
import { makeSuccessResponse } from "../../make-success-response";
import { MY_TEST_FROB } from "../../../testing-values";

export const getFrob = (
  _request: StrictRequest<DefaultBodyType>,
  apiKey: string,
) => {
  return HttpResponse.json(
    makeSuccessResponse(apiKey, "callback", { frob: MY_TEST_FROB }),
    { status: 200 },
  );
};
