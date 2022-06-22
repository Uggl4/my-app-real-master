import React from 'react'
import "../App.css";
import { Navbar } from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Contacto } from "./Contacto";
import { Ciudad } from "./Ciudad";
import { Perfil } from "./Perfil";
import { Tatuadores } from "./Tatuadores";


export const Principal = () => {
  return (
    <>
          <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/inicio" element={<Inicio />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/ciudad" element={<Ciudad />} />
          <Route exact path="/tatuadores" element={<Tatuadores />} />
          <Route exact path="/perfil" element={<Perfil />} />
        </Routes>

        {Tatuadores}
      </BrowserRouter>
    </>
    
  )
}
