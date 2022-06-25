import React from "react"
import { Routes, Route, Link, Navigate } from "react-router-dom";
// import './App.css'

const Portafolio = () => {
  const logged = false
    if (!logged) {
     <Navigate push to="/" replace={true} /> 
  }
  return (
    <h1>Portafolio</h1>
  )
}
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portfolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
        <section>
          <Routes>
            <Route path='/' element={<h1>Inicio</h1>} />
            <Route path='*' element={<h1>Inicio</h1>} />
            <Route path='/portfolio' element={<Portafolio />} />
            {/* <Route path='*' element={<h1>Ruta no encontrada</h1>} /> */} //cuando no quieres redireccion a una por defecto
          </Routes>
        </section>
    </div>
  )
}

export default App
