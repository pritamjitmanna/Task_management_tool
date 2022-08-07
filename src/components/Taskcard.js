import React from 'react'

export default function Taskcard(props) {

    // console.log(props.title);

  return (
    <tr>
        <td name='S No'>{props.index}</td>
        <td name='Title'>{props.title}</td>
        <td name='Description'>{props.description}</td>
        <td name='Due Date'>{props.due_date}</td>
        <td name='Action'>
          <button className=''><i className="far fa-edit"></i></button>
          <button className=''><i className="fas fa-trash-alt"></i></button>
        </td>
    </tr>
  )
}
