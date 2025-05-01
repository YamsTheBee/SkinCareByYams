import { Link } from "react-router-dom";
import "./Navbar.css"; // Assure-toi d'importer le CSS personnalisé

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo">
				<a href="/" className="text-2xl font-semibold text-white">
					SkinCareByYams
				</a>
			</div>
			<ul className="nav-links">
				<li>
					<Link to="/">Accueil</Link>
				</li>
				<li>
					<Link to="/Produits">Produits</Link>
				</li>
				<li>
					<Link to="/admin/appointments">Admin Appointments</Link>
				</li>

				<li>
					<a href="#contact" className="nav-link">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
