import React, { useState } from 'react'
import { useContext } from 'react'
import AppContext from '../ContextStates/AppContext'

export default function AddTask(props) {

    const {AddTask,updateTask} = useContext(AppContext)


    const [dateType, setdateType] = useState("text")


    const [task, settask] = useState(props.inputValues)

    const onFocusClick=()=>{
        setdateType('datetime-local')
    }

    const onBlurClick=()=>{
        setdateType('text')
    }

    const handleAdd=(e,taskId)=>{

        e.preventDefault();

        if(!props.isEdit){
            AddTask(task.title,task.description,task.DueDate)
            settask(props.inputValues)
        }
        else{
            updateTask(task.title,task.description,task.DueDate,props.id)
        }

        



    }

    const onchange=(e)=>{
        settask({...task,[e.target.name]:e.target.value})
    }


  return (
    <div style={{display:`${props.addTaskVis}`}}>
        <form className="row g-3 flex-wrap" onSubmit={handleAdd}>
            <div className="col-sm">
                <input type="text" name='title' value={task.title} className="form-control" placeholder="Enter Title" aria-label="First name" onChange={onchange} required minLength={5}/>
            </div>
            <div className="col-sm-6">
                <textarea className="form-control" value={task.description}  name='description' placeholder="Enter Description" id="floatingTextarea2" rows={2} onChange={onchange}></textarea>
            </div>
            <div className="col-sm">
                <input placeholder="Select Due date" value={task.DueDate}  name='DueDate' type={dateType} onFocus={onFocusClick} onBlur={onBlurClick} className="form-control" onChange={onchange}/>
            </div>
            <div className="col-sm text-center">
                <button className="btn btn-primary w-100">Add</button>
            </div>
        </form>
    </div>
  )
}
