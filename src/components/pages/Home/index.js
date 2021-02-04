import React from "react";
import FilterSection from "./FilterSection";
import FooterHome from "./FooterHome";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import {connect}  from "react-redux";
import {getConfigData} from "../../../redux/actions";

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			config: [],
		};
	}
	componentDidMount = () => {
		this.props.getConfigData().then(response =>{
			console.log("resonse ", response);
			this.setState({config: response.data});
		}).catch(error => {
			console.log("error", error);
		});
	}
	render () {
		return (
			<>  
				<FilterSection/>
				<Section2/>
				<Section3/>
				<Section4/>
				<Section5/>
				<Section6/>
				<FooterHome/>
			</>
		);
	}
	
}

export default connect(null, {getConfigData})(Home);