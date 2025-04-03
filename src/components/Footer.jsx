import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h5>À propos</h5>
                    <p>Nous sommes une entreprise innovante dédiée à la transformation numérique.</p>
                </div>

                <div className="footer-section">
                    <h5>Navigation</h5>
                    <ul className="footer-links">
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projets</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5>Suivez-nous</h5>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Tous droits réservés | Créé avec ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;
