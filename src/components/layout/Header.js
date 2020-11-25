import React from "react";
const Header = () => {
	return (
		<header className="header">
			<div className="container-lg">
				<nav className="navbar navbar-expand-lg navbar-light bg-white">
					<a className="navbar-brand mx-auto" href="/">
						<img src={require("../../assets/images/logo.svg")} style={{height: "130px"}} title="Aqarchain" alt="Aqarchain" />
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-xl-end justify-content-around" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link dropdown-toggle" href="#" id="navbarCountryLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									{/* Country <img src="../../assets/images/flag-uae.svg" alt="United Arab Emirates" id="countryFlag" title="United Arab Emirates" style="height: 30px;" /> */}
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarCountryLink">
									{/* <a className="dropdown-item" href="#" title="Kingdom of Saudi Arabia"><img src="../../assets/images/flag-ksa.svg" alt="Kingdom of Saudi Arabia" style="height: 30px;"/> KSA</a>
									<a className="dropdown-item" href="#" title="United Arab Emirates"><img src="../../assets/images/flag-uae.svg" alt="United Arab Emirates" style="height: 30px;"/> UAE</a> */}
								</div>
							</li>
							<li className="nav-item active">
								<a className="nav-link" href="#">Property Management</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Investments</a>
							</li>
							<li className="nav-item">
								<a className="nav-link dropdown-toggle" href="#" id="navbarLanguageLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Language
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarLanguageLink">
									<a className="dropdown-item" href="#">Arabic (عربى)</a>
									<a className="dropdown-item" href="#">English</a>
								</div>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Login/Register</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};
export default Header;
