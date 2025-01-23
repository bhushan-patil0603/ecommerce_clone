import React, { useContext } from "react";
import { Skeleton } from "./sorting-skeleton";
import { DataContext } from "../../../service";

export const getData = () => {
	return useContext(DataContext);
}

export const MensClothing = () => {
	const data = getData();
	const mens = data.filter((item) => {
		return item.category === "men's clothing";
	});
	return <Skeleton item={mens} />;
};
export const WomensClothing = () => {
	const data = getData();
	const womens = data.filter((item) => {
		return item.category === "women's clothing";
	});
	return <Skeleton item={womens} />;
};
export const Electronics = () => {
	const data = getData();
	const electronics = data.filter((item) => {
		return item.category === "electronics";
	});
	return <Skeleton item={electronics} />;
};
export const Jewelery = () => {
	const data = getData();
	const Jeweleries = data.filter((item) => {
		return item.category === "jewelery";
	});
	return <Skeleton item={Jeweleries} />;
};
