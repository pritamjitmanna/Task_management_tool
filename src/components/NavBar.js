import React from 'react'
import '../css/custom.css'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import AppContext from '../ContextStates/AppContext';


export default function NavBar() {

    const {isLogin,setisLogin,tasks,settemptasks} = useContext(AppContext)
    const navigate=useNavigate()

    const handleLogout=(e)=>{
        e.preventDefault()
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('username');
        setisLogin({
            iS:false,
            username:""
        })

        navigate('/')
    }

    const findIndices=(e,word)=>{
        let ptr=0;

        let indices=[]

        while(1){
            let index=word.indexOf(e.target.value,ptr);
            if(index>-1)indices.push(index)
            else break;
            ptr+=word.length
        }

        return indices
    }

    const handleOnChange=(e)=>{
        let temp=[]
        tasks.forEach(element => {
            if(element.description.includes(e.target.value)||element.title.includes(e.target.value))temp.push(element)
        });

        settemptasks(temp);
    }


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
                
                {isLogin.iS&&<div className="nav-item dropdown me-2">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {isLogin.username}
                    </a>
                    <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" aria-current="page" to="/dashboard">Dashboard</Link></li>
                            <li><button className="dropdown-item" onClick={handleLogout}>Sign Out</button></li>
                    </ul>
                </div>}

                <form className="d-flex" role="search">
                    <input className="form-control" type="search" placeholder="Search" onChange={handleOnChange} aria-label="Search"/>
                    {/* <button id="search-btn" className='mt-2'><i className="fas fa-search" style={{fontSize:"1.4rem"}} ></i></button> */}
                </form>

                {!isLogin.iS&&<Link className="btn btn-outline-light hover-custom transition-custom mx-1 my-1" role='button' to="/login">Sign In</Link>}
                
            </div>
        </div>
  </nav>
  )
}
