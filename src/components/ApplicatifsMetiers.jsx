import React from "react";

const ApplicatifsMetiers = () => {
    return (

<div className="subsection text-center container mt-5">

    <div className="row justify-content-center align-items-center mt-4">

        <h1 className="mb-5">Conception d'applicatifs métiers
        </h1>
        <h5 className="mb-5 text-center">Nous produisons des logiciels sur mesure spécifiquement crées
            pour répondre à vos besoins.</h5>
        <div className="row">
            <div className="col-md-4 mb-4 centered-content">
                <img src="/assets/img/wth_web_2.png" className="img-fluid mb-4" alt=""/>
                <h2 className="secondarycolor mb-4">Interfaçage</h2>
            </div>
            <div className="col-md-4 mb-4 centered-content">
                <img src="/assets/img/wth_webdesigner_2.png" className="img-fluid mb-4" alt=""/>
                <h2 className="secondarycolor mb-4">Analyse</h2>
            </div>
            <div className="col-md-4 mb-4 centered-content">
                <img src="/assets/img/wth_dev_2.png" className="img-fluid mb-4" alt=""/>
                <h2 className="secondarycolor mb-4">Conception</h2>
            </div>
        </div>

    </div>


</div>

    );
}

export default ApplicatifsMetiers;