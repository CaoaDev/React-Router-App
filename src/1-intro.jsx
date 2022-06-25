import React from "react"
import { Routes, Route, Link } from "react-router-dom";
// import './App.css'

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
            <Route path='/portfolio' element={<h1>Portafolio</h1>} />
          </Routes>
        </section>
    </div>
  )
}

export default App
