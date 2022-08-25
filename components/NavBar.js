import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { DataContext } from '../store/GlobalState'
import Cookie from 'js-cookie'


const NavBar = () => {

    const router = useRouter();
    const { state, dispatch } = useContext(DataContext);
    const { auth, cart } = state;
    
    const isActive = (r) => r === router.pathname ? " active" : "";
    const loggedRouter = () => {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={auth.user.avatar} alt={auth.user.avatar}
                        style={{
                            borderRadius: '50%',
                            width: '35px',
                            height: '35px',
                            transform: 'translateY(-3px)',
                            marginRight: '3px'
                        }} />
                    {auth.user.name}
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                </ul>
            </li>
        )
    }

    const handleLogout = () => {
        Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' });
        localStorage.removeItem('firstLogin');
        dispatch({ type: 'AUTH', payload: {} });
        dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } });
        offcanvasClose()
    }

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
                            <li onClick={offcanvasClose} className="nav-item">
                                <Link href="/cart">
                                    <a className={"nav-link" + isActive('/cart')}>
                                        <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
                                            { cart.length > 0 && <span className="position-absolute"
                                            style={{ padding: '3px 6px',
                                            background: 'rgba(226, 187, 102, 0.5)',
                                            borderRadius: '50%',
                                            top: '-10px',
                                            right: '-10px',
                                            color: 'white',
                                            fontSize: '14px'
                                            }}>
                                                {cart.length}</span>}
                                        </i> Cart
                                    </a>
                                </Link>
                            </li>
                            {
                                Object.keys(auth).length === 0 ?
                                    <li onClick={offcanvasClose} className="nav-item">
                                        <Link href="/signin">
                                            <a className={"nav-link" + isActive('/signin')}>
                                                <i className="fas fa-user" aria-hidden="true"></i>  Sign in</a>
                                        </Link>
                                    </li>
                                    : loggedRouter()
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar