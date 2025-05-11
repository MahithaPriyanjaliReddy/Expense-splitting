import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('expenseSplitterUser'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
      setError('');
      navigate('/expenses');  // Navigate to Expense Splitter page
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <h1>Welcome Back</h1>
        <p className="intro-text">Please log in to access your account and manage your expenses easily.</p>

        <div className="login-card">
          <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
