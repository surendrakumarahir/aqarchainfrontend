import React from "react";
import "./dashboard.css.css";
import Sidebar from "./SideBar";
import {SearchForm} from "../../common/Search";

const DashboardComponent = (props) => {

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
								{props.children}	
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
	
	
};
export default DashboardComponent;