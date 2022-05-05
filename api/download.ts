/* eslint-disable no-extra-parens */
import { Request, Response } from "express";
import ytdl from "ytdl-core";
import https from "https";
import { hash } from "./validate";

export const route = [
	"ytdl/download",
	"ytdl/v1/download"
];

export const slug = (str: string): string => str
	.replace(/\s/g, "_")
	.replace(/_{1,}/g, "_")
	.replace(/\(|\)|\\|\/|\[|\]|\}|\{/g, "");

export default async function api(req: Request, res: Response): Promise<void> {

	// Get video info
	const video = typeof req.query.video === "string" ? req.query.video : "";
	const codec = hash(decodeURIComponent(typeof req.query.codec === "string" ? req.query.codec : ""));

	try {

		const info = await ytdl.getInfo(video);
		const format = info.formats.filter(f => hash(f.mimeType + f.qualityLabel) === codec)[0];

		console.log(format.url);

		https.request(format.url, function(incoming) {
			res.setHeader("content-disposition", `attachment; filename="${slug(info.videoDetails.title)}-${format.qualityLabel || format.audioQuality}.${format.container}"`);
			incoming.pipe(res);
		}).end();

	} catch (e: unknown) {
		console.error(e);
		res.json({ success: false, error: (<Error>e).toString() });
	}

}
