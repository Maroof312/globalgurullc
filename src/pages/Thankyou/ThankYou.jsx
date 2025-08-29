import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ThankYou.scss'

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="thank-you-content"
            >
              <div className="confirmation-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#4CAF50"/>
                </svg>
              </div>
              
              <h1 className="display-4 fw-bold mb-4">Thank You for Contacting Us</h1>
              
              <div className="confirmation-message">
                <p className="lead mb-4">
                  We've received your submission and appreciate you reaching out. 
                  Our team will review your information and contact you within 24-48 hours.
                </p>
                <p className="additional-info">
                  For immediate assistance, please call our support team at <strong>(800) 123-4567</strong>
                </p>
              </div>
              
              <div className="action-buttons mt-5">
                <Button
                  as={Link}
                  to="/"
                  variant="primary"
                  size="lg"
                  className="mx-2 mb-3 mb-md-0"
                >
                  Return to Homepage
                </Button>
                <Button
                  as={Link}
                  to="/services"
                  variant="outline-primary"
                  size="lg"
                  className="mx-2"
                >
                  Explore Our Services
                </Button>
              </div>
              
              <div className="follow-up mt-5">
                <p className="small text-muted">
                  Didn't receive a confirmation email? <Link to="/contact">Resend</Link> or check your spam folder.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}