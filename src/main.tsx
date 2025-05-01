import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProduitsPage from "./pages/ProduitsPage.tsx";
import AdminAppointmentsPage from "./pages/Admin.tsx";

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
			{
				path: "/admin/appointments", // Une route plus lisible
				element: <AdminAppointmentsPage />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
