import { useState, useEffect } from "react";
import axios from "axios";

// Définir les types pour les props
type EditRdvProps = {
	onClose: () => void;
	rdvId: string | number | undefined;
};

function EditRdv({ onClose, rdvId }: EditRdvProps) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		if (rdvId) {
			const fetchRdv = async () => {
				try {
					const response = await axios.get(
						`http://localhost:5000/appointments/${rdvId}`,
					);
					const rdv = response.data;
					setName(rdv.name);
					setEmail(rdv.email);
					setDate(rdv.date);
					setStatus(rdv.status);
				} catch (error) {
					setError(
						"Erreur lors de la récupération des détails du rendez-vous.",
					);
					console.error(error);
				}
			};

			fetchRdv();
		}
	}, [rdvId]);

	// Typage du paramètre e
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:5000/appointments/${rdvId}`, {
				name,
				email,
				date,
				status,
			});

			// Fermer la modal après mise à jour
			onClose();
			alert("Rendez-vous mis à jour !");
		} catch (error) {
			setError("Erreur lors de la mise à jour du rendez-vous.");
			console.error(error);
		}
	};

	return (
		<div className="rdv-modal">
			<div className="rdv-content">
				<h2>Modifier un rendez-vous</h2>
				{error && <p className="error">{error}</p>}
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Votre nom"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						type="email"
						placeholder="Votre email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
					<button type="submit">Mettre à jour</button>
				</form>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="close-button" onClick={onClose}>
					Fermer
				</button>
			</div>
		</div>
	);
}

export default EditRdv;
