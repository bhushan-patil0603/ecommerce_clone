import React from "react";
export const Info = ({ value }) => {
	return (
		<>
			<div className="bg-[#171717] rounded-2xl p-[0.5rem] font-semobld mr-2  inline border dark:border-neutral-700 hover:border-blue-600 min-w-5">
				{value}
			</div>
		</>
	);
};
