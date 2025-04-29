import { useEffect, useState } from "react";
import axios from "axios";
import "./produits.css";

function Produits() {
	const [produits, setProduits] = useState([]);
	const [nom, setNom] = useState("");
	const [desc, setDesc] = useState("");

	const fetchProduits = async () => {
		const res = await axios.get("http://localhost:4242/api/produits");
		setProduits(res.data);
	};

	const handleAdd = async () => {
		await axios.post("http://localhost:4242/api/produits", {
			nom,
			description: desc,
		});
		setNom("");
		setDesc("");
		fetchProduits();
	};

	useEffect(() => {
		fetchProduits();
	}, []);

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-4">Produits</h2>
			<input
				value={nom}
				onChange={(e) => setNom(e.target.value)}
				placeholder="Nom"
				className="border p-2 mr-2"
			/>
			<input
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
				placeholder="Description"
				className="border p-2 mr-2"
			/>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button
				onClick={handleAdd}
				className="bg-green-500 text-white px-4 py-2 rounded"
			>
				Ajouter
			</button>

			<ul className="mt-6">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{produits.map((p: any) => (
					<li key={p.id} className="border p-2 mb-2">
						{p.nom} - {p.description}
					</li>
				))}
			</ul>
		</div>
	);
}
export default Produits;
