import React from "react";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Route} from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import PrivateRoute from "./routing/PrivateRoute";
import Home from "./components/pages/Home";
import CompanyRegistration from "./components/pages/CompanyRegistration";
import kycProcess from "./components/pages/KycProcess";
import SearchView from "./components/pages/SearchView";
import PropertyDetails from "./components/pages/Property/PropertyDetails";
import Registration from "./components/pages/User/registration";

const routes = (
	<>  
	    <Route exact path='/' component={Home} />
		<Route exact path='/company-registration' component={CompanyRegistration} />
		<Route exact path="/login" component={Login}></Route>
		<Route exact path="/kyc-process" component={kycProcess}></Route>
		<Route exact path="/search-view" component={SearchView} />
		<Route exact path="/property-detail/:id" component={PropertyDetails} />
		<Route exact path="/user-registration" component={Registration} />
		<PrivateRoute exact path='/dashboard' component={Dashboard} />
		
		{/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
	</>
);
export default routes;
