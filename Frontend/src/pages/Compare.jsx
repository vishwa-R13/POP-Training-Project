import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Compare = () => {
  const [compareList, setCompareList] = useState([])
  
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('compareList'))
    setCompareList(storedList)
  }, [])
  
  const removeFromCompare = (productId) => {
    const updatedList = compareList.filter(product => product._id !== productId)
    setCompareList(updatedList)
    localStorage.setItem('compareList', JSON.stringify(updatedList))
  }
  
  const clearCompareList = () => {
    setCompareList([])
    localStorage.removeItem('compareList')
  }
  
  // Get all unique specification keys from all products
  const getAllSpecKeys = () => {
    const allKeys = new Set()
    compareList.forEach(product => {
      if (product.specifications) {
        Object.keys(product.specifications).forEach(key => allKeys.add(key))
      }
    })
    return Array.from(allKeys)
  }
  
  // Get all unique feature keys from all products
  const getAllFeatures = () => {
    const allFeatures = new Set()
    compareList.forEach(product => {
      if (product.features) {
        product.features.forEach(feature => allFeatures.add(feature))
      }
    })
    return Array.from(allFeatures)
  }
  
  if (compareList.length === 0) {
    return (
      <div className="container">
        <h1>Compare Products</h1>
        <p>You haven't added any products to compare yet.</p>
        <Link to="/products">
          <button className="btn-primary">Browse Products</button>
        </Link>
      </div>
    )
  }
  
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Compare Products</h1>
        <button className="btn-secondary" onClick={clearCompareList}>
          Clear All
        </button>
      </div>
      
      <div>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Product</th>
              {compareList.map(product => (
                <th key={product._id}>
                  <div>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '10px' }}
                    />
                    <div>{product.name}</div>
                    <div className="price">${product.price.toFixed(2)}</div>
                    <button 
                      className="btn-secondary" 
                      style={{ marginTop: '10px' }}
                      onClick={() => removeFromCompare(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Description</strong></td>
              {compareList.map(product => (
                <td key={product._id}>{product.description}</td>
              ))}
            </tr>
            
            <tr>
              <td colSpan={compareList.length + 1} style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
                Features
              </td>
            </tr>
            
            {getAllFeatures().map(feature => (
              <tr key={feature}>
                <td>{feature}</td>
                {compareList.map(product => (
                  <td 
                    key={product._id}
                    className={product.features && product.features.includes(feature) ? 'feature-match' : 'feature-diff'}
                  >
                    {product.features.includes(feature) ? '✓' : '✗'}
                  </td>
                ))}
              </tr>
            ))}
            
            <tr>
              <td colSpan={compareList.length + 1} style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
                Specifications
              </td>
            </tr>
            
            {getAllSpecKeys().map(key => (
              <tr key={key}>
                <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                {compareList.map(product => (
                  <td key={product._id}>
                    {product.specifications[key] ? product.specifications[key] : 'N/A'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Compare