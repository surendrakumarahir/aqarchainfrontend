import React from "react";
import DashboardComponent from "../Dashboard.component";

const AgentAdd = () => {

	return (
		<DashboardComponent>
			<div className="tab-pane" id="company-nav-tab-add-agent" >
				<div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
					<div className="row my-4">
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label htmlFor="agent-first-name">First Name</label>
								<input type="text" className="form-control secondary-input" id="agent-first-name" value="Bishfuq"/>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label htmlFor="agent-last-name">Last Name</label>
								<input type="text" className="form-control secondary-input" id="agent-last-name" value="Khan"/>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-6 col-12">
							<label>Mobile Number</label>
							<div className="form-group form-inline">
								<select className="form-control secondary-select mr-lg-2" id="agent-mobile-no-prepend">
									<option>+966</option>
									<option>+91</option>
									<option>+93</option>
									<option>+942</option>
									<option>+933</option>
									<option>+955</option>
								</select>
								<input type="text" className="form-control secondary-input" id="agent-mobile-no" value="55 441 3171"/>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label htmlFor="agent-email-id">Email ID</label>
								<input type="email" className="form-control secondary-input" id="agent-email-id" value="bishfuq@gmail.com"/>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-6 col-12">
							<label htmlFor="agent-brn-number">BRN Number</label>
							<input type="text" className="form-control secondary-input" id="agent-brn-number" value="#35378"/>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-3 col-md-6 col-12">
							<button className="btn btn-gradient-secondary w-100" 
								//onClick="changeActiveTab('company-nav-tab-agent-management')"
							>Add</button>
						</div>
					</div>
				</div>
			</div>
		</DashboardComponent>
	);
	
	
};
export default AgentAdd;