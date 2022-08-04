import React from 'react'
import '../css/custom.css'
import '../css/phone-custom.css'
import addTaskPic from '../pictures/project-task-list.jpg'
import statisticPic from '../pictures/statistics.png'
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>

   
      <section className='d-flex flex-column text-center justify-content-center align-items-center w-2' id='home-section'>
          <h1>taskI</h1>
          <div className="container">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, ex velit, natus corrupti dolorum atque adipisci optio officia maxime reprehenderit, fuga amet nam! Voluptas quasi omnis dolorum accusamus harum quibusdam?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, ex velit, natus corrupti dolorum atque adipisci optio officia maxime reprehenderit, fuga amet nam! Voluptas quasi omnis dolorum accusamus harum quibusdam?</p>

          </div>
          <Link className="btn btn-user hover-custom transition-custom" to="/login" role='button'>Get Started</Link>
      </section>

      <section className='container d-flex flex-nowrap justify-content-space-between' id="home-utility">
        <div className='d-flex flex-column p-2 align-items-center utilities rounded-4'>
            <img src={addTaskPic} alt="Add and Complete Task" className='image-custom'/>
            <p className='paragraph-custom'>
              Add your task on the go and never forget about about it. Complete your important tasks, also marking them. 
              Other features makes it easier for you. 
            </p>
        </div>
        <div className='d-flex flex-column p-2 align-items-center utilities rounded-4'>
            <img src={statisticPic} alt="Add and Complete Task" className='image-custom'/>
            <p className='paragraph-custom'>
              Move to Statistics section to know about your daily, monthly activities and know how much you can do better.

            </p>
        </div>
      </section>

    </div>


  )
}
