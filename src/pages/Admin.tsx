// // AdminDashboard.js
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./AdminDashboard.css"; // Assurez-vous d'importer le CSS ici

// const AdminDashboard = () => {
// 	const [appointments, setAppointments] = useState([]);

// 	useEffect(() => {
// 		// Récupérer tous les rendez-vous
// 		axios
// 			.get("http://localhost:5000/admin/appointments")
// 			.then((response) => {
// 				setAppointments(response.data);
// 			})
// 			.catch((error) => {
// 				console.error("Erreur de récupération des rendez-vous", error);
// 			});
// 	}, []);

// 	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
// 	const handleStatusUpdate = (id: any, status: string) => {
// 		axios
// 			.put(`http://localhost:5000/admin/appointments/${id}/status`, { status })
// 			.then((response) => {
// 				// Mettre à jour le statut dans l'UI
// 				setAppointments((prevAppointments) =>
// 					prevAppointments.map((appointment) =>
// 						appointment.id === id
// 							? { ...appointment, status: response.data.status }
// 							: appointment,
// 					),
// 				);
// 			})
// 			.catch((error) => {
// 				console.error("Erreur de mise à jour du statut", error);
// 			});
// 	};

// 	return (
// 		<div className="dashboard-container">
// 			<h1>Dashboard Admin - Gestion des Rendez-vous</h1>
// 			{appointments.length === 0 ? (
// 				<p className="no-appointments">Aucun rendez-vous pour le moment.</p>
// 			) : (
// 				<table>
// 					<thead>
// 						<tr>
// 							<th>ID</th>
// 							<th>Nom</th>
// 							<th>Email</th>
// 							<th>Date</th>
// 							<th>Statut</th>
// 							<th>Actions</th>
// 						</tr>
// 					</thead>
// 					<tbody>
// 						{appointments.map((appointment) => (
// 							<tr key={appointment.id}>
// 								<td>{appointment.id}</td>
// 								<td>{appointment.nom}</td>
// 								<td>{appointment.email}</td>
// 								<td>{appointment.date}</td>
// 								<td>{appointment.status}</td>
// 								<td>
// 									{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
// <button
// 										onClick={() =>
// 											handleStatusUpdate(appointment.id, "confirmed")
// 										}
// 									>
// 										Confirmer
// 									</button>
// 									{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
// <button
// 										className="cancel"
// 										onClick={() =>
// 											handleStatusUpdate(appointment.id, "cancelled")
// 										}
// 									>
// 										Annuler
// 									</button>
// 								</td>
// 							</tr>
// 						))}
// 					</tbody>
// 				</table>
// 			)}
// 		</div>
// 	);
// };

// export default AdminDashboard;
