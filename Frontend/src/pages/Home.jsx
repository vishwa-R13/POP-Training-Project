import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Welcome to ProductCompare</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          Compare products side by side and make informed purchasing decisions.
          Find the best deals and see which products have the features you need.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/products">
            <button className="btn-primary" style={{ marginRight: '1rem' }}>Browse Products</button>
          </Link>
          <Link to="/compare">
            <button className="btn-secondary">Compare Products</button>
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>How It Works</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <section className="card" style={{ flex: '1', minWidth: '250px' }}>
            <h3>1. Browse Products</h3>
            <p>Explore our extensive catalog of products with detailed specifications and features.</p>
          </section>
          <section className="card" style={{ flex: '1', minWidth: '250px' }}>
            <h3>2. Add to Compare</h3>
            <p>Select products you're interested in and add them to your comparison list.</p>
          </section>
          <section className="card" style={{ flex: '1', minWidth: '250px' }}>
            <h3>3. Compare Side by Side</h3>
            <p>View products side by side to easily compare features, prices, and specifications.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home