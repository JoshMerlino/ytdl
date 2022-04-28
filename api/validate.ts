import { createHash } from "crypto";
import { Request, Response } from "express";
import ytdl from "ytdl-core";

export const route = [
	"ytdl/validate",
	"ytdl/v1/validate"
];

const ip = "71.162.185.54";

function hash(str: string): string {
	return createHash("md5")
		.update(str)
		.digest("hex");
}

export default async function api(req: Request, res: Response): Promise<void> {
	const url = typeof req.query.url === "string" ? req.query.url : "";
	try {
		const info = await ytdl.getInfo(url);
		res.json({ success: true, info: { ...info, formats: info.formats.map(f => ({ ...f, url: f.url.replace(ip, hash(ip)) }))} });
	} catch (e) {
		res.json({ success: false, error: e.toString() });
	}
}
