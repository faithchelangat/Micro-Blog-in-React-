import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


function NavBar(){


    return(
        <nav className='navbar'>
            <h1>Faith's Projects</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/create'>New Project</Link>
                <Link to='/about'>About</Link>
            </div>
        </nav>
    )
}
export default NavBar