import React from "react";

const Profile = () => {
	return (
		<div className="tab-pane fade my-profile-view" id="company-nav-tab-my-profile" role="tabpanel" aria-labelledby="company-nav-tab-my-profile-tab">
			<div className="text-lg-left p-4 p-lg-5 has-box-shadow has-border-radius">
				<div className="row d-lg-flex align-items-center">
					<div className="col-lg-6 col-12">
						<h3 className="mb-3 mb-lg-3 font-weight-bold text-lg-left text-center">My Profile</h3>
					</div>
					<div className="col-lg-6 col-12 text-right">
						<div className="edit-button" id="edit-profile-btn" 
							//onClick="toggleProfileView('#company-nav-tab-my-profile')"
						>
							<span>Edit</span>
							<img alt="" src="public/images/icon-edit.svg"/>
						</div>
					</div>
				</div>

				<div className="row my-4">
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label htmlFor="first-name">First Name</label>
							<input type="text" className="form-control secondary-input" id="first-name" placeholder="Enter First Name" value="Ahad"/>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label htmlFor="last-name">Last Name</label>
							<input type="text" className="form-control secondary-input" id="last-name" placeholder="Enter Last Name" value="Almuqati"/>
						</div>
					</div>
				</div>
				<div className="row my-4">
					<div className="col-lg-6 col-12">
						<label>Mobile Number</label>
						<div className="form-group form-inline">
							<select className="form-control secondary-select mr-lg-2" id="mobile-no-prepend">
								<option>+966</option>
								<option>+91</option>
								<option>+93</option>
								<option>+942</option>
								<option>+933</option>
								<option>+955</option>
							</select>
							<input type="number" className="form-control secondary-input" id="mobile-no" placeholder="Enter Mobile Number" value="55564262"/>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label htmlFor="email-id">Email ID</label>
							<input type="email" className="form-control secondary-input" id="email-id" placeholder="Enter Email ID" value="ahadksa@gmail.com"/>
						</div>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label htmlFor="country">Country</label>
							<select className="form-control secondary-select" id="country">
								<option>United Arab Emirates</option>
								<option>Country #2</option>
								<option>Country #3</option>
								<option>Country #4</option>
								<option>Country #5</option>
							</select>
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="form-group">
							<label htmlFor="city">City</label>
							<select className="form-control secondary-select" id="city">
								<option>Dubai</option>
								<option>City #2</option>
								<option>City #3</option>
								<option>City #4</option>
								<option>City #5</option>
							</select>
						</div>
					</div>
				</div>
				<div className="row my-3">
					<div className="col-lg-4 col-md-6 col-12">
						<button className="btn btn-gradient-secondary d-none w-100" id="save-profile-btn" 
							//onClick="toggleProfileView('#company-nav-tab-my-profile')"
						>Save</button>
					</div>
				</div>
			</div>
		</div>
								
	);
};

export default Profile;