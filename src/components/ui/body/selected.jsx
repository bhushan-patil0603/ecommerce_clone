import React from "react";
import { Info } from "./info";
import { useLocation } from "react-router-dom";
export const Selected = ({ item }) => {
	const location = useLocation();

	const stObj = location.state || {};

	let obj;
	let row;
	for (row of item) {
		if (row.id === stObj?.id) {
			obj = row;
		}
	}
	let saved = JSON.parse(localStorage.getItem("saved_items"));
	if (saved === null) {
		saved = [];
	}
	function setItem() {
		alert("Item Added to Cart");
		saved.push(obj);
		localStorage.setItem("saved_items", JSON.stringify(saved));
	}

	return (
		<section className="w-full bg-black text-white">
			<div className="flex flex-col md:flex-row gap-5 p-8">
				<div>
					<div className="md:col-span-4 row-span-2">
						<div className="relative w-full h-full block aspect-square">
							<div className="relative w-full h-full flex justify-center items-center bg-white dark:bg-black   hover:border-blue-600 rounded-lg">
								<img
									className="relative w-full h-full object-contain hover:scale-105 duration-300"
									src={obj?.image}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="md:max-w-[50%]">
					<div className="my-5 border-b pb-4 dark:border-neutral-700">
						<h1 className="font-semibold text-5xl my-4">{obj?.title}</h1>
						<p className="bg-[#2563eb] rounded-full p-[.4rem] w-[6rem]">
							{obj?.price}
						</p>
					</div>
					<div className="mb-6">
						<p className="mb-4">Color</p>
						<div>
							<Info value="Black" />
							<Info value="White" />
							<Info value="Blue" />
						</div>
					</div>
					<div className="mb-6">
						<p className="mb-4">Size</p>
						<div>
							<Info value="XS" />
							<Info value="S" />
							<Info value="M" />
							<Info value="L" />
							<Info value="XL" />
							<Info value="XXL" />
							<Info value="XXXL" />
						</div>
					</div>
					<p className="text-sm font-semibold dark:text-neutral-300">
						{obj?.description}
					</p>
					<button
						onClick={setItem}
						type="button"
						className="bg-[#2563eb] rounded-full p-[.6rem] font-semibold text-center my-4 w-full"
					>
						Add to Cart
					</button>
				</div>
			</div>
		</section>
	);
};
