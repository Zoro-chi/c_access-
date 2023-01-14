import { useRef } from "react";

import "./forgotPassword.css";

const ForgotPassword = () => {
	const email = useRef();

	return (
		<div className="wrap">
			<div className="forgotPassword">
				<div className="forgotPassword-left">
					<div className="forgotPassword-left-wrapper">
						<div className="forgotPassword-content">
							<h1> Forgot password </h1>
							<p> A reset link would be sent to your email address </p>

							<div className="forgotPassword-email">
								<p> Email </p>
								<input
									name="forgotPassword-email"
									type="email"
									placeholder="you@company.com"
									required
									ref={email}
								/>
							</div>

							<button className="forgotPassword-btn"> Continue </button>

							<span>
								Remembered password?<span> Sign In </span>
							</span>
						</div>
					</div>
				</div>
				<div className="forgotPassword-right">
					<div className="first-bg"></div>
					<div className="second-bg"></div>
					<div className="forgotPassword-bg"></div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
