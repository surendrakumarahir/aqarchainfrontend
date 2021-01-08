import React from "react";
import {connect}  from "react-redux";
//import {getConfigData} from "../../../redux/actions";
class FilterSection  extends React.Component {
	componentDidMount() {
		//console.log("props", this.props);
	}
	render () {
		//console.log(this.props.config);
		return (
			<>
				<section key="11212" id="landing-section_1">
					<div id="landing-section_1-banner" className="container-lg">
						<div className="row no-gutters">
							<div className="col-lg-3 text-center text-lg-left">
								<h1 className="mb-3 mb-lg-0 ml-lg-4">
							A New Way to Explore <span className="font-weight-bold">Real Estate</span>
								</h1>
							</div>
							<div className="col-lg-8 offset-lg-1 text-center text-lg-left">
								<div className="show-inline-container">
									<div className="show-inline"><img src="/images/logo-expo_2020_dubai_uae.png" alt="Expo 2020 - Dubai, United Arab Emirates" /></div>
									<div className="show-inline"><img src="/images/logo-vision_2021_uae.png" alt="Vision 2021 - United Arab Emirates" /></div>
									<div className="show-inline"><img src="/images/logo-vision_2030_ksa.png" alt="Vision 2030 - Kingdom of Saudi Arabia" /></div>
								</div>
							</div>
						</div>
					</div>
					<div id="landing-section_1-form" className="container">
						<div className="row">
							<div className="col-lg-8 offset-lg-1">
								<div id="search-form">
									<div id="search-form-top">
										<div id="search-bar" className="mb-3">
											<div className="input-group">
												<input id="search" type="text" className="form-control" placeholder="Search your next property ..." aria-label="search" aria-describedby="search" />
												<div className="input-group-append">
													<button className="btn btn-gradient" type="button">Search</button>
												</div>
											</div>
										</div>
										<div id="search-form-top-buttons">
											<button className="btn btn-gradient" type="button">Rent</button>
											<button className="btn btn-gradient" type="button">Sell</button>
											<button className="btn btn-gradient" type="button">Fractional Ownership</button>
										</div>
									</div>
									<div id="search-form-bottom">
										<div key="1" className="row">
											<div key="11" className="col-lg-3 col-md-6">
												<div className="form-group">
													<select className="form-control">
														<option value="">Country</option>
														{
															this.props.config.hasOwnProperty("country") > 0 ? 
																this.props.config.country.map((item, index) => {
																	return <option key={index} value={item.country_code}>{item.country_name}</option>;
																})
																: null
														}
													</select>
												</div>
											</div>
											<div key="12" className="col-lg-3 col-md-6">
												<div className="form-group">
													<select className="form-control">
														<option value="">City</option>
														<option>City #1</option>
														<option>City #2</option>
														<option>City #3</option>
													</select>
												</div>
											</div>
											<div key="13" className="col-lg-3 col-md-6">
												<div className="form-group">
													<select className="form-control">
														<option value="">Property Type</option>
														{
															this.props.config.hasOwnProperty("propTypes") > 0 ? 
																this.props.config.propTypes.map(item => {
																	return <option key={item._id} value={item._id}>{item.type_title}</option>;
																})
																: null
														}
													</select>
												</div>
											</div>
											<div key="14" className="col-lg-3 col-md-6">
												<div className="form-group">
													<select className="form-control">
														<option value="">Amenities</option>
														{
															this.props.config.hasOwnProperty("amenities") > 0 ? 
																this.props.config.amenities.map(item => {
																	return <option key={item._id} value={item._id}>{item.feature}</option>;
																})
																: null
														}
													</select>
												</div>
											</div>
										</div>
										<div  key="2" className="row">
											<div key="15" className="col-lg-3 col-md-6">
												<div className="form-group">
													<select className="form-control">
														<option value="">Listed By</option>
														<option>Agent</option>
														<option>Owner</option>
														<option>AqarChain</option>
													</select>
												</div>
											</div>
											<div key="16" className="col-lg-3 col-md-6">
												<div className="form-group">
													<select className="form-control">
														<option value="">Currency</option>
														<option>USD</option>
														<option>SAR</option>
														<option>AED</option>
													</select>
												</div>
											</div>
											<div key="17" className="col-lg-3 col-md-6">
												<div className="form-group">
													<select className="form-control">
														<option value="">View Type</option>
														<option>Floor Plans</option>
														<option>Video Tours</option>
														<option>360 Tours</option>
													</select>
												</div>
											</div>
											<div key="18" className="col-lg-3 col-md-6">
												<div className="form-group">
													<select className="form-control">
														<option value="">Keywords</option>
														<option>Keywords #1</option>
														<option>Keywords #2</option>
														<option>Keywords #3</option>
													</select>
												</div>
											</div>
										</div>
										<div key="3" className="">
											<div className="col-lg-6 offset-lg-3">
												<div id="search-form-bottom-buttons">
													<button className="btn btn-gradient-secondary" type="button">Find</button>
													<button className="btn btn-gradient-secondary" type="button">Reset</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
	
} 

const mapStateToProps = state => {
	const { app } = state;
	//console.log("dattttt", app);
	return {
	   config: app.configData,
	};
};

export default connect(mapStateToProps, {})(FilterSection);