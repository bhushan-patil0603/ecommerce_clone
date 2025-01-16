import React from "react";
import { Image } from "./image";
export const Sliding_content = ({obj1}) => {
    return (
        <section className="w-full overflow-x-auto pb-4">
            <ul className="flex justify-center items-center gap-5 animate-carousel">
                {obj1.map((item)=>(
                    <Image obj={item}  key={item.id}/>
                ))}
            </ul>
        </section>
    )
}












