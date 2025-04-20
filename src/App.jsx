import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import Arquivos from './pages/arquivos'
import { Layout } from './components/Layout';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/arquivos" element={<Arquivos/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;