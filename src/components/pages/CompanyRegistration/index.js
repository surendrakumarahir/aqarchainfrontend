import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {connect}  from "react-redux";
import {getStateData, getCityData, companyRegistration} from "../../../redux/actions";
import IsLoadingHOC from "../../common/IsLoadingHOC";
import { ToastContainer, toast } from "react-toastify";
import ReactFileReader from "react-file-reader";

class CompanyRegistration extends  React.Component {
	constructor(props){
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			country: "",
			state: "",
			city: "",
			companyName: "",
			tradeLicenseNumber: "",
			tradeLicenseExpiry: new Date(),
			companyType : "",
			tradeLicensePic: "",
			reraLicenseNumber: "",
			vatNumber : "",
			vatCertificate: "",
			password: "",
			confirm_password: "",
			companyLogo: "",
			terms_acceptance: false,
			stateData: [],
			cityData: [],
			errors: {
				firstName: "",
				lastName: "",
				email: "",
				country: "",
				state: "",
				city:"",
				companyName: "",
				tradeLicenseNumber: "",
				tradeLicenseExpiry: "",
				companyType : "",
				tradeLicensePic: "",
				reraLicenseNumber: "",
				vatNumber : "",
				vatCertificate: "",
				password: "",
				confirm_password: "",
				companyLogo: "",
				terms_acceptance: "",
			},
		};
	}

	handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

	   console.log("trade", event.target.value);
		
		switch (name) {
		case "firstName": 
			errors.firstName = 
				value.length < 5
					? "First Name must be 3 characters long!"
					: "";
			break;
		case "lastName": 
			errors.lastName = 
				value.length < 5
					? "Last Name must be 3 characters long!"
					: "";
			break;
		case "country": 
			errors.country = 
				value.length < 1
					? "country should not be empty!"
					: "";
			break;
		case "state": 
			errors.state = 
				value.length < 1
					? "state should not be empty!"
					: "";
			break;
		case "city": 
			errors.city = 
				value.length < 1
					? "city should not be empty"
					: "";
			break;				
		case "email": 
			errors.email = 
				this.validEmailRegex.test(value)
					? ""
					: "Email is not valid!";
			break;
		case "password": 
			errors.password = 
				value.length < 8
					? "Password must be 8 characters long!"
					: "";
			break;
		case "confirm_password": 
			errors.confirm_password = 
				value.length < 8
					? "Password must be 8 characters long!"
					: "";
			break;
		case "companyName": 
			errors.companyName = 
				value.length < 1
					? "company name should not be empty"
					: "";
			break;
		case "tradeLicenseNumber": 
			errors.tradeLicenseNumber = 
				value.length < 1
					? "trade license number should not be empty"
					: "";
			break;
		case "tradeLicenseExpiry": 
			errors.tradeLicenseExpiry = 
				value.length < 1
					? "please select trade license expiry date"
					: "";
			break;
		case "companyType": 
			errors.companyType = 
				value.length < 1
					? "company type should not be empty"
					: "";
			break;	
		case "reraLicenseNumber": 
			errors.reraLicenseNumber = 
				value.length < 1
					? "rara License Number should not be empty"
					: "";
			break;
		case "vatNumber": 
			errors.vatNumber = 
				value.length < 1
					? "Vat number should not be empty"
					: "";
			break;
		case "terms_acceptance": 
			errors.terms_acceptance = 
				value.length < 0
					? "please accept term and conditions"
					: "";
			break;	
			
		default:
			break;
		}
		if(event.target.name === "terms_acceptance") {
			console.log("value", event.target.checked);
			this.setState({terms_acceptance: event.target.checked});
		}  else if(event.target.name === "country") {
			const country = JSON.parse(event.target.value);
			this.getStateData(country.id);
			this.setState({country: country.name});
		} else if(event.target.name === "state") { 
			const state = JSON.parse(event.target.value);
			this.getCityData(state.id);
			this.setState({state: state.name});
		} else {
			this.setState({errors, [name]: value}, ()=> {
				console.log(errors);
			});
		}
		
	}
 
	handleError = () => {
		const errors = this.state.errors;
		
		if(this.state.firstName.length < 5){
			errors.firstName = "First Name must be 3 characters long!";
		} 
		if(this.state.lastName.length < 5) {
			errors.lastName = "Last Name must be 3 characters long!";
		}  if(this.state.country.length < 1) {
			errors.country = "country should not be empty!";
		}  if(this.state.state.length < 1) {
			errors.state = "state should not be empty!";
		}  if(this.state.city.length < 1) {
			errors.city = "city should not be empty!";
		}  if(!this.validEmailRegex.test(this.state.email)) {
			errors.email = "Email is not valid!";
		}  if(this.state.password.length < 8) {
			errors.password = "Password must be 8 characters long!";
		}  if(this.state.confirm_password.length < 8) {
			errors.confirm_password =  "Password must be 8 characters long!";
		}  if(this.state.companyName.length < 1) {
			errors.companyName =  "company name should not be empty";
		}  if(this.state.tradeLicenseNumber.length < 1) {
			errors.tradeLicenseNumber = "trade license number should not be empty";
		}  if(this.state.companyType.length < 1) {
			errors.companyType =  "company type should not be empty";
		}  if(this.state.reraLicenseNumber.length < 1) {
			errors.reraLicenseNumber =  "rara License Number should not be empty";
		}  if(this.state.vatNumber.length < 1) {
			errors.vatNumber =  "Vat number should not be empty";
		}  if(this.state.terms_acceptance === false) {
			errors.terms_acceptance =  "please accept term and conditions";
		} 
		if(this.state.companyLogo.length < 1) {
			errors.companyLogo =  "Company logo is required Please upload Company Logo";
		}
		if(this.state.vatCertificate.length < 1) {
			errors.vatCertificate =  "Vat certificate is required, Please upload Certificate";
		}
		if(this.state.tradeLicensePic.length < 1) {
			errors.tradeLicensePic =  "Trade licence is required, please upload trade license";
		}

		this.setState({errors: errors});
	}

	validateForm = (errors) => {
		let valid = true;
		Object.values(errors).forEach(
			// if we have an error string set valid to false
			(val) => val.length > 0 && (valid = false)
		);
		return valid;
	}
	validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
 
	handleSubmit = async (event) => {
		const { setLoading } = this.props;
		event.preventDefault();
		await this.handleError();
		if(this.validateForm(this.state.errors)) {
			console.info("Valid Form");
			const {companyLogo, firstName, lastName,
				email, country, city, companyName,
				tradeLicenseExpiry, tradeLicenseNumber, companyType,
				reraLicenseNumber,
				vatNumber,
				password, terms_acceptance, state,
				tradeLicensePic, vatCertificate} = this.state;
	
			const data = {
				companyType, firstName, lastName, email, country, city, companyName, tradeLicenseExpiry, tradeLicenseNumber,
				reraLicenseNumber, vatNumber, password, terms_acceptance, state, companyLogo, vatCertificate, tradeLicensePic
			};
			setLoading(true);
			this.props.companyRegistration(data).then(response => {
				console.log("company registration");
				setLoading(false);
				toast.success(response.message);
			}).catch(error => {
				console.log("error ", error);
				setLoading(false);
				toast.error(error);
			});
		}else{
			console.error("Invalid Form");
		}
	}
	errorHtml = error => {
		return error.length > 0 && 
		<small className="form-text text-danger text-left">{error}</small>;
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

	handleFilesCompanyLogo = (files) => {
		const {errors} = this.state;
		errors.companyLogo = "";
		this.setState({companyLogo: files.base64, errors: errors});
	}

	uploadtradeLicense = files => {
		const {errors} = this.state;
		errors.tradeLicensePic = "";
		this.setState({tradeLicensePic : files.base64, errors: errors});
	}

	uploadVatCertificate = files => {
		const {errors} = this.state;
		errors.vatCertificate = "";
		this.setState({vatCertificate : files.base64, errors: errors});
	}

	render() {
		console.log("state", this.state);
		const {errors, tradeLicenseExpiry} = this.state;
		return (
			<>
				<section id="company-registration-section_1">
					<ToastContainer />
					<div id="company-registration-section_1-card" className="container-lg">
						<div className="row no-gutters">
							<div className="col-xl-1 col-md-12">
								<div className="company-registration-card-bg">
									<img alt="" className="p-4" src="/images/dots-variant-1.svg"/>
								</div>
							</div>
							<div className="col-xl-5 col-lg-6 col-md-12 col-12 text-center text-md-left">
								<div className="py-5 pr-5 pl-5 mx-3 has-box-shadow text-center">
									<div className="row">
										<div className="col-6 col-12">
											<h3 className="font-weight-bold mb-3">Connect with Buyer / Seller</h3>
										</div>
									</div>
									<div className="col-12">
										<label className="" htmlFor="company-logo">
											<div className="image-upload">
												<img alt="" className="upload-photo-icon mx-auto cursor" src="/images/upload-photo.svg"/>
												{/* <input type="file" name="companyLogo" 
												onChange={(e) => this.companyLogoUpload(e)}
												className="custom-file-input d-none"
												accept="image/*" 
												id="company-logo"
											/> */}
											
												<ReactFileReader fileTypes={[".png",".jpg", ".jpeg"]} base64="true" handleFiles={this.handleFilesCompanyLogo}>
													<button className='btn' id="company-logo">
														<p className="mt-3">Upload your company logo</p>
													</button>
												</ReactFileReader>
												{this.errorHtml(errors.companyLogo)}
											</div>
										</label>	  
								
									</div>
									<form className="my-4">
										<div className="form-group">
											<input
												name="firstName" 
												onChange={(e) => this.handleChange(e)}
												type="text" className="form-control secondary-input" id="first-name" placeholder="First Name"/>
											{this.errorHtml(errors.firstName)}
										</div>
										<div className="form-group">
											<input 
												name="lastName"
												onChange={(e) => this.handleChange(e)}
												type="text" className="form-control secondary-input" id="last-name" placeholder="Last Name"/>
											{this.errorHtml(errors.lastName)}
										</div>
									</form>
									<form className="my-2">
										<div className="row">
											<div className="col-12 my-4">
												<div className="form-group">
													<input 
														name="email"
														onChange={(e) => this.handleChange(e)}
														type="text" className="form-control secondary-input" id="email-address" placeholder="Email Address"/>
													{this.errorHtml(errors.email)}
												</div>
											</div>
											<div className="col-lg-6 col-12 ">
												<div className="form-group">
													<select
														name="country"
														onChange={(e) => this.handleChange(e)} 
														className="form-control secondary-select" id="country">
														<option value="">Select your Country</option>
														{
												
															this.props.countryData.map((item, index) => {
																return <option key={index} value={JSON.stringify(item)}>{item.name}</option>;
															})
								
														}
													</select>
													{this.errorHtml(errors.country)}
												</div>
											</div>
											<div className="col-lg-6 col-12 ">
												<div className="form-group">
													<select 
														name="state"
														onChange={(e) => this.handleChange(e)} 
														className="form-control secondary-select" id="country">
														<option>Select your State</option>
														{
												
															this.state.stateData.map((item, index) => {
																return <option key={index} value={JSON.stringify(item)}>{item.name}</option>;
															})
								
														}
													</select>
													{this.errorHtml(errors.state)}
												</div>
											</div>
											<div className="col-lg-6 col-12">
												<div className="form-group">
													<select 
														name="city"
														onChange={(e) => this.handleChange(e)} 
														className="form-control secondary-select" id="city">
														<option>Select your City</option>
														{
												
															this.state.cityData.map((item, index) => {
																return <option key={index} value={item.name}>{item.name}</option>;
															})
								
														}
													</select>
													{this.errorHtml(errors.city)}
												</div>
											</div>
											<div className="col-12 my-4">
												<div className="form-group">
													<input 
														name="companyName"
														onChange={(e) => this.handleChange(e)}
														type="text" className="form-control secondary-input" id="companyName" placeholder="Company Name"/>
													{this.errorHtml(errors.companyName)}
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-12 text-center text-lg-left">
								<div className="registration-artwork-top bg-dots-variant-1 bg-position-center-right-offset bg-repeat-no-repeat p-5">
									<h2 className="font-weight-bold">The future of property</h2>
									<h2 className="font-weight-bold">is few steps away...</h2>
								</div>
								<div className="registration-artwork-bottom">
									<img alt="" className="img-fluid w-90" src="/images/User-Registration-Artwork.svg"/>
								</div>
							</div>
						</div>
					</div>
				</section>
		
				<section id="company-registration-section_2">
					<div id="company-registration-section_2-card" className="container-lg">
						<div className="row no-gutters">
							<div className="col-lg-12 col-12 text-md-left">
								<div className="pt-lg-9 pt-5 pb-5 px-lg-9 px-5 mx-3 has-box-shadow">
									{/* <form> */}
									<div className="row">
										<div className="col-lg-4 col-md-6 col-12">
											<div className="form-group">
												<label htmlFor="trade-license-number">Trade License Number</label>
												<input 
													name="tradeLicenseNumber"
													onChange={(e) => this.handleChange(e)}
													type="text" className="form-control secondary-input" id="trade-license-number" placeholder="Trade License Number" />
												{this.errorHtml(errors.tradeLicenseNumber)}
											</div>
										</div>
										<div className="col-lg-4 col-md-12 col-12">
											<label htmlFor="DD">Trade License Expiry Date</label>
											<div className="form-group form-inline">
												<DatePicker selected={tradeLicenseExpiry} onChange={date => this.setState({tradeLicenseExpiry: date})} />
											</div>
										</div>
										<div className="col-lg-4 col-md-6 col-12">
											<div className="form-group">
												<label htmlFor="company-type">Company Type</label>
												<input 
													name="companyType"
													onChange={(e) => this.handleChange(e)}
													type="text" className="form-control secondary-input" id="company-type" placeholder="Select your Company Type"/>
												{this.errorHtml(errors.companyType)}
											</div>
										</div>
									</div>
									<div className="row my-5">
										<div className="col-lg-12 col-md-12 col-12">
											<label className="dashed-border p-4" htmlFor="trade-license">
												<div className="image-upload">
													<img className=" mx-auto cursor" alt="" src="/images/Upload.svg" style={{width:"30px"}}/>
													{/* <input type="file"
														onChange={(e) => this.setState({tradeLicensePic: e.target.value})}
														className="custom-file-input d-none"
														accept="image/*" id="trade-license"/> */}
													<ReactFileReader fileTypes={[".png",".jpg", ".jpeg", ".pdf"]} base64="true" handleFiles={this.uploadtradeLicense}>
														<button className='btn' id="trade-license">
															<p className="mt-3">Upload copy of Trade License</p>
														</button>
													</ReactFileReader>
													{this.errorHtml(errors.tradeLicensePic)}
												</div>
											</label>
										</div>
									</div>
									<div className="row my-5">
										<div className="col-lg-6 col-12">
											<div className="form-group">
												<input 
													name="reraLicenseNumber"
													onChange={(e) => this.handleChange(e)}
													type="text" className="form-control secondary-input" id="RERA" placeholder="RERA License Number"/>
												{this.errorHtml(errors.reraLicenseNumber)}
											</div>
										</div>
										<div className="col-lg-5 col-12">
											<div className="form-group">
												<input 
													name="vatNumber"
													onChange={(e) => this.handleChange(e)}
													type="text" className="form-control secondary-input" id="VAT" placeholder="VAT Number"/>
												{this.errorHtml(errors.vatNumber)}
											</div>
										</div>
									</div>
									<div className="row my-5">
										<div className="col-lg-12 col-md-12 col-12">
											<label className="dashed-border p-4" htmlFor="vat-certificate">
												<div className="image-upload">
													<img alt="" className="mx-auto cursor" src="/images/Upload.svg" style={{width:"30px"}}/>
													{/* <input type="file"
														onChange={(e) => this.setState({vatCertificate: e.target.value})}
														className="custom-file-input d-none"
														accept="image/*" id="vat-certificate"/> */}
													
													<ReactFileReader fileTypes={[".png",".jpg", ".jpeg", ".pdf"]} base64="true" handleFiles={this.uploadVatCertificate}>
														<button className='btn' id="vat-certificate"><p className="mt-3">Upload VAT Certificate</p></button>
													</ReactFileReader>
													{this.errorHtml(errors.vatCertificate)}
												</div>
											</label>
										</div>
									</div>
									{/* </form> */}
								</div>
							</div>
						</div>
					</div>
				</section>
		
				<section id="company-registration-section_3">
					<div id="company-registration-section_3-card" className="container-lg">
						<div className="row no-gutters">
							<div className="col-lg-12 col-12 text-md-left">
								<div className="pt-lg-9 pt-5 pb-5 px-lg-9 px-5 mx-3 has-box-shadow">
									<form>
										<div className="row">
											<div className="col-lg-7 col-12 my-2">
												<div className="form-group">
													<input 
														name="password"
														onChange={(e) => this.handleChange(e)}
														type="password" className="form-control secondary-input" id="password" placeholder="Create Password"/>
													{this.errorHtml(errors.password)}
												</div>
											</div>
											<div className="col-lg-7 col-12 my-2">
												<div className="form-group">
													<input 
														name="confirm_password"
														onChange={(e) => this.handleChange(e)}
														type="password" className="form-control secondary-input" id="confirm-password" placeholder="Confirm Password"/>
													{this.errorHtml(errors.confirm_password)}
												</div>
											</div>
											<div className="col-lg-7 col-12 my-2">
												<div className="">
										
													<input 
														name="terms_acceptance"
														onChange={(e) => this.handleChange(e)}
														type="checkbox" value="" id="terms_acceptance"/>
													<label className="form-check-label font-weight-bold text-dark" htmlFor="terms_acceptance">
								Agree to terms and conditions
													</label>
													{this.errorHtml(errors.terms_acceptance)}
												</div>
											</div>
											<div className="col-lg-7 col-12 my-2">
												<button 
													onClick={(e) => this.handleSubmit(e)}
													id="signup-button" className="btn btn-gradient-secondary w-100 my-5">Get Started</button>
											</div>
										</div>
									</form>
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
	return {
		countryData: app.countryData,
	};
};


//export default connect(null, {getInTouch})(IsLoadingHOC(CompanyRegistration;
export default connect(mapStateToProps, {getStateData, getCityData, companyRegistration})(IsLoadingHOC(CompanyRegistration, "Loading"));