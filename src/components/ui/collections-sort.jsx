import React from "react";
export const Collections = () => {
    return (
        <>
            <div className="flex">
                <ul className="flex flex-col gap-2 text-neutral-300">
                    <p className="text-xs text-neutral-500 font-bold">Collections</p>
                    <li className="w-full">
                        <a className="hover:underline block md:inline-block text-sm font-semibold" href="/allImages">All</a>
                    </li>
                    <li className="w-full">
                        <a className="hover:underline  block md:inline-block text-sm font-semibold" href="/menscloth">Men's Clothing</a>
                    </li>
                    <li className="w-full">
                        <a className="hover:underline block md:inline-block text-sm font-semibold" href="/womenscloth">Women's Clothing</a>
                    </li>
                    <li className="w-full">
                        <a className="hover:underline block md:inline-block text-sm font-semibold" href="/elctronics">Electronics</a>
                    </li>
                    <li className="w-full">
                        <a className="hover:underline block md:inline-block text-sm font-semibold" href="/jewelery">Jewelery</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export const Sort = () => {
    return (
        <>
            <div className="flex">
                <ul className="flex flex-col gap-2 text-neutral-300">
                    <p className="text-xs text-neutral-500 font-bold">Sort by</p>
                    <li className="w-full">
                        <a className="hover:underline block md:inline-block text-sm font-semibold" href="/">Relevance</a>
                    </li>
                    <li className="w-full">
                        <a className="hover:underline  block md:inline-block text-sm font-semibold" href="/trending">Trending</a>
                    </li>
                    <li className="w-full">
                        <a className="hover:underline block md:inline-block text-sm font-semibold" href="/price-hi-to">Latest Arrivals</a>
                    </li>
                    <li className="w-full">
                        <a className="hover:underline block md:inline-block text-sm font-semibold" href="/price-hi-to">Price: Low to High</a>
                    </li>
                    <li className="w-full">
                        <a className="hover:underline block md:inline-block text-sm font-semibold" href="/price-lo-to">Price: High to Low</a>
                    </li>
                </ul>
            </div>
        </>
    )
} 