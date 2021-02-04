import React from "react";
import {connect}  from "react-redux";
import {getInTouch} from "../../../redux/actions";
import IsLoadingHOC from "../../common/IsLoadingHOC";
import { ToastContainer, toast } from "react-toastify";
class FooterHome extends  React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
			email: "",
			contactNumber: "",
			interestedIn: "",
			message: "",
		};
	}
	validateEmail = (email) =>{
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	jsonToURI = (json) => 
	{ return encodeURIComponent(JSON.stringify(json)); }
onSubmit = () => {
	const {name, email, contactNumber, interestedIn, message} = this.state;
	
	if(name === "") {
		alert("name should not be empty");
		return false;
	} else if(email === "") {
		alert("email should not be empty");
		return false;
	} else if(contactNumber === "") {
		alert("contactNumber should not be empty");
		return false;
	} else if(interestedIn === "") {
		alert("Interest should  be selected");
		return false;
	} else if(message === "") {
		alert("message should not be empty");
		return false;
	}
	if (!this.validateEmail(email)) {
		alert("Email should be correct formate");
		return false;
	}

	const { setLoading } = this.props;
	setLoading(true);
	//    var form_data = new FormData();
	//    const data = this.state;

	// for ( var key in data ) {
	// 	   console.log('key', key);
	// 	form_data.append(key, data);
	// }
	// console.log('fasfsdf', this.jsonToURI(this.state));
	this.props.getInTouch(this.state).then(response => {
	//console.log("get in touch", response);
		this.setState({data: response.data,
			name: "",
			email: "",
			contactNumber: "",
			interestedIn: "",
			message: "",
		});
		setLoading(false);
		toast.success(response.message);
	}).catch( error => {
		console.log("error", error);
		setLoading(false);
		toast.error(error);
	});
	

}

render() {
	const {name, email, contactNumber, interestedIn, message} = this.state;
	// console.log("state value", this.state);
	return (
		<footer className="footer">
			<ToastContainer />
			<div id="footer-form-container" className="container-lg">
				<div className="row no-gutters">
					<div className="col-lg-11">
						<div id="footer-form">
							<div className="row">
								<div className="col-lg-4 text-center text-lg-left">
									<h1 className="mb-5">
			Let’s Get in <span className="font-weight-bold">Touch</span>
									</h1>
									<hr className="height-4 bg-gradient no-border mb-5 w-50 mx-auto mx-md-0" />
									<p className="mb-5">Praesent risus massa, scelerisque sed auctor vel, faucibus eu ipsum. Aliquam justo 
		nisl, lacinia ac condimentum et, consectetur eu eros.</p>
									<h3 className="mb-0"><a href="mailto:sales@aqarchain.com"><span className="text-dark font-weight-bold">sales@aqarchain.com</span></a></h3>
									<hr className="height-2 bg-gradient no-border mb-5 w-50 mx-auto mx-md-0" />
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<input type="text"  value={name} onChange={(e) => this.setState({name: e.target.value})} className="form-control" placeholder="Your Name"/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<input type="email" value={email} onChange={(e) => this.setState({email: e.target.value})} className="form-control" placeholder="Your Email"/>
											</div>
										</div>
									</div>
									<div className="row mb-4">
										<div className="col-md-12">
											<div className="form-group">
												<input type="text" value={contactNumber} onChange={(e) => this.setState({contactNumber: e.target.value})} className="form-control" placeholder="Contact Number"/>
											</div>
										</div>
									</div>
									<div className="row mb-5">
										<div className="col-md-12">
											<span className="mr-4">Interested In: </span>
											<div className="form-check form-check-inline mr-3">
												<input name="interested"
													checked={interestedIn === "BUY"}
													onChange={(e) => this.setState({interestedIn: "BUY"})}
													className="form-check-input" type="radio" id="interested_in_buy" value="BUY"/>
												<label className="form-check-label" htmlFor="interested_in_buy">Buy</label>
											</div>
											<div className="form-check form-check-inline mr-3">
												<input name="interested"
													checked={interestedIn === "RENT"}
													onChange={(e) => this.setState({interestedIn: "RENT"})}
													className="form-check-input" type="radio" id="interested_in_rent" value="RENT"/>
												<label className="form-check-label" htmlFor="interested_in_rent">Rent</label>
											</div>
											<div className="form-check form-check-inline mt-md-0 mt-3">
												<input 
													checked={interestedIn === "FRACTIONAL"}
													onChange={(e) => this.setState({interestedIn: "FRACTIONAL"})}
													name="interested" className="form-check-input" type="radio" id="interested_in_fractional_property" value="FRACTIONAL"/>
												<label className="form-check-label" htmlFor="interested_in_fractional_property">Fractional Property</label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group">
												<textarea value={message} onChange={(e) => this.setState({message: e.target.value})} className="form-control" rows="5" placeholder="Message"></textarea>
											</div>
										</div>
									</div>
									<div className="row mb-3">
										<div className="col-md-12">
				CAPTCHA HERE
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<button onClick={() => this.onSubmit()} className="form-submit btn btn-lg btn-gradient-secondary">Send Message</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-1">
						<div className="social-icons d-flex justify-content-around align-self-stretch h-100 d-inline-block">
							<div className="social-icon" title="Whatsapp">
								<a href="#abc" title="Whatsapp">
									<img src={require("../../../assets/images/icon-social_media-whatsapp.svg")} alt="Whatsapp"/>
								</a>
							</div>
							<div className="social-icon" title="Linkedin">
								<a href="#abc" title="Linkedin">
									<img src={require("../../../assets/images/icon-social_media-linkedin.svg")} alt="Linkedin"/>
								</a>
							</div>
							<div className="social-icon" title="Twitter">
								<a href="#abc" title="Twitter">
									<img src={require("../../../assets/images/icon-social_media-twitter.svg")} alt="Twitter"/>
								</a>
							</div>
							<div className="social-icon" title="Instagram">
								<a href="#abc" title="Instagram">
									<img src={require("../../../assets/images/icon-social_media-instagram.svg")} alt="Instagram"/>
								</a>
							</div>
							<div className="social-icon" title="Facebook">
								<a href="#abc" title="Facebook">
									<img src={require("../../../assets/images/icon-social_media-facebook.svg")} alt="Facebook"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>

	);
}

}

export default connect(null, {getInTouch})(IsLoadingHOC(FooterHome, "Loading"));
