import classnames from "classnames";
import { useState } from "react";
import Content from "./Content";
import ErrorMessage from "./ErrorMessage";
import Searchbar from "./Searchbar";
import ThemeToggle from "./ThemeToggle";

export default function App(): JSX.Element {

	const [ state, setState ] = useState<InternalState>(false);

	return (
		<div className="grid w-full h-full bg-zinc-100 dark:bg-zinc-900 fixed">
			<ThemeToggle/>
			<div className="flex w-full justify-center mt-12 pt-2 top-0 absolute flex-col h-full overflow-auto pb-12 items-center">
				<h1 className="text-3xl font-semibold mb-6 dark:text-white">YouTube Downloader</h1>
				<Searchbar setState={ setState } state={ state }/>
				<div className={ classnames("overflow-hidden transition-all mt-4 w-full", state === null || !state ? "h-0" : state && state.success ? "h-full overflow-auto" : "h-16") }>
					<div className="w-[1440px] sm:max-w-full md:max-w-[90%] lg:max-w-[80%] mx-auto">
						{ state && state?.success === false && <ErrorMessage error={ state.error }/> }
						{ state && state?.success === true && <Content state={ state }/> }
					</div>
				</div>
			</div>
		</div>
	);
}
