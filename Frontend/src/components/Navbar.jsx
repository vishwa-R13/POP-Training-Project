import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', textDecoration: 'none' }}>
          ProductCompare
        </Link>
        
        <div className="nav-links" style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ color: '#333', textDecoration: 'none' }}>Home</Link>
          <Link to="/products" style={{ color: '#333', textDecoration: 'none' }}>Products</Link>
          <Link to="/compare" style={{ color: '#333', textDecoration: 'none' }}>Compare</Link>
  
              <Link to="/login" style={{ color: '#333', textDecoration: 'none' }}>Login</Link>
              <Link to="/Signup" style={{ color: '#333', textDecoration: 'none' }}>SignUp</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar