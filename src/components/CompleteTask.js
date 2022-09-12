import React from 'react'
import { useContext } from 'react'
import AppContext from '../ContextStates/AppContext'
import CompletedTaskCard from './CompletedTaskCard'

export default function CompleteTask(props) {

    const {tasks} = useContext(AppContext)

  return (
    <div style={{display:`${props.pageType==='completedtask'?'block':'none'}`}}>

        {tasks.length?
            <table className='actual-table'>
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Completed Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((element,index)=>{
                        return <CompletedTaskCard key={element._id} id={element._id} index={index+1} title={element.title} description={element.description} due_date={element.DueDate} completed_date={element.DueDate}/>
                    })}
                </tbody>
            </table>:"Add Your task to show"}

    </div>
  )
}
