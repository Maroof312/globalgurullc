import { Container, Row, Col } from 'react-bootstrap';
import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ServicesOverview.scss'

// Services data - memoized outside component
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
  },
  {
    title: "Argus",
    description: "Advanced Argus software solutions for real estate financial modeling and analysis, including cash flow projections, valuation, and portfolio management.",
    icon: "bi-graph-up",
    link: "/argus",
    features: ["Financial Modeling", "Cash Flow Projections", "Valuation Analysis", "Portfolio Management"]
  }
];

// Animation variants - memoized
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.15 } }
};

// Optimized Animated component
const AnimatedSection = memo(({ children, className = "" }) => {
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
});

AnimatedSection.displayName = 'AnimatedSection';

function ServicesOverview() {
  // Memoize service cards to prevent re-renders - EXACT SAME as original
  const serviceCards = useMemo(() => 
    services.map((service, index) => (
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
    )), []);

  return (
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
            {serviceCards}
          </Row>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export default memo(ServicesOverview);