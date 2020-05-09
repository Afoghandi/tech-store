import React from "react";
import Title from "../Title";
import aboutBg from "../../images/aboutBcg.jpeg";

export default function Info() {
	return (
		<section className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md my-3">
						<img
							src={aboutBg}
							className="img-fluid img-thumbnail"
							alt="about"
							style={{ background: "var(--darkGray) " }}
						/>
					</div>
				</div>
				<div className="col-10 mx-auto col-md my-3">
					<Title title="about us" />
					<p className="text-lead text-muted my-3">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
						quia quo illo nostrum quae laborum sint facere expedita numquam?
						Enim, maiores nisi harum voluptatibus in ipsum quod blanditiis
						facere amet.
					</p>
					<p className="text-lead text-muted my-3">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
						quia quo illo nostrum quae laborum sint facere expedita numquam?
						Enim, maiores nisi harum voluptatibus in ipsum quod blanditiis
						facere amet.
					</p>
					<button
						className="main-link"
						type="button"
						style={{ marginTop: "2rem" }}
					>
						{" "}
						More Info
					</button>
				</div>
			</div>
		</section>
	);
}
