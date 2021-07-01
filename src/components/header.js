import React from 'react'
import Link from 'gatsby-link'

const Header = () => {
    return (
        <header className="l-header">
            <h1 className="c-header__title">Ken</h1>
            <nav className="l-navigation">
                <ul className='c-navbar'>
                    <li><Link className="nav-link c-navbar__link" to="/">Home</Link></li>
                    <li><Link className="nav-link c-navbar__link" to="/about">About</Link></li>
                <li className="nav-item dropdown">
                    <Link className="c-navbar__link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Services
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="#">Action</Link>
                        <Link className="dropdown-item" to="#">Another action</Link>
                    </div>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header