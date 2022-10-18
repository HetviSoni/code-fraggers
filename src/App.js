import "./App.css";
import Header from "./components/header/header";
import HomePage from "./components/body/homepage";
import SignupForm from "./components/signUp/SignupForm";
import LoginForm from "./components/signIn/login";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<Fragment>
			
			<body className="mainbody">
			{/* <HomePage />
			<SignupForm className="login"/> */}
			<Router>
        		<Routes>
					<Route path="/code-fraggers/login" caseSensitive={false} element={<LoginForm />} />
					<Route path="/code-fraggers/register" caseSensitive={false} 
					element={<SignupForm />} />
					<Route exact path="/code-fraggers" caseSensitive={false} element={<HomePage />} />
				</Routes>
			</Router>

				{/* <HomePage /> */}
				{/* <SignupForm className="login"/> */}
				{/* <LoginForm className="login"/> */}
			</body>
		</Fragment>
	);
}
export default App;
