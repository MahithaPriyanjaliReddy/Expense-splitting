import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contact.css'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-wrapper">
        <h1>Get in Touch</h1>
        <p className="intro-text">
          We’re here to assist you. Reach out to us through any of the methods below — we look forward to connecting!
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h2>Email</h2>
            <p>📧 mahitha@example.com</p>
          </div>
          <div className="contact-card">
            <h2>Phone</h2>
            <p>📞 +91 98765 43210</p>
          </div>
          <div className="contact-card">
            <h2>Address</h2>
            <p>
              🏢 Expense Splitter Inc. <br />
              123, KLU Campus Road, <br />
              Vijayawada, Andhra Pradesh, India
            </p>
          </div>
          <div className="contact-card">
            <h2>Follow Us</h2>
            <p>🌐 Our Website</p>
            <p>🐦 Twitter</p>
            <p>📘 Facebook</p>
          </div>
        </div>

        <div className="stats-section">
          <h2>Why Choose Expense Splitter?</h2>
          <div className="stats-grid">
            <div className="stat-item">100,000+ Satisfied Customers</div>
            <div className="stat-item">Seamless Group Expense Management</div>
            <div className="stat-item">Trusted in 25+ Countries</div>
            <div className="stat-item">24/7 Customer Support</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
