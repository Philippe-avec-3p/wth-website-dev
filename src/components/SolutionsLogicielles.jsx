import React from "react";
import { Link } from "react-router-dom";
import "./SolutionsLogicielles.css";

const SolutionsLogicielles = () => {
    return (
        <div className="subsection container mt-5">
            <h1 className="text-center mb-5 service-title">Nos solutions logicielles</h1>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />

            <div className="row gy-3 gy-md-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <Link to="/trans-fret-system" className="card border-dark zoom-effect text-center p-4 text-decoration-none">
                        <div className="d-flex justify-content-center">
                            <img src="/assets/img/TFS2.png" alt="Trans Fret System" className="img-fluid img-sm mb-3" />
                        </div>
                        <h4 className="mb-2 service-title">Trans Fret System</h4>
                    </Link>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <Link to="/comops" className="card border-dark zoom-effect text-center p-4 text-decoration-none">
                        <div className="d-flex justify-content-center">
                            <img src="/assets/img/COMOPOS_CAMS1.png" alt="ComOps" className="img-fluid img-sm mb-3" />
                        </div>
                        <h4 className="mb-2 service-title">ComOps</h4>
                    </Link>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <Link to="/cams" className="card border-dark zoom-effect text-center p-4 text-decoration-none">
                        <div className="d-flex justify-content-center">
                            <img src="/assets/img/COMOPOS_CAMS1.png" alt="CAMS" className="img-fluid img-sm mb-3" />
                        </div>
                        <h4 className="mb-2 service-title">CAMS</h4>
                    </Link>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <Link to="/esga" className="card border-dark zoom-effect text-center p-4 text-decoration-none">
                        <div className="d-flex justify-content-center">
                            <img src="/assets/img/esga2.png" alt="ESGA" className="img-fluid img-sm mb-3" />
                        </div>
                        <h4 className="mb-2 service-title">ESGA</h4>
                    </Link>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <Link to="/intech" className="card border-dark zoom-effect text-center p-4 text-decoration-none">
                        <div className="d-flex justify-content-center">
                            <img src="/assets/img/intech.png" alt="InTECH" className="img-fluid img-sm mb-3" />
                        </div>
                        <h4 className="mb-2 service-title">InTECH</h4>
                    </Link>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <Link to="/importdata" className="card border-dark zoom-effect text-center p-4 text-decoration-none">
                        <div className="d-flex justify-content-center">
                            <img src="/assets/img/importData1.png" alt="ImportDATA" className="img-fluid img-sm mb-3" />
                        </div>
                        <h4 className="mb-2 service-title">ImportDATA</h4>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SolutionsLogicielles;
