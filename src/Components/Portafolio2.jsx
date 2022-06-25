import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom"

const Proyecto = () => {
  let { proyecto_id } = useParams()
  console.log({proyecto_id})
  return (
    <h2>Proyecto... {proyecto_id}</h2>
  )
}

const Portafolio = () => {
  // const { proyecto_id }= useParams()
  // console.log({proyecto_id})
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={'/portafolio/proyecto-1'}>Proyecto 1</Link>
          {/* <Link to={`${proyecto_id}`}>Proyecto 1</Link> */}
        </li>
        <li>
          <Link to={'/portafolio/proyecto-2'}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path='/:proyecto_id/*' element={<Proyecto />} />
        </Routes>
      </div>
    </div>
  )
}

export default Portafolio
