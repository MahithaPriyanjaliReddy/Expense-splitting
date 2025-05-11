import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError('All fields are required.');
      return;
    }

    // Save user data to localStorage
    const userData = {
      fullName,
      email,
      password,
    };
    localStorage.setItem('expenseSplitterUser', JSON.stringify(userData));

    setError('');
    navigate('/expenses');  // Navigate to Expense Splitter page
  };

  return (
    <>
      <Navbar />
      <div className="signup-wrapper">
        <h1>Create Account</h1>
        <p className="intro-text">Join us today and start splitting expenses with ease.</p>

        <div className="signup-card">
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="error-message">{error || '\u00A0'}</p>
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
