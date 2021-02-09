import React from "react";
import Button from "../../common/Button";
import NawBox from "./NavBox/NawBox.component";
import DashboardComponent from "./Dashboard.component";
import {useHistory} from "react-router-dom";

const Dashboard = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push("/dashboard/property-add");
	};
	
	return (
		<DashboardComponent>
			<div className="tab-pane"  id="company-nav-tab-dashboard" role="tabpanel" aria-labelledby="company-nav-tab-dashboard-tab">
				<NawBox/>
				<div className="row text-right my-4">
					<div className="col-lg-12">
						<Button title="Add Property" handleClick={handleClick} classes="form-submit btn btn-custom-width btn-lg btn-gradient-secondary mr-5"/>
					</div>
				</div>
			</div>
		</DashboardComponent>
	);
	
	
};
export default Dashboard;