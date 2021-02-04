import React from "react";
import {connect} from "react-redux";
// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Link,
// 	Redirect,
// 	withRouter
// } from "react-router-dom";
import {
	Route,
	Redirect,
} from "react-router-dom";
  
const PrivateRoute = ({token, adminUser, component: Component, layout: Layout, ...rest }) => {
	return (
		<Route {...rest} render={(props) => (
			token ? <Layout><Component {...props} /></Layout>
				: <Redirect to={{
					pathname: "/user-registration",
					state: { from: props.location }
				}} />
		)} />
	);
       
};

const mapStateToProps = ({app}) => {
	const { token, user} = app;
	return {
		token,
		user
	};
};
export default connect(mapStateToProps)(PrivateRoute);