import React from "react";
import { useLocation } from "react-router-dom";
import { Skeleton } from "./sorting-skeleton";
export const SearchResult = ({ item }) => {
	const location = useLocation();
	const string = location.state.w || {};
	const lowerCase = string.toLowerCase();

	const obj = [];
	let row;
	for (row of item) {
		const desc = row.description.toLowerCase();
		const titl = row.title.toLowerCase();
		const ctgry = row.category.toLowerCase();
		if (
			desc.includes(`${lowerCase}`) ||
			titl.includes(`${lowerCase}`) ||
			ctgry.includes(`${lowerCase}`)
		) {
			obj.push(row);
		}
	}
	console.log(obj);

	return <Skeleton item={obj} />;
};
