import React from "react";

const Section2 = () => {

	return (
		<div id="kyc-process-section_1-step2" class="container-lg d-none">
			<div class="row no-gutters">
				<div class="col-lg-10 offset-lg-1 col-12">
					<div class="kyc-process-outer-card py-md-9 px-lg-9 p-3 mx-3 has-box-shadow text-center">
						<div class="kyc-process-inner-card py-md-5 px-lg-5 p-4 mx-md-3 mx-0 has-box-shadow text-center">
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
							<div class="row my-4">
								<div class="col-lg-10 col-12 offset-lg-1">
									<label class="font-weight-bold" for="search-country">Select your passport issuing country</label>
									<div class="input-group">
										<div class="input-group-prepend"><img alt="" src="/images/icon-kyc-process-step-2_search.svg"/></div>
										<input class="form-control secondary-input" name="search-country" id="search-country" placeholder="Select your Country"/>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-10 col-12 offset-lg-1">
									<ul class="list-group list-group-horizontal country-list">
										<div class="row">
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item ">
													<img alt="" src="/images/icon-kyc-process-step-2_uae.svg"/>
													<p>UAE</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_usa.svg"/>
													<p>USA</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_oman.svg"/>
													<p>OMAN</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_ksa.svg"/>
													<p>KSA</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item ">
													<img alt="" src="/images/icon-kyc-process-step-2_uae.svg"/>
													<p>UAE</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_usa.svg"/>
													<p>USA</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_oman.svg"/>
													<p>OMAN</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_ksa.svg"/>
													<p>KSA</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item ">
													<img alt="" src="/images/icon-kyc-process-step-2_uae.svg"/>
													<p>UAE</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_usa.svg"/>
													<p>USA</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_oman.svg"/>
													<p>OMAN</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_ksa.svg"/>
													<p>KSA</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item ">
													<img alt="" src="/images/icon-kyc-process-step-2_uae.svg"/>
													<p>UAE</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_usa.svg"/>
													<p>USA</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_oman.svg"/>
													<p>OMAN</p>
												</li>
											</div>
											<div class="col-xl-3 col-lg-4 col-md-6 col-6">
												<li class="list-group-item">
													<img alt="" src="/images/icon-kyc-process-step-2_ksa.svg"/>
													<p>KSA</p>
												</li>
											</div>
										</div>
									</ul>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-3 offset-lg-9 col-md-6 offset-md-6 col-12">
									<button class="btn btn-gradient-secondary w-100" onclick="step2Completed()">Next</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	
	
};
export default Section2;