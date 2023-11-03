import { DefaultBodyType, StrictRequest } from "msw";
import { generateSignature } from "./generate-signature";
import { TEST_SHARED_SECRET } from "../testing-values";

export const checkSignature = (
  request: StrictRequest<DefaultBodyType>,
  signature: string,
) => {
  const url = new URL(request.url);
  const params = Array.from(url.searchParams.entries());

  const generatedSignature = generateSignature(
    TEST_SHARED_SECRET,
    Array.from(params).filter(([key]) => key !== "api_sig"),
  );

  return signature === generatedSignature;
};
