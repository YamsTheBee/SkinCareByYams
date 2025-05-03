import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProduitsPage from "./pages/ProduitsPage.tsx";
import AdminAppointmentsPage from "./pages/Admin.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

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
				path: "/admin/appointments",
				element: <AdminAppointmentsPage />,
			},
			{
				path: "/loginpage",
				element: <LoginPage />,
			},
			{
				path: "/profile",
				element: <ProfilePage />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
