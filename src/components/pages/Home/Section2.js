import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
class Section2 extends  React.Component {
	render() {
		return (
			<section id="landing-section_2">
				<div id="landing-section_2-market_leader" className="container-lg">
					<div className="row no-gutters">
						<div className="col-lg-6 col-12 text-center text-lg-left">
							{/* <!-- <h4 className="mb-4 mb-lg-0">IMAGE HERE</h4> --> */}
							<img className="img-fluid w-90" alt="" src="/images/market_leader.png"/>
						</div>
						<div className="col-lg-6 col-12 text-center text-md-left">
							<div className="p-4 p-md-6 pr-md-9 mx-3 has-box-shadow bg-dots-variant-1 bg-position-top-right-offset bg-repeat-no-repeat">
								{/* <div className="owl-carousel owl-theme"> */}
								<OwlCarousel
									className="owl-carousel owl-theme"
									loop
									//margin={30}
									items={1}
											
								>
									<div className="item">
										<h1 className="font-weight-bold mb-3">We are the Market Leader in the Middle East</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac ultrices lectus, at 
									cursus purus. Ut eu faucibus purus, sit amet fringilla enim. Vestibulum quis nisi aliquet, 
									consectetur est in, imperdiet enim. Orci varius natoque penatibus et magnis dis parturient 
									montes, nascetur ridiculus mus. Donec ex enim, posuere imperdiet venenatis vitae, rutrum 
									eget velit. Maecenas nibh velit, elementum sit amet sodales a, congue non justo.</p>
										<p>Duis convallis lorem ac sem pharetra scelerisque. Mauris ex nisi, ultrices id metus a, 
									posuere sagittis est. Aenean id blandit tellus, at suscipit justo. Suspendisse varius felis 
									sed augue posuere fringilla.</p>
									</div>
									<div className="item">
										<h1 className="font-weight-bold mb-3">We are the Market Leader <br />in the Middle East</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac ultrices lectus, at 
									cursus purus. Ut eu faucibus purus, sit amet fringilla enim. Vestibulum quis nisi aliquet, 
									consectetur est in, imperdiet enim. Orci varius natoque penatibus et magnis dis parturient 
									montes, nascetur ridiculus mus. Donec ex enim, posuere imperdiet venenatis vitae, rutrum 
									eget velit. Maecenas nibh velit, elementum sit amet sodales a, congue non justo.</p>
										<p>Duis convallis lorem ac sem pharetra scelerisque. Mauris ex nisi, ultrices id metus a, 
									posuere sagittis est. Aenean id blandit tellus, at suscipit justo. Suspendisse varius felis 
									sed augue posuere fringilla.</p>
									</div>
									<div className="item">
										<h1 className="font-weight-bold mb-3">We are the Market Leader <br />in the Middle East</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac ultrices lectus, at 
									cursus purus. Ut eu faucibus purus, sit amet fringilla enim. Vestibulum quis nisi aliquet, 
									consectetur est in, imperdiet enim. Orci varius natoque penatibus et magnis dis parturient 
									montes, nascetur ridiculus mus. Donec ex enim, posuere imperdiet venenatis vitae, rutrum 
									eget velit. Maecenas nibh velit, elementum sit amet sodales a, congue non justo.</p>
										<p>Duis convallis lorem ac sem pharetra scelerisque. Mauris ex nisi, ultrices id metus a, 
									posuere sagittis est. Aenean id blandit tellus, at suscipit justo. Suspendisse varius felis 
									sed augue posuere fringilla.</p>
									</div>
								</OwlCarousel>
								{/* </div> */}
								<button className="btn btn-gradient-secondary btn-rounded">Explore Now</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
	
} 

export default Section2;