import React from "react";
import { motion } from "framer-motion";

const Accueil = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
        >
            <header className="hero-section">
                <video className="background-video" autoPlay loop muted>
                    <source src="assets/video/index-video.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
                <div className="overlay">
                    <h1 className="main-text">Test</h1>
                    <img src="assets/img/logo-wth-white_21.png" alt="Logo" />
                </div>
            </header>

            <section>
                <div className="container text-center">
                    <h2>Le Réseau</h2>
                    <p>Le réseau est essentiel pour la connectivité mondiale...</p>
                </div>
            </section>

            <section>
                <div className="container text-center">
                    <h2>Développement Web</h2>
                    <p>Le développement web consiste à créer des sites web interactifs...</p>
                </div>
            </section>
        </motion.div>
    );
};

export default Accueil;
