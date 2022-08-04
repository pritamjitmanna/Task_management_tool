import React from 'react'
// import '../custom.css'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-center">
        <div className="container py-3">
            <div className="py-4 d-flex">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
                    <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="col-lg-2 col-md-6 mb-4 mb-lg-0 flex-grow-1">
                    <h6 className="text-uppercase font-weight-bold mb-4 text-light">Company</h6>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-2"><Link to="/login" className="text-muted btn">Login</Link></li>
                        <li className="mb-2"><Link to="/register" className="text-muted btn">Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="py-3">
        <div className="container text-center">
            <p className="text-muted mb-0 py-2">© 2022 | taskI | All rights reserved.</p>
        </div>
        </div>
    </footer>
  )
}
