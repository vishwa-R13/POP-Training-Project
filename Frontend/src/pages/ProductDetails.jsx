import React, { useState, useEffect } from 'react'
 import { useParams, Link } from 'react-router-dom'
 
 const ProductDetails = () => {
   const { id } = useParams()
   const [product, setProduct] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   
   useEffect(() => {
     // Local products data
     const localProducts = [
       {
         id: "1",
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
         id: "2",
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
         id: "3",
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
         id: "4",
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
         id: "5",
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
         id: "6",
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
     
     // Find product by id
     const foundProduct = localProducts.find(p => p.id === id);
     
     if (foundProduct) {
       setProduct(foundProduct);
       setLoading(false);
     } else {
       setError('Product not found');
       setLoading(false);
     }
   }, [id]);
   
   const addToCompare = () => {
     const compareList = JSON.parse(localStorage.getItem('compareList') || '[]')
     if (!compareList.some(item => item.id === product.id)) {
       compareList.push(product)
       localStorage.setItem('compareList', JSON.stringify(compareList))
       alert('Added to comparison list!')
     } else {
       alert('This product is already in your comparison list!')
     }
   }
   
   if (loading) return <div className="container"><h2>Loading product details...</h2></div>
   if (error) return <div className="container"><h2>Error: {error}</h2></div>
   if (!product) return <div className="container"><h2>Product not found</h2></div>
   
   return (
     <div className="container">
       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
         <div style={{ flex: '1', minWidth: '300px' }}>
           <img 
             src={product.image} 
             alt={product.name} 
             style={{ width: '100%', maxHeight: '400px', objectFit: 'contain' }}
           />
         </div>
         
         <div style={{ flex: '1', minWidth: '300px' }}>
           <h1>{product.name}</h1>
           <p className="price" style={{ fontSize: '1.5rem' }}>${product.price.toFixed(2)}</p>
           <p style={{ margin: '20px 0' }}>{product.description}</p>
           
           <div style={{ marginBottom: '20px' }}>
             <h3>Key Features</h3>
             <ul style={{ marginLeft: '20px' }}>
               {product.features.map((feature, index) => (
                 <li key={index}>{feature}</li>
               ))}
             </ul>
           </div>
           
           <div style={{ display: 'flex', gap: '10px' }}>
             <button className="btn-primary" onClick={addToCompare}>
               Add to Compare
             </button>
             <Link to="/products">
               <button className="btn-secondary">Back to Products</button>
             </Link>
           </div>
         </div>
       </div>
       
       <div style={{ marginTop: '40px' }}>
         <h2>Specifications</h2>
         <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
           <tbody>
             {Object.entries(product.specifications || {}).map(([key, value]) => (
               <tr key={key} style={{ borderBottom: '1px solid #ddd' }}>
                 <td style={{ padding: '10px', fontWeight: 'bold', width: '30%' }}>
                   {key.charAt(0).toUpperCase() + key.slice(1)}
                 </td>
                 <td style={{ padding: '10px' }}>{value}</td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     </div>
   )
 }
 
 export default ProductDetails;
