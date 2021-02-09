import React from "react";
import DashboardComponent from "../Dashboard.component";
import Button from "../../../common/Button";
import {useHistory} from "react-router-dom";

const AgentManagment = () => {
	const history = useHistory();
	const handleClick = () => {
		history.push("/dashboard/agent/add");
	};

	return (
		<DashboardComponent>
			<div className="tab-pane" id="company-nav-tab-agent-management" role="tabpanel" aria-labelledby="company-nav-tab-agent-management-tab">
				<div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">		
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-3 col-12 my-lg-0 my-3">
							<Button title="Add Agent" handleClick={handleClick} classes="form-submit btn w-100 btn-gradient-secondary"/>
						</div>
						<div className="col-lg-8 offset-lg-1 col-12">
							<div id="search-filter_options" className="mb-2 mb-lg-0">
								<div className="d-flex">
									<div id="search-sort_by" className="search-filter_option">
										<span className="mr-3">Sort By</span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="icon-search-filter_options">
											<title>Sort By</title>
											<g id="icon-search-filter_options-sort_by-1" data-name="Layer 1">
												<g id="icon-search-filter_options-sort_by-2" data-name="Layer 2">
													<g id="icon-search-filter_options-sort_by-3" data-name="Layer 3">
														<path d="M14.18,21.11,9.23,26.06V1.15a1.16,1.16,0,0,0-2.31,0V26.06L2,21.11A1.15,1.15,0,1,0,.34,22.74l6.92,6.92a1.14,1.14,0,0,0,.82.34,1.12,1.12,0,0,0,.81-.34l6.93-6.92a1.15,1.15,0,0,0,0-1.63,1.16,1.16,0,0,0-1.64,0Z"/>
														<path d="M29.66,7.26,22.74.34a1.15,1.15,0,0,0-1.63,0L14.18,7.26a1.15,1.15,0,0,0,0,1.63,1.16,1.16,0,0,0,1.64,0l4.95-5V28.85a1.16,1.16,0,0,0,2.31,0V3.94l5,5a1.14,1.14,0,0,0,.82.34,1.12,1.12,0,0,0,.81-.34,1.15,1.15,0,0,0,0-1.63Z"/>
													</g>
												</g>
											</g>
										</svg>
									</div>
									<div id="search-filters" className="search-filter_option">
										<span className="mr-3">Filter</span>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.31 30" className="icon-search-filter_options">
											<title>Filter</title>
											<g id="icon-search-filter_options-filter-1" data-name="Layer 1">
												<g id="icon-search-filter_options-filter-2" data-name="Layer 2">
													<g id="icon-search-filter_options-filter-3" data-name="Layer 3">
														<path d="M28.85,11.54H3.46a1.16,1.16,0,0,1,0-2.31H28.85a1.16,1.16,0,0,1,0,2.31Z"/>
														<path d="M24.23,20.77H8.08a1.16,1.16,0,1,1,0-2.31H24.23a1.16,1.16,0,0,1,0,2.31Z"/>
														<path d="M19.62,30H12.69a1.16,1.16,0,0,1,0-2.31h6.93a1.16,1.16,0,0,1,0,2.31Z"/>
														<path d="M31.15,2.31h-30A1.16,1.16,0,0,1,1.15,0h30a1.16,1.16,0,1,1,0,2.31Z"/>
													</g>
												</g>
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="dashboard-table-container table-responsive mt-4">
						<table className="dashboard-table">
							<thead>
								<tr>
									<th>Agent Name</th>
									<th>Mobile No.</th>
									<th>Email ID</th>
									<th>RERA No.</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Shaqib Mansoor</td>
									<td>+966 123456 78</td>
									<td>shaqibman@gmail.com</td>
									<td>#3538</td>
									<td>Active</td>
									<td><a href="ab" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0">Remove</a></td>
								</tr>
								<tr>
									<td>Shaqib Mansoor</td>
									<td>+966 123456 78</td>
									<td>shaqibman@gmail.com</td>
									<td>#3538</td>
									<td>Active</td>
									<td><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0">Remove</a></td>
								</tr>
								<tr>
									<td>Shaqib Mansoor</td>
									<td>+966 123456 78</td>
									<td>shaqibman@gmail.com</td>
									<td>#3538</td>
									<td>Active</td>
									<td><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0">Remove</a></td>
								</tr>
								<tr>
									<td>Shaqib Mansoor</td>
									<td>+966 123456 78</td>
									<td>shaqibman@gmail.com</td>
									<td>#3538</td>
									<td>Active</td>
									<td><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0">Remove</a></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="dashboard-table-meta mt-4">
						<div className="row d-lg-flex align-items-center">
							<div className="col-lg-6">
								<h4 className="font-weight-bold mb-3 mb-lg-0">
                                                    Show 
									<select id="dashboard-table-no_of_results" className="mx-1">
										<option value="5">5</option>
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
									</select>
                                                    Entries
								</h4>
							</div>
							<div className="col-lg-6 text-center text-lg-right">
								<nav className="dashboard-table-pagination">
									<ul className="pagination mb-0">
										<li className="page-item"><a className="page-link" href="abc">Previous</a></li>
										<li className="page-item active"><a className="page-link"  href="abc">1</a></li>
										<li className="page-item"><a className="page-link" href="abc">2</a></li>
										<li className="page-item"><a className="page-link" href="abc">3</a></li>
										<li className="page-item"><a className="page-link" href="abc">Next</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</DashboardComponent>
	);
	
	
};
export default AgentManagment;