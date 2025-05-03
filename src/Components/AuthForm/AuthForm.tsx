import { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // npm install lucide-react
import "./AuthForm.css";

function AuthForm() {
	const [isLogin, setIsLogin] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		dateOfBirth: "",
		phone: "",
		address: "",
		city: "",
		zipCode: "",
		country: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		const url = isLogin ? "/api/login" : "/api/register";

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await response.json();
			if (!response.ok) throw new Error(data.message || "Erreur inconnue");

			alert(`${isLogin ? "Connexion" : "Inscription"} réussie !`);
			if (data.token) localStorage.setItem("token", data.token);
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		} catch (err: any) {
			setError(err.message);
		}
	};

	return (
		<div className="auth-container">
			<div className="auth-toggle" role="tablist" aria-label="Choix d'action">
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
					aria-pressed={isLogin}
					className={`auth-toggle-button ${isLogin ? "active" : "inactive"}`}
					onClick={() => setIsLogin(true)}
				>
					Connexion
				</button>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button
					aria-pressed={!isLogin}
					className={`auth-toggle-button ${!isLogin ? "active" : "inactive"}`}
					onClick={() => setIsLogin(false)}
				>
					Inscription
				</button>
			</div>

			<form
				onSubmit={handleSubmit}
				className="auth-form"
				aria-label="Formulaire d'authentification"
			>
				{/* Champs supplémentaires pour l'inscription */}
				{!isLogin && (
					<>
						<div>
							<label htmlFor="name" className="auth-label">
								Nom
							</label>
							<input
								type="text"
								id="name"
								name="name"
								autoComplete="name"
								placeholder="Votre nom"
								value={formData.name}
								onChange={handleChange}
								required
								className="auth-input"
							/>
						</div>

						<div>
							<label htmlFor="dateOfBirth" className="auth-label">
								Date de naissance
							</label>
							<input
								type="date"
								id="dateOfBirth"
								name="dateOfBirth"
								value={formData.dateOfBirth}
								onChange={handleChange}
								required
								className="auth-input"
							/>
						</div>

						<div>
							<label htmlFor="phone" className="auth-label">
								Téléphone
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								placeholder="Ex: +33 6 12 34 56 78"
								value={formData.phone}
								onChange={handleChange}
								required
								className="auth-input"
							/>
						</div>

						<div>
							<label htmlFor="address" className="auth-label">
								Adresse
							</label>
							<input
								type="text"
								id="address"
								name="address"
								placeholder="Votre adresse"
								value={formData.address}
								onChange={handleChange}
								required
								className="auth-input"
							/>
						</div>

						<div>
							<label htmlFor="city" className="auth-label">
								Ville
							</label>
							<input
								type="text"
								id="city"
								name="city"
								placeholder="Votre ville"
								value={formData.city}
								onChange={handleChange}
								required
								className="auth-input"
							/>
						</div>

						<div>
							<label htmlFor="zipCode" className="auth-label">
								Code postal
							</label>
							<input
								type="text"
								id="zipCode"
								name="zipCode"
								placeholder="Code postal"
								value={formData.zipCode}
								onChange={handleChange}
								required
								className="auth-input"
							/>
						</div>

						<div>
							<label htmlFor="country" className="auth-label">
								Pays
							</label>
							<input
								type="text"
								id="country"
								name="country"
								placeholder="Votre pays"
								value={formData.country}
								onChange={handleChange}
								required
								className="auth-input"
							/>
						</div>
					</>
				)}

				{/* Champs communs pour la connexion et l'inscription */}
				<div>
					<label htmlFor="email" className="auth-label">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						autoComplete="email"
						placeholder="email@example.com"
						value={formData.email}
						onChange={handleChange}
						required
						className="auth-input"
					/>
				</div>

				<div>
					<label htmlFor="password" className="auth-label">
						Mot de passe
					</label>
					<div className="password-wrapper">
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							name="password"
							autoComplete="current-password"
							placeholder="********"
							value={formData.password}
							onChange={handleChange}
							required
							className="auth-input"
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="password-toggle"
							aria-label={
								showPassword
									? "Masquer le mot de passe"
									: "Afficher le mot de passe"
							}
						>
							{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
						</button>
					</div>
				</div>

				{error && <p className="error-message">{error}</p>}

				<button type="submit" className="auth-submit">
					{isLogin ? "Se connecter" : "S'inscrire"}
				</button>
			</form>
		</div>
	);
}

export default AuthForm;
