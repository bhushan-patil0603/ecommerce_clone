import React from "react";
import { LogoSvg } from "../../svg";
import { Link } from "react-router-dom";
export const Nav_content = () => {
	return (
		<section className="flex flex-col gap-6 md:flex-row md:gap-12 w-full px-4 py-8">
			<div className="flex">
				<Link to={{ pathname: "/" }} className="flex h-10 w-auto">
					<div className="bg-black h-10 w-10 flex justify-center items-center border-neutral-300 border rounded-xl">
						<LogoSvg />
					</div>
					<p className="self-center text-white text-sm font-[700] ml-2  lg:block">
						ACME STORE
					</p>
				</Link>
			</div>
			<ul className="flex flex-col gap-2 text-neutral-300">
				<li className="w-full">
					<Link
						className="hover:underline block md:inline-block"
						to={{ pathname: "/" }}
					>
						Home
					</Link>
				</li>
				<li className="w-full">
					<Link
						className="hover:underline  block md:inline-block"
						to={{ pathname: "/about" }}
					>
						About
					</Link>
				</li>
				<li className="w-full">
					<Link
						className="hover:underline block md:inline-block"
						to={{ pathname: "/about" }}
						href="/terms"
					>
						Terms and Conditions
					</Link>
				</li>
				<li className="w-full">
					<Link
						className="hover:underline block md:inline-block"
						to={{ pathname: "/shipping" }}
					>
						Shipping and Return Policy
					</Link>
				</li>
				<li className="w-full">
					<Link
						className="hover:underline block md:inline-block"
						to={{ pathname: "/privacy" }}
					>
						Privacy Policy
					</Link>
				</li>
				<li className="w-full">
					<Link
						className="hover:underline block md:inline-block"
						to={{ pathname: "/FAQ" }}
					>
						FAQ
					</Link>
				</li>
			</ul>
			<div className="flex sm:ml-auto">
				<Link
					to={{ pathname: "/" }}
					className="bg-black  h-10 w-auto flex justify-center items-center gap-2  border-neutral-300 border rounded-xl text-white p-2"
				>
					<span>▲</span>
					<span>Deploy</span>
				</Link>
			</div>
		</section>
	);
};
