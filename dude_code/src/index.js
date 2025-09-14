import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resource from './Pages/Resource';
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/resource" element={<Resource />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
