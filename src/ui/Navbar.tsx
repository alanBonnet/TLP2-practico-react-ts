import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

interface Props {
    
}

export const Navbar = (props: Props) => {
    const {user, setUser} = useContext(AuthContext)
    const disconnect = () =>{
        setUser({isLogged:false});
        localStorage.clear()
    }
    return (
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark px-3'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#'>{user.username ?? "Ejemplo"}</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 text-center'>
                        <li className='nav-item'>
                            <NavLink className='nav-link active' aria-current='page' to='/'>Home</NavLink>
                        </li>
                        {!user.isLogged && (
                            <>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/login'>Iniciar Sesión</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/register'>Registrarse</NavLink>
                                </li>
                            </>
                        )}
                        {user.isLogged && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="tasks">Tareas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={disconnect} href="#" >Cerrar Sesión</a>
                                </li>
                            </>
                        )}
                        {/* <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                Dropdown
                            </a>
                            <ul className='dropdown-menu'>
                                <li><a className='dropdown-item' href='#'>Action</a></li>
                                <li><a className='dropdown-item' href='#'>Another action</a></li>
                                <li><hr className='dropdown-divider' /></li>
                                <li><a className='dropdown-item' href='#'>Something else here</a></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link disabled'>Disabled</a>
                    </li>*/}
                    </ul>{/*
                    <form className='d-flex' role='search'>
                    <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                    <button className='btn btn-outline-success' type='submit'>Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}
