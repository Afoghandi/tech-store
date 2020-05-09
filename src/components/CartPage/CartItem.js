import React from "react";
import {
	FaTrash,
	FaChevronCircleUp,
	FaChevronCircleDown,
} from "react-icons/fa";
export default function CartItem({ cartItem }) {
	return <img src={cartItem.image} alt="none" />;
}
