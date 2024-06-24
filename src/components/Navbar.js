import React from 'react'
import {Link} from "react-router-dom";

function LandingTitle() {
  return (
    <nav className='navbar bg-navbar'>
        <h1>
            <Link className="logo-navbar " to="/">TawaSol</Link>
        </h1>
        <>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        </>
    </nav>
  )
}

export default LandingTitle