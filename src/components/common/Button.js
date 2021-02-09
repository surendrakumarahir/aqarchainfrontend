import React from "react";

export default ({title, classes, handleClick}) => {
	return (
		<button className={classes} 
			onClick={handleClick}
		>{title}</button>
	);
};