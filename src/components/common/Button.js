import React from "react";

export default ({title, classes, handleClick}) => {
	return (
		<button className={classes} 
			//onClick="changeActiveTab('company-nav-tab-add-property');"
		>{title}</button>
	);
};