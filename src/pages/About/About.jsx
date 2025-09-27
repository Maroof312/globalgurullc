import { Container, Row, Col, Image } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag'
import TeamMembers from '../../components/sections/TeamMembers'
import aboutHeroImage from '../../assets/images/about.avif'
import './About.scss'

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <link rel="canonical" href="https://globalgurullc.com/who-we-are" />
      </Helmet>
      {/* LinkedIn Insight Tag */}
      <LinkedInInsightTag />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-image-wrapper">
          <Image
            src={aboutHeroImage}
            alt="About Global Guru"
            className="hero-image"
            fluid
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
          <Row className="justify-content-center mb-4 mb-md-5">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="section-title mb-2 mb-md-3">Our Story</h2>
                <p className="lead mb-0">
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
                  At Global Guru Solution, we began with a clear mission: to make real estate accounting and lease management easier for commercial property companies. 
                  We take care of the heavy work including <b>property accounting, lease administration, CAM reconciliations, complex bank reconciliations, and Yardi implementations</b>, so our clients can focus on growth. 
                  Over the years, we have completed more than <b>10,000 CAM reconciliations</b>, proving our expertise and reliability
                </p>
                <p>
                  Clients trust us to lower payroll costs, increase productivity, and deliver results on time, every time. 
                  Our team works directly in platforms such as <b>Yardi, MRI, and RealPage</b>, making sure every process is accurate and transparent.
                </p>
                <p>
                  We also place the highest importance on <b>data confidentiality and integrity</b>, safeguarding sensitive financial information at every step. 
                  With Global Guru Solution, you gain a partner dedicated to accuracy, compliance, and long term success.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-4 mb-md-5">
            <Col lg={8} className="text-center">
              <h2 className="section-title mb-2 mb-md-3">Our Core Values</h2>
              <p className="lead mb-0">
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
                  className="value-card text-center"
                >
                  <div className="value-icon mb-3">
                    <i className={`bi ${value.icon}`}></i>
                  </div>
                  <h3 className="h5">{value.title}</h3>
                  <p className="mb-0">{value.description}</p>
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