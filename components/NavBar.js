import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'



const NavBar = () => {

    const router = useRouter();
    const isActive = (r) => r === router.pathname ? " active" : ""

    const offcanvasOpen = () => {
        document.getElementById("offcanvasNavbar").className = "offcanvas offcanvas-end show"
    }

    const offcanvasClose = () => {
        document.getElementById("offcanvasNavbar").className = "offcanvas offcanvas-end"
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Beauty Space</a>
                </Link>
                <button className="navbar-toggler" onClick={offcanvasOpen} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                        <button type="button" onClick={offcanvasClose} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link href="/cart">
                                    <a className={"nav-link" + isActive('/cart')}>
                                        <i className="fas fa-shopping-cart" aria-hidden="true"></i> Cart
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/signin">
                                    <a className={"nav-link" + isActive('/signin')}>
                                        <i className="fas fa-user" aria-hidden="true"></i>  Sign in</a>
                                </Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar