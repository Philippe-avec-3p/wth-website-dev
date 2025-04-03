import React from "react";
import { motion } from "framer-motion";



const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
        >

                <div className="background-image-banner"></div>



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

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.0862699367603!2d2.514317677056932!3d48.98991567135026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61545068c166f%3A0x4e7445210f22271f!2sWTH%20INFORMATIQUE!5e0!3m2!1sfr!2sfr!4v1743691280596!5m2!1sfr!2sfr"
                        width="1205"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </motion.div>
    );
};

export default Contact;
