import { useState } from 'react';
import AppContext from './AppContext'


const ContextStates=(props)=>{


    let host="http://localhost:5000"


    const capitalise=(word)=>{
        if(word.length===1)return word.toUpperCase();
        return word.charAt(0).toUpperCase()+word.substr(1,word.length-1);
    }

    const RegisterUser=async(username,email,password)=>{

        let response=await fetch(`${host}/users/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,email,password})
        })

        response=response.json();

        return response


    }

    const LoginUser=async(email,password)=>{

        let response=await fetch(`${host}/users/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
        })

        response=response.json();

        return response


    }



    return(
        <AppContext.Provider value={{capitalise,RegisterUser}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextStates;