// // src/components/CreateAppointment.js
// import { useState } from "react";
// import axios from "axios";
// import ";/CreateAppointment.css"
// const CreateAppointment = () => {
// 	const [formData, setFormData] = useState({
// 		user_id: "",
// 		date: "",
// 		reason: "",
// 		status: "pending",
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({
// 			...formData,
// 			[name]: value,
// 		});
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		try {
// 			await axios.post("http://localhost:5000/appointments", formData);
// 			alert("Rendez-vous créé avec succès");
// 			setFormData({
// 				user_id: "",
// 				date: "",
// 				reason: "",
// 				status: "pending",
// 			});
// 		} catch (error) {
// 			console.error("Erreur lors de la création du rendez-vous:", error);
// 			alert("Erreur lors de la création du rendez-vous");
// 		}
// 	};

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<div>
// 				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
// <label>User ID:</label>
// 				<input
// 					type="text"
// 					name="user_id"
// 					value={formData.user_id}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</div>
// 			<div>
// 				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
// <label>Date:</label>
// 				<input
// 					type="datetime-local"
// 					name="date"
// 					value={formData.date}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</div>
// 			<div>
// 				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
// <label>Reason:</label>
// 				<input
// 					type="text"
// 					name="reason"
// 					value={formData.reason}
// 					onChange={handleChange}
// 					required
// 				/>
// 			</div>
// 			<div>
// 				{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
// <label>Status:</label>
// 				<select name="status" value={formData.status} onChange={handleChange}>
// 					<option value="pending">Pending</option>
// 					<option value="confirmed">Confirmed</option>
// 					<option value="cancelled">Cancelled</option>
// 				</select>
// 			</div>
// 			<button type="submit">Créer Rendez-vous</button>
// 		</form>
// 	);
// };

// export default CreateAppointment;
