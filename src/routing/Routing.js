import React from "react";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login/Login";
import KycProcess from "../components/pages/KycProcess";
import CompanyRegistration from "../components/pages/CompanyRegistration";
import SearchView from "../components/pages/SearchView";
import PropertyDetails from "../components/pages/Property/PropertyDetails";
import Registration from "../components/pages/User/registration";
import Enquery from "../components/pages/Dashboard/Enquery/Enquery";
import Agent from "../components/pages/Dashboard/Agent/AgentManagment";
import AgentAdd from "../components/pages/Dashboard/Agent/AgentAdd";
import Profile from "../components/pages/Dashboard/Profile/Profile";
import CompanyProfile from "../components/pages/Dashboard/Profile/CompanyProfile";
import PropertyAdd from "../components/pages/Dashboard/Property/PropertyAdd";
import PropertyListing from "../components/pages/Dashboard/Property/PropertyListing";

import AppRoute from "../routing/AppRoute";
import PrivateRoute from "../routing/PrivateRoute";

import DashboardLayout from "../components/layout/DashboardLayout";
import PublicLayout from "../components/layout/PublicLayout";
import Tokenization from "../components/pages/User/Tokenization";

import { Route } from "react-router-dom";
import Authorization from "./Authorization";
import KYC from "../components/pages/Dashboard/Kyc/Kyc";
const ALLUser = Authorization(["AGENT", "COMPANY", "USER"]);
const COMPANY = Authorization(["COMPANY", "AGENT"]);
const AGENT = Authorization(["AGENT"]);
const USER = Authorization(["USER"]);

const routes = (
	<>  
		<AppRoute exact path="/" component={Home} layout={PublicLayout} />
		<AppRoute exact path="/login" component={Login} layout={PublicLayout}/>
		<AppRoute exact path="/kyc-process" component={KycProcess} layout={PublicLayout}/>
		<AppRoute exact path="/company-registration" component={CompanyRegistration} layout={PublicLayout}/>
		<AppRoute exact path="/search-view" component={SearchView} layout={PublicLayout}/>
		<AppRoute exact path="/property-detail/:id" component={PropertyDetails} layout={PublicLayout}/>
		<AppRoute exact path="/user-registration" component={Registration} layout={PublicLayout}/>
		<Route exact path="/tokenization"  component={Tokenization} />
		{/* <AppRoute exact path='/dashboard' component={Dashboard} layout={DashboardLayout} /> */}
		<PrivateRoute exact path='/dashboard' component={ALLUser(Dashboard)} layout={DashboardLayout} /> 
		<PrivateRoute exact path='/dashboard/enquery' component={ALLUser(Enquery)} layout={DashboardLayout} /> 
		<PrivateRoute exact path='/dashboard/agent' component={Agent} layout={DashboardLayout} />
		<PrivateRoute exact path='/dashboard/agent/add' component={AgentAdd} layout={DashboardLayout} />  
		<PrivateRoute exact path='/dashboard/profile' component={ALLUser(Profile)} layout={DashboardLayout} /> 
		<PrivateRoute exact path='/dashboard/company-profile' component={CompanyProfile} layout={DashboardLayout} /> 
		<PrivateRoute exact path='/dashboard/property-add' component={PropertyAdd} layout={DashboardLayout} /> 
		<PrivateRoute exact path='/dashboard/property-listing' component={ALLUser(PropertyListing)} layout={DashboardLayout} />
		<PrivateRoute exact path='/dashboard/kyc' component={ALLUser(KYC)} layout={DashboardLayout} /> 
		{/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
	</>
);
export default routes;
