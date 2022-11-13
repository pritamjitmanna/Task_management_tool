import React from 'react'
import { useState } from 'react'

export default function CompletedTaskCard(props) {

  const changeToaccessible=(date)=>{
    if(date===null)return '-'
    date=new Date(date).toLocaleString();
    return date;
  }


  return (
    <>
        <tr>
            <td name='SNo' className='cd-5'>{props.index}</td>
            <td name='Title' className='cd-14'>{props.title}</td>
            <td name='Description' className='cd-40'>{props.description.length===0?'-':props.description}</td>
            <td name='Due Date' className='cd-20'>{changeToaccessible(props.due_date)}</td>
            <td name="Completed Date" className='cd-20'>{changeToaccessible(props.completed_date)}</td>
        </tr>
    </>
  )
}
