import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  // Simulate login
  const userRole = "NGO"; // Or "RESTAURANT" → will come from backend later

  // Store in localStorage (simulate auth)
  localStorage.setItem("userRole", userRole);

  // Navigate based on role
  if (userRole === "NGO") {
    navigate("/ngo/dashboard");
  } else {
    navigate("/restaurant/dashboard");
  }
};


  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>
          Don’t have an account?{' '}
          <span onClick={() => navigate('/register')} className="auth-link">
            Sign Up
          </span>
        </p>
      </form>
      <h1>hello</h1>
    </div>
  );
}
