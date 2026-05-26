import { buildSingleJobSnapshot, buildStatusSnapshot } from "../job-control.mjs";
import { renderJobStatusReport, renderStatusReport } from "../render.mjs";

import {
  outputCommandResult,
  outputResult,
  parseCommandInput,
  resolveCommandCwd,
  waitForSingleJobSnapshot
} from "./helpers.mjs";

function renderStatusPayload(report, asJson) {
  return asJson ? report : renderStatusReport(report);
}

export async function handleStatus(argv) {
  const { options, positionals } = parseCommandInput(argv, {
    valueOptions: ["cwd", "timeout-ms", "poll-interval-ms"],
    booleanOptions: ["json", "all", "wait"]
  });

  const cwd = resolveCommandCwd(options);
  const reference = positionals[0] ?? "";
  if (reference) {
    const snapshot = options.wait
      ? await waitForSingleJobSnapshot(cwd, reference, {
          timeoutMs: options["timeout-ms"],
          pollIntervalMs: options["poll-interval-ms"]
        })
      : buildSingleJobSnapshot(cwd, reference);
    outputCommandResult(snapshot, renderJobStatusReport(snapshot.job), options.json);
    return;
  }

  if (options.wait) {
    throw new Error("`status --wait` requires a job id.");
  }

  const report = buildStatusSnapshot(cwd, { all: options.all });
  outputResult(renderStatusPayload(report, options.json), options.json);
}
