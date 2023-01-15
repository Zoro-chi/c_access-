import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./verifyEmail.css";

const VerifyEmail = () => {
	const secure1 = useRef();
	const secure2 = useRef();
	const secure3 = useRef();
	const secure4 = useRef();
	const secure5 = useRef();
	const secure6 = useRef();
	const navigate = useNavigate();

	const handleSubmit = () => {
		navigate("/signIn");
	};

	return (
		<div className="wrap">
			<div className="verify-email">
				<div className="verify-email-left">
					<div className="verify-email-left-wrapper">
						<div className="verify-email-left-content">
							<h1> Verify Email </h1>
							<span>
								Enter the verification code sent to your email (******digital@gmail.com) to verify
								your account
							</span>
						</div>
						<div className="secure-code">
							<p> Secure code </p>
							<div className="secure-code-inputs">
								<input type="number" placeholder="0" ref={secure1} required />
								<input type="number" placeholder="0" ref={secure2} required />
								<input type="number" placeholder="0" ref={secure3} required />
								-
								<input type="number" placeholder="0" ref={secure4} required />
								<input type="number" placeholder="0" ref={secure5} required />
								<input type="number" placeholder="0" ref={secure6} required />
							</div>
							<span>
								Didn't get secure code? <span> Resend </span>
							</span>
						</div>
						<button className="verify-email-submit-btn" onClick={handleSubmit}>
							Submit
						</button>
						<p>
							<span> Click here </span> to change email address
						</p>
					</div>
				</div>
				<div className="verify-email-right">
					<div className="first-bg"></div>
					<div className="second-bg"></div>
					<div className="spiral-bg"></div>
				</div>
			</div>
		</div>
	);
};

export default VerifyEmail;
