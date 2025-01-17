import React from "react";
import { Link } from "react-router-dom";
export const Collections = () => {
	return (
		<>
			<div className="flex">
				<ul className="flex flex-col gap-2 text-neutral-300">
					<p className="text-xs text-neutral-500 font-bold">Collections</p>
					<li className="w-full">
						<Link
							className="hover:underline block md:inline-block text-sm font-semibold"
							to={{ pathname: "/allImages" }}
						>
							All
						</Link>
					</li>
					<li className="w-full">
						<Link
							className="hover:underline  block md:inline-block text-sm font-semibold"
							to={{ pathname: "/menscloth" }}
						>
							Men's Clothing
						</Link>
					</li>
					<li className="w-full">
						<Link
							className="hover:underline block md:inline-block text-sm font-semibold"
							to={{ pathname: "/womenscloth" }}
						>
							Women's Clothing
						</Link>
					</li>
					<li className="w-full">
						<Link
							className="hover:underline block md:inline-block text-sm font-semibold"
							to={{ pathname: "/elctronics" }}
						>
							Electronics
						</Link>
					</li>
					<li className="w-full">
						<Link
							className="hover:underline block md:inline-block text-sm font-semibold"
							to={{ pathname: "/jewelery" }}
						>
							Jewelery
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
export const Sort = () => {
	return (
		<>
			<div className="flex">
				<ul className="flex flex-col gap-2 text-neutral-300">
					<p className="text-xs text-neutral-500 font-bold">Sort by</p>
					<li className="w-full">
						<Link
							className="hover:underline block md:inline-block text-sm font-semibold"
							to={{ pathname: "/" }}
						>
							Relevance
						</Link>
					</li>
					<li className="w-full">
						<a
							className="hover:underline  block md:inline-block text-sm font-semibold"
							to={{ pathname: "/jewelery" }}
							href="/trending"
						>
							Trending
						</a>
					</li>
					<li className="w-full">
						<a
							className="hover:underline block md:inline-block text-sm font-semibold"
							to={{ pathname: "/jewelery" }}
							href="/price-hi-to"
						>
							Latest Arrivals
						</a>
					</li>
					<li className="w-full">
						<a
							className="hover:underline block md:inline-block text-sm font-semibold"
							to={{ pathname: "/jewelery" }}
							href="/price-hi-to"
						>
							Price: Low to High
						</a>
					</li>
					<li className="w-full">
						<a
							className="hover:underline block md:inline-block text-sm font-semibold"
							to={{ pathname: "/jewelery" }}
							href="/price-lo-to"
						>
							Price: High to Low
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
