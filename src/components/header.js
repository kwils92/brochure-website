import React from 'react'
import Link from 'gatsby-link'

const Header = () => {
    return (
        <header className="l-header">
            <h1 className="c-header__title">Ken</h1>
            <nav class="l-navigation">
                <ul className='c-navbar'>
                    <li> <Link className='c-navbar__link' to="/"> Home </Link> </li>
                    <li> <Link className='c-navbar__link' to="/about"> About </Link> </li>
                    <li className="nav-item dropdown">
                        <Link className='c-navbar__link nav-link dropdown-toggle' id='navbarDropdown' role="button" to="#"> Services </Link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li> <Link className='c-navbar__link dropdown-item' to="/"> Home </Link> </li>
                            <li> <Link className='c-navbar__link' to="/about"> About </Link> </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header