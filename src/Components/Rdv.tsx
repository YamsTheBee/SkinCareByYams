// components/RDV/RendezVous.jsx

function RendezVous({ onClose }) {
	return (
		<div className="rdv-modal">
			<div className="rdv-content">
				<h2>Prendre un rendez-vous</h2>
				<form>
					<input type="text" placeholder="Votre nom" required />
					<input type="email" placeholder="Votre email" required />
					<input type="date" required />
					<button type="submit">Envoyer</button>
				</form>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="close-button" onClick={onClose}>
					Fermer
				</button>
			</div>
		</div>
	);
}

export default RendezVous;
