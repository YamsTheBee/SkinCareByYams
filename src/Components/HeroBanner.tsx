import { useState } from "react";
import "./HeroBanner.css";
import RendezVous from "../Components/Rdv"; // adapte le chemin selon ton projet

function HeroBanner() {
	const [showAppointment, setShowAppointment] = useState(false);

	return (
		<div className="hero-banner">
			<div className="hero-overlay">
				<h1>Bienvenue chez SkinCare</h1>
				<p>Offrez à votre peau l’attention qu’elle mérite</p>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="cta-button" onClick={() => setShowAppointment(true)}>
					Prendre un RDV
				</button>
			</div>

			{showAppointment && (
				<RendezVous onClose={() => setShowAppointment(false)} rdvId={undefined} />
			)}
		</div>
	);
}

export default HeroBanner;
