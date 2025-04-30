import { useEffect, useState } from "react";
import ProductCard from "../Components/produitsCard/ProduitsCard";
import type { Product } from "../../Types/Types";
import "./ProduitsPage.css";

const ProduitsPage = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [editingProduct, setEditingProduct] = useState<Product | null>(null);
	const [updatedProduct, setUpdatedProduct] = useState<Product | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("http://localhost:5000/api/produits"); // Vérifie si l'endpoint est correct
				if (!response.ok) {
					throw new Error("Erreur lors de la récupération des produits");
				}
				const data = await response.json();
				setProducts(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "Une erreur est survenue",
				);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	const handleEdit = (product: Product) => {
		setEditingProduct(product); // Affiche le formulaire d'édition avec les données actuelles
		setUpdatedProduct(product); // Initialisation des valeurs du produit à modifier
	};

	const handleUpdate = async () => {
		if (!updatedProduct) return;

		try {
			const response = await fetch(
				`http://localhost:5000/api/produits/${updatedProduct.id}`, // Vérifie l'endpoint pour la mise à jour
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(updatedProduct),
				},
			);
			if (!response.ok) {
				throw new Error("Erreur lors de la mise à jour du produit");
			}

			const data = await response.json();
			setProducts(
				products.map((product) =>
					product.id === data.id ? { ...product, ...data } : product,
				),
			);
			setEditingProduct(null); // Ferme le formulaire d'édition
		} catch (err) {
			console.error("Erreur lors de la mise à jour:", err);
		}
	};

	const handleDelete = async (id: number) => {
		try {
			const response = await fetch(`http://localhost:5000/api/produits/${id}`, {
				// Vérifie l'endpoint pour la suppression
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error("Erreur lors de la suppression du produit");
			}
			setProducts(products.filter((product) => product.id !== id));
		} catch (err) {
			console.error("Erreur lors de la suppression:", err);
		}
	};

	if (loading) {
		return (
			<div className="loading-container">
				<div className="loading-spinner" />
				<p>Chargement des produits...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="error-container">
				<p className="error-message">{error}</p>
			</div>
		);
	}

	return (
		<div className="boutique-container">
			<div className="button-title">
				<p>Découvrez notre sélection de produits</p>
			</div>

			<div className="product-filters">
				<button type="button" className="filter-btn active">
					Tous
				</button>
				<button type="button" className="filter-btn">
					Nettoyants
				</button>
				<button type="button" className="filter-btn">
					Hydratants
				</button>
				<button type="button" className="filter-btn">
					Traitements
				</button>
				<button type="button" className="filter-btn">
					Masques
				</button>
			</div>

			<div className="product-grid">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onEdit={handleEdit}
						onDelete={handleDelete}
					/>
				))}
			</div>

			{editingProduct && (
				<div className="edit-form-container">
					<h3>Modifier le produit</h3>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleUpdate();
						}}
					>
						<label>
							Nom :
							<input
								type="text"
								value={updatedProduct?.name || ""}
								onChange={(e) =>
									setUpdatedProduct({
										// biome-ignore lint/style/noNonNullAssertion: <explanation>
										...updatedProduct!,
										name: e.target.value,
									})
								}
							/>
						</label>
						<label>
							Description :
							<textarea
								value={updatedProduct?.description || ""}
								onChange={(e) =>
									setUpdatedProduct({
										// biome-ignore lint/style/noNonNullAssertion: <explanation>
										...updatedProduct!,
										description: e.target.value,
									})
								}
							/>
						</label>
						<label>
							Prix :
							<input
								type="number"
								value={updatedProduct?.price || ""}
								onChange={(e) =>
									setUpdatedProduct({
										// biome-ignore lint/style/noNonNullAssertion: <explanation>
										...updatedProduct!,
										price: Number.parseFloat(e.target.value),
									})
								}
							/>
						</label>
						<label>
							Type de produit :
							<select
								value={updatedProduct?.product_type || ""}
								onChange={(e) =>
									setUpdatedProduct({
										// biome-ignore lint/style/noNonNullAssertion: <explanation>
										...updatedProduct!,
										product_type: e.target.value as
											| "nettoyant"
											| "hydratant"
											| "traitement"
											| "masque",
									})
								}
							>
								<option value="nettoyant">Nettoyant</option>
								<option value="hydratant">Hydratant</option>
								<option value="traitement">Traitement</option>
								<option value="masque">Masque</option>
							</select>
						</label>
						<label>
							URL de l'image :
							<input
								type="text"
								value={updatedProduct?.product_url || ""}
								onChange={(e) =>
									setUpdatedProduct({
										// biome-ignore lint/style/noNonNullAssertion: <explanation>
										...updatedProduct!,
										product_url: e.target.value,
									})
								}
							/>
						</label>
						<button type="submit">Mettre à jour</button>
						<button
							type="button"
							onClick={() => setEditingProduct(null)}
							className="cancel-btn"
						>
							Annuler
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default ProduitsPage;
