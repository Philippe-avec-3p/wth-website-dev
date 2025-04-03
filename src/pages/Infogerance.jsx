import React from "react";
import { motion } from "framer-motion";

const Infogerance = () => {
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
                    <div className="container text-center">
                        <h2>Le Réseau</h2>
                        <p>Le réseau est essentiel pour la connectivité mondiale...</p>
                    </div>
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

export default Infogerance;
