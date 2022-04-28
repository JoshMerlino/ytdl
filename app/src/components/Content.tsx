import FilePane from "./FilePane";
import InfoPane from "./InfoPane";

export type ContentProps = { state: CompleteState };

export default function Content({ state }: ContentProps): JSX.Element {
	return (
		<>
			<InfoPane state={ state }/>
			{ /* <div className="basis-full md:basis-0"></div>
			 */ }
			<FilePane state={ state }/>
		</>
	);
}
