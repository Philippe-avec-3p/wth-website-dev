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


            <h1 className="text-center top-text mt-4">RESEAUX</h1>




            <div className="subsection container mt-5">

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Solutions de connectivités et de communications</h2>
                            <p className="text-muted text-center">
                                Notre pôle réseaux est dédié à fournir des solutions de connectivité et de communication robustes et fiables pour les entreprises.
                                Nous offrons une gamme complète de services allant de la conception et de l'installation de réseaux,
                                à la maintenance et à l'optimisation de ceux-ci. Grâce à notre expertise technique et notre approche personnalisée,
                                nous nous assurons que votre infrastructure réseau est toujours performante et sécurisée. Nos solutions sont conçues pour s'adapter aux
                                besoins spécifiques de chaque client,
                                en assurant une connectivité fluide et une communication efficace.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/img/icoreseaux1.jpg" alt="Support informatique" className="img-fluid " />

                    </div>
                </div>


                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-md-6">
                        <img src="/assets/img/icoreseaux2.jpg" alt="Approche proactive" className="img-fluid rounded shadow-lg" />
                    </div>
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Infrastructure réseaux performante et sécurisée</h2>
                            <p className="text-muted text-center">
                                Chez WTH Informatique, nous comprenons l'importance d'une infrastructure réseau solide pour le bon fonctionnement de toute
                                organisation. C'est pourquoi nous mettons un point d'honneur à offrir des services de haute qualité, en utilisant les
                                technologies les plus avancées. Notre équipe d'experts est à votre disposition pour vous accompagner dans chaque étape,
                                de l'évaluation initiale de vos besoins, à la mise en œuvre et à la gestion continue de votre réseau. Faites confiance
                                à notre pôle réseaux pour garantir la performance,
                                la sécurité et la fiabilité de vos communications professionnelles.
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
