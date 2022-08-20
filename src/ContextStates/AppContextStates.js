import { useState } from 'react';
import AppContext from './AppContext'


const ContextStates=(props)=>{


    let host="http://localhost:5000"

    const [isLogin, setisLogin] = useState(false)
    const [tasks, settasks] = useState([])

    const [alert, setalert] = useState({
        isAlert:false,
        type:"danger",
        message:"shdfkjdhfk"
    })


    // Requirements

    const capitalise=(word)=>{
        if(word.length===1)return word.toUpperCase();
        return word.charAt(0).toUpperCase()+word.substr(1,word.length-1);
    }

    const showAlert=(type,message)=>{
        setalert({
            isAlert:true,
            type,message
        })

        setTimeout(() => {
            setalert({
                ...alert,
                isAlert:false
            })
        }, 2000);
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


    const FetchTasks=async()=>{

        let response=await fetch(`${host}/tasks/fetchtasks`,{
            method:'GET',
            headers:{
                'jwt_token':localStorage.getItem('jwt_token')
            }
        })

        response=await response.json();



        if(response.success){
            settasks(response.user_tasks)
        }
        else{
            showAlert('danger',response.errors[0])
        }


    }

    const AddTask=async(title,description,DueDate)=>{

        // console.log(title,description,DueDate);
        
        let response=await fetch(`${host}/tasks/addtask`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'jwt_token':localStorage.getItem('jwt_token')
            },
            body:JSON.stringify({title,description,DueDate})
        })

        response=await response.json();

        // console.log(response);

        if(response.success){
            showAlert('success','Task Added Successfully')
            FetchTasks()

        }
        else{
            showAlert('danger',response.errors[0].msg)
        }


    }

    const DeleteTask=async(taskId)=>{

        let response=await fetch(`${host}/tasks/deletetask/${taskId}`,{
            method:'DELETE',
            headers:{
                'jwt_token':localStorage.getItem('jwt_token')
            }
        })

        response=await response.json()

        if(response.success){
            showAlert('success','Task Deleted Successfully')
            FetchTasks()
        }
        else{
            showAlert('danger',response.errors[0].msg)
        }


    }


    const StarTask=async(taskId,setstarred,starred)=>{

        let response=await fetch(`${host}/tasks/startask/${taskId}`,{
            method:'PUT',
            headers:{
                "Content-Length": "0",
                "jwt_token":localStorage.getItem('jwt_token')
            }
        })

        response=await response.json();

        if(response.success){
            if(starred==="")setstarred("starred")
            else setstarred("");
            FetchTasks()
          }
          else{
            showAlert('danger',response.errors[0].msg)
          }


    }


    const updateTask=async(title,description,DueDate,taskId)=>{

        let response=await fetch(`${host}/tasks/updatetask/${taskId}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'jwt_token':localStorage.getItem('jwt_token')
            },
            body:JSON.stringify({title,description,DueDate})
        })

        response=await response.json()

        // console.log(response);

        if(response.success){
            showAlert('success','Task Update Successfully')
            FetchTasks()
        }
        else{
            showAlert('danger',response.errors[0].msg)
        }

    }







    return(
        <AppContext.Provider value={{capitalise,RegisterUser,isLogin,setisLogin,alert,setalert,showAlert,LoginUser,FetchTasks,tasks,AddTask,DeleteTask,StarTask,updateTask}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextStates;