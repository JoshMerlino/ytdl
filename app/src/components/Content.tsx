import FilePane from "./FilePane";
import InfoPane from "./InfoPane";

export type ContentProps = { state: CompleteState };

export default function Content({ state }: ContentProps): JSX.Element {
	return (
		<div className="flex flex-wrap">
			<InfoPane state={ state }/>
			<FilePane state={ state }/>
		</div>
	);
}
