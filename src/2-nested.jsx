import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Portafolio from './Components/Portafolio'
import Inicio from './Components/Inicio'
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
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
        <section>
          <Routes>
            <Route path='/portafolio/*' element={<Portafolio />} />
            {/* <Route path='/' element={<Inicio />} /> */}
            <Route path='/*' element={<Inicio />} />
          </Routes>
        </section>
    </div>
  )
}

export default App
