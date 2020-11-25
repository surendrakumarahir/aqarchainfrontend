import {
	ADD_ADMIN_USER,
	ADMIN_USER_SAVE,
} from "./types";
import {aqarChain} from "../../aqarchain";
  
//   export const saveUserDataLogin = data => async dispatch => {
//     return new Promise(async (resolve, reject) => {
//       const response = await aqarChain.post('/admin/adminuser/login', data);
//       if (response.status === 1) {
//         dispatch({type: USER_DATA_SAVE, payload: response.data});
//         dispatch({type: SAVE_TOKEN, token: response.data.token});
//         resolve(response)
//       } else {
//         reject(response.message);
//       }
//   });
//   };
  
  
  
// export const getAdminUserList = () => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.get("/admin/adminuser/");
// 		if (response.status === 1) {
// 			dispatch({type: ADMIN_USER_SAVE, payload: response.data});
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 
// export const addAdminUser = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.post("/admin/adminuser/register", data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const getAdminUser = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.get("/admin/adminuser/"+data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const updateAdminUser = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.put("/admin/adminuser/"+data.id, data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const deleteAdminUser = (id) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.delete("/admin/adminuser/"+id);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const getRoleList = () => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.get("/admin/role/");
// 		if (response.status === 1) {
// 			dispatch({type: ADMIN_USER_SAVE, payload: response.data});
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const addRole = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.post("/admin/role/", data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const getRole = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.get("/admin/role/"+data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const updateRole = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.put("/admin/role/"+data.id, data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const deleteRole = (id) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.delete("/admin/role/"+id);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

  
/* feature type */
// export const getFeatureTypeList = () => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.get("/admin/propertyFeature/");
// 		if (response.status === 1) {
// 			dispatch({type: ADMIN_USER_SAVE, payload: response.data});
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 
// export const addFeatureType = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.post("/admin/propertyFeature/", data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const getFeatureType = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.get("/admin/propertyFeature/"+data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const updateFeatureType = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.put("/admin/propertyFeature/"+data.id, data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const deleteFeatureType = (id) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.delete("/admin/propertyFeature/"+id);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 


/* property type */
// export const getPropertyTypeList = () => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.get("/admin/propertyType/");
// 		if (response.status === 1) {
// 			dispatch({type: ADMIN_USER_SAVE, payload: response.data});
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 
// export const addPropertyType = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.post("/admin/propertyType/", data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const getPropertyType = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.get("/admin/propertyType/"+data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const updatePropertyType = (data) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.put("/admin/propertyType/"+data.id, data);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 

// export const deletePropertyType = (id) => async dispatch => {
// 	return new Promise(async (resolve, reject) => {
// 		const response = await aqarChain.delete("/admin/propertyType/"+id);
// 		if (response.status === 1) {
// 			resolve(response);
// 		} else {
// 			reject(response.message);
// 		}
// 	});
// }; 