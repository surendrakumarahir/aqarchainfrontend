import React from "react";
import {connect}  from "react-redux";
import {saveFilter, searchProperty, resetFilters, getCountryData, getStateData, getCityData} from "../../../redux/actions";
import IsLoadingHOC from "../../common/IsLoadingHOC";
import Select from "react-select";
const optionsCountry = [
	{ value: "101", label: "India" },
	{ value: "191", label: "Saudi Arabia" },
	{ value: "229", label: "United Arab Emirates" },
];

const listedByOption = [
	{ value: "AGENT", label: "Agent" },
	{ value: "OWNER", label: "Owner" },
	{ value: "AQARCHAIN", label: "AqarChain" },
];

const currencyOption = [
	{ value: "USD", label: "USD" },
	{ value: "AED", label: "AED" },
	{ value: "SAR", label: "SAR" }
];

const viewTypeOption = [
	{ value: "floorPlans", label: "Floor Plans" },
	{ value: "video", label: "Video Tours" },
	{ value: "_360View", label: "360 Tours" }
];

class Section1 extends  React.Component { 
	constructor(props){
		super(props);
		this.state = {
			activePage: 1, 
			totalItemsCount: 200,
			itemCountPerpage: 5,
			title: "",
			stateData: [],
			cityData: [],
			country: "",
			state: "",
			city: "",
			selectedCountry: "",
			selectedState: "",
			selectedCity: "",
		};
	}
	componentDidMount = () => {
		this.props.getCountryData();
	}
	
	filterSelect = (selectedOption, name) => {
		//console.log("selected options", seletedOption);
		var key = name;
		const filters = this.props.filters;
	
		if(name === "country") {
			this.getStateData(selectedOption.value);
			this.setState({country: selectedOption.label, selectedCountry: selectedOption, state: "", selectedState: "", city: "", selectedCity: ""});
		} else if(name === "state") {
			this.getCityData(selectedOption.value);
			this.setState({state: selectedOption.label, selectedState: selectedOption, city: "", selectedCity: ""});
		} else if(name === "city") {
			this.setState({city: selectedOption.label, selectedCity: selectedOption});
		} else {
			filters[key] = selectedOption.value;
			filters[`${key}_selected`] = selectedOption;
			this.props.saveFilter(filters);
		}
	}

	find = () => {
		const {itemCountPerpage, activePage, country, state, city} = this.state;
		const filtersData = {...this.props.filters, country: country, state: state, city: city};
		const filters = {filters: filtersData, "pageNumber" : activePage,
			"limit" : itemCountPerpage};
		console.log("filters", filters);
		this.getList(filters);
	
	}
	reset = () => {
		this.props.resetFilters();
		this.setState({selectedCity: null, selectedCountry: null, selectedState: null});
	}
	
	findByPropertyFor = (type) => {
		var obj = {};
		obj["propertyFor"] = type;
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
		const { setLoading } = this.props;
		setLoading(true);
		this.props.searchProperty(filters).then(response => {
			setLoading(false);
		}).catch( error => {
			console.log("error", error);
			setLoading(false);
		});
	}

	getStateData =  (id) => {
		let stateData = [];
		this.props.getStateData({
			"countryId": id
		}).then(async response => {
			stateData = await response.data.map(({ id: value, name: label, ...rest }) => ({ value, label, ...rest }));
			this.setState({stateData: stateData});

		}).catch(error => {
			console.log(error);
		});
	}

	getCityData = (id) => {
		let cityData = [];
		this.props.getCityData({
			"stateId": id
		}).then(async response => {
			cityData = await response.data.map(({ id: value, name: label, ...rest }) => ({ value, label, ...rest }));
			this.setState({cityData: cityData});
		}).catch(error => {
			console.log(error);
		});
	}

	render() {
		const {title, selectedCity, selectedCountry, selectedState, stateData, cityData} = this.state;
		const {config, filters} = this.props;
		console.log("state main", this.props);
		return (
			<section id="search-section_1">
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
									onClick={() => this.findByPropertyFor("RENT")}
									className="btn btn-gradient" type="button">Rent</button>
								<button 
									onClick={() => this.findByPropertyFor("SELL")}
									className="btn btn-gradient" type="button">Sell</button>
								<button 
									//onClick={() => this.findByPropertyType("fractional")}
									className="btn btn-gradient" type="button" 
									style={{background: "#9a9595"}}
								>Fractional Ownership</button>
							</div>
						</div>
						<div id="search-form-bottom">
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Select className="select-box" 
											value={selectedCountry}
											options={optionsCountry}
											placeholder="Select Country"
											onChange={(seletedOption) => this.filterSelect(seletedOption, "country")}
										/>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Select className="select-box" 
											value={selectedState}
											options={stateData}
											placeholder="Select State"
											onChange={(seletedOption) => this.filterSelect(seletedOption, "state")}
										/>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Select className="select-box" 
											value={selectedCity}
											options={cityData}
											placeholder="Select City"
											onChange={(seletedOption) => this.filterSelect(seletedOption, "city")}
										/>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Select className="select-box" 
											value={filters.property_type_selected}
											options={config.hasOwnProperty("propTypes") ? config.propTypes.map(({ _id: value, type_title: label, ...rest }) => ({ value, label, ...rest })) : []}
											placeholder="Property Type"
											onChange={(seletedOption) => this.filterSelect(seletedOption, "property_type")}
										/>
									</div>
								</div>
							
							</div>
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Select className="select-box" 
											value={filters.amenities_selected === undefined ? null : filters.amenities_selected}
											options={config.hasOwnProperty("amenities") ? config.amenities.map(({ _id: value, feature: label, ...rest }) => ({ value, label, ...rest })) : []}
											placeholder="Amenities"
											onChange={(seletedOption) => this.filterSelect(seletedOption, "amenities")}
										/>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Select className="select-box" 
											value={filters.listedBy_selected}
											options={listedByOption}
											placeholder="Listed By"
											onChange={(seletedOption) => this.filterSelect(seletedOption, "listedBy")}
										/>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Select className="select-box" 
											value={filters.currency_selected}
											options={currencyOption}
											placeholder="Currency"
											onChange={(seletedOption) => this.filterSelect(seletedOption, "currency")}
										/>
										{/* <select
											value={this.props.filters.currency} 
											onChange={(e) => this.filterSelect("currency", e.target.value)}
											className="form-control">
											<option value="">Currency</option>
											<option>USD</option>
											<option>SAR</option>
											<option>AED</option>
										</select> */}
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Select className="select-box" 
											value={filters.viewType_selected}
											options={viewTypeOption}
											placeholder="View Type"
											onChange={(seletedOption) => this.filterSelect(seletedOption, "viewType")}
										/>
										{/* <select
											value={this.props.filters.viewType}  
											onChange={(e) => this.filterSelect("viewType", e.target.value)}
											className="form-control">
											<option value="">View Type</option>
											<option value="floorPlans">Floor Plans</option>
											<option value="video">Video Tours</option>
											<option value="_360View">360 Tours</option>
										</select> */}
									</div>
								</div>
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
	return {
		config: app.configData,
		countryData: app.countryData,
		filters: app.filters,
	};
};

export default connect(mapStateToProps, {saveFilter, searchProperty, resetFilters, getCountryData, getStateData, getCityData})(IsLoadingHOC(Section1, "Loading ..."));