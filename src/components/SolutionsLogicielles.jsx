import React from "react";

const SolutionsLogicielles = () => {
    return (
        <div className="subsection container mt-5">
            <h1 className="text-center mb-5">
                Nos solutions <span className="secondarycolor" style={{ fontWeight: "bold" }}>logicielles</span>
            </h1>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />

            <div className="row gy-3 gy-md-4">
                {[
                    { href: "tfs.php", img: "/assets/img/TFS2.png", title: "Trans Fret System" },
                    { href: "comops.php", img: "/assets/img/COMOPOS_CAMS1.png", title: "ComOps" },
                    { href: "cams.php", img: "/assets/img/COMOPOS_CAMS1.png", title: "CAMS" },
                    { href: "esga.php", img: "/assets/img/esga2.png", title: "ESGA" },
                    { href: "intech.php", img: "/assets/img/intech.png", title: "InTECH" },
                    { href: "importdata.php", img: "/assets/img/importData1.png", title: "ImportDATA" }
                ].map((solution, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <a href={solution.href} className="card border-dark zoom-effect text-decoration-none">
                            <div className="card-body text-center p-4 p-xxl-5">
                                <img src={solution.img} alt={solution.title} className="img-fluid mb-4" />
                                <h4 className="mb-4">{solution.title}</h4>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SolutionsLogicielles;
