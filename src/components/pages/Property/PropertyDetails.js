import React from "react";
import {defaultOptions} from "../../../config";
import {connect}  from "react-redux";
import {getPropertyDetails} from "../../../redux/actions";
class PropertyDetails extends  React.Component { 
	constructor(props){
		super(props);
		this.state = {
			data: {},
			whatup: false,
			email: false,
		};
	}
	componentDidMount() {
		console.log("idd", this.props.match.params.id);
		//this.setState({data: this.props.location.query});
		this.props.getPropertyDetails(this.props.match.params.id).then(response => {
			console.log("rproperty", response);
			if(response.data.length > 0) {
				this.setState({data: response.data[0]});
			}
			
		}).catch(error => {
			console.log("error", error);
		});
	}

	render() {
		console.log("dataaa", this.state.data);
		const {data} = this.state;
		return (
			<>
				<section id="property-detail-header">
					<div className="container-lg">
						<div className="row">
							<div className="col-lg-12 text-center text-lg-left">
								<p className="mt-3 mb-0">Property ID: <span className="font-weight-bold">{data._id}</span></p>
								<h1 className="font-weight-bold mb-3">{data.title}</h1>
							</div>
						</div>
					</div>
				</section>
				<section id="property-detail-hero">
					<div className="container-lg">
						<div className="row">
							<div className="col-lg-8 text-center">
								<div id="property-detail-hero-image" className="mb-4 mb-lg-0">
									<a href="https://placehold.jp/48/1e282e/fae439/1200x900.jpg?text=Property%20Hero" data-fancybox="property-detail-hero-gallery" data-caption="Property Hero">
										{
											data.hasOwnProperty("propPics") > 0 ? <img src={`${defaultOptions.baseUrl}/${data.propPics[0]}`} alt=""/> : null
										}
										
									</a>
									{
										data.aqarVerified ? (
											<div id="property-detail-hero-image-badge">
												<img src="/images/aqarchain-verified.svg" alt="" className="mr-2"/> Aqarverified
											</div>
										): null
									}
									
								</div>
							</div>
							<div className="col-lg-4 text-center">
								<div id="property-detail-hero-gallery">
									<div id="property-detail-hero-gallery-images">
										<a className="property-detail-hero-gallery-image" href="https://placehold.jp/48/1e282e/fae439/1200x900.jpg?text=Property%20Detail" data-fancybox="property-detail-hero-gallery" data-caption="Property Detail #1">
											<img src="https://placehold.jp/72/1e282e/fae439/1200x900.jpg?text=Property%20Detail" alt=""/>
										</a>
										<a className="property-detail-hero-gallery-image" href="https://placehold.jp/48/1e282e/fae439/1200x900.jpg?text=Property%20Detail" data-fancybox="property-detail-hero-gallery" data-caption="Property Detail #2">
											<img src="https://placehold.jp/72/1e282e/fae439/1200x900.jpg?text=Property%20Detail" alt=""/>
										</a>
										<a className="property-detail-hero-gallery-image" href="https://placehold.jp/48/1e282e/fae439/1200x900.jpg?text=Property%20Detail" data-fancybox="property-detail-hero-gallery" data-caption="Property Detail #3">
											<img src="https://placehold.jp/72/1e282e/fae439/1200x900.jpg?text=Property%20Detail" alt=""/>
										</a>
										<a className="property-detail-hero-gallery-image" href="https://placehold.jp/48/1e282e/fae439/1200x900.jpg?text=Property%20Detail" data-fancybox="property-detail-hero-gallery" data-caption="Property Detail #4">
											<img src="https://placehold.jp/72/1e282e/fae439/1200x900.jpg?text=Property%20Detail" alt=""/>
										</a>
										<a className="property-detail-hero-gallery-image" href="https://placehold.jp/48/1e282e/fae439/1200x900.jpg?text=Property%20Detail" data-fancybox="property-detail-hero-gallery" data-caption="Property Detail #5">
											<img src="https://placehold.jp/72/1e282e/fae439/1200x900.jpg?text=Property%20Detail" alt=""/>
										</a>
										<a className="property-detail-hero-gallery-image" href="https://placehold.jp/48/1e282e/fae439/1200x900.jpg?text=Property%20Detail" data-fancybox="property-detail-hero-gallery" data-caption="Property Detail #6">
											<img src="https://placehold.jp/72/1e282e/fae439/1200x900.jpg?text=Property%20Detail" alt=""/>
										</a>
									</div>
									<div id="property-detail-hero-gallery-find-more" data-fancybox-trigger="property-detail-hero-gallery">
										<h2 className="text-white font-weight-bold mb-0">+ Find More</h2>
									</div>
								</div>
								<div id="property-detail-share" className="mt-3 mt-lg-4 mb-3">
									<div className="d-flex justify-content-between">
										<p className="mr-auto mb-0">
									Share Via
										</p>
										<div id="property-detail-share-icons" className="">
											<a href="#abc" title="Share via Facebook" className=""><img src="/images/icon-share-facebook.svg" alt="Facebook"/></a>
											<a href="#abc" title="Share via Twitter" className=""><img src="/images/icon-share-twitter.svg" alt="Twitter"/></a>
											<a href="#abc" title="Share via Whatsapp" className=""><img src="/images/icon-share-whatsapp.svg" alt="Whatsapp"/></a>
											<a href="#abc" title="Share via Email" className=""><img src="/images/icon-share-email.svg" alt="Email"/></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> 
				<section id="property-detail-meta-and-banner">
					<div id="property-detail-meta" className="container-lg">
						<div className="row">
							<div className="col-lg-8">
								<div id="property-detail-meta-top">
									<div className="text-center d-block d-lg-flex justify-content-center">
										<div id="property-detail-meta-360_tour" className="d-block d-lg-flex property-detail-meta align-items-center pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4"><img alt="" src="/images/icon-property-detail-meta-360_tour.svg"/><span className="ml-3">360° tour</span></div>
										<div id="property-detail-meta-video" className="d-block d-lg-flex property-detail-meta align-items-center pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4"><img alt="" src="/images/icon-property-detail-meta-video.svg"/><span className="ml-3">Video</span></div>
										<div id="property-detail-meta-report" className="d-block d-lg-flex property-detail-meta align-items-center"><img alt="" src="/images/icon-property-detail-meta-report.svg"/><span className="ml-3">Report</span></div>
									</div>
								</div>
								<div id="property-detail-meta-middle">
									<div className="text-center d-block text-lg-left d-lg-flex justify-content-center">
										<div id="property-detail-meta-price" className="property-detail-meta pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-5 mr-lg-5">
											<h2 className="mb-0">Price</h2>
											<h1 className="mb-0 font-weight-bold">AED {data.price}</h1>
										</div>
										<div id="property-detail-meta-location" className="property-detail-meta pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-5 mr-lg-5">
											<h2 className="mb-0">Location</h2>
											<h1 className="mb-0 font-weight-bold">{data.district}, {data.city}</h1>
										</div>
										<div id="property-detail-meta-type" className="property-detail-meta">
											<h2 className="mb-0">Type</h2>
											{
												data.hasOwnProperty("property_type") ? (
													<h1 className="mb-0 font-weight-bold">{data.property_type[0].type_title}</h1>
												): null
											}
											
										</div>
									</div>
								</div>
								<div id="property-detail-meta-bottom">
									
									{
										data.hasOwnProperty("propertyFeature"	)? (
											<div className="text-center d-block d-lg-flex justify-content-center align-items-center">
												<div id="property-detail-meta-bedrooms" className="d-block d-lg-flex property-detail-meta align-items-center pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4"><img alt="" src="/images/icon-icon-property-detail-meta-bedrooms.svg"/><span className="ml-3 font-weight-bold">{data.propertyFeature.number_of_beds} Bed</span></div>
												<div id="property-detail-meta-bathrooms" className="d-block d-lg-flex property-detail-meta align-items-center pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4"><img alt="" src="/images/icon-property-detail-meta-bathrooms.svg"/><span className="ml-3 font-weight-bold">{data.propertyFeature.number_of_baths} Bath</span></div>
												<div id="property-detail-meta-area" className="d-block d-lg-flex property-detail-meta align-items-center"><img alt="" src="/images/icon-property-detail-meta-area.svg"/><span className="ml-3 font-weight-bold">{data.propertyFeature.propertyArea}</span></div>
											</div>
										): null
									}
									
								</div>
							</div>
						</div>
					</div>
					<div id="property-detail-banner" className="container-lg">
						<div className="row">
							<div className="col-lg-8 text-center">
								<div className="mt-5 mb-5">
									<a href="#abc">
										<img className="img-fluid" src="/images/property-detail-banner.png" alt="Best Deals in Dubai"/>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div id="property-detail-tab-links" className="container-lg">
						<div className="row">
							<div className="col-lg-8">
								<ul className="nav nav-tabs nav-tabs nav-justified md-tabs" id="property-detail-tabs" role="tablist">
									<li className="nav-item mx-md-1 m-2">
										<a className="nav-link text-nowrap" id="property-detail-tab-listed-by-tab" data-toggle="tab" href="#property-detail-tab-listed-by" role="tab" aria-controls="property-detail-tab-listed-by" aria-selected="true">Listed By</a>
									</li>
									<li className="nav-item mx-md-1 m-2">
										<a className="nav-link active" id="property-detail-tab-description-tab" data-toggle="tab" href="#property-detail-tab-description" role="tab" aria-controls="property-detail-tab-description" aria-selected="false">Description</a>
									</li>
									<li className="nav-item mx-md-1 m-2">
										<a className="nav-link" id="property-detail-tab-amenities-tab" data-toggle="tab" href="#property-detail-tab-amenities" role="tab" aria-controls="property-detail-tab-amenities" aria-selected="false">Amenities</a>
									</li>
									<li className="nav-item mx-md-1 m-2">
										<a className="nav-link" id="property-detail-tab-location-tab" data-toggle="tab" href="#property-detail-tab-location" role="tab" aria-controls="property-detail-tab-location" aria-selected="false">Location</a>
									</li>
									<li className="nav-item mx-md-1 m-2">
										<a className="nav-link" id="property-detail-tab-reviews-tab" data-toggle="tab" href="#property-detail-tab-reviews" role="tab" aria-controls="property-detail-tab-review" aria-selected="false">Reviews</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section id="property-detail-content">
					<div className="container-lg">
						<div className="row">
							<div className="col-lg-8">
								<div className="tab-content mt-3 mb-3" id="property-detail-tabs-content">
									<div className="tab-pane fade" id="property-detail-tab-listed-by" role="tabpanel" aria-labelledby="property-detail-tab-listed-by-tab">
										<div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
											<h2 className="font-weight-bold mb-4">Listed By</h2>
											{
												data.hasOwnProperty("belongTo") ? (
													<p>{`${data.belongTo[0].first_name} ${data.belongTo[0].last_name}`}</p>
												): null
											}   
										</div>
									</div>
									<div className="tab-pane fade show active" id="property-detail-tab-description" role="tabpanel" aria-labelledby="property-detail-tab-description-tab">
										<div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
											<h2 className="font-weight-bold mb-4">Description</h2>
											{data.description}
										</div>
									</div>
									<div className="tab-pane fade" id="property-detail-tab-amenities" role="tabpanel" aria-labelledby="property-detail-tab-amenities-tab">
										<div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow bg-black">
											<h2 className="font-weight-bold mb-4">Amenities</h2>
											<div id="property-detail-amenities" className="text-center d-block d-lg-flex justify-content-around">
												{/* <div className="property-detail-amenity">
													<img src="/images/icon-amenities-laundry.svg" alt="Laundry"/>
													<p className="mb-3 mt-3 mb-lg-0 font-weight-bold">Laundry</p>
												</div>
												<div className="property-detail-amenity">
													<img src="/images/icon-amenities-parking.svg" alt="Parking"/>
													<p className="mb-3 mt-3 mb-lg-0 font-weight-bold">Free Parking</p>
												</div>
												<div className="property-detail-amenity">
													<img src="/images/icon-amenities-gym.svg" alt="Gym"/>
													<p className="mb-3 mt-3 mb-lg-0 font-weight-bold">Gym</p>
												</div>
												<div className="property-detail-amenity">
													<img src="/images/icon-amenities-central_ac.svg" alt="Central AC"/>
													<p className="mb-3 mt-3 mb-lg-0 font-weight-bold">Central AC</p>
												</div> */}
												{
													data.hasOwnProperty("amenities") ?  
														data.amenities.map((item, index) => {
															return (
																<div key={index} className="property-detail-amenity">
																	<img src="/images/icon-amenities-elevator.svg" alt="Elevator"/>
																	<p className="mb-3 mt-3 mb-lg-0 font-weight-bold">{item.feature}</p>
																</div>
															);
														})
														: null
												}
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="property-detail-tab-location" role="tabpanel" aria-labelledby="property-detail-tab-location-tab">
										<div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
											<h2 className="font-weight-bold mb-4">Location</h2>
											{/* <!-- <img className="img-fluid map-view" src="/images/google-map-placeholder.png"> --> */}
											<iframe src="https://www.google.com/maps/d/embed?mid=1kbKceIQ_9WA5qYSCD8YrH4BGgx1pJZHZ&z=12" width="100%" height="480" style={{border: 0}}></iframe>
										</div>
									</div>
									<div className="tab-pane fade" id="property-detail-tab-reviews" role="tabpanel" aria-labelledby="property-detail-tab-reviews-tab">
										<div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
											<h2 className="font-weight-bold mb-4">Reviews</h2>
											<div id="property-detail-reviews">
												<div className="property-detail-review d-block d-lg-flex pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4">
													<div className="property-detail-review-image">
														<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
													</div>
													<div className="property-detail-review-text mt-3 mt-lg-0 ml-lg-3">
														<p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum modi quo esse, natus explicabo quae numquam, temporibus nemo ipsam dignissimos, beatae ex illo omnis.</p>
													</div>
												</div>
												<div className="property-detail-review d-block d-lg-flex pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4">
													<div className="property-detail-review-image">
														<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
													</div>
													<div className="property-detail-review-text mt-3 mt-lg-0 ml-lg-3">
														<p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum modi quo esse, natus explicabo quae numquam, temporibus nemo ipsam dignissimos, beatae ex illo omnis.</p>
													</div>
												</div>
												<div className="property-detail-review d-block d-lg-flex pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4">
													<div className="property-detail-review-image">
														<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
													</div>
													<div className="property-detail-review-text mt-3 mt-lg-0 ml-lg-3">
														<p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum modi quo esse, natus explicabo quae numquam, temporibus nemo ipsam dignissimos, beatae ex illo omnis.</p>
													</div>
												</div>
												<div className="property-detail-review d-block d-lg-flex pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4">
													<div className="property-detail-review-image">
														<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
													</div>
													<div className="property-detail-review-text mt-3 mt-lg-0 ml-lg-3">
														<p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum modi quo esse, natus explicabo quae numquam, temporibus nemo ipsam dignissimos, beatae ex illo omnis.</p>
													</div>
												</div>
												<div className="property-detail-review d-block d-lg-flex pb-3 mb-3 pb-lg-0 mb-lg-0 pr-lg-4 mr-lg-4">
													<div className="property-detail-review-image">
														<img alt="" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
													</div>
													<div className="property-detail-review-text mt-3 mt-lg-0 ml-lg-3">
														<p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum modi quo esse, natus explicabo quae numquam, temporibus nemo ipsam dignissimos, beatae ex illo omnis.</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 col-xs-12 col-sm-8 offset-lg-0 offset-md-3 offset-sm-2 text-center">
								<div className="mb-3 mt-lg-3">
									<div id="property-contact-card" className="text-center text-lg-left p-2 has-box-shadow">
										<div className="property-contact-details">
											<div className="property-contact-details-header p-3">
												<div className="row">
													<div className="col-lg-10 col-10">
														<h3>Contact <span className="font-weight-bold">Owner / Agent</span></h3>
													</div>
													<div className="col-lg-2 col-2">
														<img alt="" className="property-detail-share-icon" src="/images/icon-property-detail-share.svg"/>
													</div>
												</div>
												<div className="row">
													<div className="col-lg-3 col-md-6 col-12 d-flex align-items-center justify-content-center">
														<img alt="" className="property-agent-image" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"/>
													</div>
													<div className="col-lg-5 col-md-6 col-12">
														<div className="d-block">
															{
																data.hasOwnProperty("belongTo") ? (
																	<p className="agent-name my-2">{data.belongTo[0].role}<br/><span className="font-weight-bold">{data.belongTo[0].first_name}</span> </p>
																) : null
															}
														
															<p className="company-name my-2">Company<br/><span className="font-weight-bold">Wajood Real<img alt="" className="company-icon" src="/images/icon-property-detail-wajood.svg"/></span></p>
														</div>
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-12">
													<ul className="list-group">
														<li className="list-group-item d-flex justify-content-between">
															<p>Total Property Listed</p>
															<p className="font-weight-bold">35</p>
														</li>
														<li className="list-group-item d-flex justify-content-between">
															<p>RERA Number</p>
															<p className="font-weight-bold">#3537</p>
														</li>
													</ul>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-12 col-12">
													<button className="btn btn-gradient-secondary w-100 mb-3"><span><img alt="" className="call-agent-icon" src="/images/icon-property-detail-call-agent.svg"/></span>Call Agent</button>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-6 col-12">
													{
														!this.state.whatup ?  <button  onClick={() => this.setState({whatup: true})} className="btn whatsapp-button">Whatsapp</button>: null
													}
													{
														data.hasOwnProperty("belongTo") ? this.state.whatup ? <p className="agent-name my-2"><span className="font-weight-bold">{data.belongTo[0].mobile}</span> </p> : null: null
													}
												</div>
												<div className="col-lg-6 col-12 mt-lg-0 mt-2">
													{
														!this.state.email ?  <button  onClick={() => this.setState({email: true})} className="btn email-button">Email</button>: null
													}
													{
														data.hasOwnProperty("belongTo") ? this.state.email ? <p className="agent-name my-2"><span className="font-weight-bold">{data.belongTo[0].email}</span> </p> : null: null
													}
												</div>
											</div>
										</div>
									</div>
									<div className="text-center text-lg-left mt-4 p-4 p-lg-5 has-box-shadow">
										<h3 className="mb-4">
								You may also <span className="font-weight-bold">Like</span></h3>
										<div className="owl-carousel" id="other-property-carousel">
											<div className="item">
												<div className="other-property">
													<div className="other-property-images">
														<a href="#abc">
															<img src="http://placehold.jp/40/1f282f/f0e25c/400x600.png?text=Other%20Property" alt=""/>
														</a>
														<span className="other-property-banner">
															<span className="mr-3">50%</span>
															<span className="text-white">Sale</span>
														</span>
													</div>
													<div className="card property-card other-property-card has-box-shadow">
														<div className="card-body">
															<div className="property-id">
																<p className="mb-1">Property ID: <span className="font-weight-bold">AQ96034</span></p>
															</div>
															<div className="property-meta">
																<p className="d-flex justify-content-start">
																	<span className="mr-3">Villa</span>
																	<span className="mr-auto font-weight-bold">AED 8000</span>
																</p>
															</div>
															<div className="property-agent">
																<img className="property-agent-image" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
																<span className="property-agent-name">Agent: <span className="font-weight-bold">Miyadh Wahid</span></span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="item">
												<div className="other-property">
													<div className="other-property-images">
														<a href="#abc">
															<img src="http://placehold.jp/40/1f282f/f0e25c/400x600.png?text=Other%20Property" alt=""/>
														</a>
														<span className="other-property-banner">
															<span className="mr-3">50%</span>
															<span className="text-white">Sale</span>
														</span>
													</div>
													<div className="card property-card other-property-card has-box-shadow">
														<div className="card-body">
															<div className="property-id">
																<p className="mb-1">Property ID: <span className="font-weight-bold">AQ96034</span></p>
															</div>
															<div className="property-meta">
																<p className="d-flex justify-content-start">
																	<span className="mr-3">Villa</span>
																	<span className="mr-auto font-weight-bold">AED 8000</span>
																</p>
															</div>
															<div className="property-agent">
																<img className="property-agent-image" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
																<span className="property-agent-name">Agent: <span className="font-weight-bold">Miyadh Wahid</span></span>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="item">
												<div className="other-property">
													<div className="other-property-images">
														<a href="#abc">
															<img src="http://placehold.jp/40/1f282f/f0e25c/400x600.png?text=Other%20Property" alt=""/>
														</a>
														<span className="other-property-banner">
															<span className="mr-3">50%</span>
															<span className="text-white">Sale</span>
														</span>
													</div>
													<div className="card property-card other-property-card has-box-shadow">
														<div className="card-body">
															<div className="property-id">
																<p className="mb-1">Property ID: <span className="font-weight-bold">AQ96034</span></p>
															</div>
															<div className="property-meta">
																<p className="d-flex justify-content-start">
																	<span className="mr-3">Villa</span>
																	<span className="mr-auto font-weight-bold">AED 8000</span>
																</p>
															</div>
															<div className="property-agent">
																<img className="property-agent-image" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
																<span className="property-agent-name">Agent: <span className="font-weight-bold">Miyadh Wahid</span></span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="text-center">
											<button className="btn btn-gradient-secondary mt-4">View All</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}
	

export default connect(null, {getPropertyDetails})(PropertyDetails);