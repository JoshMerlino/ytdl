import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type InfoPaneProps = { state: CompleteState };

export default function InfoPane({ state }: InfoPaneProps): JSX.Element {
	return (
		<div className="px-2 max-w-full lg:max-w-[480px] w-full">
			<img src={ state.info.videoDetails.thumbnails.sort((a, b) => b.width - a.width)[0].url } alt="" className="select-none rounded-2xl border-[1px] border-neutral-200 dark:border-neutral-700 w-full" />
			<div className="rounded-2xl border-[1px] border-neutral-200 dark:border-neutral-700 px-4 my-4 bg-white dark:bg-zinc-800">
				<h1 className="text-2xl font-semibold truncate py-3 dark:text-white">{ state.info.videoDetails.title }</h1>
				<div className="flex border-t-[1px] -mx-4 border-neutral-200 dark:border-neutral-700 px-4 py-2">
					<img src={ state.info.videoDetails.author.thumbnails.sort((a, b) => b.width - a.width)[0].url } width="48" alt="" className="rounded-full" />
					<div className="text-xl font-medium dark:text-white flex flex-col px-4 justify-center">{ state.info.videoDetails.author.name }</div>
				</div>
				{ state.info.videoDetails.description && <div className="markdown-wrapper text-neutral-700 dark:text-neutral-400 border-t-[1px] border-neutral-200 dark:border-neutral-700 py-2 -mx-4 px-4 overflow-x-hidden">
					<ReactMarkdown remarkPlugins={ [ remarkGfm ] }>{ state.info.videoDetails.description.substring(0, 400) + (state.info.videoDetails.description.length > 400 ? "..." : "") }</ReactMarkdown>
				</div> }
			</div>
		</div>
	);
}
