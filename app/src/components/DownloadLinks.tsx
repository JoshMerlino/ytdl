import DownloadLink from "./DownloadLink";

export type DownloadLinksProps = { state: CompleteState, filter: string };

export default function DownloadLinks({ state, filter }: DownloadLinksProps): JSX.Element {

	const formats = state.info.formats.filter(a => a.mimeType.split("/")[0] === filter);

	console.log(formats);

	return (
		<div className="dark:text-white overflow-x-hidden overflow-y-auto w-full">
			<ul className="grid">
				<li className="h-12 flex items-center px-4">
					<div className="font-semibold opacity-60 basis-1/4">Resolution</div>
					<div className="grow font-semibold opacity-60">File Format</div>
				</li>
				{ formats.map((format, key) => <DownloadLink key={ key } format={ format }/>) }
			</ul>
		</div>
	);
}
