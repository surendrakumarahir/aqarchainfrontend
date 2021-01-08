import React from "react";

const Section3 = () => {

	return (
		<div id="kyc-process-section_1-step3" class="container-lg d-none">
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
							<div class="row my-md-9 my-5">
								<div class="col-lg-10 col-md-12 offset-lg-1 col-12">
									<label class="dashed-border p-4" for="trade-license">
										<div class="image-upload">
											<img alt="" class="mx-auto cursor" src="/images/Upload.svg" style={{width:"30px"}}/>
											<input type="file"
												class="custom-file-input d-none"
												accept="image/*" id="trade-license"/>
											<p class="mt-3">Upload Document 1</p>
										</div>
									</label>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-3 offset-lg-9 col-md-6 offset-md-6 col-12">
									<button class="btn btn-gradient-secondary w-100" onclick="step3Completed()">Next</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    
	);
	
	
};
export default Section3;