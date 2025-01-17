import React from "react";
import { Link } from "react-router-dom";
export const Start_content = () => {
	return (
		<section className="w-full h-full grid md:grid-rows-2 md:grid-cols-6 gap-4 p-4 lg:max-h-[calc(100vh-200px)] lg:max-w-screen-2xl">
			<div className="md:col-span-4 row-span-2">
				<Link
					to={{ pathname: "/selected" }}
					className="relative w-full h-full block aspect-square"
				>
					<div className="relative w-full h-full flex justify-center items-center bg-white dark:bg-black border  hover:border-blue-600 border-neutral-200 dark:border-neutral-800 rounded-lg">
						<img
							className="relative w-full h-full object-contain hover:scale-105 duration-300"
							src="assets/images/t-shirt-1.avif"
							alt=""
						/>
						<div className="absolute bottom-0 left-0 w-full px-4 pb-4 flex items-center">
							<div className="flex items-center border rounded-full p-1 text-[#ffffff] text-[12px] font-bold dark:bg-black">
								<h3 className="mx-3">Acme Circles T-Shirt</h3>
								<p className="bg-[#2563eb] rounded-full p-[.4rem]">
									$20.00 USD
								</p>
							</div>
						</div>
					</div>
				</Link>
			</div>

			<div className="md:col-span-2 row-span-1">
				<a className="relative w-full h-full block aspect-square" href="/">
					<div className="relative w-full h-full  flex justify-center items-center bg-white dark:bg-black border  hover:border-blue-600 border-neutral-200 dark:border-neutral-800 rounded-lg">
						<img
							className="relative w-full h-full object-contain hover:scale-105 duration-300"
							src="assets/images/bag-1-dark.avif"
							alt=""
						/>
						<div className="absolute bottom-0 left-0 w-full px-4 pb-4 flex items-center">
							<div className="flex items-center border rounded-full p-1 text-[#ffffff] text-[12px] font-bold dark:bg-black">
								<h3 className="mx-3">Acme Circles T-Shirt</h3>
								<p className="bg-[#2563eb] rounded-full p-[.4rem]">
									$20.00 USD
								</p>
							</div>
						</div>
					</div>
				</a>
			</div>

			<div className="md:col-span-2 row-span-1">
				<a className="relative w-full h-full block aspect-square" href="/">
					<div className="relative w-full h-full  flex justify-center items-center bg-white dark:bg-black border  hover:border-blue-600 border-neutral-200 dark:border-neutral-800 rounded-lg">
						<img
							className="relative w-full h-full object-contain hover:scale-105 duration-300"
							src="assets/images/cup-black.avif"
							alt=""
						/>
						<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
							<div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
								<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
									Acme testing T-Shirt
								</h3>
								<p className="flex-none rounded-full bg-blue-600 p-2 text-white">
									$20.00
									<span className="ml-1 inline  @[275px]/label:inline">
										USD
									</span>
								</p>
							</div>
						</div>
					</div>
				</a>
			</div>
		</section>
	);
};
