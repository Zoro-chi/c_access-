import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./Pages/SignUp/SignUp";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import SignIn from "./Pages/SignIn/SignIn";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Modal from "./Components/Modal";
import Desktop from "./Pages/Desktop/Desktop";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<SignUp />} />
					<Route path="/verify" element={<VerifyEmail />} />
					<Route path="/signIn" element={<SignIn />} />
					<Route path="/forgotpass" element={<ForgotPassword />} />
					<Route path="/modal" element={<Modal />} />
					<Route path="/dashboard" element={<Desktop />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
