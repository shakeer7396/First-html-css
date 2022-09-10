import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css";
const Navbar = () => {
  return (
    <div className='navbar2'>
    <div className='head'>
        <Link to="/">Home Page</Link>
        <Link to="/puppy">Puppy Page</Link>
        <Link to="/search">Search Page</Link>
       
    </div>
  </div>
  )
}

export default Navbar