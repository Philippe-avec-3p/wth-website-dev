import React from "react";
import "./WebServices.css";

const WebServices = () => {
    return (
        <div className="services-section py-5">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 text-center mb-5">
                        <h1 className="section-title">
                            WTH tient à ce que chacun de vos projets soit 100%{" "}
                            <span className="text-highlight">professionnels et personnalisés.</span>
                        </h1>
                        <hr className="section-divider mx-auto" />
                    </div>
                </div>


                <div className="row gy-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="service-box text-center d-block p-4">
                            <div className="service-icon mb-3">
                                <i className="fa-solid fa-desktop fa-3x"></i>
                            </div>
                            <h3 className="service-title mb-3">Site web</h3>
                            <h6>Nous vous accompagnons et conseillons sur l'ensemble de vos applications web.</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="service-box text-center d-block p-4">
                            <div className="service-icon mb-3">
                                <i className="fa-solid fa-mobile fa-3x"></i>
                            </div>
                            <h3 className="service-title mb-3">Responsive design</h3>
                            <h6>On adapte votre site pour le rendre compatible avec aux différentes résolutions et supports.</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="service-box text-center d-block p-4">
                            <div className="service-icon mb-3">
                                <i className="fa-solid fa-cash-register fa-3x"></i>
                            </div>
                            <h3 className="service-title mb-3">E-commerce</h3>
                            <h6>WTH vous accompagne dans la création d'une nouvelle boutique en ligne.</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="service-box text-center d-block p-4">
                            <div className="service-icon mb-3">
                                <i className="fa-solid fa-pen fa-3x"></i>
                            </div>
                            <h3 className="service-title mb-3">Graphisme</h3>
                            <h6>Nous réalisons votre communication sur mesure en restant en phase avec votre philosophie.</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="service-box text-center d-block p-4">
                            <div className="service-icon mb-3">
                                <i className="fa-solid fa-diamond fa-3x"></i>
                            </div>
                            <h3 className="service-title mb-3">Ergonomie</h3>
                            <h6>Nous vous accompagnons à améliorer l'expérience utilisateur de vos projets.</h6>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="service-box text-center d-block p-4">
                            <div className="service-icon mb-3">
                                <i className="fa-solid fa-screwdriver-wrench fa-3x"></i>
                            </div>
                            <h3 className="service-title mb-3">Référencement naturel</h3>
                            <h6>WTH vous aide à indexer vos pages par les moteurs de recherche avec un code propre et sémantique.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebServices;
