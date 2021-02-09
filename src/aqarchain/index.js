import {defaultOptions} from "../config";
import {store} from "../redux/store";

class AqarChain {

	post(path, data = null) {
		return this.send(path, "POST", data);
	}

	put(path, data = null) {
		return this.send(path, "PUT", data);
	}

	get(path, data = null) {
		return this.send(path, "GET", data);
	}

	delete(path, data = null) {
		return this.send(path, "DELETE");
	}

	send(url, method, data) {
		//let uri = `${this.base_url}${this.root_path}${url}`;
		//console.log('data', data);
		let language = store.getState("app").app.language;
		let token = store.getState("app").app.token;
		let uri = `${defaultOptions.baseUrl}${url}`;
		console.log(uri);
		const headers = {
			//APIKEY: `${defaultOptions.apikey}`,
			"Content-Type": "application/json",
			//'Content-Type': 'multipart/form-data',
			localization: language ? language : "en",
		};
		//console.log(token);
		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}
		return new Promise((resolve, reject) => {
			console.log({
				uri, method, headers, data,
			});
			let option = "";
			if(method === "GET") {
				option = { method, headers};
			} else {
				option = { method, headers, body: JSON.stringify(data)};
			}
			console.log("option", option);
      
			fetch(uri, option)
				.then(response => {
					console.log(response);
					if (response.ok) {
						return response.json();
					}
					// Possible 401 or other network error
					console.log("status", response.status);
					if (response.status === 500 || response.status === 404) {
						let customResponse = {
							status: 0,
							data: {
								error: ["Something go wrong"],
							},
						};
						return customResponse;
						// reject(new Error(customResponse));
					} else if(response.status === 400 || response.status === 401){
						return response.json();
					}
					return response
						.json()
						.then(errorResponse => Promise.reject(errorResponse));
				})
				.then(responseData => {
					// debugger;
					console.log(responseData);
					resolve(responseData);
				})
				.catch(error => {
					console.log("error", error);
					//const customError = this.getErrorMessageForResponce(error);
					reject(new Error("Something go wrong"));
					//reject(error);
				});
		});
	}

	// getErrorMessageForResponce(data) {
	//   const params = data.parameters;
	//   let {message} = data;
	//   if (typeof params !== 'undefined') {
	//     if (Array.isArray(params) && params.length > 0) {
	//       data.parameters.forEach((item, index) => {
	//         message = message.replace(`%${index + 1}`, item);
	//       });
	//       return message;
	//     }
	//     _.forEach(params, (value, name) => {
	//       message = message.replace(`%${name}`, value);
	//     });
	//   }
	//   return message;
	// }
}

export const aqarChain = new AqarChain();
