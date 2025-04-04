import React from "react";
import { motion } from "framer-motion";
import SolutionsLogicielles from "../components/SolutionsLogicielles";
import ServiceTechnique from "../components/ServiceTechnique";


const CAMS = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
        >

            <div className="background-image-banner"></div>


            <h1 className="text-center top-text mt-4">CAMS</h1>




            <div className="subsection container mt-5">

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Une solution efficace pour le transport de fret</h2>
                            <p className="text-muted text-center">
                                TFS (Trans Fret System) est un logiciel conçu pour faciliter et optimiser la gestion des lettres de transport aérien (LTA) pour les entreprises de fret.
                                Grâce à une interface intuitive et des fonctionnalités avancées, il permet aux professionnels de générer rapidement leurs documents,
                                d'assurer la conformité avec les réglementations en vigueur et d'automatiser certaines tâches administratives essentielles.
                                TFS améliore ainsi la précision et l'efficacité du processus, réduisant les erreurs et accélérant les opérations de transport.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/img/logicielicon3.jpg" alt="Support informatique" className="img-fluid " />

                    </div>
                </div>


                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-md-6">
                        <img src="/assets/img/logicielicon4.jpg" alt="Approche proactive" className="img-fluid rounded shadow-lg" />
                    </div>
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Une intégration intelligente pour une gestion optimale</h2>
                            <p className="text-muted text-center">
                                Notre logiciel s'intègre parfaitement aux systèmes existants des entreprises de fret,
                                offrant une compatibilité fluide avec les plateformes de suivi et de gestion logistique.
                                Grâce à des mises à jour régulières et un suivi personnalisé, nous garantissons une performance constante
                                et une adaptation aux évolutions du secteur. En utilisant TFS, les entreprises de fret bénéficient d’un gain de temps considérable,
                                d’une meilleure organisation et d’une gestion optimisée de leurs lettres de transport,
                                contribuant ainsi à une chaîne logistique plus efficace et sécurisée.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            <SolutionsLogicielles/>

            <ServiceTechnique />


        </motion.div>
    );
};

export default CAMS;
