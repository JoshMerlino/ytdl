import DownloadLink from "./DownloadLink";

export type DownloadLinksProps = { state: CompleteState, filter: string };

export default function DownloadLinks({ state, filter }: DownloadLinksProps): JSX.Element {

	const formats = state.info.formats
		.filter(a => a.mimeType.split("/")[0] === filter)
		.filter((obj, pos, arr) => arr.map(info => info.container + info.qualityLabel).indexOf(obj.container + obj.qualityLabel) === pos)
		.sort((a, b) => b.height || 0 - (a.height || 0));

	return (
		<div className="dark:text-white overflow-x-hidden overflow-y-auto w-full">
			<ul className="grid">
				<li className="h-12 flex items-center px-4">
					<div className="font-semibold opacity-60 basis-1/4 md:basis-1/5 lg:basis-1/6">Resolution</div>
					<div className="basis-1/4 md:basis-1/5 lg:basis-1/6 font-semibold opacity-60">File Format</div>
					<div className="basis-1/4 md:basis-1/5 lg:basis-1/6 font-semibold opacity-60">File Codec</div>
					<div className="grow"></div>
				</li>
				{ formats.map((format, key) => <DownloadLink key={ key } video={ state.info.videoDetails } format={ format }/>) }
			</ul>
		</div>
	);
}
