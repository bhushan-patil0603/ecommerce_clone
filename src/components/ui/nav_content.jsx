import React from "react";
import { LogoSvg } from "../svg";
export const Nav_content=()=>{
    return (
        <section className="flex flex-col gap-6 md:flex-row md:gap-12 w-full px-4 py-8">
            <div className="flex">
                <a href="#" className="flex h-10 w-auto">
                    <div className="bg-black h-10 w-10 flex justify-center items-center border-neutral-300 border rounded-xl">
                        <LogoSvg />
                    </div>
                    <p className="self-center text-white text-sm font-[700] ml-2  lg:block">ACME STORE</p>
                </a>
            </div>
            <ul className="flex flex-col gap-2 text-neutral-300">
                <li className="w-full">
                    <a className="hover:underline block md:inline-block" href="/">Home</a>
                </li>
                <li className="w-full">
                    <a className="hover:underline  block md:inline-block" href="/about">About</a>
                </li>
                <li className="w-full">
                    <a className="hover:underline block md:inline-block" href="/terms">Terms and Conditions</a>
                </li>
                <li className="w-full">
                    <a className="hover:underline block md:inline-block" href="/shipping">Shipping and Return Policy</a>
                </li>
                <li className="w-full">
                    <a className="hover:underline block md:inline-block" href="/privacy">Privacy Policy</a>
                </li>
                <li className="w-full">
                    <a className="hover:underline block md:inline-block" href="/FAQ">FAQ</a>
                </li>
            </ul>
            <div className="flex ml-auto">
                <a className="bg-black  h-10 w-auto flex justify-center items-center gap-2  border-neutral-300 border rounded-xl text-white p-2">
                    <span href="#">▲</span>
                    <span>Deploy</span>
                </a>
            </div>
        </section>
    )
}