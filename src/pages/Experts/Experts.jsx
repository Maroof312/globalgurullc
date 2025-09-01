import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TeamMembers from "../../components/sections/TeamMembers";
import './Experts.scss';

export default function Experts() {
  return (
    <div className="experts-page">
      {/* Creative Hero Section */}
      <section className="creative-hero">
        <Container>
          <Row className="align-items-center min-vh-80">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content"
              >
                <div className="pre-title">Meet Our Experts</div>
                <h1 className="hero-title">
                  The Minds Behind <span className="text-gradient">Global Guru</span>
                </h1>
                <p className="hero-description">
                  Discover the talented professionals who drive innovation and excellence 
                  at Global Guru. Our team combines decades of industry experience with 
                  cutting-edge expertise to deliver exceptional results.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-display">
        <Container>
          <TeamMembers variant="team" />
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="values-content"
              >
                <h2 className="values-title">Our Approach to Excellence</h2>
                <Row>
                  <Col md={4} className="value-item">
                    <div className="value-icon">✨</div>
                    <h4>Quality First</h4>
                    <p>We prioritize delivering exceptional quality in every project, ensuring client satisfaction and long-term success.</p>
                  </Col>
                  <Col md={4} className="value-item">
                    <div className="value-icon">🔄</div>
                    <h4>Continuous Innovation</h4>
                    <p>Staying ahead of industry trends and implementing cutting-edge solutions for our clients.</p>
                  </Col>
                  <Col md={4} className="value-item">
                    <div className="value-icon">🤝</div>
                    <h4>Client Partnership</h4>
                    <p>Building strong, collaborative relationships with our clients to achieve their business goals.</p>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}