import React from "react";
import logo from "../../assets/images/logo.jpg";
import collapse from "../../assets/images/collapse-img.png";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className="sidebar-header ">
			<Link to="/" className="logo">
				<img src={logo} className="img-fluid" />
			</Link>
			<img src={collapse} className="img-fluid" />
		</div>
	);
};
export default Logo;
