import React from "react";
import CountCard from "./CountCard.component";
const NawBox = (props) => {
	return (
		<div class="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
			<div class="row d-lg-flex align-items-center justify-content-center">
				<CountCard title="Total Properties Listed" count="30" gradientType="bg-gradient"  />
				<CountCard title="Total Listed companies" count="50" gradientType="bg-gradient-secondary" taxColor="text-white" />
				<CountCard title="Properties Sold" count="200" gradientType="bg-gradient" />
				<CountCard title="Properties leased" count="100" gradientType="bg-gradient-secondary" taxColor="text-white"	 />
			</div>
		</div>
	);
};
export default NawBox;