import React from "react";

class PropertyAdd extends React.Component {
  
	render() {
		return (
			<div className="tab-pane fade" id="company-nav-tab-add-property" role="tabpanel" aria-labelledby="company-nav-tab-add-property-tab">
				<div className="text-lg-left p-4 p-lg-5 has-box-shadow">
					<div className="row">
						<div className="col-lg-2 col-12">
							<label className="mb-lg-0 mb-3">Sale Type</label>
						</div>
						<div className="col-lg-9 col-12">
							<div className="form-group">
								<div className="form-check form-check-inline mr-3">
									<input className="form-check-input" type="radio" name="interested-option" id="interested_in_buy" value="buy"/>
									<label className="form-check-label" htmlFor="interested_in_buy">Buy</label>
								</div>
								<div className="form-check form-check-inline mr-3">
									<input className="form-check-input" type="radio" name="interested-option" id="interested_in_rent" value="rent"/>
									<label className="form-check-label" htmlFor="interested_in_rent">Rent</label>
								</div>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="listedBy">Listed By</label>
								<select className="form-control secondary-select">
									<option>Agent</option>
									<option>Owner</option>
									<option>Admin</option>
								</select>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="company">Your Company</label>
								<input type="text" className="form-control secondary-input" id="company" placeholder="Enter Your Company"/>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="company">Property Name</label>
								<input type="text" className="form-control secondary-input" id="propertyName" placeholder="Enter Property Name"/>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="listedBy">Select Property Type</label>
								<select className="form-control secondary-select">
									<option>Villa</option>
									<option>Condo</option>
									<option>Studio Apt</option>
								</select>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="country">Currency</label>
								<select className="form-control secondary-select">
									<option>AED</option>
									<option>BHD</option>
									<option>HKD</option>
									<option>JOD</option>
								</select>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="price">Price</label>
								<input type="text" className="form-control secondary-input" id="price" placeholder="Enter Price"/>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="country">Country</label>
								<select className="form-control secondary-select">
									<option>United Arad Emirates</option>
									<option>KSA</option>
								</select>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="city">City</label>
								<select className="form-control secondary-select">
									<option>Dubai</option>
									<option>Abu Dhabi</option>
									<option>Sharjah</option>
									<option>Ajman</option>
									<option>Al Ain</option>
								</select>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-12">
							<div className="row">
								<div className="col-lg-12 col-12">
									<iframe title="iframevalue" src="https://www.google.com/maps/d/embed?mid=1kbKceIQ_9WA5qYSCD8YrH4BGgx1pJZHZ&z=12" width="100%" height="480" style={{padding: "7px"}}></iframe>
									<div id="map"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="address1">Address Line 1</label>
								<input type="text" className="form-control secondary-input" id="address1" placeholder="Enter Address"/>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="address2">Address Line 2</label>
								<input type="text" className="form-control secondary-input" id="address2" placeholder="Enter Property Name"/>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-12">
							<div className="form-group">
								<label className="ml-2" htmlFor="desciption">Property Desciption</label>
								<textarea className="form-control secondary-input" rows="5" id="desciption"></textarea>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-12">
							<label className="ml-2">Property Features</label>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-lg-4 col-md-6 col-12 my-lg-0 my-2">
							<div className="form-group">
								<label className="ml-2" htmlFor="beds">No. of Beds</label>
								<select className="form-control secondary-select">
									<option>01</option>
									<option>02</option>
									<option>03</option>
									<option>04</option>
									<option>05</option>
									<option>06</option>
								</select>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12 my-lg-0 my-2">
							<div className="form-group">
								<label className="ml-2" htmlFor="beds">No. of Baths</label>
								<select className="form-control secondary-select">
									<option>01</option>
									<option>02</option>
									<option>03</option>
									<option>04</option>
									<option>05</option>
									<option>06</option>
								</select>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-12 my-lg-0 my-2">
							<div className="form-group">
								<label className="ml-2" htmlFor="area">Total Property Area</label>
								<div className="row">
									<div className="col-lg-6">
										<input type="number" className="form-control secondary-input" id="area"/>
									</div>
									<div className="col-lg-6 my-lg-0 my-2">
										<select className="form-control secondary-select">
											<option>Sq. ft</option>
											<option>Sq. m</option>
											<option>acre</option>
										</select>
									</div>
								</div>       
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-12">
							<label className="ml-2">Property Amenities</label>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="elevator"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="elevator">
                                                    Elevator
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="powderRoom"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="powderRoom">
                                                    Powder Room
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="mainRoom"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="mainRoom">
                                                    Maid Room
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="laundryRooom"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="laundryRooom">
                                                    Laundry Room
								</label>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="driverRoom"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="driverRoom">
                                                    Driver Room
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="openParking"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="openParking">
                                                    Open Parking
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="coveredParking"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="coveredParking">
                                                    Covered Parking
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="freeParking"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="freeParking">
                                                    Free Parking
								</label>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="terrace"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="terrace">
                                                    Terrace
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="balcony"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="balcony">
                                                    Balcony
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="courtyard-1"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="courtyard-1">
                                                    Courtyard
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="garden"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="garden">
                                                    Garden
								</label>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="playingArea"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="playingArea">
                                                    Children Play Area
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="swimmingPool"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="swimmingPool">
                                                    Swimming Pool
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="gym"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="gym">
                                                    Gym
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="courtyard-2"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="courtyard-2">
                                                    Courtyard
								</label>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="splitAC"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="splitAC">
                                                    Split AC
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="sports"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="sports">
                                                    Sports & Recreation
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="centralAC"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="centralAC">
                                                    Central AC
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="wifi"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="wifi">
                                                    WiFi
								</label>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="furnished"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="furnished">
                                                    Furnished
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="windowAC"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="windowAC">
                                                    Window AC
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="kitchenCabinetry"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="kitchenCabinetry">
                                                    Kitchen Cabinetry
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="kitchenAppliances"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="kitchenAppliances">
                                                        Kitchen Appliances
								</label>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="walkInCloset"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="walkInCloset">
                                                    Walk in closet
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="barbequeArea"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="barbequeArea">
                                                    Barbeque Area
								</label>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="builtInWardrobes"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="builtInWardrobes">
                                                    Build in Wardrobes
								</label>
							</div>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-12">
							<label className="my-4">Add Property Photos ( Main Cover Photo )</label>
							<label className="dashed-border p-4" htmlFor="cover-photo">
								<div className="image-upload">
									<img alt="" className="mx-auto cursor" src="public/images/Upload.svg" style={{width: "30px"}}/>
									<input type="file"
										className="custom-file-input d-none"
										accept="image/*" id="cover-photo"/>
									<p className="mt-3">Drag or Upload here</p>
								</div>
							</label>
						</div>
					</div>
					<div className="row row my-3">
						<div className="col-12">
							<label className="my-4">Add More Photos ( Adding More Photos can boost the lead )</label>
							<label className="dashed-border p-4" htmlFor="more-photos">
								<div className="image-upload">
									<img alt="" className="mx-auto cursor" src="public/images/Upload.svg" style={{width: "30px"}}/>
									<input type="file"
										className="custom-file-input d-none"
										accept="image/*" id="more-photos"/>
									<p className="mt-3">Drag or Upload here</p>
								</div>
							</label>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-lg-6 col-12">
							<label htmlFor="video-link" className="ml-2 mb-3">Video Link</label>
							<input className="form-control secondary-input" id="video-link"/>
						</div>
						<div className="col-lg-6 col-12 my-lg-0 my-2">
							<label className="dashed-border p-4" htmlFor="360-video">
								<div className="image-upload">
									<img alt="" className="mx-auto cursor" src="public/images/Upload.svg" style={{width: "30px"}}/>
									<input type="file"
										className="custom-file-input d-none"
										accept="image/*" id="360-video"/>
									<p className="mt-3">360 Video Upload</p>
								</div>
							</label>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-7 col-12 my-2">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="termsAndConditions"/>
								<label className="form-check-label font-weight-bold text-dark" htmlFor="termsAndConditions">
                                                   Agree to terms and conditions
								</label>
							</div>
						</div>
					</div>
					<div className="row my-4">
						<div className="col-lg-4 col-md-6 col-12">
							<button id="signup-button" className="btn btn-gradient-secondary w-100 my-5" 
								//onClick="changeActiveTab('company-nav-tab-dashboard');"
							>Add Property</button>
						</div>
					</div>
				</div>
			</div>
								
		);
	}
}

export default PropertyAdd;