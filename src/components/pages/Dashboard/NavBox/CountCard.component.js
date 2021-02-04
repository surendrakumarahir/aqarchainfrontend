import React from "react";
const CountCard = ({title, count, gradientType, taxColor}) => {
	return (
		<div class="col-xl-3 col-lg-6 col-12">
			<div class={`p-4 has-border-radius has-box-shadow ${gradientType} ${taxColor} my-xl-0 my-lg-2 my-2`}>
				<p>{title}</p>
				<h3 class="font-weight-bold">{count}</h3>
			</div>
		</div>
	);
};
export default CountCard;