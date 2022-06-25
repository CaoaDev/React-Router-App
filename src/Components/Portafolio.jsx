import React from "react";
import { Link, Routes, Route } from "react-router-dom"


const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={'/portafolio/proyecto-1'}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={'/portafolio/proyecto-2'}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path='/proyecto-1' element={<h2>Proyecto 1</h2>} />
          <Route path='/proyecto-2' element={<h2>Proyecto 2</h2>} />
        </Routes>
      </div>
    </div>
  )
}

export default Portafolio
