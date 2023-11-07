import { DefaultBodyType, HttpResponse, StrictRequest } from "msw";
import { makeSuccessResponse } from "../../make-success-response";
import { ApiMethods } from "../../../../src/lib/types";

export const getToken = (
  _request: StrictRequest<DefaultBodyType>,
  apiKey: string,
) => {
  const response: ApiMethods["rtm.tasks.getList"]["responseArgs"] = {
    tasks: {
      list: [],
    },
  };

  return HttpResponse.json(makeSuccessResponse(apiKey, "callback", response), {
    status: 200,
  });
};
