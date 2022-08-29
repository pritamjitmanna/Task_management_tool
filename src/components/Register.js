import React from 'react'
import '../css/custom.css'
import '../css/phone-custom.css'
import { Link,  useNavigate } from "react-router-dom";
import PointNavigation from './PointNavigation';
import { useContext } from 'react';
import AppContext from '../ContextStates/AppContext';
import { useState } from 'react';


export default function Register() {


    const {RegisterUser,setisLogin,showAlert} = useContext(AppContext)
    const navigate=useNavigate()

    const [credentials, setcredentials] = useState({username:"",email:"",password:""});
    const [passwordReq, setpasswordReq] = useState({
        Type:"password",
        icon:""
    })

    const handleClickReg=async (e)=>{

        e.preventDefault();

        let response=await RegisterUser(credentials.username,credentials.email,credentials.password)

        if(response.success){

            localStorage.setItem('jwt_token',response.user.jwt_token)
            localStorage.setItem('username',response.user.username)
            setisLogin({
                iS:true,
                username:response.user.username
            })
            
            navigate('/dashboard')
            showAlert('success',"Successfully Registered")
            setcredentials({username:"",email:"",password:""})

        }
        else{
            showAlert('danger',response.errors[0])
        }
    }

    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }


    const handlePass=()=>{
        if(passwordReq.Type=='password'){
            setpasswordReq({
                Type:'text',
                icon:"-slash"
            })
        }
        else{
            setpasswordReq({
                Type:'password',
                icon:""
            })
        }
        
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
                        <input type="name" className="form-control" id="username" value={credentials.username} name='username' aria-describedby="emailHelp" placeholder='Enter Your Username' onChange={onchange} required minLength={5}/>
                    </div>
                    <div className="mb-3 custom-width-inps">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={credentials.email} name='email' aria-describedby="emailHelp" placeholder='Enter Your Email' onChange={onchange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="d-flex">
                        <div className="mb-3 custom-width-inps">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type={passwordReq.Type} name='password' value={credentials.password} className="form-control" id="password" placeholder='Enter Your Password' onChange={onchange} required minLength={4}/>
                        </div>
                        <i class={`fas fa-eye${passwordReq.icon}`} style={{position: "relative",top: "43px",right: "28px"}} onClick={handlePass}></i>
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
