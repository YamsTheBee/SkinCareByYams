import type React from "react";
import {
	FaChartPie,
	FaExclamationTriangle,
	FaHome,
	FaSignOutAlt,
	FaUsers,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./AdminSideBar.css";

interface AdminSidebarProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
	activeSection,
	onSectionChange,
}) => {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate("/");
	};

	const handleSectionChange = (section: string) => {
		if (onSectionChange) {
			onSectionChange(section);
		}
	};

	return (
		<div className="admin-sidebar">
			<div className="admin-sidebar-header">
				<h2>Admin Panel</h2>
			</div>
			<nav className="admin-sidebar-menu">
				<button
					type="button"
					className={`admin-sidebar-item ${
						activeSection === "annonces" ? "active" : ""
					}`}
					onClick={() => handleSectionChange("annonces")}
				>
					<span className="admin-sidebar-icon">
						<FaHome />
					</span>
					<span>Rendez-vous</span>
				</button>
				<button
					type="button"
					className={`admin-sidebar-item ${
						activeSection === "users" ? "active" : ""
					}`}
					onClick={() => handleSectionChange("users")}
				>
					<span className="admin-sidebar-icon">
						<FaUsers />
					</span>
					<span>Utilisateurs</span>
				</button>
				<button
					type="button"
					className={`admin-sidebar-item ${
						activeSection === "reports" ? "active" : ""
					}`}
					onClick={() => handleSectionChange("reports")}
				>
					<span className="admin-sidebar-icon">
						<FaExclamationTriangle />
					</span>
					<span>Signalements</span>
				</button>
				<button
					type="button"
					className={`admin-sidebar-item ${
						activeSection === "statistics" ? "active" : ""
					}`}
					onClick={() => handleSectionChange("statistics")}
				>
					<span className="admin-sidebar-icon">
						<FaChartPie />
					</span>
					<span>Statistiques</span>
				</button>
			</nav>
			<div className="admin-sidebar-footer">
				<button
					type="button"
					className="admin-logout-button"
					onClick={handleLogout}
				>
					<span className="admin-sidebar-icon">
						<FaSignOutAlt />
					</span>
					<span>Déconnexion</span>
				</button>
			</div>
		</div>
	);
};

export default AdminSidebar;
