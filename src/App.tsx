import type React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { ToastContainer } from "react-toastify"; // Importation du ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Importation des styles de Toastify

const App: React.FC = () => {
	return (
		<div className="App">
			<NavBar />
			<main>
				<Outlet /> {/* c’est ici que s’affichent les pages selon les routes */}
			</main>
			<ToastContainer />
		</div>
	);
};

export default App;
