import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import './DataFlowVisualization.scss';

// Import images with responsive srcset
import assetManagementSrc from '../../assets/images/asset-management.webp?w=300;500&format=webp&as=srcset';
import assetManagementFallback from '../../assets/images/asset-management.webp?w=500';
import arApServicesSrc from '../../assets/images/ar-ap-services.webp?w=300;500&format=webp&as=srcset';
import arApServicesFallback from '../../assets/images/ar-ap-services.webp?w=500';
import budgetingSrc from '../../assets/images/budgeting.webp?w=300;500&format=webp&as=srcset';
import budgetingFallback from '../../assets/images/budgeting.webp?w=500';
import businessProcessAutomationSrc from '../../assets/images/business-process-automation.webp?w=300;500&format=webp&as=srcset';
import businessProcessAutomationFallback from '../../assets/images/business-process-automation.webp?w=500';
import camReconciliationsSrc from '../../assets/images/cam-reconcillations.webp?w=300;500&format=webp&as=srcset';
import camReconciliationsFallback from '../../assets/images/cam-reconcillations.webp?w=500';
import marcoExpertsSrc from '../../assets/images/marco-experts.webp?w=300;500&format=webp&as=srcset';
import marcoExpertsFallback from '../../assets/images/marco-experts.webp?w=500';
import multiLingualProcessSrc from '../../assets/images/multi-lingual-process.webp?w=300;500&format=webp&as=srcset';
import multiLingualProcessFallback from '../../assets/images/multi-lingual-process.webp?w=500';
import underWritingSrc from '../../assets/images/under-writing.webp?w=300;500&format=webp&as=srcset';
import underWritingFallback from '../../assets/images/under-writing.webp?w=500';

const services = [
  {
    imageSrc: businessProcessAutomationSrc,
    imageFallback: businessProcessAutomationFallback,
    title: 'Property & Fund Accounting',
    description: 'Streamline operations with smart automation',
    bulletPoints: [
      'End-to-End CRE Accounting',
      'Outsourced Property Accounting Services',
      'Fund Accounting and Reporting',
      'Secure Real Estate Financials'
    ],
    color: '#f72585',
    gradient: 'linear-gradient(135deg, #f72585 0%, #d61c72 100%)',
    particles: '#f72585'
  },
  {
    imageSrc: camReconciliationsSrc,
    imageFallback: camReconciliationsFallback,
    title: 'CAM Reconciliations',
    description: 'Precise Common Area Maintenance audits',
    bulletPoints: [
      'Expense tracking',
      'Tenant billing',
      'Audit preparation',
      'Compliance reporting'
    ],
    color: '#4cc9f0',
    gradient: 'linear-gradient(135deg, #4cc9f0 0%, #3ab0d7 100%)',
    particles: '#4895ef'
  },
  {
    imageSrc: multiLingualProcessSrc,
    imageFallback: multiLingualProcessFallback,
    title: 'Lease Admin',
    description: 'Global lease documentation expertise',
    bulletPoints: [
      'Lease Abstraction and Compliance',
      'Move - In / Move - Out Management',
      'Critical Date Tracking Services',
      'CAM Reconciliation and Recovery'
    ],
    color: '#560bad',
    gradient: 'linear-gradient(135deg, #560bad 0%, #45098c 100%)',
    particles: '#7209b7'
  },
  {
    imageSrc: arApServicesSrc,
    imageFallback: arApServicesFallback,
    title: 'AR & AP Services',
    description: 'Streamlined receivables and payables management for real estate operations',
    bulletPoints: [
      'Invoice processing',
      'Payment tracking',
      'Vendor management',
      'Cash flow optimization'
    ],
    color: '#3a0ca3',
    gradient: 'linear-gradient(135deg, #3a0ca3 0%, #2f0b8a 100%)',
    particles: '#560bad'
  },
  {
    imageSrc: underWritingSrc,
    imageFallback: underWritingFallback,
    title: 'Underwriting & Valuations',
    description: 'Detailed property financial analysis',
    bulletPoints: [
      'Risk assessment',
      'Financial modeling',
      'Market analysis',
      'Investment evaluation'
    ],
    color: '#b5179e',
    gradient: 'linear-gradient(135deg, #b5179e 0%, #961282 100%)',
    particles: '#f72585'
  },
  {
    imageSrc: budgetingSrc,
    imageFallback: budgetingFallback,
    title: 'Budgeting & Forecasting',
    description: 'Accurate financial planning for your portfolio',
    bulletPoints: [
      'Financial modeling',
      'Expense forecasting',
      'Revenue projections',
      'Budget variance analysis'
    ],
    color: '#7209b7',
    gradient: 'linear-gradient(135deg, #7209b7 0%, #5d0896 100%)',
    particles: '#b5179e'
  },
  {
    imageSrc: assetManagementSrc,
    imageFallback: assetManagementFallback,
    title: 'Asset Management',
    description: 'Comprehensive tracking and performance analysis for your property portfolio',
    bulletPoints: [
      'Portfolio performance tracking',
      'Investment analysis',
      'Asset valuation',
      'Maintenance scheduling'
    ],
    color: '#4361ee',
    gradient: 'linear-gradient(135deg, #4361ee 0%, #3a56d4 100%)',
    particles: '#4895ef'
  },
  {
    imageSrc: marcoExpertsSrc,
    imageFallback: marcoExpertsFallback,
    title: 'Power BI & VBA',
    description: 'Advanced data visualization and automation',
    bulletPoints: [
      'Dashboard creation',
      'Data visualization',
      'Custom reporting',
      'Process automation'
    ],
    color: '#4895ef',
    gradient: 'linear-gradient(135deg, #4895ef 0%, #3a7cd6 100%)',
    particles: '#4361ee'
  },
];

const ServiceCard = ({ service, isActive, onClick, onHover }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
    onHover(service);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
    onHover(null);
  };

  return (
    <div
      className="flip-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <motion.div
        className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front of the card */}
        <div className="flip-card-front">
          <motion.div
            className={`service-card ${isActive ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ '--service-color': service.color }}
          >
            <div className="card-image">
              <img
                srcSet={service.imageSrc}
                src={service.imageFallback}
                alt={service.title}
                loading="lazy"
                sizes="(max-width: 768px) 150px, 200px"
              />
              <div className="image-overlay" style={{ background: service.gradient }} />
            </div>
            <h4>{service.title}</h4>
          </motion.div>
        </div>

        {/* Back of the card */}
        <div className="flip-card-back">
          <motion.div
            className="service-card-back"
            style={{ background: service.gradient }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="back-content">
              <div className="title-container">
                <h4>{service.title}</h4>
                <div className="title-underline"></div>
              </div>

              <ul className="features-list">
                {service.bulletPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="icon-container">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const FloatingParticles = ({ color }) => {
  return (
    <div className="floating-particles">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            backgroundColor: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            opacity: Math.random() * 0.4 + 0.1,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 20 - 10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default function ModernServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const targetService = hoveredService !== null ? hoveredService : services[activeService];
    controls.start({
      background: targetService.gradient,
      transition: { duration: 0.8 }
    });
  }, [activeService, hoveredService, controls]);

  const handleServiceHover = (service) => {
    setHoveredService(service);
  };

  const currentService = hoveredService !== null ? hoveredService : services[activeService];

  return (
    <section className="modern-services-section">
      <motion.div
        className="dynamic-bg"
        animate={controls}
        initial={{
          background: services[0].gradient
        }}
      />

      <FloatingParticles color={currentService.particles} />

      <Container>
        <motion.div
          className="section-header"
          id="solutions"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            <span className="highlight">Strategic Financial Solutions</span> for Modern Real Estate
          </h2>
          <p className="subtitle">
            Elevate your property portfolio with our specialized accounting services
          </p>
        </motion.div>

        <div className="services-container">
          {isMobile ? (
            <div className="mobile-services">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="mobile-service-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ '--service-color': service.color }}
                >
                  <div className="card-header">
                    <div className="card-image">
                      <img
                        srcSet={service.imageSrc}
                        src={service.imageFallback}
                        alt={service.title}
                        loading="lazy"
                        sizes="80px"
                      />
                      <div className="image-overlay" style={{ background: service.gradient }} />
                    </div>
                    <h4>{service.title}</h4>
                  </div>
                  <p>{service.description}</p>
                  <div className="bullet-points">
                    <h5>Key Features:</h5>
                    <ul>
                      {service.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  isActive={index === activeService}
                  onClick={() => setActiveService(index)}
                  onHover={handleServiceHover}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}