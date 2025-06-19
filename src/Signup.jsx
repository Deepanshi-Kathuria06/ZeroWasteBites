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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Password match check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // ✅ Register request
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        // ✅ Auto-login
        const loginRes = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const loginData = await loginRes.json();

        if (loginData.success) {
          // ✅ Store user + token in localStorage
          localStorage.setItem("token", loginData.token);
          localStorage.setItem("userRole", loginData.user.role);
          localStorage.setItem("user", JSON.stringify(loginData.user));

          // ✅ Navigate by role
          if (loginData.user.role === "NGO") {
            navigate("/ngo/dashboard");
          } else {
            navigate("/restaurant/dashboard");
          }
        } else {
          alert("Login failed after registration.");
        }
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong");
    }
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
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <label>Role</label>
        <select name="role" required value={formData.role} onChange={handleChange}>
          <option value="">Select</option>
          <option value="NGO">NGO</option>
          <option value="RESTAURANT">Restaurant</option>
        </select>

        <label>Organization Name</label>
        <input
          type="text"
          name="organizationName"
          required
          placeholder="Helping Hands / Delhi Dhaba"
          value={formData.organizationName}
          onChange={handleChange}
        />

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
