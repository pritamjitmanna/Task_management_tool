import React from 'react'

export default function CompletedTaskCard(props) {
  return (
    <>
        <tr>
            <td name='SNo'>{props.index}</td>
            <td name='Title'>{props.title}</td>
            <td name='Description'>{props.description.length===0?'-':props.description}</td>
            <td name='Due Date'>{props.due_date===null?'-':props.due_date}</td>
            <td name="Completed Date">{props.completed_date}</td>
        </tr>
    </>
  )
}
