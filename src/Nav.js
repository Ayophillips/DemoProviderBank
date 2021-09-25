import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <Link to="/openaccount"> Open Account </Link>
                <Link to="/balance"> Balance </Link>
                <Link to="/statement"> Statement </Link>
                <Link to="/collect"> Collect </Link>
            </ul>
        </nav>
    )
}

export default Nav
