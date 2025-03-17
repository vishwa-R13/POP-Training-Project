import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    var req = await axios.post("https://pop-training-hprf.onrender.com/login", {
      email,
      password,
    });
    
    var isLoginSuccessful = req.data.isLoggedIn;
    if (isLoginSuccessful) {
      alert(req.data.message);
      navigate("/");
    } else {
      alert(req.data.message);
    }
  };
  
  return (
    <div className="container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={email}
          onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
          onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="btn-primary" 
          style={{ width: '100%', marginTop: '10px' }}
        >
          Login
        </button>
        
        <p style={{ marginTop: '15px', textAlign: 'center' }}>
          Don't have an account? <Link to="/Signup">SignUp</Link>
        </p>
      </form>
    </div>
  )
}

export default Login