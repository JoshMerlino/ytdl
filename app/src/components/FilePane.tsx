export type FilePaneProps = { state: CompleteState };

export default function FilePane({ state }: FilePaneProps): JSX.Element {

	console.log(state.info.formats);

	return (
		<div className="mx-2 grow">
			<div className="rounded-2xl border-[1px] border-neutral-200 dark:border-neutral-700 px-4 bg-white dark:bg-zinc-800">lol</div>
		</div>
	);
}
