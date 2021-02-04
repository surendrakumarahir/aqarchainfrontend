import React from "react";

const CompanyProfile = () => {
	return (
		<div className="tab-pane fade" id="company-nav-tab-company-document" role="tabpanel" aria-labelledby="company-nav-tab-company-document-tab">
			<div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow has-border-radius">
				<div className="row my-3">
					<div className="col-xl-6 col-lg-6 col-12 my-xl-0 my-lg-0 my-2 my-sm-2">
						<button className="btn btn-gradient-secondary w-100">Add Trade License Certificate</button>
					</div>
					<div className="col-xl-6 col-lg-6 col-12 my-xl-0 my-lg-0 my-2 my-sm-2">
						<button className="btn btn-gradient-secondary w-100">Add VAT Certificate</button>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-12">
						<div className="dashboard-table-container table-responsive">
							<table className="dashboard-table">
								<thead>
									<tr>
										<th>Company Document</th>
										<th>Expiry Date</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Trade License Certificate</td>
										<td>DEC 20, 2020</td>
										<td><a href="#abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a></td>
									</tr>
									<tr>
										<td>VAT Certificate</td>
										<td>DEC 20, 2020</td>
										<td><a href="#abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompanyProfile;