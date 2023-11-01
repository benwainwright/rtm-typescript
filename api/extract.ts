import * as path from "path";
import {
  Extractor,
  ExtractorConfig,
  ExtractorResult,
} from "@microsoft/api-extractor";

const apiExtractorJsonPath: string = path.join(
  __dirname,
  "../api-extractor.json",
);

const [, , entryPoint] = process.argv;

const extractorConfig: ExtractorConfig =
  ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

const newConfig = Object.assign(
  Object.create(Object.getPrototypeOf(extractorConfig) as object),
  {
    ...extractorConfig,
    mainEntryPointFilePath: entryPoint.replace(
      "<projectFolder>",
      process.cwd(),
    ),
  },
) as ExtractorConfig;

const extractorResult: ExtractorResult = Extractor.invoke(newConfig, {
  localBuild: true,
  showVerboseMessages: true,
});

if (
  extractorResult.succeeded &&
  extractorResult.errorCount === 0 &&
  extractorResult.warningCount === 0
) {
  console.log(`API Extractor completed successfully`);
  process.exitCode = 0;
} else {
  console.error(
    `API Extractor completed with ${extractorResult.errorCount} errors` +
      ` and ${extractorResult.warningCount} warnings`,
  );
  process.exitCode = 1;
}
