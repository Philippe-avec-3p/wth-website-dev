import React from "react";
import { motion } from "framer-motion";
import SolutionsLogicielles from "../components/SolutionsLogicielles";
import ApplicatifsMetiers from "../components/ApplicatifsMetiers";


const Logiciel = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}

        >
            <div className="background-image-banner"></div>



            <div className="text-center top-text mt-3">
                <img src="/assets/img/logo_studio_dev_white.png" alt="Image panoramique" className="img-fluid rounded shadow-lg" />
            </div>


            <div className="subsection container mt-5">

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Support informatique sur mesure</h2>
                            <p className="text-muted text-center">
                                Nous comprenons l'importance d'un support informatique efficace pour assurer
                                la continuité des activités de votre entreprise. C'est pourquoi notre service d'infogérance
                                offre une assistance personnalisée à vos utilisateurs, avec des solutions rapides et adaptées à leurs besoins.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/img/icologiciel.jpg" alt="Support informatique" className="img-fluid " />

                    </div>
                </div>


                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-md-6">
                        <img src="/assets/img/icologiciel2.jpg" alt="Approche proactive" className="img-fluid rounded shadow-lg" />
                    </div>
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Approche proactive et performance</h2>
                            <p className="text-muted text-center">
                                Nous adoptons une démarche proactive en surveillant en permanence vos systèmes pour anticiper
                                et résoudre les éventuelles anomalies avant qu'elles n'affectent votre productivité.
                            </p>
                        </div>
                    </div>
                </div>


            </div>


            <ApplicatifsMetiers/>

            <SolutionsLogicielles/>

        </motion.div>
    );
};

export default Logiciel;
