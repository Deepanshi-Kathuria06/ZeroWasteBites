import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    organizationName: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // replace with API
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <label>Full Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="John Doe"
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <label>Role</label>
        <select name="role" required onChange={handleChange}>
          <option value="">Select</option>
          <option value="NGO">NGO</option>
          <option value="RESTAURANT">Restaurant</option>
        </select>

        {formData.role === 'NGO' && (
          <>
            <label>Organization Name</label>
            <input
              type="text"
              name="organizationName"
              placeholder="Helping Hands"
              onChange={handleChange}
            />
          </>
        )}

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="auth-link">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
