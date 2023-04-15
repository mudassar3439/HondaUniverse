import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">Honda Universe</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" exact='true' to='/'>Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Name Of Cars
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item " exact='true' to="/Ap">Honda BR-V</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item ">HONDA HR-V</NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="#/">HONDA CIVIC </NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="#/">HONDA CITY </NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="#/">HONDA  ACROAD </NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="#/">HONDA CR-V </NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="#/">HONDA MOBILILO </NavLink></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><NavLink className="dropdown-item" to="#/">HONDA ... </NavLink></li>
                  
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact='true' to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact='true' to='/Login'>Log-In</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
