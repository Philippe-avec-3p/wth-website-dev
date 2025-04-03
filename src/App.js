import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Infogerance from "./pages/Infogerance";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Accueil />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/infogerance" element={<Infogerance />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <LayoutGroup>
                <AnimatedRoutes />
            </LayoutGroup>

            <Footer />
        </Router>
    );
}

export default App;
