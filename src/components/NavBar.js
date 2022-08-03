import React from 'react'
import '../custom.css'


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg " id='user-nav'>
        <div className="container-fluid ">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item py-0">
                        <a className="nav-link active hover-custom transition-custom py-1 b-radius-custom mx-1" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active hover-custom transition-custom py-1 b-radius-custom mx-1" aria-current="page" href="#">About</a>
                    </li>
                    
                </ul>
                

                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light hover-custom transition-custom" type="submit">Search</button>
                </form>

                <button className="btn btn-outline-light hover-custom transition-custom mx-1 my-1">Sign In</button>

            </div>
        </div>
  </nav>
  )
}
