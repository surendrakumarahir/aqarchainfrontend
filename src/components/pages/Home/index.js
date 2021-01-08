import React from "react";
import {FilterSection, FooterHome, Section2, Section3, Section4, Section5, Section6} from "../../home";
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