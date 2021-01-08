import React from "react";
import {connect}  from "react-redux";
import {searchProperty} from "../../../redux/actions";
import {defaultOptions} from "../../../config";
import Loading from "../../common/Loading";
import PaginationCustom from "../../common/PaginationCustom";
import {Link} from "react-router-dom";
import Main from "../../common/map/main";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => {
	return (
		<div>{text}
			<img className="markerMap" src="/images/marker.jpg" alt=""/>
		</div>);
};

class Section3 extends  React.Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};
	constructor(props){
		super(props);
		this.state = {
			loading: false,
			activePage: 1, 
			totalItemsCount: 200,
			itemCountPerpage: 5,
		};
	}
	componentDidMount() {
		this.getList();
	}
	handlePagination = async (activePage) => {
		console.log("worknkajfksdj");
		await this.setState({activePage: activePage});
		this.getList();
	}
	handleShowNumberOfRecords = async (itemCountPerpage) => {
		await this.setState({itemCountPerpage: itemCountPerpage});
		this.getList();
	}

	getList = () => {
		const {itemCountPerpage, activePage} = this.state;
		this.setState({loading: true});
		//let objectArray = {};
		// if(startDate) {
		// 	objectArray.startDate = startDate;
		// }
		// if(endDate) {
		// 	objectArray.endDate = endDate;
		// }
		// if(itemCountPerpage) {
		// 	objectArray.recordPerPage = itemCountPerpage;
		// }
		// if(activePage) {
		// 	objectArray.pageNo = activePage;
		// }
		// if(sortingKey) {
		// 	objectArray.sortingKey = sortingKey;
		// 	objectArray.sortBy = sortBy;
		// }
		

		this.props.searchProperty({
			"pageNumber" : activePage,
			"limit" : itemCountPerpage,
			
		}).then(response => {
			console.log("data filter page", response);
			this.setState({loading: false});
		}).catch( error => {
			console.log("error", error);
			this.setState({loading: false});
		});
	}
	
	view = id => {
		console.log("id");
		// this.context.router.push({ //browserHistory.push should also work here
		// 	pathname: "/property-detail",
		// 	state: {yourCalculatedData: id}
		// }); 
		// this.props.history.push({
		// 	pathname:"/property-detail",
		// 	state:{
		// 		key:"value"
		// 	 }
		//    });

		// hashHistory.push("/property-detail");
		
	}
	render() {
		// console.log("props", this.props.products);
		console.log(defaultOptions);
		const {  loading, activePage, totalItemsCount, itemCountPerpage} = this.state;
		const {products, viewType} = this.props;
		
		return (
			<section id="search-section_3">
				<div id="search-section_3-results" className="container-lg">
					<div className="row">
						<div className="col-lg-12">
							{
								viewType === "list" ?  
									(
										<div id="search-results-list">
											{ loading ? <Loading />: null }
											{
												products.length > 0 ? 
													products.map((item, index) => {
														return  (
															<div className="list-property" key={index}>
																<div className="row">
																	<div className="col-xl-3 text-center">
																		<div className="list-property-image mb-1 mb-xl-0">
																			<a href="#abc">
																				<img src={`${defaultOptions.baseUrl}/${item.propPics[0]}`} alt="" className="w-100"/>
																			</a>
																		</div>
																	</div>
																	<div className="col-xl-9">
																		<div className="list-property-content">
																			<div className="list-property-content-header">
																				<p className="mb-0 d-block d-lg-flex justify-content-center justify-content-lg-start align-items-center text-center">
																					<span className="d-block d-lg-flex mb-2 mb-lg-0 mr-lg-5 ml-lg-auto">Property ID: <span className="font-weight-bold ml-2">{item._id}</span></span>
																					<span className="d-block d-lg-flex mb-2 mb-lg-0 mr-lg-auto font-weight-bold">{item.title}</span>
																					<span className="d-block d-lg-flex ml-lg-5"><img src="/images/aqarchain-verified.svg" alt="" className="mr-2"/> Aqarverified</span>
																				</p>
																			</div>
																			<div className="list-property-content-company">
																				<div className="mb-0 d-block d-lg-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-end text-center">
																					<div className="property-agent d-block d-lg-flex flex-column align-items-center mb-2 mb-lg-0 mr-lg-5 text-center">
																						<img className="property-agent-image mx-auto mx-lg-0 mb-2 d-block d-lg-flex" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt=""/>
																						<span className="property-agent-name d-block d-lg-flex">Agent: <span className="font-weight-bold ml-2">Miyadh Wahid</span></span>
																					</div>
																					<span className="property-registration d-block d-lg-flex mb-2 mb-lg-0 mr-lg-auto">Rera No.: <span className="font-weight-bold ml-2">#3537</span></span>
																					<div className="property-company d-flex justify-content-center justify-content-lg-end align-items-center ml-lg-5 text-left">
																						<span className="property-company-name">Company: <br/><span className="font-weight-bold">Wajood Real</span></span>
																						<img className="property-company-image" src="/images/placeholder-company-logo.svg" alt=""/>
																					</div>
																				</div>
																			</div>
																			<div className="list-property-content-details">
																				<div className="d-block d-lg-flex justify-content-center justify-content-lg-between align-items-center mb-4 text-center">
																					<div className="property-meta d-block d-lg-flex mr-5 mb-3 mb-lg-0">
																						<div className="property-price pb-2 mb-3 pb-lg-0 mb-lg-0 pr-lg-3 mr-lg-3">
																							<p className="mb-2 mb-lg-0">Price <br/><span className="font-weight-bold">AED {item.price}</span></p>
																						</div>
																						<div className="property-location pb-2 mb-3 pb-lg-0 mb-lg-0 pr-lg-3 mr-lg-3">
																							<p className="mb-2 mb-lg-0">Location <br/><span className="font-weight-bold">{item.address}, {item.city}, {item.district}, {item.country.country_name} </span></p>
																						</div>
																						<div className="property-type">
																							<p className="mb-0">Type <br/><span className="font-weight-bold">Villa</span></p>
																						</div>
																					</div>
																					<div className="property-share d-flex justify-content-center">
																						<div className="property-rating pr-2 mr-2 pr-lg-3 mr-lg-3">
																							<img src="/images/icon-star-active.svg" alt=""/>
																							<img src="/images/icon-star-active.svg" alt=""/>
																							<img src="/images/icon-star-active.svg" alt=""/>
																							<img src="/images/icon-star.svg" alt=""/>
																							<img src="/images/icon-star.svg" alt=""/>
																						</div>
																						<div className="property-like pr-2 mr-2 pr-lg-3 mr-lg-3">
																							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.73 25.62" id="icon-list_property-like">
																								<title>Like</title>
																								<g id="icon-list_property-like-1" data-name="Layer 1">
																									<g id="icon-list_property-like-2" data-name="Layer 2">
																										<path d="M26.73,15.31A2.47,2.47,0,0,0,26,13.56a2.77,2.77,0,0,0,.71-2.12,2.88,2.88,0,0,0-2.91-2.53H16.93a15.64,15.64,0,0,0,.89-4.45C17.82,2,15.77,0,14.48,0a3.48,3.48,0,0,0-2,.68.55.55,0,0,0-.21.43V4.89L9,11.84l-.13.07v-.22a.56.56,0,0,0-.56-.55H2.78A2.79,2.79,0,0,0,0,13.92v8.91a2.79,2.79,0,0,0,2.78,2.79H6.13a2.8,2.8,0,0,0,2.62-1.84,7.31,7.31,0,0,0,2.95.72H21.92a2.55,2.55,0,0,0,2.52-1.94,2.45,2.45,0,0,0-.2-1.67,2.52,2.52,0,0,0,1.38-2.23,2.49,2.49,0,0,0-.26-1.12A2.49,2.49,0,0,0,26.73,15.31Zm-2.35,1.38a.55.55,0,0,0-.46.38.57.57,0,0,0,.14.58,1.33,1.33,0,0,1,.44,1A1.38,1.38,0,0,1,23.27,20a.56.56,0,0,0-.47.38A.57.57,0,0,0,23,21a1.37,1.37,0,0,1,.4,1.33,1.43,1.43,0,0,1-1.43,1.07H11.7a5.24,5.24,0,0,1-2.95-.95.55.55,0,0,0-.61-.12.54.54,0,0,0-.34.51A1.67,1.67,0,0,1,6.13,24.5H2.78a1.67,1.67,0,0,1-1.67-1.67V13.92a1.67,1.67,0,0,1,1.67-1.67h5v.56a.56.56,0,0,0,.26.47.57.57,0,0,0,.54,0l1.12-.56a.57.57,0,0,0,.25-.26l3.34-7.24A.53.53,0,0,0,13.37,5V1.42a2.3,2.3,0,0,1,1.11-.31c.61,0,2.23,1.52,2.23,3.35a17.29,17.29,0,0,1-1.08,4.81.55.55,0,0,0,.52.75h7.66a1.77,1.77,0,0,1,1.8,1.52,1.66,1.66,0,0,1-.79,1.57.6.6,0,0,0-.27.5.57.57,0,0,0,.3.47,1.38,1.38,0,0,1-.47,2.61Z"/><path d="M8.35,12.25a.56.56,0,0,0-.55.56v10a.56.56,0,1,0,1.11,0v-10A.56.56,0,0,0,8.35,12.25Z"/>
																									</g>
																								</g>
																							</svg>
																						</div>
																						<div className="property-save">
																							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.96 25.62" id="icon-list_property-save">
																								<title>Save</title>
																								<g id="icon-list_property-save-1" data-name="Layer 1">
																									<g id="icon-list_property-like-2" data-name="Layer 2">
																										<path d="M.6,25.47a1.16,1.16,0,0,0,1.18,0L10.48,20l8.7,5.44a1.17,1.17,0,0,0,1.78-1v-21A3.49,3.49,0,0,0,17.47,0h-14A3.49,3.49,0,0,0,0,3.49v21A1.15,1.15,0,0,0,.6,25.47Zm1.73-22A1.16,1.16,0,0,1,3.49,2.33h14a1.16,1.16,0,0,1,1.16,1.16V22.36L11.1,17.65a1.16,1.16,0,0,0-1.24,0L2.33,22.36Z"/>
																									</g>
																								</g>
																							</svg>
																						</div>
																					</div>
																				</div>
																				{/* 
																				  map model
																				*/}
																				{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
																				</button> */}

																				<div className="modal fade" id={item._id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
																					<div className="modal-dialog" role="document">
																						<div className="modal-content">
																							<div className="modal-header">
																								<h5 className="modal-title" id="exampleModalLabel">{item.title}</h5>
																								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
																									<span aria-hidden="true">&times;</span>
																								</button>
																							</div>
																							<div className="modal-body" style={{widht: "400px", height: "400px"}}>
																								<GoogleMapReact
																									bootstrapURLKeys={{
																										key: "AIzaSyA3lp_UtCAE2SFYcsW5QyqAcEiEdbvDEv8",
																									}}
																									defaultCenter={this.props.center}
																									defaultZoom={this.props.zoom}
																								>
																									<AnyReactComponent
																										lat={59.955413}
																										lng={30.337844}
																										text={item.title}
																									/>
																								</GoogleMapReact>
																							</div>
																							<div className="modal-footer">
																								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="d-block d-lg-flex justify-content-center justify-content-lg-between">
																					<p className="mb-3 mb-lg-0 mr-0 mr-lg-5 text-center text-lg-left">{item.discription}</p>
																					<div className="d-block d-lg-flex justify-content-center justify-content-lg-end">
																						<button type="button" data-toggle="modal" data-target={`#${item._id}`} className="btn btn-gradient-secondary btn-rounded w-100 w-lg-auto mb-2 mb-lg-0 mr-lg-3">
Location
																						</button>
																						<button 
																							onClick={() => this.view(item._id)}
																							className="btn btn-gradient btn-rounded w-100 w-lg-auto">
																				
																							<Link to={{ pathname: `/property-detail/${item._id}`, 
																								query:item}} >View</Link>
																						</button>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														);
													})
													: null
											}
							
											<PaginationCustom 
												handleShowNumberOfRecords={this.handleShowNumberOfRecords}
												handlePagination={this.handlePagination} 
												activePage={activePage}
												totalItemsCount={totalItemsCount}
												itemCountPerpage={itemCountPerpage}
											/>		
										</div>
									)
									: (
										<div id="search-results-map">
											<div className="row">
												<div className="col-lg-10 offset-lg-1 col-12">
													<div style={{height: "400px", width: "100%",padding: "10px", backgroundColor: "#ccc"}}>
														<Main data={products} />
													</div>
												</div>
											</div>
										</div>
									)
							}
						
							{/* <!--Search Map View--> */}
						</div>
					</div>
				</div>
			</section>
		);
	}

}

const mapStateToProps = state => {
	const {products, viewType} = state.app;
	console.log("products", state.app);
	return {
		products: products,
		viewType: viewType,
	};
};

export default connect(mapStateToProps, {searchProperty})(Section3);