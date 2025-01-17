import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ImageClone } from "./image-clone";
import { Collections, Sort } from "./collections-sort";
export const Skeleton = ({ item }) => {
	const [isTogglecoll, setTogglecoll] = useState(false);
	const [isTogglesort, setIsTogglesort] = useState(false);
	function toggleDivColl() {
		setTogglecoll(!isTogglecoll);
	}
	function toggleDivSort() {
		setIsTogglesort(!isTogglesort);
	}
	return (
		<section className="w-full">
			<div className="flex gap-4 p-4 flex-col md:flex-row">
				<div className="md:hidden relative border border-neutral-300 dark:border-neutral-700 rounded-md">
					<div
						onClick={toggleDivColl}
						onKeyDown={toggleDivColl}
						className="relative flex items-center justify-between text-white p-2 "
					>
						<div>Collections</div>
						<ChevronDown />
					</div>
					{isTogglecoll && (
						<div className="absolute z-10 w-full text-white bg-black p-4">
							<Collections />
						</div>
					)}
				</div>

				<div className="md:hidden relative border border-neutral-300 dark:border-neutral-700 rounded-md">
					<button
						type="button"
						onClick={toggleDivSort}
						className="relative flex items-center justify-between text-white p-2 "
					>
						<div>Sort by</div>
						<ChevronDown />
					</button>
					{isTogglesort && (
						<div className="absolute z-10 w-full text-white bg-black">
							<Sort />
						</div>
					)}
				</div>
				<div className="hidden md:block">
					<Collections />
				</div>

				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:w-full">
					{/* <ul className="flex justify-center items-center gap-5 animate-carousel"> */}
					{item.map((item) => (
						<ImageClone obj={item} key={item.id} />
					))}
					{/* </ul> */}
				</ul>

				<div className="hidden md:block">
					<Sort />
				</div>
			</div>
		</section>
	);
};
