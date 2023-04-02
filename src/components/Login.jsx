import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';


const LoginDetails = {
  Email: 'email',
  Password: 'password'
};

const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
      [LoginDetails.Email]: '',
      [LoginDetails.Password]: '',
  }, onLoginSubmit);
  return (
    <>
    <div className="container">
    <h1>Login</h1>
        <div className="col-md-6">
            <form method="post" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com" 
                        name={LoginDetails.Email}
                        value={values[LoginDetails.Email]}
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="***********"
                        name={LoginDetails.Password}
                        value={values[LoginDetails.Password]}
                        onChange={changeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary w-100 mt-3">Login</button>
                <Link to="/register" className="btn btn-outline-primary ms-auto mt-3"> Click here to Register </Link>
            </form>
        </div>
    </div>
</>
  )
}

export default Login