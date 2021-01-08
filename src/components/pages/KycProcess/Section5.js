import React from "react";

const Section4 = () => {

	return (
		<div id="kyc-process-section_1-step5" class="container-lg d-none">
			<div class="row no-gutters">
				<div class="col-lg-10 offset-lg-1 col-12">
					<div class="kyc-process-outer-card py-md-9 px-lg-9 p-3 mx-3 has-box-shadow text-center">
						<div class="kyc-process-inner-card py-md-5 px-lg-5 p-4 mx-md-3 mx-0 has-box-shadow text-left">
							<div class="row">
								<div class="col-lg-8 col-md-6 col-12 d-flex justify-content-start">
									<div class="back-button">
										<img alt="" src="/images/icon-kyc-process-back_button.svg"/>
										<span>Back</span>
									</div>
								</div>
								<div class="col-lg-4 col-md-6 col-12 d-flex mt-md-0 mt-3">
									<select class="form-control secondary-select">
										<option value=''>English</option>
										<option>Arabic</option>
									</select>
								</div>
							</div>
							<div class="row my-3">
								<div class="col-lg-6 col-12">
									<div class="form-group">
										<label for="first-name">First Name</label>
										<input type="text" class="form-control secondary-input" id="first-name" placeholder="Enter First Name"/>
									</div>
								</div>
								<div class="col-lg-6 col-12">
									<div class="form-group">
										<label for="last-name">Last Name</label>
										<input type="text" class="form-control secondary-input" id="last-name" placeholder="Enter Last Name"/>
									</div>
								</div>
							</div>
							<div class="row my-3">
								<div class="col-lg-6 col-12">
									<div class="form-group">
										<label for="nationality">Nationality</label>
										<input type="text" class="form-control secondary-input" id="nationality" placeholder="Enter Nationality"/>
									</div>
								</div>
								<div class="col-lg-6 col-12">
									<div class="form-group">
										<label for="passport-no">Passport Number</label>
										<input type="text" class="form-control secondary-input" id="passport-no" placeholder="Enter Passport Number"/>
									</div>
								</div>
							</div>
							<div class="row my-3">
								<div class="col-lg-6 col-12">
									<div class="form-group">
										<label for="address-line-1">Address Line 1</label>
										<input type="text" class="form-control secondary-input" id="address-line-1" placeholder="Enter Address Line 1"/>
									</div>
								</div>
								<div class="col-lg-6 col-12">
									<div class="form-group">
										<label for="address-line-2">Address Line 2</label>
										<input type="text" class="form-control secondary-input" id="address-line-2" placeholder="Enter Address Line 2"/>
									</div>
								</div>
							</div>
							<div class="row my-3">
								<div class="col-lg-6 col-12">
									<div class="form-group">
										<label for="passport-issued-date">Passport Issued Date</label>
										<input type="text" class="form-control secondary-input" id="passport-issued-date" placeholder="Passport Issued Date"/>
									</div>
								</div>
								<div class="col-lg-6 col-12">
									<div class="form-group">
										<label for="passport-expiry-date">Passport Expiry Date</label>
										<input type="text" class="form-control secondary-input" id="passport-expiry-date" placeholder="Passport Expiry Date"/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6 col-12 my-2">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" value="" id="termsAndConditions"/>
										<label class="form-check-label font-weight-bold text-dark" for="termsAndConditions">
                             I assured the verified details
										</label>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-5 col-12">
									<button id="signup-button" class="btn btn-gradient-secondary w-100 my-5" onclick="step5Completed()">Proceed</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  
	);
	
	
};
export default Section4;