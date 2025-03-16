import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [search, setsearch] = useState('')
  
  useEffect(() => {
    // load products data using json 
    const localProducts = [
      {
        _id: "1",
        name: "iPhone 15 Pro",
        description: "Apple's latest flagship smartphone with advanced camera system and powerful A17 Pro chip.",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1710023038502-ba80a70a9f53?q=80&w=1964&auto=format&fit=crop",
        category: "Smartphones",
        features: [
          "A17 Pro chip",
          "48MP camera system",
          "Titanium design",
          "Action button",
          "USB-C connector",
          "All-day battery life"
        ],
        specifications: {
          display: "6.1-inch Super Retina XDR display",
          processor: "A17 Pro chip",
          storage: "128GB, 256GB, 512GB, 1TB",
          camera: "48MP main, 12MP ultra wide, 12MP telephoto",
          battery: "Up to 23 hours video playback",
          os: "iOS 17"
        }
      },
      {
        _id: "2",
        name: "Samsung Galaxy S24 Ultra",
        description: "Samsung's premium smartphone with S Pen support and advanced AI features.",
        price: 1199.99,
        image: "https://images.unsplash.com/photo-1705585175110-d25f92c183aa?q=80&w=1932&auto=format&fit=crop",
        category: "Smartphones",
        features: [
          "Snapdragon 8 Gen 3 processor",
          "200MP camera system",
          "S Pen included",
          "AI-powered features",
          "Titanium frame",
          "5000mAh battery"
        ],
        specifications: {
          display: "6.8-inch Dynamic AMOLED 2X display",
          processor: "Snapdragon 8 Gen 3",
          storage: "256GB, 512GB, 1TB",
          camera: "200MP main, 12MP ultra wide, 50MP telephoto, 10MP telephoto",
          battery: "5000mAh",
          os: "Android 14 with One UI 6.1"
        }
      },
      {
        _id: "3",
        name: "Google Pixel 8 Pro",
        description: "Google's flagship phone with advanced AI capabilities and exceptional camera performance.",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1666238851843-c4580232a6a4?q=80&w=2148&auto=format&fit=crop",
        category: "Smartphones",
        features: [
          "Google Tensor G3 chip",
          "50MP camera system",
          "AI-enhanced photography",
          "7 years of OS updates",
          "Smooth 120Hz display",
          "Fast wireless charging"
        ],
        specifications: {
          display: "6.7-inch LTPO OLED display",
          processor: "Google Tensor G3",
          storage: "128GB, 256GB, 512GB",
          camera: "50MP main, 48MP ultra wide, 48MP telephoto",
          battery: "5050mAh",
          os: "Android 14"
        }
      },
      {
        _id: "4",
        name: "MacBook Pro 16-inch",
        description: "Powerful laptop for professionals with M3 Pro or M3 Max chip and stunning display.",
        price: 2499.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
        category: "Laptops",
        features: [
          "Apple M3 Pro/Max chip",
          "Liquid Retina XDR display",
          "Up to 96GB unified memory",
          "Up to 8TB storage",
          "Studio-quality mics",
          "MagSafe charging"
        ],
        specifications: {
          display: "16.2-inch Liquid Retina XDR display",
          processor: "M3 Pro or M3 Max",
          memory: "Up to 96GB unified memory",
          storage: "Up to 8TB SSD",
          battery: "Up to 22 hours",
          ports: "HDMI, SDXC, MagSafe, 3x Thunderbolt 4"
        }
      },
      {
        _id: "5",
        name: "Dell XPS 15",
        description: "Premium Windows laptop with stunning display and powerful performance.",
        price: 1899.99,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2032&auto=format&fit=crop",
        category: "Laptops",
        features: [
          "Intel Core i9 processor",
          "NVIDIA GeForce RTX graphics",
          "InfinityEdge display",
          "CNC aluminum chassis",
          "Large precision touchpad",
          "Quad-speaker design"
        ],
        specifications: {
          display: "15.6-inch 4K UHD+ touch display",
          processor: "13th Gen Intel Core i9",
          memory: "Up to 64GB DDR5",
          storage: "Up to 4TB SSD",
          battery: "Up to 12 hours",
          ports: "Thunderbolt 4, USB-C, SD card reader"
        }
      },
      {
        _id: "6",
        name: "Sony WH-1000XM5",
        description: "Industry-leading noise cancelling headphones with exceptional sound quality.",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2088&auto=format&fit=crop",
        category: "Audio",
        features: [
          "Industry-leading noise cancellation",
          "30-hour battery life",
          "LDAC high-resolution audio",
          "8 microphones for clear calls",
          "Adaptive sound control",
          "Multipoint connection"
        ],
        specifications: {
          type: "Over-ear wireless headphones",
          battery: "30 hours with NC on",
          charging: "USB-C, 3 hours full charge",
          weight: "250g",
          connectivity: "Bluetooth 5.2, 3.5mm",
          codecs: "SBC, AAC, LDAC"
        }
      }
    ];
    
    setProducts(localProducts);
  }, []);
  
  // Filterng products based on search
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <div className="container">
      <h1>Products</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search products..." 
          className="form-control"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          style={{ maxWidth: '400px' }}
        />
      </div>
      
      {filteredProducts.length === 0 ? (
        <p>No products found matching your search.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products