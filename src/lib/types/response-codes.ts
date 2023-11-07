import { API_ERROR_CODES } from "@constants";

export type ValidApiErrorCodes =
  (typeof API_ERROR_CODES)[keyof typeof API_ERROR_CODES];
