import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";


const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    username: '',
    email: '',
    password: '',
    repeatPass: '',
  }, onRegisterSubmit);
  return (
    <>
    <div className="container">
            <h1>Register</h1>
          <div className="col-md-6">
          <form method="post" onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInput" className="form-label">Username</label>
              <input type="username" className="form-control" id="username" name="username" value={values.username} onChange={changeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={changeHandler} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={values.password} onChange={changeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Repeat Password</label>
              <input type="password" className="form-control" id="repeat-password" name="repeatPass" value={values.repeatPass} onChange={changeHandler} />
            </div>
            <button type="submit" className="btn btn-outline-primary w-100 mt-3">Register</button>
            <Link to="/login" className="btn btn-outline-primary ms-auto mt-3"> Click here to Login </Link>
          </form>
          </div>
    </div>
  </>
  )
}

export default Register