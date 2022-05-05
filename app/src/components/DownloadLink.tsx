import { MdSaveAlt } from "react-icons/md";
import { apiroot } from "../../manifest.json";

export type DownloadLinkProps = { format: YTDL.InfoFormat, video: YTDL.InfoVideoDetails };

export function parseAudioQuality(audioQuality: string | undefined): string {
	const quality = audioQuality?.split("_")[2] || "UNKNOWN";
	return quality.substring(0, 1) + quality.toLowerCase().substring(1);
}

export default function DownloadLink({ format, video }: DownloadLinkProps): JSX.Element {

	console.log(format.url);

	return (
		<li className="h-12 flex items-center px-4 hover:bg-neutral-500/10 cursor-default group">
			<div className="font-semibold basis-1/4 md:basis-1/5 lg:basis-1/6">{ format.qualityLabel || parseAudioQuality(format.audioQuality) } </div>
			<div className="font-mono basis-1/4 md:basis-1/5 lg:basis-1/6 opacity-75"> { format.container }</div>
			<div className="font-mono basis-1/4 md:basis-1/5 lg:basis-1/6 opacity-75"> { format.codecs }</div>
			<div className="grow"></div>
			<div className="group-hover:block md:hidden">
				<button className="btn bg-rose-500 hover:bg-rose-600 active:bg-rose-700" onClick={ () => window.location.href = `${apiroot}/download?video=${video.videoId}&codec=${encodeURIComponent(format.mimeType + format.qualityLabel)}` }>
					<MdSaveAlt/>
					Download
				</button>
			</div>
		</li>
	);
}
