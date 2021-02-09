import React from "react";
import {Link} from "react-router-dom";
import WelcomeComponent from "../common/Welcome.component";
import {connect} from "react-redux";

class Header extends  React.Component {
	render(){
		const {user} = this.props;
		return (
			<header className="header">
				<div className="container-lg">
					<nav className="navbar navbar-expand-lg navbar-light bg-white">
						<a className="navbar-brand mx-auto" href="/">
							<img src={require("../../assets/images/logo.svg")} style={{height: "130px"}} title="Aqarchain" alt="Aqarchain" />
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-xl-end justify-content-around" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a href="#abc" className="nav-link dropdown-toggle"  id="navbarCountryLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Country <img src={require("../../assets/images/flag-uae.svg")} alt="" id="countryFlag" title="United Arab Emirates" style={{height: "30px"}} />
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarCountryLink">
										<a className="dropdown-item" href="#abc" ><img src={require("../../assets/images/flag-ksa.svg")} alt="" style={{height: "30px"}}/> KSA</a>
										<a className="dropdown-item" href="#abc" ><img src={require("../../assets/images/flag-uae.svg")} alt="" style={{height: "30px"}}/> UAE</a>
									</div>
								</li>
								<li className="nav-item active">
									{/* <a className="nav-link" href="#">Property Management</a> */}
									<Link className="nav-link" to="/search-view">Property Management</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#abc">Investments</a>
								</li>
								<li className="nav-item">
									<a className="nav-link dropdown-toggle" href="#abc" id="navbarLanguageLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									Language
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarLanguageLink">
										<a className="dropdown-item" href="#abc">Arabic (عربى)</a>
										<a className="dropdown-item" href="#abc">English</a>
									</div>
								</li>
								<li className="nav-item">
								    {
										user?._id ? 
											<Link className="nav-link" to="/dashboard"> Welcome {user.first_name}</Link> 
											:
										 <Link className="nav-link" to="/user-registration">Login/Register</Link>
									}
									
									{/* <a className="nav-link" href="#">Login/Register</a> */}
								</li>
							</ul>
						</div>
					</nav>
				</div>
				{this.props.welcome ? <WelcomeComponent />: null}
			</header>
		);
	}
	
}
const mapStateToProps = ({app: {user}}) => {
	return {
		user: user,
	};
};
export default connect(mapStateToProps, null)(Header);
