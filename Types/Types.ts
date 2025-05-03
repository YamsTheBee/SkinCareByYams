import type { ReactNode } from "react";

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	product_type: "nettoyant" | "hydratant" | "traitement" | "masque";
	product_url?: string; 
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
export interface User {
	skin_type: string;
	country: ReactNode;
	zip_code: ReactNode;
	city: ReactNode;
	phone: ReactNode;
	name: ReactNode;
	date_of_birth: ReactNode;
	address: ReactNode;
	id: number;
	username: string;
	email: string;
	profilePicture?: string; // facultatif si tu as une image
	role?: string; // ex: "admin", "user"
}
