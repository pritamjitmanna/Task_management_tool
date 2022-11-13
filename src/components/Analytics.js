import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ResponsiveContainer,AreaChart,linearGradient,XAxis,YAxis,CartesianGrid,Tooltip,Area, PieChart,Pie,Legend } from 'recharts'
import AppContext from '../ContextStates/AppContext'
import PointNavigation from './PointNavigation'



export default function Analytics() {

  const {FetchTasks,analyts} = useContext(AppContext)
  const navigate=useNavigate()

  



  useEffect(() => {
      if(localStorage.getItem('jwt_token')!==null){
        FetchTasks()
      }
      else navigate('/')
  }, [])
  


  return (
    <div className='dashboard'>
        <PointNavigation link1={"dashboard"} link2={"overview"}/>

        <div className="cd-80 table-section analytics" style={{margin:'auto'}}>
          <ResponsiveContainer width={300}>
            <PieChart width={500} height={250}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={analyts}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
        </div>
        
    </div>
  )
}
