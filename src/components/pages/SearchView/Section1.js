import React from "react";
import {connect}  from "react-redux";
import {saveFilter, searchProperty, resetFilters, getCountryData, getStateData, getCityData} from "../../../redux/actions";
import Loading from "../../common/Loading";

class Section1 extends  React.Component { 
	constructor(props){
		super(props);
		this.state = {
			loading: false,
			activePage: 1, 
			totalItemsCount: 200,
			itemCountPerpage: 5,
			title: "",
			stateData: [],
			cityData: [],
			country: "",
			state: "",
			city: "",
		};
	}
	componentDidMount = () => {
		this.props.getCountryData();
	}
	
	filterSelect = (name, value) => {
		console.log(name, value);
		var key = name;
		var obj = {};
		obj[key] = value;
		
		this.props.saveFilter(obj);
		if(name === "country") {
			this.setState({country: value});
			this.getStateData(value);
		}
		if(name === "state") {
			this.setState({state: value});
			this.getCityData(value);
		}
		if(name === "city") {
			this.setState({scitytate: value});
		}
	}

	find = () => {
		console.log("find");
		const {itemCountPerpage, activePage, country, state, city} = this.state;
		//console.log("filters", this.props.filters);
		const filtersData = {...this.props.filters, country: country, state: state, city: city};
		const filters = {filters: filtersData, "pageNumber" : activePage,
			"limit" : itemCountPerpage};
		this.getList(filters);
	
	}
	reset = () => {
		console.log("reset");
		this.props.resetFilters();
	}
	findByPropertyType = (type) => {
		var obj = {};
		obj["property_for"] = type;
		const {itemCountPerpage, activePage} = this.state;
		const filters = { "pageNumber" : activePage,
			"limit" : itemCountPerpage, filters: obj};
		this.getList(filters);
		
	}

	searchText = () => {
		const {itemCountPerpage, activePage} = this.state;
		var obj = {};
		obj["title"] = this.state.title;
		const filters = {"pageNumber" : activePage,
			"limit" : itemCountPerpage, filters: obj};
		this.getList(filters);

	}

	getList = (filters) => {
		this.setState({loading: true});
		this.props.searchProperty(filters).then(response => {
			console.log("section 1", response);
			this.setState({loading: false});
		}).catch( error => {
			console.log("error", error);
			this.setState({loading: false});
		});
	}

	getStateData = (id) => {
		this.props.getStateData({
			"countryId": id
		}).then(response => {
			console.log("state data", response);
			this.setState({stateData: response.data});
		}).catch(error => {
			console.log(error);
		});
	}

	getCityData = (id) => {
		this.props.getCityData({
			"stateId": id
		}).then(response => {
			console.log("city data data", response);
			this.setState({cityData: response.data});
		}).catch(error => {
			console.log(error);
		});
	}

	render() {
		const {loading, title} = this.state;
		//	console.log("country code",this.props.countryData);
		return (
			<section id="search-section_1">
				{ loading ? <Loading />: null }
				<div id="search-section_1-form">
					<div id="search-form">
						<div id="search-form-top">
							<div id="search-bar" className="mb-3">
								<div className="input-group">
									<input id="search" type="text" 
										value={title}
										onChange={(e) => this.setState({title: e.target.value})}
										className="form-control" placeholder="Search your next property ..." aria-label="search" aria-describedby="search"/>
									<div className="input-group-append">
										<button 
											onClick={() => this.searchText()}
											className="btn btn-gradient" type="button">Search</button>
									</div>
								</div>
							</div>
							<div id="search-form-top-buttons">
								<button 
									onClick={() => this.findByPropertyType("rent")}
									className="btn btn-gradient" type="button">Rent</button>
								<button 
									onClick={() => this.findByPropertyType("sell")}
									className="btn btn-gradient" type="button">Sell</button>
								<button 
									onClick={() => this.findByPropertyType("fractional")}
									className="btn btn-gradient" type="button">Fractional Ownership</button>
							</div>
						</div>
						<div id="search-form-bottom">
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select className="form-control"
											// value={this.props.filters.country}
											onChange={(e) => this.filterSelect("country", e.target.value)}>
											<option value="">Country</option>
											{
												
												this.props.countryData.map((item, index) => {
													return <option key={index} value={item.id}>{item.name}</option>;
												})
												
											}
										</select>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select 
											// value={this.props.filters.state}
											onChange={(e) => this.filterSelect("state", e.target.value)}
											className="form-control">
											<option value="">State</option>
											{
												
												this.state.stateData.map((item, index) => {
													return <option key={index} value={item.id}>{item.name}</option>;
												})
												
											}
										</select>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select 
											//value={this.props.filters.city}
											onChange={(e) => this.filterSelect("city", e.target.value)}
											className="form-control">
											<option value="">City</option>
											{
												
												this.state.cityData.map((item, index) => {
													return <option key={index} value={item.id}>{item.name}</option>;
												})
												
											}
										</select>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select 
											value={this.props.filters.propTypes}
											onChange={(e) => this.filterSelect("propTypes", e.target.value)}
											className="form-control">
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
							
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select 
											value={this.props.filters.amenities}
											onChange={(e) => this.filterSelect("amenities", e.target.value)}
											className="form-control">
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
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select 
											value={this.props.filters.listedBy}
											onChange={(e) => this.filterSelect("listedBy", e.target.value)}
											className="form-control">
											<option value="">Listed By</option>
											<option>Agent</option>
											<option>Owner</option>
											<option>AqarChain</option>
										</select>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select
											value={this.props.filters.currency} 
											onChange={(e) => this.filterSelect("currency", e.target.value)}
											className="form-control">
											<option value="">Currency</option>
											<option>USD</option>
											<option>SAR</option>
											<option>AED</option>
										</select>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select
											value={this.props.filters.viewType}  
											onChange={(e) => this.filterSelect("viewType", e.target.value)}
											className="form-control">
											<option value="">View Type</option>
											<option>Floor Plans</option>
											<option>Video Tours</option>
											<option>360 Tours</option>
										</select>
									</div>
								</div>
								{/* <div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select
										    value={this.props.filters.keywords}  
											onChange={(e) => this.filterSelect("keywords", e.target.value)}
											className="form-control">
											<option value="">Keywords</option>
											<option>Keywords #1</option>
											<option>Keywords #2</option>
											<option>Keywords #3</option>
										</select>
									</div>
								</div> */}
							</div>
							<div className="">
								<div className="col-lg-6 offset-lg-3">
									<div id="search-form-bottom-buttons">
										<button 
											onClick={() => this.find()}
											className="btn btn-gradient-secondary" type="button">Find</button>
										<button 
											onClick={() => this.reset()}
											className="btn btn-gradient-secondary" type="button">Reset</button>
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
	const { app } = state;
	console.log("app", app);
	return {
		config: app.configData,
		countryData: app.countryData,
		filters: app.filters,
	};
};

export default connect(mapStateToProps, {saveFilter, searchProperty, resetFilters, getCountryData, getStateData, getCityData})(Section1);