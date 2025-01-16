import React from "react";
import { Start_content } from "./start-content";
import { Sliding_content } from "./sliding-content";
export const Home=({item})=>{
    return(
        <>
            <Start_content/>
            <Sliding_content obj1={item}/>
        </>
    )
} 