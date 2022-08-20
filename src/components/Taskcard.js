import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import AppContext from '../ContextStates/AppContext'
import AddTask from './AddTask'

export default function Taskcard(props) {

    // console.log(props.title);

    const {DeleteTask,StarTask,showAlert} = useContext(AppContext)

    const handleDel=(e)=>{
      e.preventDefault();

      DeleteTask(props.id)

    }

    const handleStar=async(e)=>{
      e.preventDefault()

      StarTask(props.id,setstarred,starred);


      

    }

    const [starred, setstarred] = useState("")

    const deff=()=>{
      if(props.starred)setstarred("starred")
    }

    useEffect(() => {
      deff()
      // eslint-disable-next-line
      
    })


    const [addTaskVis, setaddTaskVis] = useState('none')

    



    const handleAddClick=(e)=>{
        e.preventDefault()
        if(addTaskVis==='none')setaddTaskVis('block')
        else setaddTaskVis('none')
    }
    

  return (
    <>

    
        <tr>
            <td name='SNo'>{props.index}</td>
            <td name='Title'>{props.title}</td>
            <td name='Description'>{props.description}</td>
            <td name='DueDate'>{props.due_date}</td>
            <td className="dropdown">
              <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-ellipsis-v"></i>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" role='button' href="#"><i className="far fa-edit" onClick={handleAddClick}></i></a></li>
                <li><a className="dropdown-item" role='button' href="#"><i className="fas fa-trash-alt" onClick={handleDel}></i></a></li>
                <li><a className="dropdown-item" role='button' href="#"><i className={`far fa-star ${starred}`} onClick={handleStar}></i></a></li>
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
