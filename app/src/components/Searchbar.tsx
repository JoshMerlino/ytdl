import { useEffect, useRef } from "react";
import { CgSearch, AiOutlineLoading3Quarters } from "react-icons/all";
import { apiroot } from "../../manifest.json";

export type SearchbarProps = {
    setState: React.Dispatch<React.SetStateAction<InternalState>>;
    state: InternalState;
};

export default function Searchbar({ setState, state }: SearchbarProps): JSX.Element {

	const ref = useRef<HTMLInputElement>(null);

	async function search() {

		// Transparent banner
		document.getElementById("banner")!.style.opacity = "0";

		// Get url from input
		const value = ref.current?.value;
		if (!value) return;

		// Reset state
		setState(null);

		// Validate url
		await fetch(apiroot + "/validate?url=" + encodeURIComponent(value))
			.then(res => res.json())
			.then(state => {
				if (state && state.success) window.history.pushState(null, "", "/" + state.info.videoDetails.videoId);
				setState(state);
				document.getElementById("banner")!.style.opacity = "1";
			});

	}

	useEffect(function() {
		if (location.pathname !== "/") {
			ref.current!.value = location.pathname.substring(1);
			search();
		}
	}, []);

	return (
		<div className="h-16 flex max-w-[720px] w-full md:w-[90%] lg:w-[80%] text-2xl mb-2 z-[3] rounded-2xl" style={ { borderTopRightRadius: 48, borderBottomRightRadius: 48, padding: "0 6px" } }>
			<input placeholder="Paste link" type="text" autoFocus className="rounded-2xl grow pl-6 pr-2 outline-0 dark:text-zinc-200 border-[1px] border-neutral-200 dark:border-neutral-700 border-r-0 focus:!border-rose-500 !rounded-r-none -mr-4 pr-4 bg-white dark:bg-zinc-800" ref={ ref } onKeyDown={ e => e.key === "Enter" && search() }/>
			<div className="transition-all bg-rose-500 hover:bg-rose-600 hover:shadow-glow hover:shadow-rose-500 active:bg-rose-700 rounded-full w-20 h-20 -mt-2 text-white" onClick={ search }>
				{ state !== null && <CgSearch className="text-3xl m-[25px]"/> }
				{ state === null && <AiOutlineLoading3Quarters className="text-3xl m-[25px] spinning"/> }
			</div>
		</div>
	);
}
