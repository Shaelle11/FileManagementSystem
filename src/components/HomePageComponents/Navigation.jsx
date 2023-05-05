import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { signOutUser } from '../../redux/actionCreators/authActionCreator'
const NavigationComponent = () => {

    const {isAuthenticated, user}  = useSelector(state => state.auth)
    const dispatch = useDispatch();
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
        <a href="/assets/logosvg.svg" className="navbar-brand ms-5" >logo</a>
        <ul className='navbar-nav ms-auto me-5'>
          { isAuthenticated ? (
                <>

                <li className='nav-item mx-2'>
                <p className='my-0 mt-1 mx-2'>
                    <span className='text-light'>
Welcome
                    </span> <span className='text-dark'>
                    {user.displayName}
                    </span>
                </p>
                </li>
                <li className='nav-item mx-2'>
                <Link to="/dashboard" className=" btn btn-primary btn-sm">
                   Dashboard
                </Link>
            </li>
            <li className='nav-item '>
<button className=" btn btn-light btn-sm " onClick={() => dispatch(signOutUser())}>
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

export default NavigationComponent