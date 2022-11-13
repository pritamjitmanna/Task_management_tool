import React from 'react'
import { useContext } from 'react'
import AppContext from '../ContextStates/AppContext'
import CompletedTaskCard from './CompletedTaskCard'

export default function CompleteTask(props) {

    const {completetasks} = useContext(AppContext)

  return (
    <div style={{display:`${props.pageType==='completedtask'?'block':'none'}`}}>

        {completetasks.length?
            <table className='actual-table'>
                <thead>
                    <tr>
                        <th className='cd-5'>S No</th>
                        <th className='cd-14'>Title</th>
                        <th className='cd-48'>Description</th>
                        <th className='cd-20'>Due Date</th>
                        <th className='cd-20'>Completed Date</th>
                    </tr>
                </thead>
                <tbody>
                    {completetasks.map((element,index)=>{
                        return <CompletedTaskCard key={element._id} id={element._id} index={index+1} title={element.title} description={element.description} due_date={element.DueDate} completed_date={element.completedDate}/>
                    })}
                </tbody>
            </table>:"Add Your task to show"}

    </div>
  )
}
