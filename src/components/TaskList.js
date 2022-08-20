import React, { useState } from 'react'
import Taskcard from './Taskcard'
import '../css/custom.css'
import '../css/phone-custom.css'
import PointNavigation from './PointNavigation'
import AddTask from './AddTask'
import { useEffect } from 'react'
import { useContext } from 'react'
import AppContext from '../ContextStates/AppContext'

export default function TaskList() {

    const {FetchTasks,tasks} = useContext(AppContext)



    const [addTaskVis, setaddTaskVis] = useState('none')

    



    const handleAddClick=()=>{
        if(addTaskVis==='none')setaddTaskVis('block')
        else setaddTaskVis('none')
    }

    useEffect(() => {
      FetchTasks()
    // eslint-disable-next-line
    }, [])
    

  return (
    <>
    <PointNavigation link1={"dashboard"} link2={"overview"}/>
    <div style={{margin:'auto'}} className='cd-80' >
        <div className="table">
            <div className="table-header">
                <div className="table-header-1">
                    <p>TaskList</p>
                    <div>
                        <button className="btn-user hover-custom transition-custom" onClick={handleAddClick}>+ Add New</button>
                    </div>
                </div>
                <AddTask addTaskVis={addTaskVis} inputValues={{
                    title:"",
                    description:"",
                    DueDate:""
                }} isEdit={false}/>
            </div>
            <div className="table-section">
                {tasks.length?<table className='actual-table'>
                    <thead>
                        <tr>
                            <th >S No</th>
                            <th >Title</th>
                            <th >Description</th>
                            <th >Due Date</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={5}>Important</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {tasks.map((element,index)=>{
                            if(element.starred)return <Taskcard key={element._id} id={element._id} starred={element.starred} index={index+1} title={element.title} description={element.description} due_date={element.DueDate}/>
                        })}
                    </tbody>
                    <tbody>
                        <tr>
                            <td colSpan={5}>All</td>
                        </tr>
                    </tbody>
                    <tbody>
                        {tasks.map((element,index)=>{
                            return <Taskcard key={element._id} id={element._id} starred={element.starred} index={index+1} title={element.title} description={element.description} due_date={element.DueDate}/>
                        })}
                    </tbody>
                </table>:"Add Your task to show"}
            </div>
            <div className="pagination">
                <div><i className="fas fa-angle-double-left"></i></div>
                <div><i className="fas fa-chevron-left"></i></div>
                <div>1</div>
                <div>2</div>
                <div><i className="fas fa-chevron-right"></i></div>
                <div><i className="fas fa-angle-double-right"></i></div>
            </div>
        </div>
    </div>
    </>
  )
}
