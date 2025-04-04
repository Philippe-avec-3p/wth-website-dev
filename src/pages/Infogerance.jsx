import React from "react";
import { motion } from "framer-motion";
import SolutionsLogicielles from "../components/SolutionsLogicielles";
import ServiceTechnique from "../components/ServiceTechnique";


const Reseaux = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}

        >
            <div className="background-image-banner"></div>


            <h1 className="text-center top-text mt-4">INFOGERANCE</h1>




            <div className="subsection container mt-5">

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Logiciels applicatifs sur mesure</h2>
                            <p className="text-muted text-center">
                                Notre pôle logiciel se spécialise dans le développement de logiciels applicatifs sur mesure,
                                conçus pour répondre spécifiquement aux besoins uniques de votre organisation.
                                Nous créons une variété de solutions logicielles qui facilitent et optimisent vos processus métier.
                                Que vous ayez besoin d'un outil de gestion de projet, d'une application de suivi des stocks ou d'un logiciel de gestion client,
                                nous mettons notre expertise à votre service pour développer des solutions efficaces,
                                intuitives et adaptées à vos exigences opérationnelles.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/img/icoinfogerance.jpg" alt="Support informatique" className="img-fluid " />

                    </div>
                </div>


                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-md-6">
                        <img src="/assets/img/icoinfogerance2.jpg" alt="Approche proactive" className="img-fluid rounded shadow-lg" />
                    </div>
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Innovations technologiques et fiabilité</h2>
                            <p className="text-muted text-center">
                                Chez WTH Informatique, nous sommes dédiés à l'innovation technologique et à la fiabilité de nos produits.
                                Nos logiciels sont conçus pour être robustes, sécurisés et évolutifs,
                                garantissant ainsi une performance optimale et une intégration fluide dans votre infrastructure existante.
                                Notre équipe de développeurs expérimentés utilise les dernières technologies et méthodologies
                                pour créer des solutions qui non seulement répondent à vos besoins actuels,
                                mais qui peuvent également évoluer avec votre entreprise.
                                Faites confiance à notre pôle logiciel pour propulser votre organisation vers l'avenir avec des solutions technologiques de pointe.
                            </p>
                        </div>
                    </div>
                </div>


            </div>


            <ServiceTechnique />


            <SolutionsLogicielles/>

        </motion.div>
    );
};

export default Reseaux;
