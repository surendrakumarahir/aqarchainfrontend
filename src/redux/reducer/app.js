import {
	SAVE_LANGUAGE,
} from "../actions/types";
import { act } from "react-dom/test-utils";
let initialState = {
	user: {},
	token: "",
	language: "en",
	configData: [],
	propertyList: [],
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
	case "LOGOUT": 
		return {...state, user: {}, token: ""};
	case "PROPERTYLIST":
		return {...state, propertyList: action.payload};
	default:
		return state;
	}
}
