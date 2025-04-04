import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">


                <div className="footer-section">
                    <img src="/assets/img/logo-wth-remastered.jpg" alt="Support informatique" className="img-fluid imgfooter shadow rounded" />
                </div>


                <div className="footer-section">
                    <h5>Navigation</h5>
                    <ul className="footer-links">
                        <li><Link to="/infogerance">Infogérance</Link></li>
                        <li><Link to="/reseaux">Réseaux</Link></li>
                        <li><Link to="/logiciel">Logiciel</Link></li>
                        <li><Link to="/web">Web</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>


                <div className="footer-section">
                    <h5>Suivez-nous</h5>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>

            </div>


            <div className="footer-bottom">
                <p>Copyright&copy; 2025 WTH Informatique</p>
            </div>
        </footer>
    );
};

export default Footer;
