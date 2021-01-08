import React from "react";
import {connect}  from "react-redux";
import {searchProperty, viewType} from "../../../redux/actions";

class Section2 extends  React.Component {
	// constructor(props){
	// 	super(props);
	// }

	sortby = () => {
		// const filters = {"pageNumber" : 1,
		// 	 "limit" : 5, filters: obj};
		// 	 this.props.searchProperty(filters).then(response => {
		// 	console.log("section 1", response);
		// 	this.setState({loading: false});
		// }).catch( error => {
		// 	console.log("error", error);
		// 	this.setState({loading: false});
		// });
		// this.props.searchProperty();
	}

	showSearchMapView = () => {
		console.log("show map view");
		this.props.viewType("map");
	}

	showSearchListView = () => {
		console.log("show map view");
		this.props.viewType("list");
	}

	render() {
	
		return (
			<section id="search-section_2">
				<div id="search-section_2-filter_options" className="container-lg">
					<div className="row">
						<div className="col-xl-6 offset-xl-6 col-lg-8 offset-lg-4">
							<div id="search-filter_options">
								<div className="d-flex">
									<div id="search-sort_by" className="search-filter_option">
										<span 
											onClick={() => this.sortby()}
											className="mr-3">Sort By</span>
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
									<div id="search-list_view" className="search-filter_option" onClick={() => this.showSearchListView()}>
										<span className="mr-3">List View</span>
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
									<div id="search-map_view" className="search-filter_option" onClick={() => this.showSearchMapView()}>
										<span className="mr-3">Map View</span>
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
				</div>
			</section>	
		);
	}
	
}

const mapStateToProps = state => {
	const {viewType} = state.app;
	return {
		type: viewType,
	};
};

export default connect(mapStateToProps, {searchProperty, viewType})(Section2);