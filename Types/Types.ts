// Types/Types.ts
export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	product_type: "nettoyant" | "hydratant" | "traitement" | "masque";
	product_url?: string; // URL de l'image
	brand: string;
	volume: string;
	skin_type: string;
	ingredients: string[];
	benefits: string[];
	usage_instructions: string;
	contraindications: string; // Added contraindications property
	rating?: number;
	reviews?: number;
}
