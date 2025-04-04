import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Infogerance from "./pages/Infogerance";
import Logiciel from "./pages/Logiciel";
import Web from "./pages/Web";
import Reseaux from "./pages/Reseaux";
import TFS from "./pages/TFS";
import COMOPS from "./pages/COMOPS";
import CAMS from "./pages/CAMS";
import ESGA from "./pages/ESGA";
import InTech from "./pages/InTech";
import ImportDATA from "./pages/ImportDATA";
import ScrollToTop from "./ScrollToTop";



function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Accueil />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/infogerance" element={<Infogerance />} />
                <Route path="/logiciel" element={<Logiciel />} />
                <Route path="/reseaux" element={<Reseaux />} />
                <Route path="/web" element={<Web />} />
                <Route path="/trans-fret-system" element={<TFS />} />
                <Route path="/comops" element={<COMOPS />} />
                <Route path="/cams" element={<CAMS />} />
                <Route path="/esga" element={<ESGA />} />
                <Route path="/intech" element={<InTech />} />
                <Route path="/importdata" element={<ImportDATA />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <LayoutGroup>
                <AnimatedRoutes />
            </LayoutGroup>

            <Footer />
        </Router>
    );
}

export default App;
