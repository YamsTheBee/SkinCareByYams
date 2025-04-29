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
					<a href="#hydratant" className="nav-link">
						Hydratant
					</a>
				</li>
				<li>
					<a href="#nettoyant" className="nav-link">
						Nettoyant
					</a>
				</li>
				<li>
					<a href="#soins-naturels" className="nav-link">
						Soins Naturels
					</a>
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
