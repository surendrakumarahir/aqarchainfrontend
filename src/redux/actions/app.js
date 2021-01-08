import {
	USER_DATA_SAVE,
	SAVE_TOKEN,
	REMOVE_USER_DATA,
	SAVE_CONFIG_DATA,
	LOGOUT,
	SAVE_LANGUAGE,
	PROPERTYLIST,
	SAVE_FILTER,
	SAVE_PRODUCTS,
} from "./types";
// import {defaultOptions} from "../../config";
import {aqarChain} from "../../aqarchain";
// import {store} from "../store";
// let language = store.getState("app").app.language;


export const saveUserDataLogin = data => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/api/auth/login", data);
		if (response.status === 1) {
			dispatch({type: USER_DATA_SAVE, payload: response.data});
			dispatch({type: SAVE_TOKEN, token: response.data.token});
			resolve(response);
		} else {
			reject(response.message);
		}
	});
};

// property 

export const getPropertyList = () => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.get("/api/property/");
		if (response.status === 1) {
			dispatch({type: PROPERTYLIST, payload: response.data});
			resolve(response);
		} else {
			reject(response.response);
		}
	});
}; 

export const getPropertyDetails = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.get("/api/property/"+data);
		if (response.status === 1) {
			//dispatch({type: PROPERTYLIST, payload: response.data});
			resolve(response);
		} else {
			reject(response.response);
		}
	});
}; 

export const searchProperty = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		//console.log('dddd', data);
		const response = await aqarChain.post("/api/property/search", data);
		//console.log('data', response);
		if (response.status === 1) {
			dispatch({type: SAVE_PRODUCTS, payload: response.data});
			resolve(response);
		} else {
			reject(response.response);
		}
	});
}; 

export const getInTouch = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/api/auth/get/in/touch", data);
		console.log('data', response);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.response);
		}
	});
}; 
 

export const logOut = () => ({
	type: LOGOUT,
});

export const removeUserData = data => async dispatch => {
	dispatch({type: REMOVE_USER_DATA});
};

export const getConfigData = () => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.get("/api/config/");
		if (response.status === 1) {
			dispatch({type: SAVE_CONFIG_DATA, payload: response.data});
			resolve(response);
		} else {
			reject(response.message);
		}
	});
}; 


export const getCountryData = () => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.get("/api/property/all/countries/");
		if (response.status === 1) {
			dispatch({type: "COUNTRY_DATA", payload: response.data});
			resolve(response);
		} else {
			reject(response.message);
		}
	});
}; 

export const getStateData = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/api/property/country/wise-state/", data);
		if (response.status === 1) {
			//dispatch({type: "STATE_DATA", payload: response.data});
			resolve(response);
		} else {
			reject(response.message);
		}
	});
}; 

export const getCityData = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/api/property/state/wise-city/", data);
		if (response.status === 1) {
			//dispatch({type: "CITY_DATA", payload: response.data});
			resolve(response);
		} else {
			reject(response.message);
		}
	});
};

export const loading = bool => ({
	type: "LOADING",
	isLoading: bool,
});

export const error = error => ({
	type: "ERROR",
	error,
});


export const saveLanguage = language => ({
	type: SAVE_LANGUAGE,
	payload: language,
});

export const saveFilter  = data => ({
	type: SAVE_FILTER,
	payload: data,
});

export const resetFilters = () => ({
	type: "RESET_FILTER",
});

export const viewType = (data) => ({
	type: "VIEW_TYPE",
	payload: data,
});


export const sendOtp = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/api/auth/user/registration/send-otp/", data);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
		}
	});
};

export const varifyOtp = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/api/auth/user/registration/verify-otp/", data);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
		}
	});
};

export const registerUser = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/api/auth/register/", data);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
		}
	});
};

export const companyRegistration = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/api/property/company/regitration", data);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
		}
	});
};
