import React from 'react'
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
<nav className="navbar navbar-expand-lg mb-4">
  <div className="container-fluid">
    <a className="navbar-brand text-white fw-bold fs-2" >Todo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-3">
        <li className="nav-item">
        <Link to="/" className="text-decoration-none text-white m-3 fw-bolder fs-5" >Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/todolist" className="text-decoration-none text-white fw-bolder fs-5">Todolist</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

