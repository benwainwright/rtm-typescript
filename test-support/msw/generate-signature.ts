import { md5 } from "./md5";

export const generateSignature = (secret: string, params: string[][]) => {
  return md5(
    `${secret}${params
      .slice()
      .sort((a, b) => (a[0] > b[0] ? 1 : -1))
      .flat()
      .join("")}`,
  );
};
