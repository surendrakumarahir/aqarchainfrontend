import React from "react";
import UserInfo from "../common/UserInfo";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<ul className="list-unstyled components">
			<UserInfo />

			<li>
				{/* <a href="#homeSubmenu" aria-expanded="false">Dashboard
                    </a> */}
				<NavLink to="/" activeClassName="not-active">
          Dashboard
				</NavLink>
			</li>
			{/* <li>
				<NavLink to="/exchange" activeClassName="active">
          Exchange
				</NavLink>
			</li> */}

			<li>
				<NavLink to="/property" activeClassName="active">
          Property
				</NavLink>
			</li>
			<li>
				<NavLink to="/banking" activeClassName="active">
          Banking
				</NavLink>
			</li>
			<li>
				<NavLink to="/documentation" activeClassName="active">
          Documentation
				</NavLink>
			</li>
		</ul>
	);
};
export default Nav;
