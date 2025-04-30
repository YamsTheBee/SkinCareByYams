// // src/components/AppointmentActions.js
// import { useState } from 'react';
// import axios from 'axios';

// const AppointmentActions = ({ appointmentId, initialStatus }) => {
//   const [status, setStatus] = useState(initialStatus);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/appointments/${appointmentId}`);
//       alert('Rendez-vous supprimé');
//     } catch (error) {
//       console.error('Erreur lors de la suppression du rendez-vous:', error);
//       alert('Erreur lors de la suppression du rendez-vous');
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:5000/appointments/${appointmentId}`, { status });
//       alert('Rendez-vous mis à jour');
//     } catch (error) {
//       console.error('Erreur lors de la mise à jour du rendez-vous:', error);
//       alert('Erreur lors de la mise à jour du rendez-vous');
//     }
//   };

//   return (
//     <div>
//       <select value={status} onChange={(e) => setStatus(e.target.value)}>
//         <option value="pending">Pending</option>
//         <option value="confirmed">Confirmed</option>
//         <option value="cancelled">Cancelled</option>
//       </select>
//       {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
//       <button onClick={handleUpdate}>Mettre à jour</button>
//       {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
//       <button onClick={handleDelete}>Supprimer</button>
//     </div>
//   );
// };

// export default AppointmentActions;
