import React from "react";
const Section5 = () => {
	return (
		<section id="landing-section_5">
			<div id="landing-section_5-fractional_ownership" className="container-lg">
				<div className="row no-gutters">
					<div className="col-lg-6 text-center">
						{/* <!-- <h4 className="mb-4 mb-lg-0">IMAGE HERE</h4> --> */}
						<img alt="" className="img-fluid w-90" src="/images/fo-image.png"/>
					</div>
					<div className="col-lg-6 text-center text-md-left">
						<div className="p-4 p-md-6 pr-md-9 mx-3 has-box-shadow bg-dots-variant-1 bg-position-top-right-offset bg-repeat-no-repeat">
							<h1 className="font-weight-bold mb-3">What is Fractional Ownership</h1>
							<p><span className="font-weight-bold">Fractional</span> ownership is a method in which several unrelated parties can share in,
                        and mitigate the risk of, ownership of a high-value tangible asset, usually a jet,
                        yacht or piece of resort real estate. It can be done for strictly monetary reasons,
                        but typically there is some amount of personal access involved.</p>
							<p className="mb-4"><span className="font-weight-bold">How does fractional ownership work?</span> In fractional ownership, you own a share of
                        the real estate itself and are issued a deed for the property, not a time that you can
                        use the home. This keeps the costs lower than whole ownership, but you still have
                        access to the home if you are satisfied with the sharing model.</p>
							<button className="btn btn-gradient-secondary btn-rounded">Explore Now</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}; 

export default Section5;