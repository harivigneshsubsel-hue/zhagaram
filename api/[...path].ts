import "dotenv/config";

import { handleApiRequest } from "../server/index";

export default async function handler(req: any, res: any) {
  try {
    const handled = await handleApiRequest(req, res);

    if (handled === null && !res.headersSent) {
      return res.status(404).json({ success: false, message: "Route not found." });
    }

    return handled;
  } catch (error) {
    if (error instanceof Error && error.message === "Unauthorized") {
      return res.status(401).json({ success: false, message: "Unauthorized." });
    }

    if (error instanceof Error && error.message === "Forbidden") {
      return res.status(403).json({ success: false, message: "Admin access required." });
    }

    if (error instanceof Error && error.name === "ZodError") {
      return res.status(400).json({ success: false, message: "Invalid request payload." });
    }

    console.error("API request error", error);
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
}