import React from "react";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login/Login";
import KycProcess from "../components/pages/KycProcess";
import CompanyRegistration from "../components/pages/CompanyRegistration";
import SearchView from "../components/pages/SearchView";
import PropertyDetails from "../components/pages/Property/PropertyDetails";
import Registration from "../components/pages/User/registration";

import AppRoute from "../routing/AppRoute";
import PrivateRoute from "../routing/PrivateRoute";

import DashboardLayout from "../components/layout/DashboardLayout";
import PublicLayout from "../components/layout/PublicLayout";

const routes = (
	<>  
		<AppRoute exact path="/" component={Home} layout={PublicLayout} />
		<AppRoute exact path="/login" component={Login} layout={PublicLayout}/>
		<AppRoute exact path="/kyc-process" component={KycProcess} layout={PublicLayout}/>
		<AppRoute exact path="/company-registration" component={CompanyRegistration} layout={PublicLayout}/>
		<AppRoute exact path="/search-view" component={SearchView} layout={PublicLayout}/>
		<AppRoute exact path="/property-detail/:id" component={PropertyDetails} layout={PublicLayout}/>
		<AppRoute exact path="/user-registration" component={Registration} layout={PublicLayout}/>
		<AppRoute exact path='/dashboard' component={Dashboard} layout={DashboardLayout} />
		{/* <PrivateRoute exact path='/dashboard' component={Dashboard} layout={DashboardLayout} /> */}
		{/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
	</>
);
export default routes;
