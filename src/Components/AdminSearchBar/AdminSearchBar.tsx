import type React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./AdminSearchBar.css";

interface AdminSearchBarProps {
	onSearch: (query: string) => void;
}

const AdminSearchBar: React.FC<AdminSearchBarProps> = ({ onSearch }) => {
	const [searchQuery, setSearchQuery] = useState<string>("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchQuery(value);
		onSearch(value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch(searchQuery);
	};

	return (
		<div className="admin-search-container">
			<form className="admin-search-form" onSubmit={handleSubmit}>
				<div className="admin-search-input-wrapper">
					<FaSearch className="admin-search-icon" />
					<input
						type="text"
						className="admin-search-input"
						placeholder="Rechercher une annonce, un utilisateur..."
						value={searchQuery}
						onChange={handleInputChange}
					/>
				</div>
			</form>
		</div>
	);
};

export default AdminSearchBar;
