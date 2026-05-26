export function buildJsonRpcError(code, message, data) {
  return data === undefined ? { code, message } : { code, message, data };
}
