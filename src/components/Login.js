import React from 'react'
import '../css/custom.css'
import { Link, useNavigate } from "react-router-dom";
import PointNavigation from './PointNavigation';
import { useContext,useState } from 'react';
import AppContext from '../ContextStates/AppContext';

export default function Login() {

    const {LoginUser,setisLogin,showAlert} = useContext(AppContext)
    const navigate=useNavigate()

    const [credentials, setcredentials] = useState({email:"",password:""})
    const [passwordReq, setpasswordReq] = useState({
        Type:"password",
        icon:""
    })

    const onchange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
    }


    const handleLogin=async (e)=>{
        e.preventDefault()

        let response=await LoginUser(credentials.email,credentials.password)

        if(response.success){
            setisLogin(true)
            
            navigate('/dashboard')
            showAlert('success',"Successfully Logged In")
            setcredentials({email:"",password:""})
        }
        else{
            showAlert('danger',response.errors[0])
        }
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
                    <form onSubmit={handleLogin}>
                        <div className="mb-3 custom-width-inps">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" placeholder='Enter Your Email' onChange={onchange}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="d-flex">
                            <div className="mb-3 custom-width-inps">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type={passwordReq.Type} name='password' className="form-control" id="password" placeholder='Enter Your Password' onChange={onchange} required minLength={4}/>
                            </div>
                            <i class={`fas fa-eye${passwordReq.icon}`} style={{position: "relative",top: "43px",right: "28px"}} onClick={handlePass}></i>
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
