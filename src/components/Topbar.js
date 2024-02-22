import React from 'react'
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <img
                className="App-logo App-logo-spin"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tx_ib0LZXgVYLv_oE810Y3n4lMxfEXKMLQ&usqp=CAU"
                alt="Card cap"
              />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-3">
        <li className="nav-item">
        <Link to="/" className="text-decoration-none text-white m-3 fw-bolder fs-5" >Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/userlist" className="text-decoration-none text-white m-3 fw-bolder fs-5">User list</Link>
        </li>
        <li className="nav-item">
        <Link to="/gotogamepage" className="text-decoration-none m-3 text-white fw-bolder fs-5">Number Game</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

