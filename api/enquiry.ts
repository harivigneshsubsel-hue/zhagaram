import "dotenv/config";

import { handleEnquiryRequest } from "../server/index";

export default async function handler(req: any, res: any) {
  return handleEnquiryRequest(req, res);
}