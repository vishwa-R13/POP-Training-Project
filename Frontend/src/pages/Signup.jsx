import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const navigate = useNavigate();
  const [Name, setFN] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const [confirmPassword, setcpass] = useState("");
  const handleSignup = async (event) => {
    event.preventDefault();
    const req = await axios.post(
      "https://pop-training-hprf.onrender.com/signup",
      {
        Name:Name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }
    );
    const message = req.data.message;
    const isSignup = req.data.isSignup;
    if (isSignup) {
      alert(message);
      navigate("/login");
    } else {
      alert(message);
    }
  };
  return (
    <div className="container">
          <form className="auth-form" onSubmit={handleSignup}>
            <h2>SignUp</h2>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={Name}
                onChange={(e) => setFN(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setemail(e.target.value)}
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
                onChange={(e) => setpass(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setcpass(e.target.value)}
                required
              />
            </div>
            <p style={{ marginTop: '15px', textAlign: 'center' }}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
  );
}
export default Signup;
