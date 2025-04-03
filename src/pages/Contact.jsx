import React from "react";
import { motion } from "framer-motion";

const Background = "/assets/img/final.jpg";

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
        >
            <header className="hero-section">
                <div className="background-image">
                    <img src={Background} alt="Logo" />
                </div>
                <div className="overlay">
                    <h1 className="main-text">Nous contacter</h1>
                    <img src="assets/img/logo-wth-white_21.png" alt="Logo" />
                </div>
            </header>

            <div className="subsection container mt-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 mb-4 wow animate__animated animate__fadeIn">
                        <div className="contact-card shadow-lg p-4 rounded">
                            <h2 className="secondarycolor text-center">Contactez-nous</h2>
                            <p className="text-muted text-center">
                                Notre équipe est à votre disposition tous les jours de 8h à 18h.
                            </p>
                            <p className="text-muted text-center">
                                Nous mettons tout en œuvre pour vous offrir un service de qualité et une assistance rapide.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 wow animate__animated animate__fadeIn">
                        <img src="style/img/contact.jpg" alt="wth_web_2" className="img-fluid rounded shadow-lg"/>
                    </div>
                    <div className="col-md-4 mb-4 wow animate__animated animate__fadeIn">
                        <div className="contact-card shadow-lg p-4 rounded">
                            <div className="contact-info">
                                <p><i className="fa fa-map-marker-alt"></i> 383/385 rue de la Belle Étoile<br/>Parc des Nations<br/>95700 Roissy-en-France</p>
                            </div>
                            <div className="contact-info">
                                <p><i className="fa fa-phone"></i> <a href="tel:+33149194979" className="text-decoration-none">+33 1 49 19 49 79</a></p>
                            </div>
                            <div className="contact-info">
                                <p><i className="fa fa-envelope"></i> <a href="mailto:help@wth.fr" className="text-decoration-none">help@wth.fr</a></p>
                            </div>
                            <h4 className="secondarycolor text-center mt-3">Heures d'ouverture</h4>
                            <p className="text-muted text-center">Lundi - Vendredi : 8h00 - 18h00</p>
                        </div>

                    </div>
                </div>

                <div className="container mt-4">
                    <h3 className="text-center secondarycolor">📍 Localisation Tour Eiffel</h3>
                    <div className="d-flex justify-content-center">
                        <iframe
                            title="Tour Eiffel Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999401089494!2d2.2922923156736245!3d48.85884407928771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ff3df2ebc9f%3A0xf360743f1c99338!2sTour%20Eiffel!5e0!3m2!1sen!2sfr!4v1615291061286!5m2!1sen!2sfr"
                            width="600"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded shadow-lg"
                        ></iframe>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Contact;
