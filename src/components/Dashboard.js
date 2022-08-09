import React from 'react'
import Analytics from './Analytics'
import TaskList from './TaskList'

export default function Dashboard() {
  return (
    <div>
        <div className="dashboard" >
        
          <TaskList/>
          {/* <Analytics/> */}
        </div>
    </div>
  )
}
