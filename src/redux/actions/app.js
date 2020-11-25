import {
	USER_DATA_SAVE,
	SAVE_TOKEN,
	REMOVE_USER_DATA,
	SAVE_CONFIG_DATA,
	LOGOUT,
	SAVE_LANGUAGE,
	PROPERTYLIST,
} from "./types";
import {defaultOptions} from "../../config";
import {aqarChain} from "../../aqarchain";
import {store} from "../store";
let language = store.getState("app").app.language;


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

// tokenization
export const tokenInitialize = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		let token = await store.getState("app").app.token;
		console.log("token", token);
		console.log("language", language);
		fetch(`${defaultOptions.baseUrl}/api/token/initialize`, {
			method: "POST",
			headers: {
				"Authorization":  `Bearer ${token}`,
				localization: language ? language : "en",
			  },
			body: data,
		}).then(response => {
			console.log(response);
			if (response.ok) {
				return response.json();
			}
		}).then(responseData => {
			// debugger;
			console.log(responseData);
			resolve(responseData);
		}).catch(error => {
			reject(error);
		});
		
	
	});
}; 

export const getApprovelDetails = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		let param = {};
		// if(approvel) {
		// 	param = {
		// 		approvelKey: true
		// 	};
		// } else {
		// 	param = {
		// 		approvelKey: false
		// 	};
		// }
		const response = await aqarChain.get("/api/token/approvelDetail/"+data);
		console.log("response", response);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
		}
	});
}; 

export const startTokenization = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.put("/api/token/start/"+data);
		console.log("response", response);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
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