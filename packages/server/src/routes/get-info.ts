import { ResponseToolkit } from "@hapi/hapi";
import { get } from "../storage";
import { GetInfo } from "@celo/payments-types";

export function getInfo(
  { params: { referenceId } }: GetInfo,
  res: ResponseToolkit
) {
  const item = get(referenceId);
  if (item) {
    return res.response(item).code(200);
  }

  return res.response().code(404);
}
