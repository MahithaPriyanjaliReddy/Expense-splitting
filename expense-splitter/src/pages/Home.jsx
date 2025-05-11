import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  const containerStyle = {
    padding: '40px',
    minHeight: '80vh',
    backgroundColor: 'black',
    color: 'white'
  }

  const descriptionStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.7',
    fontSize: '1.2rem'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px'
  }

  const cardStyle = {
    backgroundColor: '#1E90FF',
    color: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    minHeight: '260px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.4)'
  }

  const headingStyle = {
    marginBottom: '12px',
    fontSize: '1.5rem',
    borderBottom: '2px solid white',
    paddingBottom: '5px',
    minHeight: '60px'
  }

  const listStyle = {
    lineHeight: '1.6',
    paddingLeft: '18px',
    marginTop: '12px'
  }

  const listItemStyle = {
    marginBottom: '10px'
  }

  const sections = [
    {
      title: 'Clean & Professional',
      points: [
        'Split bills and track shared expenses easily.',
        'See who owes what at a glance.'
      ]
    },
    {
      title: 'Friendly & Conversational',
      points: [
        'Split expenses with friends in just a few taps.',
        'We handle the math so you don’t have to.'
      ]
    },
    {
      title: 'Minimalist & Modern',
      points: [
        'Track. Split. Settle.',
        'Perfect for travel, rent, and shared bills.'
      ]
    },
    {
      title: 'Feature-Focused',
      points: [
        'Customizable splits for any situation.',
        'Fast reminders and easy payment tracking.'
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: '#1E90FF', fontSize: '3rem', textAlign: 'center', marginBottom: '20px' }}
        >
          Welcome to Expense Splitter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={descriptionStyle}
        >
          Simplify group expenses with ease. Whether it’s trips, shared rent, or friendly dinners — we make it easy to split, track, and settle up. No more confusion, just clear balances and happy friends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={gridStyle}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              whileHover={cardHoverStyle}
              style={cardStyle}
            >
              <h2 style={headingStyle}>{section.title}</h2>
              <ul style={listStyle}>
                {section.points.map((point, i) => (
                  <li key={i} style={listItemStyle}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  )
}
