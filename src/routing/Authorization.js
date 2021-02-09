import React from "react";
import {useSelector} from "react-redux";

const Authorization = (allowedRoles) =>
	(WrappedComponent) => {
		
		const WithAuthorization = (props) => {
			const user = useSelector(state => state.app.user);
			const { role } = user;
			console.log("User Role: ", role);
			if (allowedRoles.includes(role)) {
				return <WrappedComponent {...props} />;
			} else {
				return <h1>No page for you!</h1>;
			}
		};
		return WithAuthorization;
	};
       
  
export default Authorization;
