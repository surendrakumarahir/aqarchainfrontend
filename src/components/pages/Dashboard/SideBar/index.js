import React from "react";

const Sidebar = () => {
	return (
		<nav id="sidebar">
			<div className="sidebar-top text-center">
				<div className="user-details-card has-border-radius p-4">
					<div className="user-profile-pic-section">
						<img className="user-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
						<span><img alt="" className="edit-profile-pic" src="public/images/icon-edit-profile-picture-dashboard.svg"/></span>
					</div>
					<div className="user-details mt-2">
						<p className="mb-0 font-weight-bold">Ahad Almuqati</p>
					</div>
				</div>
			</div>
			<ul className="nav nav-tabs nav-tabs dashboard-nav-tabs flex-column has-border-radius mt-5 mb-5" id="company-nav-tabs" role="tablist">
				<li className="nav-item">
					<a className="nav-link active" id="company-nav-tab-dashboard-tab" data-toggle="tab" href="#company-nav-tab-dashboard" role="tab" aria-controls="company-nav-tab-dashboard" aria-selected="true">Dashboard</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link d-none" id="company-nav-tab-add-property-tab" data-toggle="tab" href="#company-nav-tab-add-property" role="tab" aria-controls="company-nav-tab-add-property" aria-selected="false">Add Property</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="company-nav-tab-my-profile-tab" data-toggle="tab" href="#company-nav-tab-my-profile" role="tab" aria-controls="company-nav-tab-my-profile" aria-selected="false">My Profile</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="company-nav-tab-company-document-tab" data-toggle="tab" href="#company-nav-tab-company-document" role="tab" aria-controls="company-nav-tab-company-document" aria-selected="false">Company Document</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="company-nav-tab-properties-uploaded-tab" data-toggle="tab" href="#company-nav-tab-properties-uploaded" role="tab" aria-controls="company-nav-tab-properties-uploaded" aria-selected="false">Properties Uploaded</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="company-nav-tab-agent-management-tab" data-toggle="tab" href="#company-nav-tab-agent-management" role="tab" aria-controls="company-nav-tab-agent-management" aria-selected="false">Agent Management</a>
				</li>
				<li className="nav-item d-none">
					<a className="nav-link d-none" id="company-nav-tab-add-agent-tab" data-toggle="tab" href="#company-nav-tab-add-agent" role="tab" aria-controls="company-nav-tab-add-agent" aria-selected="false">Add Agent</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" id="company-nav-tab-enquires-tab" data-toggle="tab" href="#company-nav-tab-enquires" role="tab" aria-controls="company-nav-tab-enquires" aria-selected="false">Enquires</a>
				</li>
			</ul>
			<ul className="nav nav-tabs dashboard-nav-tabs has-border-radius flex-column">
				<li className="nav-item">
					<a href="#a" className="nav-link" id="logout">Log Out</a>
				</li>
			</ul>
		</nav>
	);
};

export default Sidebar;