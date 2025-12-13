import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag'
import TeamMembers from '../../components/sections/TeamMembers'
import useAnalytics from '../../components/hooks/useAnalytics';
import aboutHeroImage from '../../assets/images/about.avif'
import './About.scss'

export default function About() {
  useAnalytics();
  
  const differences = [
    {
      icon: "👥",
      title: "Dedicated team, not a queue",
      description: "You get an embedded pod that works exclusively on your portfolio. We learn your properties, partners, and lender nuances and we stay with you."
    },
    {
      icon: "🔒",
      title: "Confidential by design",
      description: "We protect sensitive information with NDAs, least-privilege access, role-based approvals, and documented controls. Your data stays your data."
    },
    {
      icon: "⚡",
      title: "Never miss a deadline",
      description: "We engineer dependable 5‑day closes, clause‑aware CAM, and auditor‑ready packages so reporting lands when it should and decisions move faster."
    },
    {
      icon: "🛠️",
      title: "Fluent in your stack",
      description: "Yardi, RealPage, MRI, QuickBooks and your BI tools. We meet you where you are, clean what's messy, and leave the system better than we found it."
    }
  ];

  const services = [
    "Full-cycle Property Accounting and month-end close",
    "AP/AR automation with approval guardrails and vendor onboarding",
    "CAM Reconciliations that are accurate, defensible, and tenant-friendly",
    "Investor reporting and audit-ready financial packages",
    "13-week cash-flow forecasting and KPI dashboards for portfolio reviews",
    "Lease abstraction & audit (economics, options, escalations)",
    "System cleanup & migrations (Yardi/RealPage chart of accounts, vendors, data quality)",
    "Controller-as-a-Service and policy/controls implementation",
    "Underwriting & valuations support and portfolio analytics (as needed)"
  ];

  const industries = [
    "Multifamily", "Retail", "Office", "Industrial", 
    "Mixed-use", "Self-storage", "Hospitality", 
    "Private Equity", "Family Offices"
  ];

  return (
    <div className="about-page">
      <Helmet>
        <link rel="canonical" href="https://globalgurullc.com/who-we-are" />
        
        {/* BREADCRUMB SCHEMA FOR /who-we-are PAGE */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://globalgurullc.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "About Us",
              "item": "https://globalgurullc.com/who-we-are"
            }]
          }`}
        </script>
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
                <p className="story-intro">
                  We help U.S. owners, operators, asset managers, and investors run finance operations that are fast, 
                  accurate, and decision-ready. From month-end close to CAM reconciliations and investor reporting, 
                  we standardize your data, automate the busywork, and deliver clean numbers, on time, every time.
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* How We're Different Section */}
          <Row className="mt-5">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="section-subtitle text-center mb-5">How We're Different</h3>
                <Row>
                  {differences.map((item, index) => (
                    <Col lg={6} key={index} className="mb-4">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="difference-card"
                      >
                        <div className="difference-icon">{item.icon}</div>
                        <div className="difference-content">
                          <h4 className="difference-title">{item.title}</h4>
                          <p className="difference-description">{item.description}</p>
                        </div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>

          {/* What We Do Section */}
          <Row className="mt-5">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="section-subtitle text-center mb-5">What We Do</h3>
                <Row>
                  <Col lg={8} className="mx-auto">
                    <Card className="services-card">
                      <Card.Body>
                        <Row>
                          {services.map((service, index) => (
                            <Col md={6} key={index}>
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="service-item"
                              >
                                <span className="service-bullet">•</span>
                                {service}
                              </motion.div>
                            </Col>
                          ))}
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>

          {/* Who We Serve Section */}
          <Row className="mt-5">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="section-subtitle text-center mb-4">Who We Serve</h3>
                <div className="industries-container">
                  {industries.map((industry, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="industry-tag"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
                <p className="text-center mt-4 serve-description">
                  Owners/operators and private equity & family offices across the United States
                </p>
              </motion.div>
            </Col>
          </Row>

          {/* Our Promise Section */}
          <Row className="mt-5">
            <Col lg={10} className="mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="promise-section"
              >
                <div className="promise-content">
                  <h3 className="promise-title">Our Promise</h3>
                  <p className="promise-text">
                    <strong>Outsource with confidence.</strong> With Global Guru, you get a secure, professional, 
                    and highly responsive team that shows up every day, owns outcomes, and scales with your growth.
                  </p>
                </div>
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