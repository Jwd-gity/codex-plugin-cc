import { readStoredJob, resolveResultJob } from "../job-control.mjs";
import { renderStoredJobResult } from "../render.mjs";

import {
  outputCommandResult,
  parseCommandInput,
  resolveCommandCwd
} from "./helpers.mjs";

export function handleResult(argv) {
  const { options, positionals } = parseCommandInput(argv, {
    valueOptions: ["cwd"],
    booleanOptions: ["json"]
  });

  const cwd = resolveCommandCwd(options);
  const reference = positionals[0] ?? "";
  const { workspaceRoot, job } = resolveResultJob(cwd, reference);
  const storedJob = readStoredJob(workspaceRoot, job.id);
  const payload = {
    job,
    storedJob
  };

  outputCommandResult(payload, renderStoredJobResult(job, storedJob), options.json);
}
