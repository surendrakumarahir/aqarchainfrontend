import React from "react";

const PropertyListing = () => {
	return (
		<div className="tab-pane fade" id="company-nav-tab-properties-uploaded" role="tabpanel" aria-labelledby="company-nav-tab-properties-uploaded-tab">
			<div className="text-center has-border-radius text-lg-left p-4 p-lg-5 has-box-shadow">
				<div className="row">
					<div className="col-lg-9 offset-lg-3 col-12">
						<div id="search-filter_options" className="mb-3 mb-lg-4">
							<div className="d-flex">
								<div id="search-sort_by" className="search-filter_option">
									<span className="mr-md-3 mr-sm-2 mr-xs-0 mb-md-0 mb-2">Sort By</span>
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
									<span className="mr-md-3 mr-sm-2 mr-xs-0 mb-md-0 mb-2">Filter</span>
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
								<div id="search-list_view" className="search-filter_option active" 
									//onClick="showSearchListView()"
								>
									<span className="mr-md-3 mr-sm-2 mr-xs-0 mb-md-0 mb-2">List View</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.36 30" className="icon-search-filter_options">
										<title>List View</title>
										<g id="icon-search-filter_options-list_view-1" data-name="Layer 1">
											<g id="icon-search-filter_options-list_view-2" data-name="Layer 2">
												<g id="icon-search-filter_options-list_view-3" data-name="Layer 3">
													<path d="M30.38,2.73H1c-.54,0-1-.61-1-1.37S.44,0,1,0h29.4c.55,0,1,.61,1,1.36S30.93,2.73,30.38,2.73Z"/>
													<path d="M30.38,16.36H1c-.54,0-1-.61-1-1.36s.44-1.36,1-1.36h29.4c.55,0,1,.61,1,1.36S30.93,16.36,30.38,16.36Z"/>
													<path d="M30.38,30H1c-.54,0-1-.61-1-1.36s.44-1.37,1-1.37h29.4c.55,0,1,.61,1,1.37S30.93,30,30.38,30Z"/>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div id="search-card_view" className="search-filter_option" 
									//onClick="showSearchCardView()"
								>
									<span className="mr-md-3 mr-sm-2 mr-xs-0 mb-md-0 mb-2">Card View</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.92 22.5" className="icon-search-filter_options">
										<title>Card View</title>
										<g id="Layer_2" data-name="Layer 2">
											<g id="Layer_1-2" data-name="Layer 1">
												<g id="List_View" data-name="List View">
													<g className="cls-1">
														<path className="cls-2" d="M13.16,0H.42A.42.42,0,0,0,0,.42V13.16a.43.43,0,0,0,.42.43H13.16a.42.42,0,0,0,.42-.43V.42A.42.42,0,0,0,13.16,0ZM.85,12.74V.85H12.74V12.74Z"/>
														<path className="cls-2" d="M22.5,0H17.41A.42.42,0,0,0,17,.42v5.1a.42.42,0,0,0,.43.42H22.5a.42.42,0,0,0,.42-.42V.42A.42.42,0,0,0,22.5,0Zm-.42,5.09H17.83V.85h4.25Z"/>
														<path className="cls-2" d="M22.5,16.56H17.41A.42.42,0,0,0,17,17v5.1a.42.42,0,0,0,.43.42H22.5a.42.42,0,0,0,.42-.42V17A.42.42,0,0,0,22.5,16.56Zm-.42,5.09H17.83V17.41h4.25Z"/>
														<path className="cls-2" d="M5.52,16.56H.42A.42.42,0,0,0,0,17v5.1a.42.42,0,0,0,.42.42h5.1a.42.42,0,0,0,.42-.42V17A.42.42,0,0,0,5.52,16.56Zm-.43,5.09H.85V17.41H5.09Z"/>
													</g>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div id="search-map_view" className="search-filter_option" 
									//onClick="showSearchMapView()"
								>
									<span className="mr-md-3 mr-sm-2 mr-xs-0 mb-md-0 mb-2">Map View</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.09 30" className="icon-search-filter_options">
										<title>Map View</title>
										<g id="icon-search-filter_options-map_view-1" data-name="Layer 1">
											<g id="icon-search-filter_options-map_view-2" data-name="Layer 2">
												<g id="icon-search-filter_options-map_view-3" data-name="Layer 3">
													<path d="M10.55,0a10.55,10.55,0,0,0-9,16.09L10,29.58a.87.87,0,0,0,.74.42h0a.86.86,0,0,0,.75-.43L19.61,16A10.56,10.56,0,0,0,10.55,0ZM18.1,15.05,10.68,27.43,3.07,15.17a8.79,8.79,0,1,1,15-.12Z"/>
													<path d="M10.55,5.27a5.28,5.28,0,1,0,5.27,5.28A5.29,5.29,0,0,0,10.55,5.27Zm0,8.8a3.53,3.53,0,1,1,3.52-3.52A3.53,3.53,0,0,1,10.55,14.07Z"/>
												</g>
											</g>
										</g>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="dashboard-table-container table-responsive">
					<table className="dashboard-table">
						<thead>
							<tr>
								<th>Property ID</th>
								<th>Property Title</th>
								<th>Property Type</th>
								<th>company Name</th>
								<th>Price</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>AQAR0109</td>
								<td>Birjkhil Marina</td>
								<td>Villa</td>
								<td>2000 AED</td>
								<td>Sold Out</td>
								<td><a href="#abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a><a href="#abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0">Remove</a></td>
							</tr>
							<tr>
								<td>AQAR0109</td>
								<td>Birjkhil Marina</td>
								<td>Villa</td>
								<td>2000 AED</td>
								<td>Sold Out</td>
								<td><a href="#abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a><a href="#abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0">Remove</a></td>
							</tr>
							<tr>
								<td>AQAR0109</td>
								<td>Birjkhil Marina</td>
								<td>Villa</td>
								<td>2000 AED</td>
								<td>Sold Out</td>
								<td><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">View</a><a href="abc" className="btn btn-blue btn-sm btn-rounded-sm mb-0">Remove</a></td>
							</tr>
							<tr>
								<td>AQAR0109</td>
								<td>Birjkhil Marina</td>
								<td>Villa</td>
								<td>2000 AED</td>
								<td>Sold Out</td>
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
									<li className="page-item active"><a className="page-link" href="abc">1</a></li>
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
	);
};

export default PropertyListing;