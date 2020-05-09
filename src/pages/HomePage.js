import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

export default function HomePage() {
	return (
		<>
			<Hero title="awesome gadgets" max="true">
				<Link to="/products" className="main-link" style={{ margin: "2rem" }}>
					Our product{" "}
				</Link>{" "}
			</Hero>{" "}
			<Services />
			<Featured />
		</>
	);
}
