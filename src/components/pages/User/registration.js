import React from "react";
import countryCode from "../../../config/countryCode";
import Loading from "../../common/Loading";
import {connect}  from "react-redux";
import {sendOtp, varifyOtp, getStateData, getCityData, registerUser} from "../../../redux/actions";
import { ToastContainer, toast } from "react-toastify";

class Registration extends  React.Component {
	constructor(props){
		super(props);
		this.state = {
			loading: false,
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
			role: "",
			terms: false,
			first_name: "",
			last_name: "",
			country: "",
			state: "",
			city: "",
			stateData: [],
			cityData: [],
		};
	}
	onSelectCountryCode = (value) => {
		this.setState({country_code: value});
	}
	step1Completed = () => {
		console.log("state", this.state);
		const {country_code, mobile} = this.state;
		if(country_code === "" || mobile === "") {
			alert("country code and mobile should not be empty");
			return false;
		}
		this.setState({loading: true});
		this.props.sendOtp({mobile: mobile, country_code: country_code}).then(response => {
			console.log("response", response);
			this.setState({step1: false, step2: true, optSendTo:response.data.to, loading: false});
		}).catch(error => {
			console.log(error);
			this.setState({loading: false});
		});
		
	}
	step2Completed = () => {
		console.log("state", this.state);
		const {country_code, mobile, otp} = this.state;
		console.log("otp", otp);
		if(otp === "") {
			alert("OTP should not be empty");
			return false;
		}
		this.setState({loading: true});
		this.props.varifyOtp({mobile: mobile, country_code: country_code, otp: otp}).then(response => {
			console.log("response", response);
			this.setState({step2: false, step3: true, loading: false});
		}).catch(error => {
			console.log(error);
			this.setState({loading: false});
		});
		
	}

	ValidateEmail = (email)  =>
	{
		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
		{
			return (true);
		}
		return (false);
	}

	step3Completed = () => {
		this.setState({step3: false, step4: true});
	}
	step4Completed = () => {
		const {email, password, password_confirm, terms, role} = this.state;
		if(!this.ValidateEmail(email))
		{
			alert("You have entered an invalid email address!");
			return false;
		}
		if(password === "" || password_confirm === "") {
			alert("Password and confirm password should not be empty");
			return false;
		} else if (password !== password_confirm) {
			alert("Password and confirm password should be match");
			return false;
		} else if (!terms) {
			alert("Please accept the terms and conditions");
			return false;
		} else if (role === "") {
			alert("Role should not be empty");
			return false;
		}
		this.setState({step4: false, step5: true});
	}
	step5Completed = () => {
		//this.setState({step5: false, step6: true});
		this.setState({loading: true});
		this.props.registerUser(this.state).then(response => {
			console.log(response);
			toast.success(response.message);
			this.setState({loading: false, step5: false, step6: true});
		}).catch(error => {
			console.log(error);
			this.setState({loading: false});
			toast.error(error);
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

	render(){
		const {step1, step2, step3, step4, step5, step6,  loading, optSendTo} = this.state;
		console.log(this.state);
		return (
			<section id="user-registration-section_1">
				{ loading ? <Loading />: null }
				<ToastContainer />
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
												<small className="form-text text-danger text-left">*Check your mailbox for verification</small>
											</div>
											<div className="form-group">
												<input 
													onChange={(e) => this.setState({password: e.target.value})}
													type="password" className="form-control secondary-input" id="password" placeholder="Create Password"/>
											</div>
											<div className="form-group">
												<input 
													onChange={(e) => this.setState({password_confirm: e.target.value})}
													type="password" className="form-control secondary-input" id="confirm-password" placeholder="Confirm Password"/>
											</div>
											<div className="form-group">
												<select 
													onChange={(e) => this.setState({role: e.target.value})}
													className="form-control secondary-select" id="cc">
													<option>UserType</option>
													<option value="USER">USER</option>
													<option value="AGENT">AGENT</option>
												</select>
											</div>
											<div className="form-check">
												<input 
													onChange={(e) => this.setState({terms: e.target.checked})}
													className="form-check-input" type="checkbox" value="" id="termsAndConditions"/>
												<label className="form-check-label font-weight-bold text-dark" htmlFor="termsAndConditions">
                                                     Agree to terms and conditions
												</label>
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
											<div className="col-6 col-12">
												<div className="text-right">
													<h4>Skip this for later <span> <img alt="" className="skip-for-later ml-1" src="/images/skip-for-later.svg"/></span></h4>
												</div>
											</div>
										</div>
										<div className="col-12">
											<img alt="" className="upload-photo-icon" src="/images/upload-photo.svg"/>
											<p className="mt-3">Upload your profile picture</p>
										</div>
										<form className="my-4">
											<div className="form-group">
												<input
													onChange={(e) => this.setState({first_name: e.target.value})}
													type="text" className="form-control secondary-input" id="first-name" placeholder="First Name"/>
											</div>
											<div className="form-group">
												<input 
													onChange={(e) => this.setState({last_name: e.target.value})}
													type="text" className="form-control secondary-input" id="last-name" placeholder="Last Name"/>
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
															{
												
																this.props.countryData.map((item, index) => {
																	return <option key={index} value={item.id}>{item.name}</option>;
																})
												
															}
														</select>
													</div>
												</div>
												<div className="col-lg-6 col-12">
													<div className="form-group">
														<select 
															onChange={(e) => this.setStateValue(e)}
															className="form-control secondary-select" id="city">
															<option>Select your State</option>
															{
												
																this.state.stateData.map((item, index) => {
																	return <option key={index} value={item.id}>{item.name}</option>;
																})
												
															}
														</select>
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
						<div id="user-registration-section_1-signup-step6" className="container-lg">
							<div className="row no-gutters">
								<div className="col-xl-1 col-md-12">
									<div className="user-registration-card-bg">
										<img alt="" className="p-4" src="/images/dots-variant-1.svg"/>
									</div>
								</div>
								<div className="col-xl-5 col-lg-6 col-md-12 col-12">
									<div className="py-md-7 p-5 mx-3 has-box-shadow">
										<div className="form-heading my-5">
											<h3 className="font-weight-bold text-dark">Login or Sign Up to take</h3>
											<h3 className="font-weight-bold text-dark">your finance to a whole new level</h3>
										</div>
										<form className="my-4">
											<div className="form-group">
												<input type="text" className="form-control secondary-input" id="email-address" placeholder="Mobile Number/Email ID"/>
											</div>
											<div className="form-group">
												<input type="password" className="form-control secondary-input" id="password2" placeholder="Create Password"/>
											</div>
											<div>
												<div className="form-check float-left mt-1">
													<input className="form-check-input" type="checkbox" value="" id="rememberMe"/>
													<label className="form-check-label font-weight-bold text-dark" htmlFor="rememberMe">
								Remember me
													</label>
												</div>
												<span className="form-text text-muted text-center font-weight-bold text-dark float-right">Forgot Password?</span>
											</div>
										</form>
										<button id="signup-button" className="btn btn-gradient-secondary w-100 my-6">Login</button>
										<small className="form-text text-muted text-center">Don't have an account? <span 
											onClick={() => this.registerStep()}
											className="font-weight-bold text-dark">Click here to register</span></small>
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

export default connect(mapStateToProps, {sendOtp, varifyOtp, getCityData, getStateData, registerUser})(Registration);