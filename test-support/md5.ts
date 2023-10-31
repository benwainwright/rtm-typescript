import crypto from "node:crypto";

export const md5 = (text: string) => {
  return crypto.createHash("md5").update(text).digest("hex");
};
