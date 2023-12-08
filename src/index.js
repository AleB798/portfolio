import React from 'react';
import './styles/global.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

//page
import Home from './pages/Home';

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
