import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import Blanda from './components/Blanda';
import Semidura from './components/Semidura';
import Dura from './components/Dura';
import Techos from './components/Techos';
import { Analytics } from "@vercel/analytics/react"

const App = () => (
  <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/catalogo" element={<Catalog />} />
    <Route path="/blanda" element={<Catalog />} />
    <Route path="/semiduras" element={<Semidura />} />
    <Route path="/duras" element={<Dura />} />
    <Route path="/techos" element={<Techos />} />





    </Routes>
  </Router>
);

export default App;