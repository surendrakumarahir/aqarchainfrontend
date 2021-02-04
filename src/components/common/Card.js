import React from "react";
const Card = (props) => {
	return (
		<div class="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
			<div class="row d-lg-flex align-items-center justify-content-center">
				<div class="col-xl-3 col-lg-6 col-12">
					<div class="p-4 has-border-radius has-box-shadow bg-gradient my-xl-0 my-lg-2 my-2">
						<p>Total Properties Listed</p>
						<h3 class="font-weight-bold">30</h3>
					</div>
				</div>
				<div class="col-xl-3 col-lg-6 col-12">
					<div class="p-4 has-border-radius has-box-shadow text-white my-xl-0 my-lg-2 my-2 bg-gradient-secondary">
						<p>Total Listed companies</p>
						<h3 class="font-weight-bold">50</h3>
					</div>
				</div>
				<div class="col-xl-3 col-lg-6 col-12">
					<div class="p-4 has-border-radius has-box-shadow my-xl-0 my-lg-2 my-2 bg-gradient">
						<p>Properties Sold</p>
						<h3 class="font-weight-bold">200</h3>
					</div>
				</div>
				<div class="col-xl-3 col-lg-6 col-12">
					<div class="p-4 has-border-radius has-box-shadow my-xl-0 my-lg-2 my-2 text-white bg-gradient-secondary">
						<p>Properties leased</p>
						<h3 class="font-weight-bold">100</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;