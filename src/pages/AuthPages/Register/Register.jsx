import React from 'react';
import { Link } from 'react-router-dom';
import  RegisterForm from "../../../components/AuthComponents/RegisterForm";

const Register = () => {
  return (
    <div className="container-fluid">
    <h1 className='display-1 my-5 text-center'>Register</h1>
    <div className="row">
        <div className="col-md-5 mx-auto mt-5">
            <RegisterForm/>
            <p>Alreay have an account?</p>
        <Link to="/login" className="ms-auto">
         <div className="btn btn-md btn-primary bg-primary me-5">Login</div>
        </Link>

        </div>
    </div>
</div>
  )
}

export default Register