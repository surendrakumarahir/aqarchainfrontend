import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { toast } from "react-toastify";
import {login} from "../../../redux/actions/user";
import { useHistory } from "react-router-dom";

const Login = ({registerStep}) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	let history = useHistory();
    
	const stateData = useSelector(state => state);
	const dispatch = useDispatch();
   
	const onSubmit = () => {
		console.log("state", stateData);
		console.log(email);
		console.log(password);
		if(email === "" || email === undefined || password === "" || password === undefined ){
			alert("Email and passwork should not be empty");
		} else {
			const data = {email: email, password: password};

			//dispatch(login(data));
			login(data, dispatch).then(response => {
				// console.log("response", response);
				toast.success(response);
				history.push("/dashboard");
			}).catch(error => {
				//console.log("error", error);
				toast.error(error);
			});
		}
	};
    
    
	return (
		<div id="user-registration-section_1-signup-step6" className="container-lg">
			<div className="row no-gutters">
				<div className="col-xl-1 col-md-12">
					<div className="user-registration-card-bg">
						<img alt="" className="p-4" src="/images/dots-variant-1.svg"/>
					</div>
				</div>
				<div className="col-xl-5 col-lg-6 col-md-12 col-12">
					<div className="py-md-7 p-5 mx-3 has-box-shadow">
						<div className="form-heading my-5">
							<h3 className="font-weight-bold text-dark">Login or Sign Up to take</h3>
							<h3 className="font-weight-bold text-dark">your finance to a whole new level</h3>
						</div>
						<form className="my-4">
							<div className="form-group">
								<input type="text" 
									onChange={(e) => setEmail(e.target.value)}
									className="form-control secondary-input" id="email-address" placeholder="Mobile Number/Email ID"/>
							</div>
							<div className="form-group">
								<input type="password" 
									onChange={(e) => setPassword(e.target.value)}
									className="form-control secondary-input" id="password2" placeholder="Create Password"/>
							</div>
							<div>
								<div className="form-check float-left mt-1">
									<input className="form-check-input" type="checkbox" value="" id="rememberMe"/>
									<label className="form-check-label font-weight-bold text-dark" htmlFor="rememberMe">
								Remember me
									</label>
								</div>
								<span className="form-text text-muted text-center font-weight-bold text-dark float-right">Forgot Password?</span>
							</div>
						</form>
						<button id="signup-button" className="btn btn-gradient-secondary w-100 my-6" onClick={() => onSubmit()}>Login</button>
						<small className="form-text text-muted text-center">Don't have an account? <span 
							onClick={registerStep}
							className="font-weight-bold text-dark">Click here to register</span></small>
					</div>
				</div>
				<div className="col-lg-6 col-12 text-center text-lg-left">
					<div className="registration-artwork-top bg-dots-variant-1 bg-position-center-right-offset bg-repeat-no-repeat p-5">
						<h2>Take a break from</h2>
						<h2>financial work, and focus</h2>
						<h2>on <span className="font-weight-bold">what matters the most</span></h2>
					</div>
					<div className="registration-artwork-bottom">
						<img alt="" className="img-fluid w-90" src="/images/User-Registration-Artwork.svg"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;