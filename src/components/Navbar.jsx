import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './navbar.css';

function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="navbar navbar-expand-lg navbar-light fixed-top"
        >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> <img src="/assets/img/logo_wth.png" alt="Support informatique" className="img-fluid logo-navbar" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/infogerance">Infogérance</Link></li>
                                <li><Link className="dropdown-item" to="/reseaux">Réseaux</Link></li>
                                <li><Link className="dropdown-item" to="/logiciel">Logiciel</Link></li>
                                <li><Link className="dropdown-item" to="/web">Web</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
