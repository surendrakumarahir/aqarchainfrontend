import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Banking from "./components/pages/Banking";
import Documentation from "./components/pages/Documentation";
import Login from "./components/pages/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";

const routes = (
	<>
		<PrivateRoute exact path='/' component={Dashboard} />
		<PrivateRoute exact path='/banking' component={Banking} />
		<PrivateRoute exact path='/documentation' component={Documentation} />
		<Route exact path="/login" component={Login}></Route>
		{/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
	</>
);
export default routes;
