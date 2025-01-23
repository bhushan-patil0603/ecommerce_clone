import React from "react";
import { Skeleton } from "./sorting-skeleton";
import { useContext } from "react";
import { DataContext } from "../../../service";

export const getData = () => {
	return useContext(DataContext);
}

export const Trending = () => {
	const item=getData();
	item.sort((a, b) => {
		return a.rating.rate - b.rating.rate;
	});

	const trend = item.filter((items) => {
		const item=getData();
		return items.rating.rate >= 4;
	});
	return <Skeleton item={trend} />;
};

export const PriceHiToLow = () => {
	const item=getData();
	item.sort((a, b) => {
		return a.price - b.price;
	});
	return <Skeleton item={item} />;
};

export const PriceLowToHi = () => {
	const item=getData();
	item.sort((a, b) => {
		return b.price - a.price;
	});
	return <Skeleton item={item} />;
};
