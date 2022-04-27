import { MdErrorOutline } from "react-icons/md";

export type ErrorMessageProps = { error: string };

export default function ErrorMessage({ error }: ErrorMessageProps): JSX.Element {
	return (
		<div className="rounded-xl border-[1px] border-red-500 dark:border-rose-700 h-16 bg-white dark:bg-zinc-800 mx-auto max-w-[600px] w-full md:w-[90%] lg:w-[80%] flex">
			<MdErrorOutline className="text-red-500 dark:text-rose-700 text-3xl m-4"/>
			<p className="dark:text-white font-medium justify-center flex flex-col text-lg leading-tight">{ error }</p>
		</div>
	);
}
