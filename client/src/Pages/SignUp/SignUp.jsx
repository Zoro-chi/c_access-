import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./signUp.css";
import { register } from "../../api/authRequest";
import { checkPassRegex } from "../../utils";

const SignUp = () => {
	const firstName = useRef();
	const lastName = useRef();
	const email = useRef();
	const phone = useRef();
	const password = useRef();
	const confirmPassword = useRef();
	const navigate = useNavigate();

	const handleSubmit = async () => {
		const user = {
			firstName: firstName.current.value,
			lastName: lastName.current.value,
			email: email.current.value,
			phone: phone.current.value,
			password: password.current.value,
		};

		try {
			await register(user);
			navigate("/verify");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="wrap">
			<div className="signUp">
				<div className="signUp-left">
					<div className="signUp-form-wrapper">
						<div className="labels">
							<h1> Sign Up </h1>
							<span> We would never share your details </span>
						</div>
						<div className="form">
							<div className="name-container">
								<div className="first-name">
									<p> First name </p>
									<input
										name="firstName"
										type="text"
										placeholder="First name"
										className="first-name-input"
										required
										ref={firstName}
									/>
								</div>

								<div className="last-name">
									<p> Last name </p>
									<input
										name="lastName"
										type="text"
										placeholder="Last name"
										className="last-name-input"
										required
										ref={lastName}
									/>
								</div>
							</div>
							<div className="email-container">
								<p> Email </p>
								<input
									name="email"
									type="email"
									placeholder="you@company.com"
									className="email-input"
									required
									ref={email}
								/>
							</div>
							<div className="phone-container">
								<p> Phone number </p>
								<div className="phone-container-wrapper">
									<select name="phone-code" id="phone-code">
										<option value="NG"> NG </option>
									</select>
									<input
										name="phone"
										type="tel"
										placeholder="000-000-000"
										className="phone-input"
										required
										ref={phone}
									/>
								</div>
							</div>
							<div className="create-password">
								<p> Create password </p>
								<input
									name="password"
									type="password"
									placeholder="*********"
									className="password-input"
									minLength={8}
									required
									ref={password}
								/>
								<span>
									Minimum of 8 characters, at least one uppercase letter, and at least one special
									character
								</span>
							</div>
							<div className="confirm-password">
								<p> Confirm password </p>
								<input
									name="confirm-password"
									type="password"
									placeholder="*********"
									className="confirm-password-input"
									minLength={8}
									required
									ref={confirmPassword}
								/>
							</div>
							<div className="privacy-agreement">
								<input type="checkbox" className="privacy-checkbox" />
								<p> You agree to our friendly privacy policy. </p>
							</div>
							<button className="signUp-btn" type="button" onClick={handleSubmit}>
								Sign up
							</button>
							<Link to={"/signIn"} style={{ textDecoration: "none" }}>
								<p className="have-account">
									Already have an account? <span> Sign in </span>
								</p>
							</Link>
						</div>
					</div>
				</div>
				<div className="signUp-right">
					<div className="first-bg"></div>
					<div className="second-bg"></div>
					<div className="image-bg"></div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
