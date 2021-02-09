import React from "react";
import countryCode from "../../../config/countryCode";
import {connect}  from "react-redux";
import {defaultOptions} from "../../../config";
import {sendOtp, varifyOtp, getStateData, getCityData, registerUser} from "../../../redux/actions";
import { toast } from "react-toastify";
import validator from "validator";
import ReactFileReader from "react-file-reader";
import isLoadingHOC from "../../common/IsLoadingHOC";
import Login from "./Login.component";

class Registration extends  React.Component {
	constructor(props){
		super(props);
		this.state = {
			step1: true,
			step2: false,
			step3: false,
			step4: false,
			step5: false,
			step6: false,
			mobile: "",
			country_code: "",
			optSendTo: "",
			otp: "",
			password: "",
			password_confirm: "",
			email: "",
			role: "USER",
			terms_acceptance: false,
			first_name: "",
			last_name: "",
			country: "",
			state: "",
			city: "",
			profile_pic: "",
			stateData: [],
			cityData: [],
			errors: {
				mobile: "",
				country_code: "",
				otp: "",
				email: "",
				password: "",
				password_confirm: "",
				terms_acceptance: "",
				first_name: "",
				last_name: "",
				country: "",
				state: "",
				city: "",
				profile_pic: "",
			}
		};
	}
	onSelectCountryCode = (value) => {
		this.setState({country_code: value});
	}
	step1Completed = () => {
		const {country_code, mobile, errors} = this.state;
		const {setLoading} = this.props;
		// console.log("coddd", defaultOptions.localeMobile[country_code]);
		
		if(country_code === "" || mobile === "") {
			errors.country_code = "Country Code should not be empty";
			errors.mobile = "Mobile number should not be empty";
			this.setState({errors: errors});
			return false;
		}
		if (!validator.isMobilePhone(mobile, defaultOptions.localeMobile[country_code])) {
			errors.mobile = "Mobile number is not correct";
			this.setState({errors: errors});
			return false;
		}

		errors.country_code = "";
		errors.mobile= "";
		setLoading(true);
		this.setState({errors: errors});
		this.props.sendOtp({mobile: mobile, country_code: country_code}).then(response => {
			console.log("response", response);
			setLoading(false);
			this.setState({step1: false, step2: true, optSendTo:response.data.to});
		}).catch(error => {
			console.log(error);
			setLoading(false);
		});
		
	}
	step2Completed = () => {
		console.log("state", this.state);
		const {country_code, mobile, otp, errors} = this.state;
		const {setLoading} = this.props;
		if(otp === "") {
			//alert("OTP should not be empty");
			errors.otp = "OTP should not be empty";
			this.setState({errors: errors});
			return false;
		}
		setLoading(true);
		this.props.varifyOtp({mobile: mobile, country_code: country_code, otp: otp}).then(response => {
			console.log("response", response);
			setLoading(false);
			this.setState({step2: false, step3: true});
		}).catch(error => {
			console.log(error);
			setLoading(true);
		});
		
	}

	step3Completed = () => {
		this.setState({step3: false, step4: true});
	}
	step4Completed = () => {
		const {email, password, password_confirm, terms_acceptance, errors} = this.state;
		let count = 0;
		if(!validator.isEmail(email))
		{
			errors.email = "You have entered an invalid email address!";
			count++;
		}
		if(password === "") {
			errors.password = "Password  should not be empty";
			count++;
		}  if (password_confirm === "") {
			errors.password_confirm = "Confirm password should not be empty";
			count++;
		}  if (!validator.equals(password, password_confirm)) {
			errors.password = "Password and confirm password should be match";
			count++;
		}  if (!terms_acceptance) {
			errors.terms_acceptance = "Please accept the terms and conditions";
			count++;
		}
		if(count) {
			this.setState({errors: errors});
		} else {
			this.setState({step4: false, step5: true});
		}
		
	}
	step5Completed = () => {
		const {first_name, last_name, country, state, city, profile_pic, errors} = this.state;
		const {setLoading} = this.props;
		let count = 0;
		
		if(first_name === "") {
			errors.first_name = "First Name should not be empty";
			count++;
		}  if (last_name === "") {
			errors.last_name = "Last Name should not be empty";
			count++;
		}  if (country === "") {
			errors.country = "Please select country";
			count++;
		}  if (state === "") {
			errors.state = "Please Select State !";
			count++;
		}  if (city === "") {
			errors.city = "Please select city !";
			count++;
		}  if (profile_pic === "") {
			errors.profile_pic = "Profile photo should not be empty";
			count++;
		} 
		if(count) {
			this.setState({errors: errors});
		} else {
			setLoading(true);
			this.props.registerUser(this.state).then(response => {
				console.log(response);
				toast.success(response.message);
				setLoading(false);
				this.setState({step5: false});
			}).catch(error => {
				console.log(error);
				setLoading(false);
				toast.error(error);
			});
		}
		
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

	setCountry = (e) => {
		this.getStateData(e.target.value);
		this.setState({country: e.target.value});
	}
	setStateValue = (e) => {
		this.getCityData(e.target.value);
		this.setState({state: e.target.value});
	}

	loginStep = () => {
		this.setState({step1: false, step2: false, step3: false, step4: false, step5: false, step6: true});
	}
	registerStep = () => {
		this.setState({step1: true, step2: false, step3: false, step4: false, step5: false, step6: false});
	}
	ClickHereForLogin = () => {
		return (
			<small className="form-text text-muted text-center">You already have an account? 
				<span 
					onClick={() => this.loginStep()}
					className="font-weight-bold text-dark">
					Click here to login
				</span>
			</small>
		);
	}

	errorHtml = error => {
		return error.length > 0 && 
		<small className="form-text text-danger text-left">{error}</small>;
	}

	handleProfileUpload = (files) => {
		const {errors} = this.state;
		errors.profile_pic = "";
		this.setState({profile_pic: files.base64, errors: errors});
	}

	render(){
		const {step1, step2, step3, step4, step5, step6, optSendTo, errors} = this.state;
		console.log(this.state);
		return (
			<section id="user-registration-section_1">
					{
					step1 ? (
						<div id="user-registration-section_1-signup-step1" className="container-lg">
							<div className="row no-gutters">
								<div className="col-xl-1 col-md-12">
									<div className="user-registration-card-bg">
										<img alt="" className="p-4" src="/images/dots-variant-1.svg"/>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6 col-md-12 col-12">
									<div className="py-md-7 p-5 mx-3 has-box-shadow">
										<div className="form-heading my-6">
											<h3 className="font-weight-bold text-dark">Confirm your mobile number</h3>
											<h3 className="font-weight-bold text-dark">for seam less experience</h3>
										</div>
										<form className="my-5">
											<div className="row">
												<div className="col-lg-3 col-12">
													<div className="form-group">
														<select 
															onChange={(e) => this.onSelectCountryCode(e.target.value)}
															className="form-control secondary-select" id="cc">
															<option>CC</option>
															{
																countryCode.map((item, index) => {
																	return (<option key={index} value={item.dial_code}>
																		{`${item.name} (${item.dial_code})`}
																	</option>);
																})
															}
														</select>
													</div>
												</div>
												<div className="col-lg-9 col-12">
													<div className="form-group">
														<input type="number" 
															onChange={(e) => this.setState({mobile: e.target.value})}
															className="form-control secondary-input" id="mobileNumber" placeholder="Mobile Number"/>
													    {this.errorHtml(errors.mobile)}
													</div>
												</div>
											</div>
										</form>
										<button id="send-otp-button" className="btn btn-gradient-secondary w-100 my-5" onClick={() => this.step1Completed()}>Send OTP</button>
										{this.ClickHereForLogin()}
									</div>
								</div>
								<div className="col-lg-6 col-12 text-center text-lg-left">
									<div className="registration-artwork-top bg-dots-variant-1 bg-position-center-right-offset bg-repeat-no-repeat p-5">
										<h2>Take a break from</h2>
										<h2>financial work, and focus</h2>
										<h2>on <span className="font-weight-bold">what matters the most</span></h2>
									</div>
									<div className="registration-artwork-bottom">
										<img alt="" className="img-fluid w-90" src="/images/User-Registration-Artwork.svg"/>
									</div>
								</div>
							</div>
						</div>
					) : null
				}
				
				{ step2 ? (
					<div id="user-registration-section_1-signup-step2" className="container-lg">
						<div className="row no-gutters">
							<div className="col-xl-1 col-md-12">
								<div className="user-registration-card-bg">
									<img alt="" className="p-4" src="/images/dots-variant-1.svg"/>
								</div>
							</div>
							<div className="col-xl-5 col-lg-6 col-md-12 col-12">
								<div className="py-md-7 p-5 mx-3 has-box-shadow">
									<div className="form-heading my-5"> 
										<h3 className="font-weight-bold text-dark">Confirm your mobile number</h3>
										<h3 className="font-weight-bold text-dark">for seam less experience</h3>
									</div>
									<h4>OTP is sent to:</h4>
									<h2 className="font-weight-bold text-dark">{optSendTo} <span><img alt="" className="edit-number" src="/images/icon-edit-number.svg"/></span></h2>
									<form className="my-4">
										<div className="row">
											<div className="col-lg-9 col-12">
												<div className="form-group">
													<label htmlFor="otp">Enter OTP: </label>
													<div id="otp-outer-wrapper">
														<div id="otp-inner-wrapper">
															<input
															 onChange={(e) => this.setState({otp: e.target.value})}
															 id="partitioned-otp" type="text" maxLength="6"   />
														</div>
													</div>
													{this.errorHtml(errors.otp)}
												</div>
												<small className="form-text text-muted text-left mt-4">Didn't receive OTP? <span 
													onClick={() => this.step1Completed()}
													className="font-weight-bold text-dark">Resend OTP</span></small>
											</div>
										</div>
									</form>
									<button id="send-otp-button" className="btn btn-gradient-secondary w-100 my-5" onClick={() => this.step2Completed()}>Sign Up</button>
									{this.ClickHereForLogin()}
								</div>
							</div>
							<div className="col-lg-6 col-12 text-center text-lg-left">
								<div className="registration-artwork-top bg-dots-variant-1 bg-position-center-right-offset bg-repeat-no-repeat p-5">
									<h2>Take a break from</h2>
									<h2>financial work, and focus</h2>
									<h2>on <span className="font-weight-bold">what matters the most</span></h2>
								</div>
								<div className="registration-artwork-bottom">
									<img alt="" className="img-fluid w-90" src="/images/User-Registration-Artwork.svg"/>
								</div>
							</div>
						</div>
					</div>
				) : null
				}
			
				{
					step3 ? (
						<div id="user-registration-section_1-signup-step3" className="container-lg">
							<div className="row no-gutters">
								<div className="col-xl-1 col-md-12">
									<div className="user-registration-card-bg">
										<img alt="" className="p-4" src="/images/dots-variant-1.svg"/>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6 col-md-12 col-12">
									<div className="py-md-7 p-5 mx-3 has-box-shadow">
										<div className="form-heading my-6 text-center">
											<img alt="" className="otp-verify-image mx-auto mb-3" src="/images/icon-otp-vertification.svg"/>
											<h2 className="font-weight-bold text-dark">Congratulations!</h2>
											<h4 className="font-weight-bold text-dark">Your mobile number is verified</h4>
											<h4 className="font-weight-bold text-dark">successfully!</h4>
										</div>
										<button id="send-otp-button" className="btn btn-gradient-secondary w-100 my-5" onClick={() => this.step3Completed()}>Continue</button>
										{this.ClickHereForLogin()}
									</div>
								</div>
								<div className="col-lg-6 col-12 text-center text-lg-left">
									<div className="registration-artwork-top bg-dots-variant-1 bg-position-center-right-offset bg-repeat-no-repeat p-5">
										<h2>Take a break from</h2>
										<h2>financial work, and focus</h2>
										<h2>on <span className="font-weight-bold">what matters the most</span></h2>
									</div>
									<div className="registration-artwork-bottom">
										<img alt="" className="img-fluid w-90" src="/images/User-Registration-Artwork.svg"/>
									</div>
								</div>
							</div>
						</div>
					) : null
				}
			
				{
					step4 ? (
						<div id="user-registration-section_1-signup-step4" className="container-lg">
							<div className="row no-gutters">
								<div className="col-xl-1 col-md-12">
									<div className="user-registration-card-bg">
										<img alt="" className="p-4" src="/images/dots-variant-1.svg"/>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6 col-md-12 col-12">
									<div className="py-md-6 p-5 mx-3 has-box-shadow">
										<div className="form-heading my-5">
											<h3 className="font-weight-bold text-dark">Confirm your Email Address</h3>
											<h3 className="font-weight-bold text-dark">for seam less experience</h3>
										</div>
										<form className="my-3">
											<div className="form-group">
												<input 
													onChange={(e) => this.setState({email: e.target.value})}
													type="text" className="form-control secondary-input" id="email-id" placeholder="Email Address"/>
												 {this.errorHtml(errors.email)}
											</div>
											<div className="form-group">
												<input 
													onChange={(e) => this.setState({password: e.target.value})}
													type="password" className="form-control secondary-input" id="password" placeholder="Create Password"/>
											     {this.errorHtml(errors.password)}
											</div>
											<div className="form-group">
												<input 
													onChange={(e) => this.setState({password_confirm: e.target.value})}
													type="password" className="form-control secondary-input" id="confirm-password" placeholder="Confirm Password"/>
											     {this.errorHtml(errors.password_confirm)}
											</div>
										
											<div className="form-check">
												<input 
													onChange={(e) => this.setState({terms_acceptance: e.target.checked})}
													className="form-check-input" type="checkbox" value="" id="termsAndConditions"/>
												<label className="form-check-label font-weight-bold text-dark" htmlFor="termsAndConditions">
                                                     Agree to terms and conditions
												</label>
												{this.errorHtml(errors.terms_acceptance)}
											</div>
										</form>
										<button id="signup-button" className="btn btn-gradient-secondary w-100 my-5" onClick={() => this.step4Completed()}>Sign Up</button>
										{this.ClickHereForLogin()}
									</div>
								</div>
								<div className="col-lg-6 col-12 text-center text-lg-left">
									<div className="registration-artwork-top bg-dots-variant-1 bg-position-center-right-offset bg-repeat-no-repeat p-5">
										<h2>Take a break from</h2>
										<h2>financial work, and focus</h2>
										<h2>on <span className="font-weight-bold">what matters the most</span></h2>
									</div>
									<div className="registration-artwork-bottom">
										<img alt="" className="img-fluid w-90" src="/images/User-Registration-Artwork.svg"/>
									</div>
								</div>
							</div>
						</div>
					) : null
				}
			
				{
					step5 ? (
						<div id="user-registration-section_1-signup-step5" className="container-lg">
							<div className="row no-gutters">
								<div className="col-xl-1 col-md-12">
									<div className="user-registration-card-bg">
										<img alt="" className="p-4" src="/images/dots-variant-1.svg"/>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6 col-12">
									<div className="py-md-5 p-5 mx-3 mx-3 has-box-shadow text-center">
										<div className="row">
											<div className="col-6">
												<div className="text-left">
													<h4 onClick={() => this.setState({step5: false, step4: true})}><span> &laquo; </span>Go Back</h4>
												</div>
											</div>
											<div className="col-6">
												<div className="text-right">
													<h4>Skip this for later <span> <img alt="" className="skip-for-later ml-1" src="/images/skip-for-later.svg"/></span></h4>
												</div>
											</div>
										</div>
										<div className="col-12">
											<label className="" htmlFor="company-logo">
												<div className="image-upload">
													<img alt="" className="upload-photo-icon mx-auto cursor" src="/images/upload-photo.svg"/>
												    <ReactFileReader fileTypes={[".png",".jpg", ".jpeg"]} base64="true" handleFiles={this.handleProfileUpload}>
														<button className='btn' id="company-logo">
															<p className="mt-3">Upload your profile picture</p>
														</button>
													</ReactFileReader>
													{this.errorHtml(errors.profile_pic)}
												</div>
											</label>	 
										</div>
										<form className="my-4">
											<div className="form-group">
												<input
													onChange={(e) => this.setState({first_name: e.target.value})}
													type="text" className="form-control secondary-input" id="first-name" placeholder="First Name"/>
												{this.errorHtml(errors.first_name)}
											</div>
											<div className="form-group">
												<input 
													onChange={(e) => this.setState({last_name: e.target.value})}
													type="text" className="form-control secondary-input" id="last-name" placeholder="Last Name"/>
												{this.errorHtml(errors.last_name)}
											</div>
										</form>
										<form className="my-2">
											<div className="row">
												<div className="col-lg-6 col-12">
													<div className="form-group">
														<select 
															onChange={(e) => this.setCountry(e)}
															className="form-control secondary-select" id="country">
															<option>Select your Country</option>
															{/* {
												
																this.props.countryData.map((item, index) => {
																	return <option key={index} value={item.id}>{item.name}</option>;
																})
												
															} */}
															<option value="101">India</option>
															<option value="191">Saudi Arabia</option>
															<option value="229">United Arab Emirates</option>
														</select>
														{this.errorHtml(errors.country)}
													</div>
												</div>
												<div className="col-lg-6 col-12">
													<div className="form-group">
														<select 
															onChange={(e) => this.setStateValue(e)}
															className="form-control secondary-select" id="state">
															<option>Select your State</option>
															{
												
																this.state.stateData.map((item, index) => {
																	return <option key={index} value={item.id}>{item.name}</option>;
																})
												
															}
														</select>
														{this.errorHtml(errors.state)}
													</div>
												</div>
												<div className="col-lg-6 col-12">
													<div className="form-group">
														<select 
															onChange={(e) => this.setState({city: e.target.value})}
															className="form-control secondary-select" id="city">
															<option>Select your City</option>
															{
												
																this.state.cityData.map((item, index) => {
																	return <option key={index} value={item.id}>{item.name}</option>;
																})
												
															}
														</select>
														{this.errorHtml(errors.city)}
													</div>
												</div>
											</div>
										</form>
										<button id="signup-button" className="btn btn-gradient-secondary w-100 my-5" onClick={() => this.step5Completed()}>Get Started</button>
										{this.ClickHereForLogin()}
									</div>
								</div>
								<div className="col-lg-6 col-12 text-center text-lg-left">
									<div className="registration-artwork-top bg-dots-variant-1 bg-position-center-right-offset bg-repeat-no-repeat p-5">
										<h2>Take a break from</h2>
										<h2>financial work, and focus</h2>
										<h2>on <span className="font-weight-bold">what matters the most</span></h2>
									</div>
									<div className="registration-artwork-bottom">
										<img alt="" className="img-fluid w-90" src="/images/User-Registration-Artwork.svg"/>
									</div>
								</div>
							</div>
						</div>
					) : null
				}
				
				{
					step6 ? (
						<Login registerStep={this.registerStep}/>
					) : null
				}
				
			</section>
		);
	}

}
const mapStateToProps = state => {
	const { app } = state;
	return {
		countryData: app.countryData,
	};
};

export default connect(mapStateToProps, {sendOtp, varifyOtp, getCityData, getStateData, registerUser})(isLoadingHOC(Registration, "Loading ...."));