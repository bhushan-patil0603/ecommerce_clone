import React from "react";
import { Skeleton } from "./sorting-skeleton";
import { useContext } from "react";
import { DataContext } from "../../../service";

export const AllImages = () => {
	const data=useContext(DataContext);
	return <Skeleton item={data} />;
};
