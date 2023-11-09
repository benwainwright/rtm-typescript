module.exports = {
  "*.ts": [
    "node_modules/.bin/eslint",
    "tsc-files --noEmit",
    "prettier",
    "npm runt test",
  ],
  "*.js": ["node_modules/.bin/eslint", "tsc-files --noEmit", "prettier"],
  "*.md": [
    "node_modules/.bin/eslint",
    "tsc-files --noEmit",
    "prettier",
    (files) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      `node_modules/.bin/typescript-docs-verifier ${files
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .map((file) => `--input-file ${file}`)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        .join(" ")}`,
  ],
};
