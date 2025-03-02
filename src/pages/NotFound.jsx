import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '50px 0' }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/">
        <button className="btn-primary" style={{ marginTop: '20px' }}>
          Go to Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound