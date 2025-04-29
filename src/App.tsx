import type React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";


const App: React.FC = () => {
	return (
		<div className="App">
			<NavBar />
			<main>
				<Outlet /> {/* c’est ici que s’affichent les pages selon les routes */}
			</main>
		</div>
	);
};

export default App;
