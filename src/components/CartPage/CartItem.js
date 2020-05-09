import React from "react";
import {
	FaTrash,
	FaChevronCircleUp,
	FaChevronCircleDown,
} from "react-icons/fa";
export default function CartItem({ cartItem }) {
	const { image } = cartItem;
	return <img src={image} alt="none" />;
}
