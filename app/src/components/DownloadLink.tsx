import { MdSaveAlt } from "react-icons/md";

export type DownloadLinkProps = { format: YTDL.InfoFormat };

export function parseAudioQuality(audioQuality: string | undefined): string {
	const quality = audioQuality?.split("_")[2] || "UNKNOWN";
	return quality.substring(0, 1) + quality.toLowerCase().substring(1);
}

export default function DownloadLink({ format }: DownloadLinkProps): JSX.Element {
	return (
		<li className="h-12 flex items-center px-4 hover:bg-neutral-500/10 cursor-pointer group">
			<div className="font-semibold basis-1/4">{ format.qualityLabel || parseAudioQuality(format.audioQuality) } </div>
			<div className="grow font-mono opacity-75"> { format.container }</div>
			<div className="group-hover:block md:hidden">
				<button className="btn bg-rose-500 hover:bg-rose-600 active:bg-rose-700">
					<MdSaveAlt/>
					Download
				</button>
			</div>
		</li>
	);
}
