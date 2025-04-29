import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import Produits from "./pages/Produits.tsx";
import Rdv from "./Components/Rdv.tsx";


const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "Produits",
				element: <Produits />,
			},
			{
				path: "rdv",
				element: <Rdv />,
			},
		
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
