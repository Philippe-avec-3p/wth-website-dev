import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">

            <header className="hero-section">
                <video className="background-video" autoPlay loop muted>
                    <source src="assets/video/index-video.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                </video>
                <div className="overlay">
                    <h1 className="main-text">Test</h1>
                    <img src="assets/img/logo-wth-white_21.png"></img>
                </div>
            </header>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">TechWorld</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Réseau</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Développement Web</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>


            <section className="section networks">
                <div className="container text-center">
                    <h2>Le Réseau</h2>
                    <p>Le réseau est essentiel pour la connectivité mondiale. Il permet de relier les systèmes, d'échanger des informations et de faciliter la communication entre les utilisateurs à travers le monde.</p>
                </div>
            </section>


            <section className="section web-development">
                <div className="container text-center">
                    <h2>Développement Web</h2>
                    <p>Le développement web consiste à créer des sites web interactifs et des applications en ligne. Il utilise diverses technologies telles que HTML, CSS, JavaScript, ainsi que des frameworks modernes comme React, Vue.js et Angular.</p>
                </div>
            </section>
        </div>
    );
}

export default App;
