import React from 'react'

export default function Taskcard(props) {

    // console.log(props.title);

  return (
    <tr>
        <td name='SNo'>{props.index}</td>
        <td name='Title'>{props.title}</td>
        <td name='Description'>{props.description}</td>
        <td name='DueDate'>{props.due_date}</td>
        <td className="dropdown">
          <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-ellipsis-v"></i>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" role='button' href="#"><i className="far fa-edit"></i></a></li>
            <li><a className="dropdown-item" role='button' href="#"><i className="fas fa-trash-alt"></i></a></li>
            <li><a className="dropdown-item" role='button' href="#"><i className="far fa-star"></i></a></li>
          </ul>
        </td>
    </tr>
  )
}
