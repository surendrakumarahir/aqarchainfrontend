import React from "react";

const Section1 = () => {

	return (
		<div id="kyc-process-section_1-step1" class="container-lg">
			<div class="row no-gutters">
				<div class="col-lg-10 offset-lg-1 col-12">
					<div class="kyc-process-outer-card py-md-9 px-lg-9 p-3 mx-3 has-box-shadow text-center">
						<div class="kyc-process-inner-card py-md-5 px-lg-5 p-4 mx-md-3 mx-0 has-box-shadow text-center">
							<div class="row">
								<div class="col-lg-5 offset-lg-3 col-md-6 col-12 d-flex align-items-center text-center">
									<p class="font-weight-bold mb-0">Select document for verification</p>
								</div>
								<div class="col-lg-4 col-md-6 col-12">
									<select class="form-control secondary-select">
										<option value=''>English</option>
										<option>Arabic</option>
									</select>
								</div>
							</div>
							<div class="row my-2">
								<div class="col-lg-8 col-12 offset-lg-2">
									<ul class="list-group document-list">
										<input type="radio" name="document" id="passport"/>
										<label for="passport">
											<li class="list-group-item">
												<img alt="" src="/images/icon-kyc-process-step-1_passport.svg"/>
												<p>Passport</p>
											</li>
										</label>
										<input type="radio" name="document" id="id-card"/>
										<label for="id-card">
											<li class="list-group-item">
												<img alt="" src="/images/icon-kyc-process-step-1_id-card.svg"/>
												<p>ID Card</p>
											</li>
										</label>
										<input type="radio" name="document" id="driving-license"/>
										<label for="driving-license">
											<li class="list-group-item">
												<img alt="" src="/images/icon-kyc-process-step-1_driving-license.svg"/>
												<p>Driving License</p>
											</li>
										</label>
										<input type="radio" name="document" id="credit-card"/>
										<label for="credit-card">
											<li class="list-group-item">
												<img alt="" src="/images/icon-kyc-process-step-1_credit-card.svg"/>
												<p>Credit Card</p>
											</li>
										</label>
									</ul>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-6 offset-lg-3 col-12">
									<button class="btn btn-gradient-secondary w-100" onclick="step1Completed()">Start Verification</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    
	);
	
	
};
export default Section1;