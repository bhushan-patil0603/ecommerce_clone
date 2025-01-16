import React from "react";
import { Collections, Sort } from "./collections-sort";
import { ImageClone } from "./image-clone";
export const MensClothing = ({ item }) => {
    return (
        <section className="w-full">
            <div className="flex gap-4 p-4 flex-col md:flex-row">
                <div className="md:hidden"></div>
                <div className="md:hidden"></div>
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
    )
}
export const WomensClothing = ({ item }) => {
    return (
        <section className="w-full">
            <div className="flex gap-4 p-4 flex-col md:flex-row">
                <div className="md:hidden"></div>
                <div className="md:hidden"></div>
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
    )
}
export const Electronics = ({ item }) => {
    return (
        <section className="w-full">
            <div className="flex gap-4 p-4 flex-col md:flex-row">
                <div className="md:hidden"></div>
                <div className="md:hidden"></div>
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
    )
}
export const Jewelery = ({ item }) => {
    return (
        <section className="w-full">
            <div className="flex gap-4 p-4 flex-col md:flex-row">
                <div className="md:hidden"></div>
                <div className="md:hidden"></div>
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
    )
} 