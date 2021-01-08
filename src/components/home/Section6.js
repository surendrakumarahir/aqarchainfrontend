import React, {useState, useEffect} from "react";
import {connect}  from "react-redux";
import {searchProperty} from "../../redux/actions";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {defaultOptions} from "../../config";

const  Section6 = (props) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		props.searchProperty({
			"pageNumber" : 1,
			"limit" : 10,
			"sort": -1,
		}).then(response => {
			console.log("deals products", response);
			setData(response.data);
		}).catch( error => {
			console.log("deals error", error);
		});
	}, [props]);

	return (
		<section id="landing-section_6">
			<div id="landing-section_6-investment_deals" className="container-lg">
				<div className="row d-flex align-items-center">
					<div className="col-lg-3 text-center text-lg-left">
						<h1 className="mb-3 mb-lg-0">
                        Investment <span className="font-weight-bold">Deals</span>
						</h1>
					</div>
					<div className="col-lg-9 text-center text-lg-left">
						<div id="investment_deals_carousel">
							{
								data.length > 0 ? 
									(
										<OwlCarousel
											className="owl-carousel owl-theme owl-dots-centered"
											loop
											margin={10}
											items={3}
										>
											{
												data.map((item, index) => {
													return (
														<div className="item" key={index}>
															<div className="investment-deal">
																<div className="investment-deal-images">
																	<a href="#abc">
																		<img  src={`${defaultOptions.baseUrl}/${item.propPics[0]}`} alt=""/>
																	</a>
																	<span className="investment-deal-banner">
																		<span className="mr-3">50%</span>
																		<span className="text-white">Sale</span>
																	</span>
																</div>
																<div className="card property-card investment-deal-card has-box-shadow">
																	<div className="card-body">
																		<div className="property-type mb-3">
																			<button className="btn btn-sm btn-gradient btn-rounded mx-auto">Buy</button>
																		</div>
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
   


export default connect(null, {searchProperty})(Section6);