// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./RdvtList.css";

// function ListeRdv() {
// 	const [appointments, setAppointments] = useState([]);
// 	const [error, setError] = useState("");

// 	useEffect(() => {
// 		const fetchAppointments = async () => {
// 			try {
// 				const response = await axios.get("http://localhost:5000/appointments");
// 				setAppointments(response.data);
// 			} catch (error) {
// 				setError("Erreur lors de la récupération des rendez-vous.");
// 				console.error(error);
// 			}
// 		};

// 		fetchAppointments();
// 	}, []);

// 	// Fonction pour gérer la suppression d'un rendez-vous
// 	const handleDelete = async (id: number) => {
// 		try {
// 			// Suppression du rendez-vous via une requête DELETE
// 			await axios.delete(`http://localhost:5000/appointments/${id}`);

// 			// Mettre à jour la liste des rendez-vous en supprimant celui qui a été effacé
// 			setAppointments(appointments.filter((rdv) => rdv.id !== id));

// 			alert("Rendez-vous supprimé avec succès !");
// 		} catch (error) {
// 			setError("Erreur lors de la suppression du rendez-vous.");
// 			console.error(error);
// 		}
// 	};

// 	// Fonction pour gérer la modification d'un rendez-vous (si nécessaire)
// 	const handleUpdate = (id: number) => {
// 		// Logic pour la modification, si tu souhaites l'ajouter
// 		console.log("Modifier rendez-vous avec id:", id);
// 	};

// 	return (
// 		<div>
// 			<h2>Liste des Rendez-vous</h2>
// 			{error && <p className="error">{error}</p>}
// 			<ul>
// 				{appointments.map((rdv) => (
// 					<li key={rdv.id}>
// 						<p>
// 							{rdv.name} - {rdv.date} - {rdv.status}
// 						</p>
// 						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
// <button onClick={() => handleUpdate(rdv.id)}>Modifier</button>
// 						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
// <button onClick={() => handleDelete(rdv.id)}>Supprimer</button>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// export default ListeRdv;
