import React from 'react'
import { Link } from 'react-router-dom'
import errorImg from '../../assets/Images/404.jpg'

export default function NotFound() {
  return (
    <div className='bg-dark text-white vh-100 d-flex flex-column justify-content-center align-items-center'>
        <h1>404 Not Found</h1>
        <Link to={"/"}>Back to Home</Link>
        <img src={errorImg} className='w-25' alt="image error" />
        {/* <img className='w-25' src="/src/assets/Images/404.jpg" alt="image error" /> */}
    </div>
  )
}
