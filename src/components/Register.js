import React from 'react'
import '../css/custom.css'
import '../css/phone-custom.css'
import { Link } from "react-router-dom";
import PointNavigation from './PointNavigation';
import { useContext } from 'react';
import AppContext from '../ContextStates/AppContext';
import { useState } from 'react';


export default function Register() {


    const {RegisterUser} = useContext(AppContext)

    const [credentials, setcredentials] = useState({username:"",email:"",password:""});

    const handleClickReg=async (e)=>{

        e.preventDefault();

        let response=await RegisterUser(credentials.username,credentials.email,credentials.password)

        if(response.success){

            localStorage.setItem('jwt_token',JSON.stringify(response.user.jwt_token))
        }
    }

    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }


  return (
    <>
    <PointNavigation link1={"login"} link2={"register"}/>
    <section id='login'>
        <div className="container border border-success cd-50 center" id='login-seg'>
            
            <div className='.login-seg-1'>
                <form onSubmit={handleClickReg}>
                    <div className="mb-3 custom-width-inps">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="name" className="form-control" id="username" name='username' aria-describedby="emailHelp" placeholder='Enter Your Username' onChange={onchange}/>
                    </div>
                    <div className="mb-3 custom-width-inps">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='Enter Your Email' onChange={onchange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 custom-width-inps">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="password" placeholder='Enter Your Password' onChange={onchange}/>
                    </div>
                    <button type="submit" className="btn-user hover-custom transition-custom">Register</button>
                </form>
                <div className='mt-1'>Already Have An Account? <Link to="/login">Login</Link></div>
            </div>

            
        </div>
    </section>

    </>
  )
}
