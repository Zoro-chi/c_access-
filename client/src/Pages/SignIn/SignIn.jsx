import { useRef } from "react";

import "./signIn.css";

const SignIn = () => {
	const email = useRef();
	const password = useRef();

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

								<span> Forgot your password? </span>
							</div>

							<button className="signIn-btn"> Sign in </button>

							<p className="new-account">
								New here?<span> Create an account </span>
							</p>
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
