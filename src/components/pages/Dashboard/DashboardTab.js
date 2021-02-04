import React from "react";
import Button from "../../common/Button";
import NawBox from "./NavBox/NawBox.component";

const DashboardTab = () => {
	return (
		<div className="tab-pane fade show active" id="company-nav-tab-dashboard" role="tabpanel" aria-labelledby="company-nav-tab-dashboard-tab">
			<NawBox/>
			<div className="row text-right my-4">
				<div className="col-lg-12">
					<Button title="Add Property" classes="form-submit btn btn-custom-width btn-lg btn-gradient-secondary mr-5"/>
				</div>
			</div>
		</div>
	);
};

export default DashboardTab;