import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUser } from '../../../redux/actionCreators/authActionCreator'
const NavBar = () => {

    const {isAuthenticated, user}  = useSelector(state => state.auth)
    const dispatch = useDispatch();
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-white bg-white shadow-lg">
        <Link to="/dashboard" className="navbar-brand ms-5" >logo</Link>
        <ul className='navbar-nav ms-auto me-5'>
          { isAuthenticated ? (
                <>

                <li className='nav-item mx-2'>
                <p className='my-0 mt-2 mx-2'>
                    <span className='text-dark'>
Welcome
                    </span> <span className='fw-bold '>
                    {user.displayName}
                    </span>
                </p>
                </li>
                <li className='nav-item mx-2'>
                <Link to="/" className=" btn btn-primary">
                   Home
                </Link>
            </li>
            <li className='nav-item '>
<button className=" btn btn-light " onClick={() => dispatch(signOutUser())}>
    Logout
</button>
            </li>
                </>

            ) : (
                <>
            <li className='nav-item mx-2'>
                <Link to="/login" className=" btn btn-primary btn-sm">
                    Login
                </Link>
            </li>
            <li className='nav-item '>
<Link to="/register" className=" btn btn-light btn-sm">
    Register
</Link>
            </li>
            </>
         )
         }
        </ul>

        </nav></>
  )
}

export default NavBar