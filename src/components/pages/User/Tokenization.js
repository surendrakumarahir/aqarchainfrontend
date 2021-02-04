import React from "react";

class Tokenization extends  React.Component {

	state = {
		tokenAddress: "",
		amount: "",
	}
    
	render(){
		return (
			<section id="user-registration-section_1">
				<div id="user-registration-section_1-signup-step1" className="container-lg">
					<div className="row no-gutters">
						<div className="col-xl-6 col-lg-6 col-md-12 col-12">
							<div className="py-md-7 p-5 mx-3 has-box-shadow">
								<div className="form-heading my-6">
									<h3 className="font-weight-bold text-dark text-center">Token Address</h3>
								</div>
								<form className="my-5">
									<div className="row">
										
										<div className="col-lg-12 col-12">
											<div className="form-group">
												<input type="text" 
													onChange={(e) => this.setState({tokenAddress: e.target.value})}
													className="form-control secondary-input" id="tokenAddress" placeholder="Token Address"/>
											</div>
											<div className="form-group">
												<input type="text" 
													onChange={(e) => this.setState({amount: e.target.value})}
													className="form-control secondary-input" id="amount" placeholder="Amount"/>
											</div>
										</div>
									</div>
								</form>
								<button id="send-otp-button" className="btn btn-gradient-secondary w-100 my-5" 
									// onClick={() => this.step1Completed()}
								>MINT</button>
							
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-12">
							<div className="py-md-7 p-5 mx-3 has-box-shadow">
								<div className="form-heading my-6">
									<h3 className="font-weight-bold text-dark text-center">Token Address</h3>
								</div>
								<form className="my-5">
									<div className="row">
										<div className="col-lg-12 col-12">
											<div className="form-group">
												<input type="text" 
													onChange={(e) => this.setState({tokenAddress: e.target.value})}
													className="form-control secondary-input" id="tokenAddress" placeholder="Token Address"/>
											</div>
											<div className="form-group">
												<input type="text" 
													onChange={(e) => this.setState({amount: e.target.value})}
													className="form-control secondary-input" id="amount" placeholder="Amount"/>
											</div>
										</div>
									</div>
								</form>
								<button id="send-otp-button" className="btn btn-gradient-secondary w-100 my-5" >Burn</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}


export default Tokenization;