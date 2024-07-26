// export default function()
// React function based component

import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className={`container-fluid bg-{props.mode}`}>
    <a className="navbar-brand" href="index.html">{props.navTitle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.aboutText}</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>

      </form>
      <div className={`form-check form-switch mx-4 text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
    </div>
  </div>
</nav>
  )
}

// PropTypes
// propTypes can be string, number, object, array, .... so on
Navbar.propTypes = {navTitle: PropTypes.string.isRequired, // isRequired kyunki Title aur About ke text ke bina ye Navbar component adhura hai
    aboutText: PropTypes.string.isRequired
}

// Default Props
// defaultProps - konsi value use kare jab prop ki value pass nhi ki jae toh
Navbar.defaultProps = {navTitle: "Set title here",
    aboutText: "About text here"
}