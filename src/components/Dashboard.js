import React, { useState } from 'react'
import TaskList from './TaskList'

import PointNavigation from './PointNavigation'
import AddTask from './AddTask'
import CompleteTask from './CompleteTask'

export default function Dashboard() {

  const [addTaskVis, setaddTaskVis] = useState('none')

  

  const handleAddClick=()=>{
    if(addTaskVis==='none')setaddTaskVis('block')
    else setaddTaskVis('none')
  }

  const [pageType, setpageType] = useState('tasklist')

  const handleWhichPage=(e)=>{
    setpageType(e.target.name)
  }

  return (
    <div>
        <div className="dashboard" >
        
          <PointNavigation link1={"dashboard"} link2={"overview"}/>
          <div style={{margin:'auto'}} className='cd-80' >
              <div className="table">
                  <div className="table-header">
                      <div className="table-header-1">
                        <div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="tasklist" id="flexRadioDefault1" checked={pageType==="tasklist"} onChange={handleWhichPage}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                              TaskList
                            </label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="completedtask" id="flexRadioDefault2" checked={pageType!=="tasklist"} onChange={handleWhichPage}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                              Completed Task
                            </label>
                          </div>
                        </div>
                        
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
                    <TaskList pageType={pageType}/>
                    <CompleteTask pageType={pageType}/>
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
        </div>
    </div>
  )
}
