import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

                    <img src="/assets/img/logo-wth-white_21.png" alt="Logo" />
                </div>
            </header>

            <section className="bio-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                            <h2 className="section-title mb-5">Notre équipe <strong className="secondarycolor service-title">de direction</strong></h2>
                            <hr className="w-50 mx-auto mb-5 border-dark-subtle" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 text-center">
                            <div className="card bio-card">
                                <img className="bio-img card-img-top" loading="lazy" src="/assets/img/chef.jpg" alt="Photo du PDG" />
                                <div className="card-body">
                                    <p className="bio-title card-title" style={{ fontSize: "20px", marginTop: "-10px" }}>
                                        Laurent Nedellec, <strong className="secondarycolor service-title">chef d'entreprise</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="card bio-card">
                                <div className="card-body">
                                    <p className="bio-text" style={{ marginTop: "20px" }}>
                                        Avec plus de vingt-six ans à la tête de WTH Informatique, notre équipe s'est imposée comme un leader
                                        dans l'intégration de solutions informatiques pour le transport international. Nous avons développé
                                        des progiciels reconnus, tels que Trans Fret System et Cargo Airlines Management System, qui reflètent
                                        notre expertise en développement de logiciels et en maintenance informatique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-section py-5">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <h2 className="section-title">Notre <strong className="secondarycolor service-title">mission</strong></h2>
                            <p className="mb-4" style={{ fontSize: "22px" }}>
                                Chez WTH Informatique, nous nous engageons à fournir des solutions sur mesure pour répondre aux défis uniques du secteur du transport.
                                Notre équipe travaille en étroite collaboration avec les entreprises pour maximiser leur efficacité opérationnelle
                                grâce à notre expertise en réseaux informatiques et en maintenance des systèmes critiques.
                            </p>
                            <div className="d-flex">
                                <div className="card border-0 me-3">
                                    <div className="card-body p-4 bg-light shadow rounded">
                                        <h3 className="display-5 fw-bold secondarycolor mb-2 service-title">+20</h3>
                                        <p className="fw-bold">Années d'expérience</p>
                                    </div>
                                </div>
                                <div className="card border-0">
                                    <div className="card-body p-4 bg-light shadow rounded">
                                        <h3 className="display-5 fw-bold secondarycolor mb-2 service-title">4</h3>
                                        <p className="fw-bold">Services informatiques</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded shadow" loading="lazy" src="/assets/img/IMG_9880.jpg" alt="About Us" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="p-md-5" style={{ backgroundColor: "#ededed" }}>
                <div className="container mt-5">
                    <h1 className="text-center mb-5">Nos <span className="secondarycolor service-title" style={{ fontWeight: "bold" }}>services</span></h1>
                    <h5 className="mb-5 text-center">
                        Nos services couvrent tous les besoins : développement de logiciels sur mesure, installation et gestion de matériel,
                        mise en place de réseaux, messagerie, création de sites internet, etc.
                    </h5>
                    <div className="row text-center">
                        <div className="col-md-3 mb-4 centered-content">
                            <Link to="/infogerance">
                                <img src="/assets/img/wth_112.png" className="img-fluid mb-4" alt="Infogérance" />
                                <h2 className="secondarycolor mb-4">Infogérance</h2>
                                <p className="primarycolor">Nous garantissons support et assistance aux utilisateurs.</p>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-4 centered-content">
                            <Link to="/reseaux">
                                <img src="/assets/img/wth_222.png" className="img-fluid mb-4" alt="Réseaux" />
                                <h2 className="secondarycolor mb-4">Réseaux</h2>
                                <p className="primarycolor">Nous assurons la conception et maintenance de votre réseau.</p>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-4 centered-content">
                            <Link to="/logiciel">
                                <img src="/assets/img/wth_332.png" className="img-fluid mb-4" alt="Logiciel" />
                                <h2 className="secondarycolor mb-4">Logiciel</h2>
                                <p className="primarycolor">Nous développons votre applicatif métier intuitif.</p>
                            </Link>
                        </div>
                        <div className="col-md-3 mb-4 centered-content">
                            <Link to="/web">
                                <img src="/assets/img/wth_442.png" className="img-fluid mb-4" alt="Web" />
                                <h2 className="secondarycolor mb-4">Web</h2>
                                <p className="primarycolor">Nous vous accompagnons sur vos applications web.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </motion.div>
    );
};

export default Accueil;
