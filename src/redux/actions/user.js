// import {
// 	ADD_ADMIN_USER,
// 	ADMIN_USER_SAVE,
// } from "./types";
import {aqarChain} from "../../aqarchain";

 

export const login = (data, dispatch) => {
	return new Promise((resolve, reject) => {
		aqarChain.post("/api/auth/login", data).then(response => {
			console.log("console.log", response);
			if (response.status === 1) {
				dispatch({type: "USER_DATA_SAVE", payload: response.data});
				resolve(response.message);
			} else {
				reject(response.message);
			}
		}).catch(error => {
			reject(error);
		});
		//console.log(response);
		
	});
};
export const getUserList = () => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.get("/admin/user/");
		console.log(response);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
		}
	});
}; 
export const addUser = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.post("/admin/user/", data);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response);
		}
	});
}; 

export const getUser = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.get("/admin/user/"+data);
		if (response.status === 1) {
			resolve(response);
		} else {
			console.log("response", response);
			reject(response.message);
		}
	});
}; 

export const updateUser = (data) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.put("/admin/user/"+data.id, data);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
		}
	});
}; 

export const deleteUser = (id) => async dispatch => {
	return new Promise(async (resolve, reject) => {
		const response = await aqarChain.delete("/admin/user/"+id);
		if (response.status === 1) {
			resolve(response);
		} else {
			reject(response.message);
		}
	});
}; 

