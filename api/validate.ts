import { Request, Response } from "express";
import ytdl from "ytdl-core";

export const route = [
	"ytdl/validate",
	"ytdl/v1/validate"
];

export default async function api(req: Request, res: Response): Promise<void> {
	const url = typeof req.query.url === "string" ? req.query.url : "";
	try {
		const info = await ytdl.getInfo(url);
		res.json({ success: true, info });
	} catch (e) {
		res.json({ success: false, error: e.toString() });
	}
}
