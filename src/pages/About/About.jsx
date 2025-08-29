import { Container, Row, Col, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import TeamMembers from '../../components/sections/TeamMembers'
import aboutHeroImage from '../../assets/images/about.avif'
import './About.scss'

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-image-wrapper">
          <Image
            src={aboutHeroImage}
            alt="About Global Guru"
            className="hero-image"
          />
          <div className="hero-overlay">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-content"
              >
                <h1 className="hero-title">About Global Guru LLC</h1>
                <p className="hero-text">
                  Empowering businesses through innovative solutions and strategic consulting.
                </p>
              </motion.div>
            </Container>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-title mb-3">Our Story</h2>
                <p className="lead">
                  From humble beginnings to industry leaders
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="story-content"
              >
                <p>
                  Global Guru LLC began as a consulting firm
                  with a vision to transform how businesses operate. Today, we're serving clients across 4 countries.
                </p>
                <p>
                  Our journey has been marked by innovation, dedication, and a
                  relentless focus on delivering measurable results for our clients.
                </p>
                <p>
                  What sets us apart is our holistic approach, combining strategic
                  consulting with cutting-edge technology solutions tailored to each
                  client's unique needs.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-3">Our Core Values</h2>
              <p className="lead">
                The principles that guide everything we do
              </p>
            </Col>
          </Row>
          <Row>
            {[
              {
                title: "Integrity",
                description: "We uphold the highest standards of honesty and ethics.",
                icon: "bi-shield-check"
              },
              {
                title: "Innovation",
                description: "We embrace creativity to solve complex challenges.",
                icon: "bi-lightbulb"
              },
              {
                title: "Excellence",
                description: "We pursue quality in every aspect of our work.",
                icon: "bi-award"
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnerships.",
                icon: "bi-people"
              }
            ].map((value, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="value-card"
                >
                  <div className="value-icon">
                    <i className={`bi ${value.icon}`}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <TeamMembers variant="about" />
    </div>
  )
}