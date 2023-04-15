import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid">
          <span className="navbar-brand">Honda BR-V</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="myDIV">
              <li className="nav-item">
                <NavLink className="nav-link" exact='true' to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  exact='true' to='/Images'>Images</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact='true' to='/Video'>Videos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  exact='true' to="/Honda BRV About">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
