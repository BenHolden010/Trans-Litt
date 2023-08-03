import React from 'react'
import {useState,useEffect} from 'react'
import fetchTranslation  from './fetchTranslation'
import './Focus.css'
import { NavLink } from 'react-router-dom'

const FocusCard = ({post, response}) => {

  // useEffect(()=>{
  //   fetchTranslation(post)
  //   .then(data=>setResponse(data.translatedText))
  // },[])

  return (
    <section className={`focus-section`}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className="focus-section-nav">
        <NavLink to="/">  
          <button className="back-button"><span className="material-symbols-outlined">arrow_back</span>
          </button>
        </NavLink>
      </div>
      <div className='focus-card'>
      <h1>Your translation will be displayed below</h1>
        <h2>{post}</h2>
        <h2>{response}</h2>
      </div>
    </section>
  )
}

export default FocusCard