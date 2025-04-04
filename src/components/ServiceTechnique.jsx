import React from "react";

const ServiceTechnique = () => {
    return (
        <div className="py-3 py-md-5 py-xl-8 container subsection">
            <h1 className="text-center mb-5 service-title">
                Le service technique
            </h1>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />

            <div className="container overflow-hidden">
                <div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">


                    <div className="col-12 col-lg-5">
                        <div className="col-12 col-xl-11">
                            <h4 className="display-5 mb-3 mb-xl-4">
                                Une équipe d'experts, des interlocuteurs dédiés
                            </h4>
                            <h5 className="mb-3 mb-xl-4">
                                Une assistance sur mesure, une prise en main globale
                            </h5>
                            <div className="text-center">
                                <img src="/assets/img/wth_news.png" className="img-fluid rounded shadow-lg" alt="WTH News" />
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg-7 overflow-hidden">
                        <div className="row gy-4 justify-content-center">
                            <div className="col-12 col-sm-6">
                                <div className="card border-0 border-bottom border-primary shadow-sm p-4 text-center">
                                    <img src="/assets/img/network_12.png" className="img-fluid rounded" alt="Network 12" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="card border-0 border-bottom border-primary shadow-sm p-4 text-center">
                                    <img src="/assets/img/network_22.png" className="img-fluid rounded" alt="Network 22" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="card border-0 border-bottom border-primary shadow-sm p-4 text-center">
                                    <img src="/assets/img/network_32.png" className="img-fluid rounded" alt="Network 32" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="card border-0 border-bottom border-primary shadow-sm p-4 text-center">
                                    <img src="/assets/img/network_42.png" className="img-fluid rounded" alt="Network 42" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceTechnique;
