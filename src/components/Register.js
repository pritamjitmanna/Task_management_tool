import React from 'react'
import '../css/custom.css'
import '../css/phone-custom.css'
import { Link } from "react-router-dom";


export default function Register() {
  return (
    <section id='login'>
        <div className="container border border-success mt-3 cd-50 center" id='login-seg'>
            
            <div className='.login-seg-1'>
                <form >
                    <div className="mb-3 custom-width-inps">
                        <label htmlFor="name" className="form-label">Username</label>
                        <input type="name" className="form-control" id="name" name='name' aria-describedby="emailHelp" placeholder='Enter Your Username'/>
                    </div>
                    <div className="mb-3 custom-width-inps">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='Enter Your Email'/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 custom-width-inps">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="password" placeholder='Enter Your Password'/>
                    </div>
                    <button type="submit" className="btn-user hover-custom transition-custom">Register</button>
                </form>
                <div className='mt-1'>Already Have An Account? <Link to="/login">Login</Link></div>
            </div>

            
        </div>
    </section>
  )
}