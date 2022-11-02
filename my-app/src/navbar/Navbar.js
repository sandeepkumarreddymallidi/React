import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar
    () {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <h1 class="navbar-brand">Navbar</h1> 
                <div>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                          <Link to='/home'>Home </Link> 
                        </li>
                        <li class="nav-item active">
                        <Link to='/home'>About </Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
