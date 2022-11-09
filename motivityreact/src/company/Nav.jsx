import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const Arr = [
        {
            page:'Home',
            route:'/home'
        },
        {
            page:'Counter',
            route:'/counter'
        },
        {
            page:'Forms',
            route:'/forms'
        },
        {
            page:'Users',
            route:'/users'
        },
        {
            page:'counterhook',
            route:'/counterhook'
        }
    ]
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#/">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {Arr.map((item,index)=>(
                            <li class="nav-item active" key={index}>
                            <Link class="nav-link" to={item.route}>{item.page}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav