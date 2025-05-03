import type React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer/Footer";

const App: React.FC = () => {
	return (
		<div className="App">
			<NavBar />
			<main>
				<Outlet />{" "}
				{/*
				Affichent les pages selon les routes */}
			</main>
			<ToastContainer />
			<Footer />
		</div>
	);
};

export default App;
