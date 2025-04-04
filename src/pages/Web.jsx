import React from "react";
import { motion } from "framer-motion";
import SolutionsLogicielles from "../components/SolutionsLogicielles";
import WebServices from "../components/WebServices";


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
                <img src="/assets/img/logo_studio_web_white.png" alt="Image panoramique" className="img-fluid rounded shadow-lg" />
            </div>


            <div className="subsection container mt-5">

                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="p4">
                            <h2 className="secondarycolor text-center">Solutions Web personnalisées</h2>
                            <p className="text-muted text-center">
                                Notre pôle web est dédié à la création de solutions web personnalisées qui répondent aux
                                besoins spécifiques de votre entreprise. Nous proposons une gamme complète de services allant de la conception
                                et du développement de sites internet, à la mise en place de plateformes de commerce électronique et d'applications web complexes.
                                Grâce à notre expertise en design UX/UI et en développement web, nous créons des expériences en ligne intuitives et
                                engageantes qui reflètent l'identité de votre marque et facilitent les interactions avec vos clients.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/img/icoweb.jpg" alt="Support informatique" className="img-fluid " />

                    </div>
                </div>


                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-md-6">
                        <img src="/assets/img/icoweb2.jpg" alt="Approche proactive" className="img-fluid " />
                    </div>
                    <div className="col-md-6">
                        <div className="p-4">
                            <h2 className="secondarycolor text-center">Technologies de pointe et sécurité</h2>
                            <p className="text-muted text-center">
                                Nous accordons une grande importance à l'utilisation des technologies
                                les plus avancées pour développer des solutions web performantes et sécurisées. Nos développeurs expérimentés
                                maîtrisent les langages de programmation et les frameworks les plus récents, garantissant ainsi la stabilité
                                et l'évolutivité de vos projets web. Nous mettons également un point d'honneur à assurer la sécurité de
                                vos données et de vos transactions en ligne. Faites confiance à notre pôle web pour concevoir et
                                déployer des solutions web innovantes qui soutiennent et stimulent la croissance de votre entreprise.
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        <div className="subsection container mt-5">
            <WebServices/>
        </div>

            <SolutionsLogicielles/>

        </motion.div>
    );
};

export default Logiciel;
