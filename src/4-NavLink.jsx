import React from "react"
import { Routes, Route, NavLink } from "react-router-dom"
import Portafolio from './Components/Nav'
import Inicio from './Components/Inicio'
// import './App.css'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink style={{ fontSize: 20 }} to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink style={{ fontSize: 20 }} to="/portafolio">Portafolio</NavLink>
          </li>
        </ul>
      </nav>
        <section>
          <Routes>
            <Route path='/portafolio/*' element={<Portafolio />} />
            <Route path='/*' element={<Inicio />} />
          </Routes>
        </section>
    </div>
  )
}

export default App
