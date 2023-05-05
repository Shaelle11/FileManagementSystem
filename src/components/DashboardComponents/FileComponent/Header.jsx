import { faArrowLeftLong, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header({fileName}) {

    const navigate = useNavigate();

  return (
   <nav className='navbar navbar-expand-lg navbar-light bg-light pb-1 mt-1 py-0 shadow-sm'>
    <p className='navbar-brand my-0 fa-bold ms-5'>{fileName}</p>

    <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item mx-2">
            <button className="btn btn-secondary" disabled>
                <FontAwesomeIcon icon = {faSave}/>
                &nbsp;
                Save
            </button>
        </li>
        <li className="nav-item">
            <button className="btn btn-dark" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
                &nbsp;
                Go Back
            </button>
        </li>
    </ul>
   </nav>
  )
}

export default Header