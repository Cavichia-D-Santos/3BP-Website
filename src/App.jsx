import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import Arquivos from './pages/arquivos'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/arquivos" element={<Arquivos/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;