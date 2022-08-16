import React from 'react'
import { useContext } from 'react'
import AppContext from '../ContextStates/AppContext'

export default function Alert(props) {

    const {capitalise,alert} = useContext(AppContext)

  return (
    <div style={{height:"57px"}}>
        {alert.isAlert&&<div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.type)} :</strong> {props.message}
        </div>}
    </div>
  )
}
