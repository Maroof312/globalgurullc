import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './Footer.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "0px" }}
            >
              <h5 className="mb-3">Global Guru LLC</h5>
              <p className="mb-0">
                Providing innovative business solutions to help your company grow 
                and succeed in today's competitive market.
              </p>
            </motion.div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "0px" }}
            >
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="/who-we-are" className="text-white">About Us</a></li>
                <li className="mb-2"><a href="/services" className="text-white">Services</a></li>
                <li className="mb-2"><a href="/yardi-consultation-services" className="text-white">Yardi Consulting</a></li>
                <li className="mb-2"><a href="/contact" className="text-white">Contact</a></li>
                <li className="mb-2"><a href="/our-experts" className="text-white">Our Experts</a></li>
                <li className="mb-2"><a href="/privacy-policy" className="text-white">Privacy Policy</a></li>
              </ul>
            </motion.div>
          </Col>

          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "0px" }}
            >
              <h5 className="mb-3">Contact Info</h5>
              <address className="mb-0">
                <p className="mb-2"><i className="bi bi-geo-alt me-2"></i> 18530, Holden Drive, Spring Hill, FL 34610 </p>
                <p className="mb-2"><i className="bi bi-phone me-2"></i> +1 845-497-6474</p>
                <p className="mb-0"><i className="bi bi-envelope me-2"></i> info@globalgurullc.com </p>
              </address>
            </motion.div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, margin: "0px" }}
              className="text-center pt-3 border-top"
            >
              <p className="mb-0">
                &copy; {currentYear} Global Guru LLC. All Rights Reserved.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}