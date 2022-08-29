import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import AppContext from '../ContextStates/AppContext'
import AddTask from './AddTask'

export default function Taskcard(props) {

    // console.log(props.title);

    const {DeleteTask,StarTask,completeTask} = useContext(AppContext)

    const handleDel=(e)=>{
      e.preventDefault();

      DeleteTask(props.id)

    }

    const handleStar=async(e)=>{
      e.preventDefault()

      StarTask(props.id,setstarred,starred);


      

    }

    const [starred, setstarred] = useState("")

    const [colorToTime, setcolorToTime] = useState("green")


    const deff=()=>{
      if(props.starred)setstarred("starred")
    }

    useEffect(() => {
      deff()
      // eslint-disable-next-line
      
    })


    const [addTaskVis, setaddTaskVis] = useState('none')

    const checkIfWithinDayOrWeek=(now,loc)=>{
      let millisecondsInWeek=7*24*3600*1000;

      if(new Date(loc).getDate()-new Date(now).getDate()==0)return 0;
      else if(new Date(loc).getDate()-new Date(now).getDate()==1)return 1;
      if(loc-now<=millisecondsInWeek)return 2;
      return 3;
    }


    const getDayName=(day)=>{
      if(day===0)return "Sunday";
      if(day===1)return "Monday";
      if(day===2)return "Tuesday";
      if(day===3)return "Wednesday";
      if(day===4)return "Thursday";
      if(day===5)return "Friday";
      return "Saturday";

    }

    const changeLocal=()=>{

      let local
      if(props.due_date===null)local='-'
      else{
        let now=new Date().getTime()

        let loc=new Date(props.due_date).getTime()
  
        let flag=checkIfWithinDayOrWeek(now,loc)
  
        if(flag===0){
          local="Today"
          local=local.concat(" ")
          local=local.concat(new Date(props.due_date).toLocaleTimeString())
          setcolorToTime('red');
        }
        else if(flag===1){
          local="Tomorrow"
          local=local.concat(" ")
          local=local.concat(new Date(props.due_date).toLocaleTimeString())
          setcolorToTime('#ff9000')
        }
        else if(flag===2){
          local=getDayName(new Date(props.due_date).getDay()).toString()
          local=local.concat(" ")
          local=local.concat(new Date(props.due_date).toLocaleTimeString())
        }
        else local=new Date(props.due_date).toLocaleString()
  
        // console.log(local);
        
  
      }
      settimeDate(local)


      

    }

    const [timeDate, settimeDate] = useState("")


    setInterval(() => {
      changeLocal()
    }, 0);


    



    const handleAddClick=(e)=>{
        e.preventDefault()
        if(addTaskVis==='none')setaddTaskVis('block')
        else setaddTaskVis('none')
    }


    const handleComplete=(e)=>{
      e.preventDefault();
      completeTask(props.id)
    }
    

  return (
    <>

    
        <tr>
            <td name='SNo'>{props.index}</td>
            <td name='Title'>{props.title}</td>
            <td name='Description'>{props.description.length===0?'-':props.description}</td>
            <td name='DueDate' style={{color:colorToTime}}>{timeDate}</td>
            <td className="dropdown">
              <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-ellipsis-v"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" role='button' href="#"><i className="far fa-edit" onClick={handleAddClick}></i></a></li>
                <li><a className="dropdown-item" role='button' href="#"><i className="fas fa-trash-alt" onClick={handleDel}></i></a></li>
                <li><a className="dropdown-item" role='button' href="#"><i className={`far fa-star ${starred}`} onClick={handleStar}></i></a></li>
                <li><a className="dropdown-item" role='button' href="#"><i className="fas fa-check" onClick={handleComplete}></i></a></li>
              </ul>
            </td>
        </tr>
        {addTaskVis==='block'&&<tr>
          <td colSpan={5} className='editOp'>
            <AddTask inputValues={{
              title:props.title,
              description:props.description,
              DueDate:props.due_date
            }} isEdit={true} id={props.id}/>
          </td>

        </tr>}
        
      </>
  )
}
