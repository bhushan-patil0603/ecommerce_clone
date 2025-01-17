import React from "react";
import { LogoSvg } from "../../svg";
import { useRef, useState } from "react";
import { Search, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
// import { Cart } from "./cart";
export const Navbar = () => {
	const inputEl = useRef("");
	const [toggleCart, setToggleCart] = useState(false);
	const [query, setQuery] = useState("");
	let inputValue;
	function logValue(e) {
		e.preventDefault();
		inputValue = inputEl.current.value;
		console.log("Inputed value is", inputValue);
		setQuery(inputValue);
	}

	function changeToggle() {
		setToggleCart(!toggleCart);
	}

	let saved = JSON.parse(localStorage.getItem("saved_items"));
	if (saved === null) {
		saved = [];
	}
	let showEmpty = true;
	if (saved.length > 0) {
		showEmpty = false;
	}
	console.log("saved  ", saved);

	return (
		<div className="p-4 flex">
			<div className="block flex-none md:hidden ">
				<div className="h-11 w-11 flex justify-center items-center  border-white border-solid border rounded-xl text-white">
					<Menu />
				</div>
			</div>
			<div className="flex justify-center items-center w-full md:w-[33.33333%] md:justify-start text-white">
				<div className="bg-black h-10 w-10 flex justify-center items-center border-white border-solid border rounded-xl">
					<a href="/">
						<LogoSvg />
					</a>
				</div>
				<p className="text-white text-sm font-[700] ml-2 md:hidden lg:block">
					ACME STORE
				</p>
				<ul className="hidden md:flex gap-4 text-[#8F8F8F] text-lg font-normal ml-4">
					<li>
						<a href="/allImages">All</a>
					</li>
					<li>
						<a href="/">Shirts</a>
					</li>
					<li>
						<a href="/">Stickers</a>
					</li>
				</ul>
			</div>
			<div className=" md:w-[33.33333%]">
				<form className="relative w-[100%] hidden md:flex justify-center items-center">
					<input
						onInput={logValue}
						className="bg-[#171717] px-4 py-2 w-[100%] text-white  border-white border-solid border rounded-lg"
						type="text"
						ref={inputEl}
						placeholder="Search products..."
						autoComplete="off"
					/>
					<Link
						to={{ pathname: "/searchresult" }}
						state={{ w: query }}
						className="absolute right-2 flex justify-center items-center text-white"
					>
						<button type="submit">
							<Search />
						</button>
					</Link>
				</form>
			</div>
			<div className="flex justify-end md:w-[33.33333%]">
				<button
					type="button"
					onClick={changeToggle}
					className="h-11 w-11 flex justify-center items-center border-white border-solid border rounded-xl text-white"
				>
					<ShoppingCart />
				</button>
			</div>

			{toggleCart && (
				<section className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end text-white">
					<div className="relative w-full h-full bottom-0 right-0 sm:w-[400px] bg-black p-6 border dark:border-neutral-700 overflow-y-auto">
						<div
							onClick={changeToggle}
							onKeyDown={changeToggle}
							className="cursor-pointer"
						>
							<span className="float-right font-bold text-3xl">&times;</span>
						</div>
						<h1 className="font-bold text-xl ">My Cart</h1>
						{showEmpty && (
							<div className="flex items-center flex-col justify-center gap-4 mt-20 font-bold text-3xl">
								<div>
									<ShoppingCart size={48} />
								</div>
								<h1 className="">Your Cart is Empty</h1>
							</div>
						)}
						{!showEmpty && (
							<div className="flex items-center flex-col justify-center gap-4 mt-20 font-bold  text-white">
								<ul>
									{saved.map((item) => (
										<li className="w-full" key={item.id}>
											<span className="float-left font-bold text-xl">
												&times;
											</span>
											<div className="w-full py-4 px-2 flex items-center ">
												<div className="flex items-center ">
													<div className="h-16 w-16">
														<img
															className="object-contain"
															src={item.image}
															alt=""
														/>
													</div>
													<div>
														Name:{item.title} price:{item.price}
													</div>
												</div>
												<div> </div>
											</div>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</section>
			)}
		</div>
	);
};
