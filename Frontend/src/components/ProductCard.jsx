import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toFixed(2)}</p>
      <p>{product.description.substring(0, 100)}...</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Link to={`/products/${product.id}`}>
          <button className="btn-secondary">View Details</button>
        </Link>
        <button 
          className="btn-primary"
          onClick={() => {
            const compareList = JSON.parse(localStorage.getItem('compareList') || '[]')
            if (!compareList.some(item => item._id === product._id)) {
              compareList.push(product)
              localStorage.setItem('compareList', JSON.stringify(compareList))
              alert('Added to comparison list!')
            } else {
              alert('This product is already in your comparison list!')
            }
          }}
        >
          Add to Compare
        </button>
      </div>
    </div>
  )
}

export default ProductCard