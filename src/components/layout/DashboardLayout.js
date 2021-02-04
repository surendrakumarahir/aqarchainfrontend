import React from "react";
import { Fragment } from "react";
import Header from "../layout/Header";

export default ({children}) => (
	<Fragment>
		<Header welcome={true}/>
		{children}
	</Fragment>
);