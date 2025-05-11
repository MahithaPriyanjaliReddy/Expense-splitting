import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#1E90FF',
      padding: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <Link to="/home" style={{ marginRight: '15px', color: 'white' }}>Home</Link>
        <Link to="/expenses" style={{ marginRight: '15px', color: 'white' }}>Expense Splitter</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contact Us</Link>
      </div>
      <div>
        <Link to="/login" style={{ marginRight: '15px', color: 'white' }}>Login</Link>
        <Link to="/signup" style={{ color: 'white' }}>Signup</Link>
      </div>
    </nav>
  )
}
