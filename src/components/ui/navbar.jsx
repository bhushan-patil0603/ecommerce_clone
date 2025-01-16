import React from "react";
import { CartSvg, LogoSvg, OptSvg, SearchSvg } from "../svg";
export const Navbar = () => {
    return (
        <div className="p-4 flex">
            <div className="block flex-none md:hidden ">
                <div className="h-11 w-11 flex justify-center items-center  border-white border-solid border rounded-xl text-white">
                    <OptSvg />
                </div>
            </div>
            <div className="flex justify-center items-center w-full md:w-[33.33333%] md:justify-start text-white">
                <div className="bg-black h-10 w-10 flex justify-center items-center border-white border-solid border rounded-xl">
                    <a href="/"><LogoSvg /></a>
                </div>
                <p className="text-white text-sm font-[700] ml-2 md:hidden lg:block">ACME STORE</p>
                <ul className="hidden md:flex gap-4 text-[#8F8F8F] text-lg font-normal ml-4">
                    <li><a href="/allImages">All</a></li>
                    <li><a href="">Shirts</a></li>
                    <li><a href="">Stickers</a></li>
                </ul>
            </div>
            <div className=" md:w-[33.33333%]">
                <form className="relative w-[100%] hidden md:flex justify-center items-center" action="/search">
                    <input className="bg-[#171717] px-4 py-2 w-[100%] text-white  border-white border-solid border rounded-lg" type="text" placeholder="Search products..." autoComplete="off" />
                    <div className="absolute right-2 flex justify-center items-center text-white">
                        <SearchSvg />
                    </div>
                </form>
            </div>
            <div className="flex justify-end md:w-[33.33333%]">
                <div className="h-11 w-11 flex justify-center items-center border-white border-solid border rounded-xl text-white">
                    <CartSvg />
                </div>
            </div>
        </div>
    )
}