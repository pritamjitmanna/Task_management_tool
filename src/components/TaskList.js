import React, { useState } from 'react'
import Taskcard from './Taskcard'
import '../css/custom.css'
import '../css/phone-custom.css'

import { useEffect } from 'react'
import { useContext } from 'react'
import AppContext from '../ContextStates/AppContext'
import { useNavigate } from 'react-router-dom'

export default function TaskList(props) {

    const {FetchTasks,temptasks,tasks} = useContext(AppContext)
    const navigate=useNavigate()




    useEffect(() => {
        if(localStorage.getItem('jwt_token')!==null)FetchTasks()
        else navigate('/')
    // eslint-disable-next-line
    }, [])

    

  return (
    <div style={{display:`${props.pageType==='completedtask'?'none':'block'}`}}>
    
        
            {tasks.length?<table className='actual-table'>
                <thead>
                    <tr>
                        <th className='cd-5'>S No</th>
                        <th className='cd-14'>Title</th>
                        <th className='cd-48'>Description</th>
                        <th className='cd-8'>Time Left</th>
                        <th className='cd-20'>Due Date</th>
                        <th className='cd-1'></th>
                    </tr>
                </thead>
                {<tbody className='heaDing'>
                    <tr>
                        <td colSpan={6}>Important</td>
                    </tr>
                </tbody>}
                <tbody>
                    {tasks.map((element,index)=>{
                        if(element.starred)return <Taskcard key={element._id} id={element._id} starred={element.starred} index={index+1} title={element.title} description={element.description} due_date={element.DueDate}/>
                    })}
                </tbody>
                <tbody className='heaDing'>
                    <tr>
                        <td colSpan={6}>All</td>
                    </tr>
                </tbody>
                <tbody>
                    {temptasks.map((element,index)=>{
                        return <Taskcard key={element._id} id={element._id} starred={element.starred} index={index+1} title={element.title} description={element.description} due_date={element.DueDate}/>
                    })}
                </tbody>
            </table>:"Add Your task to show"}
        
    </div>
  )
}
