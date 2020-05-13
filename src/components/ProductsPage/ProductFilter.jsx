import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default function ProductFilter() {
	return (
		<ProductConsumer>
			{(value) => {
				const {
					search,
					min,
					max,
					company,
					price,
					shipping,
					handleChange,
					storeProducts,
				} = value;
				let companies = new Set();
				companies.add("all");
				for (let product in storeProducts) {
					companies.add(storeProducts[product]["company"]);
				}
				companies = [...companies];

				return (
					<div className="row my-5">
						<div className="col-10 mx-auto">
							<FilterWrapper>
								{/**text search */}
								<div>
									<label htmlFor="search"> search products</label>
									<input
										type="text"
										name="search"
										id="search"
										onChange={handleChange}
										value={search}
										className="filter-item"
									></input>
								</div>

								{/** end oftext search */}

								{/**category search */}
								<div>
									<label htmlFor="company">Company</label>
									<select
										name="company"
										id="company"
										className="filter-item"
										onChange={handleChange}
										value={company}
									>
										{companies.map((company, id) => {
											return (
												<option key={id} value={company}>
													{company}{" "}
												</option>
											);
										})}
									</select>
								</div>

								{/**end of category search */}

								{/**Price range */}
								<div>
									<label htmlFor="price">
										<p className="mb-2">
											product price:
											<span> £{price} </span>
										</p>
									</label>
									<input
										type="range"
										name="price"
										id="price"
										min={min}
										max={max}
										className="filter-price"
										value={price}
										onChange={handleChange}
									></input>
								</div>

								{/**end of Price range */}

								{/**free shipping */}
								<div>
									<label htmlFor="shipping" className="mx-2">
										free shipping
									</label>
									<input
										type="checkbox"
										name="shipping"
										id="shipping"
										onChange={handleChange}
										checked={shipping && true}
									></input>
								</div>

								{/**end of free shipping */}
							</FilterWrapper>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
}
const FilterWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
	label {
		font-weight: bold;
		text-transform: capitalize;
	}
	.filter-item,
	.filter-price {
		display: block;
		background: transparent;
		border-radius: 0.5rem;
		border: 2px solid var(--darkGray);
	}
`;
