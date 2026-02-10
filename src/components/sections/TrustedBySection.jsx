import { Container, Row, Col } from 'react-bootstrap';
import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import './TrustedBySection.scss';

// Default content for different page types
const defaultContent = {
  realEstate: {
    alsoServing: {
      title: 'Also Serving: Commercial Property Managers',
      description: 'Complete portfolio accounting, investor reporting, and operational financial management for commercial property management firms of all sizes.',
      features: [
        'Portfolio-wide financial consolidation',
        'Investor distribution calculations',
        'Operational expense tracking',
        'Performance benchmarking reports'
      ]
    },
    whyStandOut: {
      title: 'Why Global Guru Excels in Real Estate',
      features: [
        'Deep commercial real estate expertise across all property types',
        'Specialized family office services with principal-focused reporting',
        'Bank-level data security with encrypted financial records',
        'Guaranteed monthly closes with SLA-backed performance'
      ]
    }
  },
  leaseAccounting: {
    alsoServing: {
      title: 'Also Serving: Corporate Lease Portfolios',
      description: 'Comprehensive lease administration for corporate real estate portfolios, ensuring compliance and optimizing lease-related financial performance.',
      features: [
        'Multi-location lease abstraction',
        'ASC 842/IFRS 16 compliance',
        'Lease vs. buy analysis',
        'Portfolio optimization insights'
      ]
    },
    whyStandOut: {
      title: 'Why Global Guru Leads in Lease Management',
      features: [
        'Extensive experience across retail, office, and industrial leases',
        'Family office tailored discretion and reporting',
        'Military-grade data protection for sensitive lease terms',
        'Never-missed critical date tracking with automated alerts'
      ]
    }
  },
  camReconciliation: {
    alsoServing: {
      title: 'Also Serving: Retail Center Owners',
      description: 'Specialized CAM and operational expense management for shopping centers, malls, and retail-focused property portfolios.',
      features: [
        'Percentage rent calculations',
        'Co-tenancy clause monitoring',
        'Marketing fund management',
        'Tenant recovery optimization'
      ]
    },
    whyStandOut: {
      title: 'Why Global Guru Dominates CAM Reconciliation',
      features: [
        '10,000+ CAM reconciliations completed nationwide',
        'Family office grade privacy and discretion',
        'Audit-proof documentation and evidence trails',
        'First-of-month billing with 99.9% accuracy guarantee'
      ]
    }
  },
  home: {
    alsoServing: {
      title: 'Also Serving: Growing Businesses Nationwide',
      description: 'Comprehensive financial management solutions for businesses seeking to streamline operations and drive sustainable growth.',
      features: [
        'Scalable accounting infrastructure',
        'Strategic financial planning',
        'Cash flow optimization',
        'Growth-focused reporting'
      ]
    },
    whyStandOut: {
      title: 'Why Global Guru Stands Out',
      features: [
        'Years of hands-on experience across multiple industries',
        'Specialized family office services with principal-friendly reporting',
        'Enterprise-grade data security and confidentiality protocols',
        'Reliable deadline-driven delivery with guaranteed performance'
      ]
    }
  }
};

// Fixed Family Offices content
const familyOfficesContent = {
  title: 'Trusted Outsourced Accounting & Reporting Services For Family Offices',
  description: 'We work quietly and precisely for single and multi-family offices, delivering discretion-first workflows and principal-focused financial intelligence.',
  services: [
    {
      icon: 'bi-shield-lock',
      title: 'Discretion-First Approach',
      description: 'Confidentiality built into every process with least-privilege access and secure data handling'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Consolidated Multi-Entity Reporting',
      description: 'Unified financial visibility across HoldCo, MidCo, OpCo, SPVs, and joint ventures'
    },
    {
      icon: 'bi-cash-coin',
      title: 'Capital Management',
      description: 'Comprehensive tracking of capital calls, distributions, and preferred returns'
    },
    {
      icon: 'bi-file-earmark-text',
      title: 'Principal-Friendly Reporting',
      description: 'Executive summaries plus detailed packs tailored for busy principals and family members'
    }
  ],
  cta: {
    text: 'Schedule a Private Consultation',
    link: '/contact'
  }
};

const TrustedBySection = memo(({ 
  pageType = 'home',
  className = '' 
}) => {
  // Get dynamic content based on page type
  const dynamicContent = useMemo(() => defaultContent[pageType] || defaultContent.home, [pageType]);

  return (
    <section className={`trusted-by-section py-5 ${className}`}>
      <Container>
        {/* Main Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-6 fw-bold text-dark mb-3">
            Trusted Real Estate Accounting <br />& Financial Outsourcing Experts
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            We help real estate businesses manage finances, leases, and reporting with precision, compliance, and scalable accounting support.
          </p>
        </motion.div>

        {/* Family Offices Section - Full Width */}
        <motion.div
          className="family-offices-card bg-white rounded-4 shadow-sm border-0 p-4 p-lg-5 mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="row align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="section-content">
                <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill small fw-semibold mb-3">
                  Exclusive Service
                </div>
                <h3 className="h2 fw-bold text-dark mb-3">
                  {familyOfficesContent.title}
                </h3>
                <p className="text-muted mb-4 fs-5 lh-base">
                  {familyOfficesContent.description}
                </p>
                <motion.a
                  href={familyOfficesContent.cta.link}
                  className="btn btn-primary btn-lg px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  {familyOfficesContent.cta.text}
                </motion.a>
              </div>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {familyOfficesContent.services.map((service, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <motion.div
                      className="service-item h-100 p-3 rounded-3 border-0 bg-light"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <div className="d-flex align-items-start">
                        <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-2 flex-shrink-0 me-3">
                          <i className={`bi ${service.icon} fs-5 text-primary`}></i>
                        </div>
                        <div>
                          <h3 className="h5 fw-bold text-dark mb-2">{service.title}</h3>
                          <p className="mb-0 text-muted small lh-base">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Col>
          </div>
        </motion.div>

        {/* Also Serving & Why Stand Out Sections - Side by Side */}
        <Row className="g-4">
          {/* Also Serving Section */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <motion.div
              className="also-serving-card bg-light rounded-4 p-4 p-lg-5 h-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="d-flex align-items-center mb-4">
                <div className="icon-wrapper bg-success bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0">
                  <i className="bi bi-building text-success fs-4"></i>
                </div>
                <h3 className="h3 fw-bold text-dark mb-0">
                  {dynamicContent.alsoServing.title}
                </h3>
              </div>
              <p className="text-muted mb-4 lh-base fs-5">
                {dynamicContent.alsoServing.description}
              </p>
              <ul className="list-unstyled mb-0">
                {dynamicContent.alsoServing.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="d-flex align-items-start mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  >
                    <i className="bi bi-check-circle-fill text-success mt-1 me-3 flex-shrink-0"></i>
                    <span className="text-muted">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Why Stand Out Section */}
          <Col lg={6}>
            <motion.div
              className="why-stand-out-card bg-white rounded-4 p-4 p-lg-5 h-100 border"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="d-flex align-items-center mb-4">
                <div className="icon-wrapper bg-warning bg-opacity-10 rounded-circle p-2 me-3 flex-shrink-0">
                  <i className="bi bi-award text-warning fs-4"></i>
                </div>
                <h3 className="h3 fw-bold text-dark mb-0">
                  {dynamicContent.whyStandOut.title}
                </h3>
              </div>
              <ul className="list-unstyled mb-0">
                {dynamicContent.whyStandOut.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="d-flex align-items-start mb-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                  >
                    <i className="bi bi-star-fill text-warning mt-1 me-3 flex-shrink-0"></i>
                    <span className="text-muted">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

TrustedBySection.displayName = 'TrustedBySection';

export default TrustedBySection;