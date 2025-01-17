import React from "react";
import { Skeleton } from "./sorting-skeleton";
export const Trending = ({ item }) => {
	item.sort((a, b) => {
		return a.rating.rate - b.rating.rate;
	});

	const trend = item.filter((items) => {
		return items.rating.rate >= 4;
	});
	console.log("trend is", trend);
	return <Skeleton item={trend} />;
};
export const PriceHiToLow = ({ item }) => {
	item.sort((a, b) => {
		return a.price - b.price;
	});
	return <Skeleton item={item} />;
};
export const PriceLowToHi = ({ item }) => {
	item.sort((a, b) => {
		return b.price - a.price;
	});
	return <Skeleton item={item} />;
};
export const Jewelery = ({ item }) => {
	return <Skeleton item={item} />;
};
