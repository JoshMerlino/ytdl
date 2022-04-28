import mime from "mime-types";
import { apiroot } from "../../manifest.json";

export type FilePaneProps = { state: CompleteState };

function slugify(info: YTDL.Info, format: YTDL.InfoFormat): string {
	return info.videoDetails.title.substring(0, 50).replace(/\s/g, "_") + "-" + format.qualityLabel + "." + mime.extension(format.mimeType);
}

export default function FilePane({ state }: FilePaneProps): JSX.Element {

	console.log(state.info.formats);

	return (
		<div className="px-2 w-full">
			<div className="rounded-2xl border-[1px] border-neutral-200 dark:border-neutral-700 px-4 bg-white dark:bg-zinc-800">
				<table className="table-fixed">
					<tbody>
						{ state.info.formats
							.sort((a, b) => b.height || 0 - (a.height || 0))
							.map((format, key) =>
								<tr key={ key }>
									<td>{ format.hasVideo ? format.qualityLabel : "Audio only" }</td>
									<td>{ format.mimeType.split(";")[0] }</td>
									<td>
										<a href={ apiroot + "/download?url=" + encodeURIComponent(format.url) } download={ slugify(state.info, format) } target="_blank" rel="noreferrer">
											<button className="bg-rose-500 hover:bg-rose-600 active:bg-rose-700 btn">download</button>
										</a>
									</td>
								</tr>
							) }
					</tbody>
				</table>
			</div>
		</div>
	);
}
