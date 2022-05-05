/* eslint-disable no-extra-parens */
import { createHash } from "crypto";
import { Request, Response } from "express";
import ytdl from "ytdl-core";

export const route = [
	"ytdl/validate",
	"ytdl/v1/validate"
];

export const hash = (str: string): string => createHash("md5")
	.update(str)
	.digest("hex");

const ip = "71.162.185.54";
const hashedIp = hash(ip);

export default async function api(req: Request, res: Response): Promise<void> {
	const url = typeof req.query.url === "string" ? req.query.url : "";
	try {
		const info = await ytdl.getInfo(url);
		res.json({ success: true, info: { ...info, formats: info.formats.map(f => ({ ...f, url: f.url.replace(ip, hashedIp) }))} });
	} catch (e: unknown) {
		console.error(e);
		res.json({ success: false, error: (<Error>e).toString() });
	}
}
