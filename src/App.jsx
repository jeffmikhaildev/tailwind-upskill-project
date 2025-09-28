import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";

// Component that scrolls to section hash automatically
function ScrollToHash() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			return;
		}

		const id = hash.replace("#", "");
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		} else {
			setTimeout(() => {
				document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 50);
		}
	}, [pathname, hash]);

	return null;
}

// Home page component
function Home() {
	return (
		<div className="max-w-7xl mx-auto pt-20 px-6">
			<Hero />
			<Features />
			<Workflow />
			<Pricing />
			<Testimonials />
		</div>
	);
}

const App = () => {
	return (
		<Router>
			<ScrollToHash />
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/signin"
					element={<SignIn />}
				/>
				<Route
					path="/create-account"
					element={<CreateAccount />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
