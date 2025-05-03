import { useNavigate } from "react-router-dom";
import type { User } from "../../Types/Types";
import "./ProfilePage.css";
import CreateRdv from "../Components/Rdv";
import { useEffect, useState } from "react";

function ProfilePage() {
	const [user, setUser] = useState<User | null>(null);
	const [showRdvForm, setShowRdvForm] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser) as User);
		} else {
			navigate("/login");
		}
	}, [navigate]);

	if (!user) {
		return <div>Chargement...</div>;
	}

	return (
		<div className="profile-container">
			<h1>Bonjour {user.name} 🌸</h1>
			<p className="subtitle">Ravie de vous revoir dans votre espace beauté</p>

			<div className="info-section">
				<h2>Informations personnelles</h2>
				<p>
					<strong>Email :</strong> {user.email}
				</p>
				<p>
					<strong>Date de naissance :</strong> {user.date_of_birth}
				</p>
				<p>
					<strong>Téléphone :</strong> {user.phone}
				</p>
				<p>
					<strong>Adresse :</strong> {user.address}, {user.zip_code} {user.city}
					, {user.country}
				</p>
				<p>
					<strong>Type de peau :</strong> {user.skin_type || "Non renseigné"}
				</p>
			</div>

			<div className="section">
				<h2>🌿 Produits favoris</h2>
				<p>Vous n'avez pas encore de favoris.</p>
			</div>

			<div className="section">
				<h2>🧴 Mes routines beauté</h2>
				<p>Ajoutez des produits pour construire votre routine personnalisée.</p>
			</div>

			<div className="section">
				<h2>💡 Conseils personnalisés</h2>
				<p>Bientôt disponibles selon votre type de peau et vos préférences.</p>
			</div>

			<div className="section">
				<h2>📅 Mes rendez-vous</h2>

				<p>Vous n'avez pas encore de rendez-vous.</p>
			</div>
			<div className="section">
				<button
					type="button"
					className="consult-btn"
					onClick={() => setShowRdvForm(!showRdvForm)}
				>
					{showRdvForm ? "Fermer le formulaire" : "Réserver une consultation"}
				</button>
			</div>

			{showRdvForm && (
				<div className="rdv-form-container">
					<CreateRdv onClose={() => setShowRdvForm(false)} />
				</div>
			)}

			<button
				type="button"
				onClick={() => {
					localStorage.removeItem("token");
					localStorage.removeItem("user");
					navigate("/login");
				}}
			>
				Se déconnecter
			</button>
		</div>
	);
}

export default ProfilePage;
