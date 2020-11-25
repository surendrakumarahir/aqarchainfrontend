import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import {saveLanguage} from "../../redux/actions";
import { useTranslation } from "react-i18next";

const Language = ({language, saveLanguage}) => {
	const { t, i18n } = useTranslation();
	// const [lang, setLanguage] = useState("en");
  
	// useEffect(() => {
	// 	console.log("languge", language);
	// }, [language]);

	const handleChange = (e) => {
		let value = e.target.value;
		i18n.changeLanguage(value);
		saveLanguage(value);
	};
	return (
		<div className="dropdown show">
			<select className="form-control" id="exampleFormControlSelect1"
				value={language} 
				onChange={(e) => handleChange(e)}
			>
				<option>Select Language</option>
				<option value="en">English</option>
				<option value="ar">Arabic</option>
			</select>
		</div>
	);
};
const mapStateToProps = ({app}) => {
	const {language} = app;
	return {
		language,
	};
};
export default connect(mapStateToProps, {saveLanguage})(Language);
