import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
return (
            <div>
            <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <a className={`navbar-brand text-${props.mode==='dark'? 'light':'dark'}`} href="/">{props.heading}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.tab1}</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">{props.tab2}</a>
            </li>
            </ul>
            
            {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
            </form> */}


                <div className={`form-check form-switch  text-${props.mode==='dark'? 'light':'dark'}`}  >
                <input className="form-check-input" type="checkbox" onClick= {props.toglemode} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" for="flexSwitchCheckDefault">Enble Dark Mode</label>
            </div>
            </div>
            </div>
            </nav>


            </div>
            )
            }

Navbar.prototype = {heading:PropTypes.string }
Navbar.prototype = {tab2:PropTypes.string}
