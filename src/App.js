import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">

            <Navbar/>

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




            <section>
                <div className="container text-center">
                    <h2>Le Réseau</h2>
                    <p>Le réseau est essentiel pour la connectivité mondiale. Il permet de relier les systèmes, d'échanger des informations et de faciliter la communication entre les utilisateurs à travers le monde.</p>
                </div>
            </section>


            <section>
                <div className="container text-center">
                    <h2>Développement Web</h2>
                    <p>Le développement web consiste à créer des sites web interactifs et des applications en ligne. Il utilise diverses technologies telles que HTML, CSS, JavaScript, ainsi que des frameworks modernes comme React, Vue.js et Angular.</p>
                </div>
            </section>

            <Footer/>

        </div>
    );
}

export default App;
