import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  )
}

export default NotFound