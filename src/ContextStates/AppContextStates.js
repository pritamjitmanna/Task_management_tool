import { useEffect } from 'react';
import { useState } from 'react';
import AppContext from './AppContext'


const ContextStates=(props)=>{


    let host="http://localhost:5000"

    const [isLogin, setisLogin] = useState({
        iS:false,
        username:""
    })
    const [tasks, settasks] = useState([])
    const [completetasks, setcompletetasks] = useState([])
    const [temptasks, settemptasks] = useState([])
    const [analyts, setanalyts] = useState([])

    


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

    const compare=(a,b)=>{
        let date1=a.DueDate;
        let date2=b.DueDate;

        if(date1===null&&date2===null)return 0;
        else if(date1===null)return 1;
        else if(date2===null)return -1;

        date1=new Date(date1).getTime();
        date2=new Date(date2).getTime();

        return (date1<date2?-1:1);


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
            // console.log(response.user_tasks);

            let tasks=response.user_tasks
            let complete_tasks=response.complete_tasks
            let analytss=response.analyts


            // console.log(analyts);

            tasks.sort(compare)

            settasks(tasks)
            settemptasks(tasks)

            setcompletetasks(complete_tasks)
            setanalyts([{
                name: "Added",
                value: Number(analytss[0].added),
                fill:"blue"
              },
              {
                name: "Deleted",
                value: Number(analytss[0].deleted),
                fill:"red"
              },
              {
                name: "Completed",
                value: Number(analytss[0].completed),
                fill:"green"
              }])
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

        let actionBody={
            operation:'added'
        }

        let ActionRes=await ActionCount(actionBody)

        

        if(ActionRes.success&&response.success){
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

        let actionbody={
            operation:"deleted"
        }

        let ActionRes=await ActionCount(actionbody)

        if(response.success&&ActionRes.success){
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


    const completeTask=async(id)=>{

        let response=await fetch(`${host}/tasks/taskcomplete/${id}`,{
            method:'DELETE',
            headers:{
                'jwt_token':localStorage.getItem('jwt_token')
            }
        })

        response=await response.json()

        let actionbody={
            operation:"completed"
        }

        let ActionRes=await ActionCount(actionbody)

        if(response.success&&ActionRes.success){
            // console.log(response.complete);
            FetchTasks()
        }
        else{
            showAlert('danger',response.errors[0].msg)
        }

        

    }


    const ActionCount=async(data)=>{

        let ActionRes=await fetch(`${host}/tasks/actioncount`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'jwt_token':localStorage.getItem('jwt_token')
            },
            body:JSON.stringify(data)
        })

        ActionRes=await ActionRes.json()

        return ActionRes

    }







    return(
        <AppContext.Provider value={{capitalise,RegisterUser,isLogin,setisLogin,alert,setalert,showAlert,LoginUser,FetchTasks,tasks,AddTask,DeleteTask,StarTask,updateTask,temptasks,settemptasks,completeTask,completetasks,setcompletetasks,analyts}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextStates;