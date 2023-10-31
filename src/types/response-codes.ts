export const API_ERROR_CODES = {
  missingSignature: 97,
  invalidSignature: 96,
  notFound: 112,
  invalidApiKey: 100,
} as const;

export type ValidApiErrorCodes =
  (typeof API_ERROR_CODES)[keyof typeof API_ERROR_CODES];
