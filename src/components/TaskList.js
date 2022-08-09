import React, { useState } from 'react'
import Taskcard from './Taskcard'
import '../css/custom.css'
import '../css/phone-custom.css'
import PointNavigation from './PointNavigation'
import AddTask from './AddTask'

export default function TaskList() {

    let tasks=[
        {
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
        ,{
            title:"Head",
            description:"To complete",
            due_date:"Friday",
        }
    ]


    const [addTaskVis, setaddTaskVis] = useState('none')



    const handleAddClick=()=>{
        if(addTaskVis==='none')setaddTaskVis('block')
        else setaddTaskVis('none')
    }

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
                <AddTask addTaskVis={addTaskVis}/>
            </div>
            <div className="table-section">
                <table className='actual-table'>
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
                        {tasks.map((element,index)=>{
                            return <Taskcard key={index} index={index+1} title={element.title} description={element.description} due_date={element.due_date}/>
                        })}
                    </tbody>
                </table>
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
