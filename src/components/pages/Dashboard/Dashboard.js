import React from "react";
import "./dashboard.css.css";
import Sidebar from "./SideBar";
import {SearchForm} from "../../common/Search";
import PropertyAdd from "./Property/PropertyAdd.component";
import Profile from "./Profile/Profile.component";
import CompanyProfile from "./Profile/CompanyProfile.component";
import PropertyListing from "./Property/PropertyListing.component";
import Enquery from "./Enquery/Enquery.component";
import AgentManagment from "./Agent/AgentManagment.component";
import DashboardTab from "./DashboardTab";

const Dashboard = () => {

	return (
		<main className="wrapper container-lg">
			<Sidebar/>
			{/* <!-- Page Content --> */}
			<div id="content" className="flex-grow-1">
				<div id="page-content" className="py-lg-5 pl-lg-5 p-md-2 p-3">
					<SearchForm />
					<div className="row no-gutters">
						<div className="col-lg-12">
							<div className="tab-content dashboard-nav-tabs-content" id="company-nav-tabs-content">
								<DashboardTab/>
								<PropertyAdd/>
								<Profile/>
								<CompanyProfile/>
								<PropertyListing/>	
								<AgentManagment/>
								<Enquery/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
	
	
};
export default Dashboard;