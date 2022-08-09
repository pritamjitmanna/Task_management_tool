import React from 'react'
import '../css/custom.css'
import { Link } from "react-router-dom";
import PointNavigation from './PointNavigation';

export default function Login() {
  return (
    <>
        <PointNavigation link1={"login"} link2={"register"}/>

        <section id='login'>
            <div className="container border border-success cd-50 center" id='login-seg'>
                
                <div className='.login-seg-1'>
                    <form >
                        <div className="mb-3 custom-width-inps">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='Enter Your Email'/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 custom-width-inps">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="password" placeholder='Enter Your Password'/>
                        </div>
                        <button type="submit" className="btn-user hover-custom transition-custom">Login</button>
                    </form>
                    <div className='mt-1'>Don't have An Account <Link to="/register">Register</Link></div>
                </div>

                
            </div>
        </section>
    </>
  )
}
