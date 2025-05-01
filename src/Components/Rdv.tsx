// import { useState } from "react";
// import axios from "axios";

// // Définir les types pour les props
// type CreateRdvProps = {
// 	onClose: () => void; // Fonction pour fermer la modale après la soumission
// };

// function CreateRdv({ onClose }: CreateRdvProps) {
// 	const [appointment, setAppointment] = useState({
// 		name: "",
// 		email: "",
// 		date: "",
// 		reason: "soin du visage", // Par défaut, le soin choisi est "soin du visage"
// 	});
// 	const [error, setError] = useState("");
// 	const [successMessage, setSuccessMessage] = useState("");

// 	// Gère le changement de valeur dans les inputs
// 	const handleChange = (
// 		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
// 	) => {
// 		const { name, value } = e.target;
// 		setAppointment((prevState) => ({
// 			...prevState,
// 			[name]: value,
// 		}));
// 	};

// 	// Gère la soumission du formulaire
// 	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		try {
// 			await axios.post("http://localhost:5000/appointments", appointment);
// 			setSuccessMessage("Rendez-vous créé avec succès !");
// 			onClose(); // Fermer la modal après la soumission
// 		} catch (error) {
// 			setError("Erreur lors de la création du rendez-vous.");
// 			console.error(error);
// 		}
// 	};

// 	return (
// 		<div className="rdv-modal">
// 			<div className="rdv-content">
// 				<h2>Prendre un rendez-vous</h2>
// 				{error && <p className="error">{error}</p>}
// 				{successMessage && <p className="success">{successMessage}</p>}
// 				<form onSubmit={handleSubmit}>
// 					<input
// 						type="text"
// 						name="name"
// 						placeholder="Votre nom"
// 						value={appointment.name}
// 						onChange={handleChange}
// 						required
// 					/>
// 					<input
// 						type="email"
// 						name="email"
// 						placeholder="Votre email"
// 						value={appointment.email}
// 						onChange={handleChange}
// 						required
// 					/>
// 					<input
// 						type="date"
// 						name="date"
// 						value={appointment.date}
// 						onChange={handleChange}
// 						required
// 					/>

// 					{/* Champ select pour raison du rendez-vous */}
// 					<select
// 						name="reason"
// 						value={appointment.reason}
// 						onChange={handleChange}
// 						required
// 					>
// 						<option value="soin du visage">Soin du visage</option>
// 						<option value="soin anti-âge">Soin anti-âge</option>
// 						<option value="nettoyage en profondeur">
// 							Nettoyage en profondeur
// 						</option>
// 						<option value="soin éclat du teint">Soin éclat du teint</option>
// 						<option value="hydratation intense">Hydratation intense</option>
// 						{/* Ajoute d'autres options si nécessaire */}
// 					</select>

// 					<button type="submit">Prendre un rendez-vous</button>
// 				</form>

// 				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
// <button className="close-button" onClick={onClose}>
// 					Fermer
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default CreateRdv;

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CreateRdvProps = {
	onClose: () => void;
};

function CreateRdv({ onClose }: CreateRdvProps) {
	// Initialisation de l'état avec un user_id temporaire (à remplacer plus tard)
	const [appointment, setAppointment] = useState({
		user_id: "1", // ID utilisateur temporaire
		name: "",
		email: "",
		date: "",
		reason: "soin du visage",
	});
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	// Gère le changement de valeur dans les champs du formulaire
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setAppointment((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Gère la soumission du formulaire
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			// Envoie des données à l'API backend
			await axios.post("http://localhost:5000/appointments", appointment);
			setSuccessMessage("Rendez-vous créé avec succès !");

			// Affiche un toast de confirmation avec un cœur
			toast.success(
				<>
					Rendez-vous pris avec succès{" "}
					<span role="img" aria-label="heart">
						💖
					</span>
				</>,
				{
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				},
			);

			// Ferme la modal après soumission
			onClose();
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (error: any) {
			if (error.response) {
				// La requête a été faite et le serveur a répondu avec un code d'erreur
				setError(`Erreur : ${error.response.data.message}`);
				console.error("Erreur côté serveur:", error.response);
			} else if (error.request) {
				// La requête a été faite mais aucune réponse n'a été reçue
				setError("Erreur réseau. Le serveur ne répond pas.");
				console.error("Erreur réseau:", error.request);
			} else {
				// Une erreur s'est produite lors de la configuration de la requête
				setError("Erreur inconnue lors de la demande.");
				console.error("Erreur lors de la demande:", error.message);
			}
		}
	};

	return (
		<div className="rdv-modal">
			<div className="rdv-content">
				<h2>Prendre un rendez-vous</h2>
				{error && <p className="error">{error}</p>}
				{successMessage && <p className="success">{successMessage}</p>}
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						placeholder="Votre nom"
						value={appointment.name}
						onChange={handleChange}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Votre email"
						value={appointment.email}
						onChange={handleChange}
						required
					/>
					<input
						type="date"
						name="date"
						value={appointment.date}
						onChange={handleChange}
						required
					/>
					<select
						name="reason"
						value={appointment.reason}
						onChange={handleChange}
						required
					>
						<option value="soin du visage">Soin du visage</option>
						<option value="soin anti-âge">Soin anti-âge</option>
						<option value="nettoyage en profondeur">
							Nettoyage en profondeur
						</option>
						<option value="soin éclat du teint">Soin éclat du teint</option>
						<option value="hydratation intense">Hydratation intense</option>
					</select>
					<button type="submit">Prendre un rendez-vous</button>
				</form>

				{/* Bouton pour fermer la modal */}
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="close-button" onClick={onClose}>
					Fermer
				</button>
			</div>
		</div>
	);
}

export default CreateRdv;
