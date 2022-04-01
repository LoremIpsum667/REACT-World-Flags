import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* renvoie à la page home */}
      <Route path='/' element={<Home />} />
      {/* renvoie à la page about */}
      <Route path='/about' element={<About />} />
      {/* si jamais l'url ne correspond à rien de déclaré, evoye à la page 404 */}
      <Route path='*' element={<Error/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;