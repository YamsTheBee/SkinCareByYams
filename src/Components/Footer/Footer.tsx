import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
	FaHeart,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="social-icons">
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<FaTwitter />
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
			</div>
			<p className="footer-text">
				© {new Date().getFullYear()} SkinCareByYams — All rights reserved{" "}
				<FaHeart style={{ color: "#ecbd5e1", marginLeft: "6px" }} />
			</p>
		</footer>
	);
};

export default Footer;
