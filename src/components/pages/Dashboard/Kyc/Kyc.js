import React from "react";
import DashboardComponent from "../Dashboard.component";
const KYC = () => {
	return (
		<DashboardComponent>
			<div className="tab-pane fade active show" id="user-dashboard-nav-tab-kyc" role="tabpanel" aria-labelledby="user-dashboard-nav-tab-kyc-tab">
				{/* <!--KYC CONFIRMED--> */}
				<div className="text-center text-lg-left py-lg-4 px-lg-5 p-3 has-box-shadow has-border-radius kyc-status-confirmed my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-bold mb-3 mb-lg-0">KYC Status</h3>
						</div>
						<div className="col-lg-8 col-12 d-flex justify-content-end align-items-center">
							<img alt="" className="icon-24 mr-2" src="/public/images/kyc-confirmation-icon-white.svg" />
							<h5 className="text-white font-weight-bold mb-0">Confirmed</h5>
						</div>
					</div>
				</div>
				<div className="text-center text-lg-left py-lg-3 px-lg-5 p-3 has-box-shadow has-border-radius my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-medium mb-3 mb-lg-0">Identity Verification</h3>
						</div>
						<div className="col-lg-4 offset-lg-2 col-12 text-right">
							<p className="text-success font-weight-bold mb-0">Confirmed</p>
						</div>
						<div className="col-lg-2 col-12">
							<button className="btn btn-blue btn-sm btn-rounded w-100" onclick="changeActiveTab('user-dashboard-nav-tab-kyc-document-list')">View</button>
						</div>
					</div>
				</div>
				<div className="text-center text-lg-left py-lg-3 px-lg-5 p-3 has-box-shadow has-border-radius my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-medium mb-3 mb-lg-0">Source of Wealth</h3>
						</div>
						<div className="col-lg-4 offset-lg-2 col-12 text-right">
							<p className="text-success font-weight-bold mb-0">Confirmed</p>
						</div>
						<div className="col-lg-2 col-12">
							<button className="btn btn-blue btn-sm btn-rounded w-100" onclick="changeActiveTab('user-dashboard-nav-tab-kyc-document-list')">View</button>
						</div>
					</div>
				</div>
				{/* <!--KYC Pending--> */}
				<div className="text-center text-lg-left py-lg-4 px-lg-5 p-3 has-box-shadow has-border-radius kyc-status-pending my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-bold mb-3 mb-lg-0">KYC Status</h3>
						</div>
						<div className="col-lg-8 col-12 d-flex justify-content-end align-items-center">
							<img alt="" className="icon-24 mr-2" src="/public/images/kyc-pending-icon-black.svg"/>
							<h5 className="font-weight-bold text-dark mb-0">Pending</h5>
						</div>
					</div>
				</div>
				<div className="text-center text-lg-left py-lg-3 px-lg-5 p-3 has-box-shadow has-border-radius my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-medium mb-3 mb-lg-0">Identity Verification</h3>
						</div>
						<div className="col-lg-4 offset-lg-2 col-12 text-right">
							<p className="text-success font-weight-bold mb-0">Confirmed</p>
						</div>
						<div className="col-lg-2 col-12">
							<button className="btn btn-blue btn-sm btn-rounded w-100" onclick="changeActiveTab('user-dashboard-nav-tab-kyc-document-list')">View</button>
						</div>
					</div>
				</div>
				<div className="text-center text-lg-left py-lg-3 px-lg-5 p-3 has-box-shadow has-border-radius my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-medium mb-3 mb-lg-0">Source of Wealth</h3>
						</div>
						<div className="col-lg-4 offset-lg-2 col-12 text-right">
							<p className="text-warning font-weight-bold mb-0">Pending</p>
						</div>
						<div className="col-lg-2 col-12">
							<button className="btn btn-blue btn-sm btn-rounded w-100" onclick="changeActiveTab('user-dashboard-nav-tab-kyc-document-list')">View</button>
						</div>
					</div>
				</div>
				{/* <!--KYC Rejected--> */}
				<div className="text-center text-lg-left py-lg-4 px-lg-5 p-3 has-box-shadow has-border-radius kyc-status-rejected my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-bold mb-3 mb-lg-0">KYC Status</h3>
						</div>
						<div className="col-lg-8 col-12 d-flex justify-content-end align-items-center">
							<img alt="" className="icon-24 mr-2" src="/public/images/kyc-rejected-icon-white.svg"/>
							<h5 className="font-weight-bold text-white mb-0">Rejected</h5>
						</div>
					</div>
				</div>
				<div className="text-center text-lg-left py-lg-3 px-lg-5 p-3 has-box-shadow has-border-radius my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-medium mb-3 mb-lg-0">Identity Verification</h3>
						</div>
						<div className="col-lg-4 offset-lg-2 col-12 text-right">
							<p className="text-danger font-weight-bold mb-0">Rejected</p>
						</div>
						<div className="col-lg-2 col-12">
							<button className="btn btn-blue btn-sm btn-rounded w-100" onclick="changeActiveTab('user-dashboard-nav-tab-kyc-document-list')">View</button>
						</div>
					</div>
				</div>
				<div className="text-center text-lg-left py-lg-3 px-lg-5 p-3 has-box-shadow has-border-radius my-4">
					<div className="row d-lg-flex align-items-center">
						<div className="col-lg-4 col-12">
							<h3 className="font-weight-medium mb-3 mb-lg-0">Source of Wealth</h3>
						</div>
						<div className="col-lg-4 offset-lg-2 col-12 text-right">
							<p className="text-danger font-weight-bold mb-0">Rejected</p>
						</div>
						<div className="col-lg-2 col-12">
							<button className="btn btn-blue btn-sm btn-rounded w-100" onclick="changeActiveTab('user-dashboard-nav-tab-kyc-document-list')">View</button>
						</div>
					</div>
				</div>
			</div>
		</DashboardComponent>
	);
};

export default KYC;