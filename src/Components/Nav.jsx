import React from "react";
import { NavLink, Routes, Route, useParams } from "react-router-dom"

const Proyecto = () => {
  // let { proyecto_id } = useParams()
  let params = useParams()
  console.log(params.proyecto_id)
  return (
    <h2>Proyecto... {params.proyecto_id}</h2>
  )
}

const Portafolio = () => {
  let params = useParams()
  console.log(params.proyecto_id)
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          {/* <NavLink style={{ fontSize: 20 }} to={'/portafolio/proyecto-1'}>Proyecto 1</NavLink> */}
          <NavLink style={{ fontSize: 20 }} to={`${params}/proyecto-1`}>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink style={{ fontSize: 20 }} to={'/portafolio/proyecto-2'}>Proyecto 2</NavLink>
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
