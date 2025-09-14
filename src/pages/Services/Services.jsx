import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import servicesHeroImage from '../../assets/images/15 - Website 1st Illustration.avif';
import IntroImage from '../../assets/images/USA_CITY.webp';
import CTA from '../../components/sections/CTA';
import DataFlowVisualization from '../../components/sections/DataFlowVisualization';

import './Services.scss';

// Services data
const services = [
  {
    title: "Property Accounting",
    description: "Comprehensive property accounting services including financial reporting, cash flow management, and budget development tailored for real estate portfolios of all sizes.",
    icon: "bi-building",
    link: "/real-estate-accounting-services",
    features: ["Financial Reporting", "Cash Flow Management", "Budget Development", "Owner Distributions"]
  },
  {
    title: "CAM Reconciliation",
    description: "Accurate Common Area Maintenance reconciliation to ensure proper expense allocation between landlords and tenants with detailed reporting.",
    icon: "bi-calculator",
    link: "/cam-reconciliation-services",
    features: ["Expense Allocation", "Detailed Reporting", "Dispute Resolution", "Tenant Billing"]
  },
  {
    title: "Lease Administration",
    description: "End-to-end lease administration services including abstraction, critical date monitoring, rent roll preparation, and lease compliance tracking.",
    icon: "bi-file-earmark-text",
    link: "/lease-admin-accounting-services",
    features: ["Lease Abstraction", "Critical Date Monitoring", "Rent Roll Preparation", "Compliance Tracking"]
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Complete accounting and bookkeeping solutions with general ledger maintenance, bank reconciliation, and customized financial reporting.",
    icon: "bi-journal-bookmark",
    link: "/accounting-and-bookkeeping",
    features: ["General Ledger", "Bank Reconciliation", "Financial Reporting", "Custom Solutions"]
  },
  {
    title: "AR & AP Services",
    description: "Professional accounts receivable and payable management including invoice processing, payment application, and vendor management services.",
    icon: "bi-credit-card",
    link: "/ar-ap-services",
    features: ["Invoice Processing", "Payment Application", "Vendor Management", "Cash Flow Optimization"]
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.15 } }
};

// Animated component
const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerChildren}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-image-wrapper">
          <Image
            src={servicesHeroImage}
            alt="Real Estate Accounting Services"
            className="hero-image"
            loading="eager"
          />
          <div className="hero-overlay">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content"
              >
                <h1 className="hero-title">Real Estate Accounting Services</h1>
                <p className="hero-text">
                  Expert financial management solutions designed specifically for property managers, real estate investors, and commercial landlords
                </p>
                <motion.button 
                  className="hero-cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services <i className="bi bi-arrow-down"></i>
                </motion.button>
              </motion.div>
            </Container>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="section-title mb-4"
              >
                Simplifying Real Estate Financial Management
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="intro-text"
              >
                Navigating the complexities of real estate accounting requires specialized expertise. Our comprehensive suite of services is designed to handle the unique financial challenges faced by property managers, real estate investors, and commercial landlords.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="intro-text"
              >
                From daily bookkeeping to complex financial reporting, our team ensures your real estate assets are managed with financial precision and strategic insight, allowing you to focus on growing your portfolio.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                <a href="/contact" className="btn btn-primary">Get Started</a>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
                className="intro-visual"
              >
                <div className="visual-container">
                  <Image
                    src={IntroImage}
                    alt="Real Estate Financial Management"
                    className="main-visual"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Overview Section */}
      <section className="services-overview py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="section-title mb-3"
              >
                Our Specialized Services
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-subtitle"
              >
                Tailored accounting solutions for the unique needs of the real estate industry
              </motion.p>
            </Col>
          </Row>
          
          <AnimatedSection>
            <Row className="g-4">
              {services.map((service, index) => (
                <Col lg={4} md={6} key={index}>
                  <motion.div
                    variants={fadeIn}
                    className="service-card"
                    whileHover={{ y: -5 }}
                  >
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <i className={service.icon}></i>
                      </div>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-features">
                      {service.features.map((feature, i) => (
                        <span key={i} className="feature-chip">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <a href={service.link} className="service-link">
                        Learn More <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatedSection>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="section-title mb-3"
              >
                Why Choose Our Real Estate Accounting Services?
              </motion.h2>
            </Col>
          </Row>
          
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <motion.div 
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  <i className="bi bi-award"></i>
                </div>
                <h4>Industry Expertise</h4>
                <p className="benefit-text">Our team specializes exclusively in real estate accounting, with deep knowledge of industry-specific challenges and requirements.</p>
              </motion.div>
            </Col>
            
            <Col md={6} lg={3} className="mb-4">
              <motion.div 
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <h4>Accuracy</h4>
                <p className="benefit-text">We ensure complete compliance with accounting standards and regulations while maintaining precise financial records for your properties.</p>
              </motion.div>
            </Col>
            
            <Col md={6} lg={3} className="mb-4">
              <motion.div 
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h4>Strategic Insights</h4>
                <p className="benefit-text">Beyond basic accounting, we provide valuable financial insights to help you make informed decisions about your real estate investments.</p>
              </motion.div>
            </Col>
            
            <Col md={6} lg={3} className="mb-4">
              <motion.div 
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">
                  <i className="bi bi-clock-history"></i>
                </div>
                <h4>Time Efficiency</h4>
                <p className="benefit-text">Free up your valuable time by outsourcing complex accounting tasks to our dedicated team of real estate accounting experts.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <DataFlowVisualization/>

      {/* CTA Section */}
      <CTA
        title="Streamline Your Real Estate Accounting Today"
        description="Partner with our team of specialized real estate accountants to optimize your financial operations, ensure compliance, and maximize the return on your property investments."
        buttonText="Get Started"
        buttonLink="/contact"
        // backgroundColor="dark"
        textColor="white"
        // buttonVariant="primary"
        animationDirection="horizontal"
      />
    </div>
  );
}
