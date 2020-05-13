import React from "react";

export default function Test({ product }) {
	if (!product) {
		return <h1> </h1>;
	}
	const { company } = product;
	return <h1>company :{company} </h1>;
}
