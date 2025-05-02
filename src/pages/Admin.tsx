import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../Components/AmdinSideBar/AdminSideBar";
import AdminSearchBar from "../Components/AdminSearchBar/AdminSearchBar";
import "./Admin.css";
interface Appointment {
	id: number;
	name: string;
	email: string;
	date: string;
	reason: string;
	status: string;
}

const AdminAppointmentsPage = () => {
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [error, setError] = useState<string>("");
	const [activeSection] = useState<string>("rdv");
	// biome-ignore lint/correctness/noEmptyPattern: <explanation>
	const [] = useState<string>("");

	useEffect(() => {
		// Récupérer les rendez-vous depuis l'API
		const fetchAppointments = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5000/admin/appointments",
				);
				setAppointments(response.data);
			} catch (err) {
				setError("Erreur lors de la récupération des rendez-vous.");
				console.error(err);
			}
		};

		fetchAppointments();
	}, []);

	// Supprimer un rendez-vous
	const handleDelete = async (id: number) => {
		try {
			await axios.delete(`http://localhost:5000/admin/appointments/${id}`);
			setAppointments(
				appointments.filter((appointment) => appointment.id !== id),
			);
		} catch (err) {
			setError("Erreur lors de la suppression du rendez-vous.");
			console.error(err);
		}
	};

	function handleSectionChange(section: string): void {
		console.log("Section changée :", section);
	}

	function handleSearch(query: string): void {
		console.log("Recherche :", query);
	}

	return (
		<div className="admin-dashboard">
			<AdminSidebar
				activeSection={activeSection}
				onSectionChange={handleSectionChange}
			/>
			<div className="admin-content">
				<AdminSearchBar onSearch={handleSearch} />
				<div className="admin-section-content">
					<div className="admin-appointments">
						<h2>Gestion des rendez-vous</h2>
						{error && <p className="error">{error}</p>}
						<table>
							<thead>
								<tr>
									<th>Nom</th>
									<th>Email</th>
									<th>Date</th>
									<th>Raison</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{appointments.length === 0 ? (
									<tr>
										<td colSpan={6}>Aucun rendez-vous à afficher.</td>
									</tr>
								) : (
									appointments.map((appointment) => (
										<tr key={appointment.id}>
											<td>{appointment.name}</td>
											<td>{appointment.email}</td>
											<td>{appointment.date}</td>
											<td>{appointment.reason}</td>
											<td>{appointment.status}</td>
											<td>
												{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
												<button onClick={() => handleDelete(appointment.id)}>
													Supprimer
												</button>
											</td>
										</tr>
									))
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminAppointmentsPage;
