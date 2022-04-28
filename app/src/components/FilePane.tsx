/* eslint-disable no-extra-parens */
import { useRef } from "react";
import AudioDownloads from "./AudioDownloads";
import VideoDownloads from "./VideoDownloads";

export type FilePaneProps = { state: CompleteState };

export default function FilePane({ state }: FilePaneProps): JSX.Element {

	const tabsUnderlineRef = useRef<HTMLDivElement>(null);
	const tabContentRef = useRef<HTMLDivElement>(null);

	function tabsClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
		const target = event.target as HTMLLIElement;
		tabsUnderlineRef.current!.style.left = `${ target.offsetLeft }px`;
		tabsUnderlineRef.current!.style.width = `${ target.offsetWidth }px`;

		const mode = target.innerText.split(" ")[0];
		const offset = mode === "VIDEO" ? "0" : "100%";
		tabContentRef.current!.style.transform = `translateX(-${ offset })`;
		const activeTab = tabContentRef.current?.childNodes[mode === "VIDEO" ? 0 : 1] as HTMLDivElement;

		tabContentRef.current!.style.height = activeTab.clientHeight + "px";
	}

	return (
		<div className="px-2 w-full">
			<div className="rounded-2xl border-[1px] border-neutral-200 dark:border-neutral-700 bg-white dark:bg-zinc-800 overflow-hidden">
				<ul className="flex h-12 font-semibold border-b-[1px] border-neutral-200 dark:border-neutral-700 relative">
					<li className="flex items-center uppercase tracking-widest cursor-pointer text-rose-500 px-4 text-sm" onClick={ e => tabsClick(e) }>Video</li>
					<li className="flex items-center uppercase tracking-widest cursor-pointer text-rose-500 px-4 text-sm" onClick={ e => tabsClick(e) }>Audio Only</li>
					<div ref={ tabsUnderlineRef } className="bg-rose-500 h-[2px] absolute bottom-[-1px] transition-[left,width]" style={ { width: 80, left: 0 } }/>
				</ul>
				<div className="overflow-hidden whitespace-nowrap">
					<div ref={ tabContentRef } className="transition-[height,transform]" style={ { height: (tabContentRef.current?.childNodes[0] as HTMLDivElement)?.clientHeight || 0 } }>
						<div className="w-full align-top inline-block">
							<VideoDownloads state={ state }/>
						</div>
						<div className="w-full align-top inline-block">
							<AudioDownloads state={ state }/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
