import React, { useState } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import ParticlesComponent from './components/Particle';
import Skills from './components/Skills';
import Projects from "./components/Projects";
import Header from "./components/Header";








function App() {
  return (
    <div className="App">
  <Header />
<Routes>
  <Route path='/' element={<ParticlesComponent />} />
  <Route path='/skills' element={<Skills/>} />
  <Route path='/projects' element={<Projects />} />


</Routes>
    </div>
  );
}

export default App;
