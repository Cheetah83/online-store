import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
  const { isAuth, userEmail } = useContext(AuthContext);
  const { cartTotalQuantity } = useSelector((state) => state.cart);


  return (
    <>
      <div className="nav-container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid py-2">
            <Link className="navbar-brand mx-auto fw-bold" to="/">YACHI'S APPLE STORE</Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-pills flex-row mb-auto">
                {!isAuth && (
                  <>
                    <li className="nav-item">
                          <Link className="nav-link link-dark" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                          <Link className="nav-link link-dark" to="/register">Register</Link>
                    </li>
                  </>
                )}
                {isAuth && (
                  <>
                    <li className="nav-item">
                        <Link className="nav-link link-dark" to="/create">Add Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link link-dark" to="/create">{userEmail}</Link>
                    </li>
                  </>
                )}
              </ul>
              {/* {isAuth && ( */}
                <div className="nav-bag">
                  <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
                    </svg>
                    <span className="bag-quantity">({cartTotalQuantity})</span>
                  </Link>
                </div>
              {/* // )} */}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar