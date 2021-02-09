import {
	SAVE_LANGUAGE,
	SAVE_FILTER,
	SAVE_PRODUCTS,
	LOGOUT,
} from "../actions/types";
let initialState = {
	user: {},
	token: "",
	language: "en",
	configData: {},
	propertyList: [],
	filters: {},
	products: [],
	viewType: "list",
	countryData: [],
	stateData: [],
	cityData: [],
};
export default function(state = initialState, action) {
	switch (action.type) {
	case SAVE_LANGUAGE:
		return {...state, language: action.payload};
	case "USER_DATA_SAVE":
		return {...state, user: action.payload};
	case "REMOVE_USER_DATA":
		return {...state, user: {}, token: ""};
	case "SAVE_TOKEN":
		return {...state, token: action.token};
	case "REMOVE_TOKEN":
		return {...state, token: action.token};
	case "SAVE_CONFIG_DATA":
		return {...state, configData: action.payload};
	case LOGOUT: 
		return {...state, user: {}, token: ""};
	case "PROPERTYLIST":
		return {...state, propertyList: action.payload};
	case SAVE_FILTER:
		return {...state, filters: {...state.filters, ...action.payload}};
	case SAVE_PRODUCTS:
		return {...state, products: action.payload};	
	case "RESET_FILTER":
		return {...state, filters: {}};	
	case "VIEW_TYPE": 
		return {...state, viewType: action.payload};	
	case "COUNTRY_DATA": 
		return {...state, countryData: action.payload};
	// case "STATE_DATA": 
	// 	return {...state, stateData: action.payload};
	// case "CITY_DATA": 
	// 	return {...state, cityData: action.payload};		
	default:
		return state;
	}
}
