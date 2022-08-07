import React from 'react'
import '../css/custom.css'
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg " id='user-nav'>
        <div className="container-fluid ">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item py-0">
                        <Link className="nav-link active hover-custom transition-custom py-1 b-radius-custom mx-1" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active hover-custom transition-custom py-1 b-radius-custom mx-1" aria-current="page" to="/">About</Link>
                    </li>
                    
                </ul>
                

                <form className="d-flex" role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <i className="fas fa-search mt-2" style={{fontSize:"1.4rem"}} id="search-btn"></i>
                </form>

                <Link className="btn btn-outline-light hover-custom transition-custom mx-1 my-1" role='button' to="/login">Sign In</Link>

            </div>
        </div>
  </nav>
  )
}
