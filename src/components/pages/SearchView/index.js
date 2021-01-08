import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import {connect}  from "react-redux";
import {searchProperty} from "../../../redux/actions";

class SearchView extends  React.Component {
	constructor(props){
		super(props);
		this.state = {
			products: [],
		};
	}

	render() {
		return (
			<>
				<Section1/>
				<Section2/>
				<Section3/>
			</>
		);
	}
	
}

export default connect(null, {searchProperty})(SearchView);