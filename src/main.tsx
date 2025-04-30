import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";

// import Rdv from "./Components/Rdv.tsx";
import ProduitsPage from "./pages/ProduitsPage.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/produits",
				element: <ProduitsPage />,
			},
			// {
			// 	path: "rdv",
			// 	element: <Rdv onClose={undefined} />,
			// },
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
