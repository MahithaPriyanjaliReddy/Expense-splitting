import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1 style={{ color: 'white' }}>Welcome to Expense Splitter</h1>
      <button onClick={() => navigate('/home')}>Get Started</button>
    </div>
  )
}
