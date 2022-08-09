import React,{useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppContext from '../ContextStates/AppContext'
import '../css/custom.css'
import '../css/phone-custom.css'

export default function PointNavigation(props) {

  const {capitalise}=useContext(AppContext)
  const location=useLocation();

  // console.log(()=>capitalise("word"));


  return (
    <div>
        <div className="navigation">
            <Link className={(location.pathname===`/${props.link1}`?"active-navigation":"")} to={`/${props.link1}`}>{capitalise(props.link1)}</Link>
            <Link className={(location.pathname===`/${props.link2}`?"active-navigation":"")} to={`/${props.link2}`}>{capitalise(props.link2)}</Link>
        </div>
    </div>
  )
}
