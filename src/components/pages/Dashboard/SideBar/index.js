import React from "react";
import FullName from "../../../common/FullName";
import {useDispatch} from "react-redux";
//import {logOut} from "../../../../redux/actions";
import { useHistory, useLocation, Link } from "react-router-dom";

const Sidebar = () => {
	const dispatch = useDispatch();
	let history = useHistory();
	let location = useLocation();

	const logout = () => {
		//console.log("working");
		dispatch({type: "LOGOUT"});
		history.push("/");
	};

	const CustomLink = ({url, className, id, title}) => {
		return (
			<li className="nav-item">
				<Link to={url} className={className} id={id}>{title}</Link>
			</li>
		);
	};
	return (
		<nav id="sidebar">
			<div className="sidebar-top text-center">
				<div className="user-details-card has-border-radius p-4">
					<div className="user-profile-pic-section">
						<img className="user-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
						<span><img alt="" className="edit-profile-pic" src="public/images/icon-edit-profile-picture-dashboard.svg"/></span>
					</div>
					<div className="user-details mt-2">
						<p className="mb-0 font-weight-bold"><FullName/></p>
					</div>
				</div>
			</div>
			<ul className="nav nav-tabs nav-tabs dashboard-nav-tabs flex-column has-border-radius mt-5 mb-5" id="company-nav-tabs" role="tablist">
				<CustomLink 
					url="/dashboard"
					className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}
					id="company-nav-tab-dashboard-tab"
					title="Dashboard"	  
				/>
				<CustomLink 
					url="/dashboard/kyc"
					className={`nav-link ${location.pathname === "/dashboard/kyc" ? "active" : ""}`}
					id="user-dashboard-nav-tab-kyc-tab"
					title="KYC"	  
				/>
				<CustomLink 
					url="/dashboard/profile"
					className={`nav-link ${location.pathname === "/dashboard/profile" ? "active" : ""}`}
					id="company-nav-tab-my-profile-tab"
					title="My Profile"	  
				/>
				<CustomLink 
					url="/dashboard/company-profile"
					className={`nav-link ${location.pathname === "/dashboard/company-profile" ? "active" : ""}`}
					id="company-nav-tab-company-document-tab"
					title="Company Document"	  
				/>
				<CustomLink 
					url="/dashboard/property-listing"
					className={`nav-link ${location.pathname === "/dashboard/property-listing" ? "active" : ""}`}
					id="company-nav-tab-properties-uploaded-tab"
					title="Properties Uploaded"	  
				/>
				<CustomLink 
					url="/dashboard/agent"
					className={`nav-link ${location.pathname === "/dashboard/agent" ? "active" : ""}`}
					id="company-nav-tab-agent-management-tab"
					title="Agent Management"	  
				/>
				<CustomLink 
					url="/dashboard/enquery"
					className={`nav-link ${location.pathname === "/dashboard/enquery" ? "active" : ""}`}
					id="company-nav-tab-enquires-tab"
					title="Enquires"	  
				/>
				<CustomLink 
					url="/dashboard/tokenization"
					className={`nav-link ${location.pathname === "/dashboard/tokenization" ? "active" : ""}`}
					id="user-dashboard-nav-tab-tokenization-tab-1"
					title="Tokenization"	  
				/>
				<CustomLink 
					url="/dashboard/portfolio"
					className={`nav-link ${location.pathname === "/dashboard/portfolio" ? "active" : ""}`}
					id="user-dashboard-nav-tab-my-portfolio-tab"
					title="My Portfolio"	  
				/>
				<CustomLink 
					url="/dashboard/wallet"
					className={`nav-link ${location.pathname === "/dashboard/wallet" ? "active" : ""}`}
					id="user-dashboard-nav-tab-my-wallet-tab"
					title="My Wallet"	  
				/>
			</ul>
			<ul className="nav nav-tabs dashboard-nav-tabs has-border-radius flex-column">
				<li className="nav-item">
					<div onClick={logout} className="nav-link" id="logout">Log Out</div>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;