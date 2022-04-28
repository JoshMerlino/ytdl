import FilePane from "./FilePane";
import InfoPane from "./InfoPane";

export type ContentProps = { state: CompleteState, containerRef: React.RefObject<HTMLDivElement> };

export default function Content({ state, containerRef }: ContentProps): JSX.Element {
	return (
		<>
			<InfoPane state={ state } containerRef={ containerRef }/>
			<FilePane state={ state }/>
		</>
	);
}
