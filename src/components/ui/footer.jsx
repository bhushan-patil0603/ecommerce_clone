import React from "react";
export const Footer = () => {

    return(
        <section className="text-neutral-300 text-sm border-t border-neutral-200 dark:border-neutral-700 py-6">
            <div className="flex items-center flex-col md:flex-row px-4 gap-4">
                <p><span className="mr-2">&#169;</span>2023-2025 ACME, Inc. All rights reserved.</p>
                <hr className="hiddden md:inline-block w-[1px] border-l border-neutral-700"/>
                <a href="#">View the source</a>
                <a className="md:ml-auto" href="#">Created by ▲ Vercel</a>
            </div>
        </section>
    )
    
}
