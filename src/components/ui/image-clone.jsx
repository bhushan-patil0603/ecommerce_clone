import React from "react";
export const ImageClone=({ obj })=>{
    return(
        <div className="relative aspect-square h-auto max-h-[275px] w-[100%] max-w-[475px] flex-none">
            <a className="relative w-full h-full block " href="">
                <div className="relative w-full h-full flex justify-center items-center overflow-hidden bg-white dark:bg-black border  hover:border-blue-600 border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <img className="relative w-full h-full hover:scale-105 duration-300 object-contain" src={obj?.image} alt="" />
                    <div className="absolute bottom-0 left-0 w-full px-4 pb-4 flex items-center">
                        <div className="flex items-center border rounded-full p-1 text-[#ffffff] text-xs font-semibold dark:bg-black">
                            <h3 className="mx-3">Title</h3>
                            <p className="bg-[#2563eb] rounded-full p-[.4rem]">{obj?.price} USD</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}