import { Container, Row, Col, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import ContactForm from '../../components/forms/ContactForm'
import './Contact.scss'

export default function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-4 fw-bold mb-3">Get in Touch</h1>
                <p className="lead mb-0">
                  Questions, collaborations, or feedback? We’re here to help. Reach out to our team today!
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 contact-main">
        <Container>
          <Row className="g-5 align-items-start">

            {/* Contact Form */}
            <Col lg={6} xs={12}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="contact-form-wrapper"
              >
                <div className="text-center text-lg-start mb-4">
                  <h2 className=" mb-3">Send a Message</h2>
                </div>
                <ContactForm />
              </motion.div>
            </Col>

            {/* Contact Info Cards */}
            <Col lg={6} xs={12}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="contact-info"
              >
                <h2 className="fw-bold mb-4">Contact Information</h2>

                <Card className="mb-3 shadow-sm info-card">
                  <Card.Body className="d-flex align-items-center">
                    <i className="bi-geo-alt-fill fs-3 me-3 text-primary"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Address</h6>
                      <p className="mb-0">18530 Holden Drive, Spring Hill, Florida, FL 34610</p>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-3 shadow-sm info-card">
                  <Card.Body className="d-flex align-items-center">
                    <i className="bi-telephone-fill fs-3 me-3 text-primary"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Phone</h6>
                      <p className="mb-0">+1 845-497-6474</p>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="mb-3 shadow-sm info-card">
                  <Card.Body className="d-flex align-items-center">
                    <i className="bi-envelope-fill fs-3 me-3 text-primary"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="mb-0">info@globalgurullc.com</p>
                    </div>
                  </Card.Body>
                </Card>

                <Card className="shadow-sm info-card">
                  <Card.Body className="d-flex align-items-center">
                    <i className="bi-clock-fill fs-3 me-3 text-primary"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Working Hours</h6>
                      <p className="mb-0">Mon - Fri: 9am - 6pm<br />Sat: 10am - 2pm</p>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

          </Row>
        </Container>
      </section>
    </div>
  )
}
