import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./Pages/SignUp/SignUp";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path="/" element={<SignUp />} />
					<Route path="/verify" element={<VerifyEmail />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
