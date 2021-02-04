import React, { Fragment } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";


export default  ({children}) => (
	<Fragment>
		<Header/>
		{children}
		<Footer/>
	</Fragment>
);
