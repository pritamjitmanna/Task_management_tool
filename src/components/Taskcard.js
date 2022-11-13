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

    const [isRunningLate, setisRunningLate] = useState(false)

    const [starred, setstarred] = useState("")

    const [colorToTime, setcolorToTime] = useState("green")

    const [timeLeft, settimeLeft] = useState('-')


    const deff=()=>{
      if(props.starred)setstarred("starred")
    }

    useEffect(() => {
      deff()
      const interval=setInterval(() => {
        changeLocal()
      }, 0);

      return ()=>clearInterval(interval)
      // eslint-disable-next-line
    })


    const [addTaskVis, setaddTaskVis] = useState('none')

    const checkIfWithinDayOrWeek=(now,loc)=>{
      let millisecondsInWeek=7*24*3600*1000;


      if(Math.abs(new Date(loc).getDate()-new Date(now).getDate())===0)return 0;
      else if(Math.abs(new Date(loc).getDate()-new Date(now).getDate())===1)return 1;
      if(Math.abs(loc-now)<=millisecondsInWeek)return 2;
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

        // console.log(loc);
        // console.log(now);

        let lefttimeMilli=Math.abs(loc-now)

        if(now>loc)setisRunningLate(true)
        else setisRunningLate(false)

        let secondsLeft=Math.floor(lefttimeMilli/1000)
        let minsLeft=Math.floor(secondsLeft/60);
        secondsLeft%=60

        let hoursLeft=Math.floor(minsLeft/60);
        minsLeft%=60

        settimeLeft(`${hoursLeft}:${minsLeft}:${secondsLeft}`)
        

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
        
        if(isRunningLate)setcolorToTime('red')
  
        
  
        // console.log(local);
        
  
      }
      settimeDate(local)


      

    }

    const [timeDate, settimeDate] = useState("")


    


    



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
            <td name='SNo' className='cd-5'>{props.index}</td>
            <td name='Title' className='cd-14'>{props.title}</td>
            <td name='Description' className='cd-48'>{props.description.length===0?'-':props.description}</td>
            {!isRunningLate&&<td name="Time Left" className='cd-8'>{timeLeft}</td>}
            {isRunningLate&&<td name="Time Left" className='cd-8'>Running Late By {timeLeft}</td>}
            <td name='Due Date' className='cd-20' style={{color:colorToTime}}>{timeDate}</td>
            <td className="dropdown cd-1">
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
