import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<>
				<footer className="footer footer-bg text-center">
					<div className="container-lg">
						<div className="row">
							<div className="col-lg-2 col-md-12 col-12 footer-logo-bg">
								<img className="nav-brand" src={require("../../assets/images/logo.svg")} alt="website" width="145px" height="145px"/>
							</div>
							<div className="col-lg-3 col-md-6 col-12 yellow-border-right">
								<div className="d-inline-block text-lg-left p-4">
									<h1 className="text-white mt-3">Contact Info</h1>
									<p className="text-white">E. <span className="ml-2">info@aqarchain.com</span></p>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-12 white-border-right">
								<div className="d-inline-block mt-3 text-lg-left p-4">
									<ul className="nav flex-column">
										<li className="nav-item"><a href="#abc" className="footer-link nav-link">About us</a></li>
										<li className="nav-item"><a href="#abc" className="footer-link nav-link">Blogs</a></li>
										<li className="nav-item">
											<Link className="footer-link nav-link" to="/company-registration">Company Registration</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-6 col-12">
								<div className="d-block mt-3 text-lg-left p-4">
									<ul className="nav flex-column">
										<li className="nav-item"><a href="#abc" className="footer-link nav-link">Privacy Policy</a></li>
										<li className="nav-item"><a href="#abc" className="footer-link nav-link text-nowrap">Terms and Conditions</a></li>
										<li className="nav-item"><a href="#abc" className="footer-link nav-link">Career</a></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-12 text-lg-left text-center">
								<div className="p-4 mt-4">
									<ul className="nav justify-content-center">
										<li className="nav-item">
											<a href="#abc" className="nav-link"><img alt="" className="footer-image" src={require("../../assets/images/expo-2020-footer.svg")}/></a>
										</li>
										<li className="nav-item ml-4">
											<a  href="#abc" className="nav-link"><img alt="" className="footer-image" src={require("../../assets/images/vision-2030-footer.svg")}/></a>
										</li>
										<li className="nav-item ml-4">
											<a href="#abc" className="nav-link"><img alt="" className="footer-image" src={require("../../assets/images/vision-2021-footer.png")}/></a>
										</li>
									</ul>
									<p className="text-white copyright-text pl-lg-4">© All rights reserved by<span className="text-warning ml-1">Smartchain</span></p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer;