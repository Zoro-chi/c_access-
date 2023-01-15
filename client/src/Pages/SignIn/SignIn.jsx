import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./signIn.css";
import { login } from "../../api/authRequest";

const SignIn = () => {
	const email = useRef();
	const password = useRef();
	const navigate = useNavigate();

	const handleSubmit = async () => {
		const user = {
			email: email.current.value,
			password: password.current.value,
		};

		try {
			await login(user);
			navigate("/dashboard");
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="wrap">
			<div className="signIn">
				<div className="signIn-left">
					<div className="signIn-left-wrapper">
						<div className="signIn-form">
							<h1> Sign in </h1>
							<p> Welcome back, Please sign in to your account. </p>

							<div className="signIn-email">
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

							<div className="signIn-password">
								<p> Password </p>
								<input
									name="password"
									type="password"
									placeholder="*********"
									className="password-input"
									minLength={8}
									required
									ref={password}
								/>
								<Link to={"/forgotpass"} style={{ textDecoration: "none" }}>
									<span> Forgot your password? </span>
								</Link>
							</div>

							<button className="signIn-btn" onClick={handleSubmit}>
								Sign in
							</button>

							<Link to={"/"} style={{ textDecoration: "none" }}>
								<p className="new-account">
									New here?<span> Create an account </span>
								</p>
							</Link>
						</div>
					</div>
				</div>
				<div className="signIn-right">
					<div className="first-bg"></div>
					<div className="second-bg"></div>
					<div className="signIn-bg"></div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
