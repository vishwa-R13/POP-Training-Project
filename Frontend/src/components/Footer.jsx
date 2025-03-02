import React from 'react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '2rem 0', marginTop: '2rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} ProductCompare. All rights reserved.</p>
          <p>Compare products easily and make informed decisions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer