import React, {useState, useEffect} from "react";
import {connect}  from "react-redux";
import {searchProperty} from "../../redux/actions";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {defaultOptions} from "../../config";

const Section3 = (props) => {
	
	const [data, setData] = useState([]);
	useEffect(() => {
		props.searchProperty({
			"pageNumber" : 1,
			"limit" : 10,
			"sort": -1,
		}).then(response => {
			console.log("recent products", response);
			setData(response.data);
		}).catch( error => {
			console.log("error", error);
		});
	}, [props]);
	
	return (
		<section id="landing-section_3">
			<div id="landing-section_3-recent_properties" className="container-lg">
				<div className="row">
					<div className="col-lg-12 text-left">
						{
							data.length > 0 ? 
								(
									<OwlCarousel
										className="owl-carousel owl-theme owl-dots-centered"
										loop
										margin={30}
										items={4}
									>
										{
											data.map(item => {
												return (
													<div className="item" key={item._id}>
														<div className="card property-card has-box-shadow">
															<div className="property-image">
																<a href="#abc">
																	<img src={`${defaultOptions.baseUrl}/${item.propPics[0]}`} alt=""/>
																</a>
															</div>
															<div className="card-body">
																<div className="property-type mb-3">
																	<button className="btn btn-sm btn-gradient btn-custom-width btn-rounded mx-auto">{item.property_for}</button>
																</div>
																<div className="property-id">
																	<p className="mb-1">Property ID: <span className="font-weight-bold">{item._id}</span></p>
																</div>
																<div className="property-meta">
																	<p className="d-flex justify-content-start">
																		<span className="mr-3">Villa</span>
																		<span className="mr-auto font-weight-bold">{item.currency} {item.price}</span>
																	</p>
																</div>
																<div className="property-agent">
																	<img className="property-agent-image" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
																	<span className="property-agent-name">Agent: <span className="font-weight-bold">Miyadh Wahid</span></span>
																</div>
																<div className="property-specifications">
																	<p className="mb-0 d-flex justify-content-between">
																		<span className="property-specification"><img className="property-specification-icon property-specification-icon-bedrooms" src="/images/icon-property_specification-bedrooms.svg" alt=""/> { item.propertyFeature.number_of_beds} Beds</span>
																		<span className="property-specification"><img className="property-specification-icon property-specification-icon-bathrooms" src="/images/icon-property_specification-bathrooms.svg" alt=""/> { item.propertyFeature.number_of_baths} Baths</span>
																		<span className="property-specification"><img className="property-specification-icon property-specification-icon-area" src="/images/icon-property_specification-area.svg" alt=""/> { item.propertyFeature.propertyArea}</span>
																	</p>
																</div>
															</div>
														</div>
													</div>
										
												);
											}) 
										}
									</OwlCarousel>) : null
						}
					</div>
				</div>
			</div>
		</section>
	);
};
export default connect(null, {searchProperty})(Section3);