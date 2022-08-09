import React, { useState } from 'react'

export default function AddTask(props) {


    const [dateType, setdateType] = useState("text")

    const onFocusClick=()=>{
        setdateType('datetime-local')
    }

    const onBlurClick=()=>{
        setdateType('text')
    }


  return (
    <div style={{display:`${props.addTaskVis}`}}>
        <div className="row g-3 flex-wrap">
            <div className="col-sm">
                <input type="text" className="form-control" placeholder="Enter Title" aria-label="First name"/>
            </div>
            <div className="col-sm-7">
                <textarea className="form-control" placeholder="Enter Description" id="floatingTextarea2" rows={2}></textarea>
            </div>
            <div className="col-sm">
                <input placeholder="Select Due date" type={dateType} onFocus={onFocusClick} onBlur={onBlurClick} className="form-control"/>
            </div>
            <div className="col-sm text-center">
                <button className="btn btn-primary w-100">Add</button>
            </div>
        </div>
    </div>
  )
}
