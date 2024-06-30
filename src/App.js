import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import NavBar from "./components/common/navBar";
import Home from "./components/home/home";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		
		<div className="App">

		<NavBar/>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="*" element={<Notfound />} />
			</Routes>

		</div>
	);
}

export default App;
