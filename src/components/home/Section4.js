import React, {useEffect, useState} from "react";
import {connect}  from "react-redux";
import {searchProperty} from "../../redux/actions";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {defaultOptions} from "../../config";

const Section4 = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		props.searchProperty({
			"pageNumber" : 1,
			"limit" : 10,
			"sort": -1,
			"filters": {
				"featured": true
			}
		}).then(response => {
			console.log("feature products", response);
			setData(response.data);
		}).catch( error => {
			console.log("feature error", error);
		});
	}, [props]);
	

	return (
		<section id="landing-section_4">
			<div id="landing-section_4-featured_properties" className="container-lg">
				<div className="row d-flex align-items-center no-gutters">
					<div className="col-lg-3 text-center text-lg-left">
						<h1 className="mb-3 mb-lg-0 ml-lg-3">
                        Featured <span className="font-weight-bold">Properties</span>
						</h1>
					</div>
					<div className="col-lg-9 text-center text-lg-left " >
						<div id="featured_properties_carousel">
							{
								data.length > 0 ? 
									(
										<OwlCarousel
											className="owl-carousel owl-theme owl-dots-centered"
											loop
											margin={0}
											items={3}
										>
											{
												data.map((item, index) => {
													return (
														<div className="item" key={index}>
															<div className="featured-property">
																<div className="featured-property-images d-flex justify-content-center">
																	<span className="d-none d-xl-block"><img src={`${defaultOptions.baseUrl}/${item.propPics[0]}`} alt=""/></span>
																	
																</div>
																<div className="card property-card featured-property-card has-box-shadow">
																	<div className="card-body">
																		<div className="property-id">
																			<p className="mb-1">Property ID: <span className="font-weight-bold">{item._id}</span></p>
																		</div>
																		<div className="property-meta">
																			<p className="d-flex justify-content-start">
																				<span className="mr-3">Villa</span>
																				<span className="mr-auto font-weight-bold">AED {item.price}</span>
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
														</div>
													);
												}) 
											}
										</OwlCarousel>) : null
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default connect(null, {searchProperty})(Section4);