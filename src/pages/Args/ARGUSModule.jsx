import React, { useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/2nd.avif?w=800;1200;1600&format=avif&as=srcset';
import heroImageFallback from '../../assets/images/2nd.avif?w=1200';
import valuationImage from '../../assets/images/2nd.avif?w=600;800;1000&format=webp&as=srcset';
import valuationImageFallback from '../../assets/images/2nd.avif?w=800';
import workflowImage from '../../assets/images/2nd.avif?w=600;800;1000&format=webp&as=srcset';
import workflowImageFallback from '../../assets/images/2nd.avif?w=800';
import FinancialServices from '../../components/sections/FinancialServices';
import FAQ from '../../components/sections/FAQ';
import CTA from '../../components/sections/CTA';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import { Helmet } from 'react-helmet-async';
import './ARGUSModule.scss';

const ARGUSModule = React.memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const faqs = useMemo(() => [
    {
      question: "Do you work inside our license or deliver files?",
      answer: "Both. We can operate in your AE environment or deliver .avux/.ae files with change logs."
    },
    {
      question: "How do you connect ARGUS to actuals?",
      answer: "We export from your accounting system (Yardi/MRI/RealPage), align assumptions, and reconcile differences in a variance bridge."
    },
    {
      question: "Can you maintain strict confidentiality for family offices?",
      answer: "Yes—NDA, least-privilege access, watermarked artifacts, and audit-ready indexes."
    },
    {
      question: "How often should we re‑underwrite?",
      answer: "Quarterly is common; monthly during volatile periods or business-plan shifts."
    },
    {
      question: "What about debt modeling?",
      answer: "We set accurate schedules for IO/amortizing/floating debt, model refi/exit cases, and monitor DSCR/LTV headroom."
    }
  ], []);

  const dataAssumptions = useMemo(() => [
    {
      icon: "📊",
      title: "Rent Roll Analysis",
      items: ["Rent rolls, options, rent steps", "Downtime/renewals/retention analysis"]
    },
    {
      icon: "🏢",
      title: "Market Leasing",
      items: ["Market Leasing Profiles with absorption", "Free rent, TI/LC policy optimization"]
    },
    {
      icon: "💰",
      title: "Recoveries & Expenses",
      items: ["Base year/net recoveries", "CAM caps/exclusions, % rent and breakpoints"]
    },
    {
      icon: "📈",
      title: "Financial Modeling",
      items: ["OpEx drivers & capital programs", "Inflation curves & projections"]
    }
  ], []);

  const debtExitFeatures = useMemo(() => [
    {
      icon: "🏦",
      title: "Debt Structuring",
      description: "Interest-only, amortizing, floating index + caps/floors"
    },
    {
      icon: "🔄",
      title: "Exit Scenarios",
      description: "Refi scenarios, fees, prepayment/yield maintenance"
    },
    {
      icon: "📋",
      title: "Lender Reporting",
      description: "DSCR/LTV snapshots and lender-ready outputs"
    }
  ], []);

  const deliverables = useMemo(() => [
    {
      icon: "📁",
      title: "ARGUS Files",
      description: ".avux/.ae files with change logs and comments"
    },
    {
      icon: "📊",
      title: "Sensitivity Analysis",
      description: "Grid analysis for rates, rents, downtime, TI/LC, exit"
    },
    {
      icon: "💧",
      title: "Waterfall Returns",
      description: "Equity returns (IRR, MOIC) and debt coverage analysis"
    },
    {
      icon: "📝",
      title: "Investment Memos",
      description: "Committee memos with summary, risks, mitigations"
    }
  ], []);

  const assetManagementFeatures = useMemo(() => [
    {
      icon: "🎯",
      title: "NOI Planning",
      description: "Tied to leasing actions and OpEx levers"
    },
    {
      icon: "📅",
      title: "Quarterly Re-underwriting",
      description: "Vs. plan analysis with delta explanation"
    },
    {
      icon: "💸",
      title: "Cash Flow Monitoring",
      description: "13-week cash-flow overlay and covenant monitoring"
    },
    {
      icon: "📈",
      title: "Portfolio Analytics",
      description: "Portfolio roll-ups and peer comparisons"
    }
  ], []);

  return (
    <>
      <LinkedInInsightTag />
      <Helmet>
        <title>ARGUS Enterprise Module | Asset Management & Valuations | Global Guru</title>
        <link rel="canonical" href="https://globalgurullc.com/argus-module" />
        <meta
          name="description"
          content="Professional ARGUS Enterprise services for asset management, underwriting & valuations. Build, audit, and version models with transparent assumptions."
        />
      </Helmet>
      <motion.div
        className="argus-module-page"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-image-container">
            <img
              srcSet={heroImage}
              src={heroImageFallback}
              alt="ARGUS Enterprise Asset Management"
              className="hero-image"
              loading="eager"
              width="1200"
              height="600"
            />
          </div>

          <div className="overlay"></div>

          <div className="hero-overlay">
            <Container>
              <Row>
                <Col lg={10} className="mx-auto">
                  <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                  >
                    ARGUS Enterprise <span className="gradient-text">Asset Management</span> & Valuations
                  </motion.h1>
                  <motion.p
                    className="lead"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    Professional ARGUS solutions for transparent underwriting, defensible valuations, and strategic asset management
                  </motion.p>
                  <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <a href="/contact" className="cta-button primary">Schedule Consultation</a>
                    <a href="#pulse-check" className="cta-button secondary">Free Pulse Check</a>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="what-we-do-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} className="text-center">
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Transform Your ARGUS Workflow</h2>
                  <p className="section-subtitle">
                    We build, audit, and version models in ARGUS so assumptions are transparent and math is defensible across underwriting and portfolio management.
                  </p>
                </motion.div>
              </Col>
            </Row>
            
            <Row className="features-grid">
              <Col lg={3} md={6}>
                <motion.div 
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon">🔍</div>
                  <h3>Model Auditing</h3>
                  <p>Comprehensive review and validation of your ARGUS models for accuracy and compliance</p>
                </motion.div>
              </Col>
              <Col lg={3} md={6}>
                <motion.div 
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon">🔄</div>
                  <h3>Version Control</h3>
                  <p>Track changes, maintain audit trails, and ensure model integrity across versions</p>
                </motion.div>
              </Col>
              <Col lg={3} md={6}>
                <motion.div 
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon">📈</div>
                  <h3>Valuation Analysis</h3>
                  <p>Defensible valuations with sensitivity analysis and scenario modeling</p>
                </motion.div>
              </Col>
              <Col lg={3} md={6}>
                <motion.div 
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="feature-icon">🏢</div>
                  <h3>Portfolio Management</h3>
                  <p>Strategic asset management with performance monitoring and optimization</p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Data & Assumptions Section */}
        <section className="data-assumptions-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Comprehensive Data & Assumptions</h2>
                  <p className="section-subtitle">Robust modeling built on accurate data and transparent assumptions</p>
                </motion.div>
              </Col>
            </Row>

            <Row className="g-4">
              {dataAssumptions.map((category, index) => (
                <Col lg={6} key={index}>
                  <motion.div 
                    className="category-card"
                    variants={itemVariants}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="category-header">
                      <div className="category-icon">{category.icon}</div>
                      <h3>{category.title}</h3>
                    </div>
                    <div className="category-items">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="category-item">
                          <div className="item-bullet"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Debt & Exit Strategy */}
        <section className="debt-exit-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Strategic Debt & Exit Planning</h2>
                  <p className="section-description">
                    Optimize your capital structure with comprehensive debt modeling and exit scenario analysis. 
                    We ensure your financial strategies align with market conditions and investment objectives.
                  </p>
                  
                  <div className="features-list">
                    {debtExitFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="feature-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="feature-icon">{feature.icon}</div>
                        <div className="feature-content">
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Col>
              
              <Col lg={7}>
                <motion.div 
                  className="image-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    srcSet={workflowImage}
                    src={workflowImageFallback}
                    alt="Debt & Exit Strategy Analysis"
                    className="img-fluid rounded-3"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="image-overlay-card">
                    <h4>Real-time Analytics</h4>
                    <p>Live DSCR/LTV monitoring and scenario analysis</p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Deliverables Section */}
        <section className="deliverables-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Professional Deliverables</h2>
                  <p className="section-subtitle">Comprehensive outputs that drive informed decision-making</p>
                </motion.div>
              </Col>
            </Row>

            <Row className="g-4">
              {deliverables.map((deliverable, index) => (
                <Col lg={6} key={index}>
                  <motion.div 
                    className="deliverable-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="deliverable-icon">{deliverable.icon}</div>
                    <div className="deliverable-content">
                      <h3>{deliverable.title}</h3>
                      <p>{deliverable.description}</p>
                    </div>
                    <div className="deliverable-arrow">→</div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Valuation Sensitivity */}
        <section className="valuation-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div 
                  className="valuation-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-highlight">
                    <div className="stat-badge">Market Insight</div>
                    <h2>Valuation Sensitivity Analysis</h2>
                  </div>
                  
                  <div className="sensitivity-example">
                    <div className="example-header">
                      <h4>Cap Rate Impact Analysis</h4>
                      <p>A 25 bps cap‑rate move changes value ~4% at a 6.0% cap</p>
                    </div>
                    
                    <div className="value-comparison">
                      <div className="value-item">
                        <div className="value-amount">$83.3M</div>
                        <div className="value-label">Value at 6.00% Cap</div>
                      </div>
                      <div className="value-arrow">→</div>
                      <div className="value-item decrease">
                        <div className="value-amount">$80.0M</div>
                        <div className="value-label">Value at 6.25% Cap</div>
                      </div>
                    </div>
                    
                    <div className="sensitivity-note">
                      <strong>$5.0M NOI</strong> • $3.3M value impact from 25 bps shift
                    </div>
                  </div>
                </motion.div>
              </Col>
              
              <Col lg={6}>
                <motion.div 
                  className="chart-container"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    srcSet={valuationImage}
                    src={valuationImageFallback}
                    alt="Valuation Sensitivity Chart"
                    className="img-fluid rounded-3 shadow-lg"
                    loading="lazy"
                    width="550"
                    height="400"
                  />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Asset Management */}
        <section className="asset-management-section">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={10} className="text-center">
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Strategic Asset Management</h2>
                  <p className="section-subtitle text-center">Operate your portfolio with precision and insight</p>
                </motion.div>
              </Col>
            </Row>

            <Row className="g-4">
              {assetManagementFeatures.map((feature, index) => (
                <Col lg={3} md={6} key={index}>
                  <motion.div 
                    className="management-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <div className="management-icon">{feature.icon}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>

            <Row className="mt-5">
              <Col lg={8} className="mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <a href="/contact" className="demo-cta-button">
                    Request Portfolio Roll-Up Demo ↗
                  </a>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Pulse Check CTA */}
        <section id="pulse-check" className="pulse-check-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <motion.div 
                  className="pulse-check-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Row className="align-items-center">
                    <Col lg={8}>
                      <div className="pulse-content">
                        <div className="pulse-badge">Free Assessment</div>
                        <h2>Start Smart: ARGUS Pulse Check</h2>
                        <p className="pulse-description">
                          Get a comprehensive risk map highlighting assumption hotspots, covenant headroom, 
                          and value drivers. Includes three actionable fixes and a preview of our model review methodology.
                        </p>
                        <ul className="pulse-features">
                          <li>One-page risk assessment</li>
                          <li>Three immediate improvements</li>
                          <li>Model review methodology preview</li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg={4} className="text-center">
                      <motion.a 
                        href="/contact" 
                        className="pulse-cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Book Free Pulse Check ↗
                      </motion.a>
                    </Col>
                  </Row>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* HOA Note */}
        <section className="hoa-note-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <motion.div 
                  className="note-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="note-icon">🏠</div>
                  <div className="note-content">
                    <h3>Note on HOAs & Condo Associations</h3>
                    <p>
                      While ARGUS Enterprise excels with income properties, we deliver board-ready financials 
                      and reserve planning for HOA/condo associations through specialized tools—maintaining 
                      ARGUS exclusively for commercial real estate underwriting and valuations.
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <FinancialServices />
        <CTA
          title="Ready to Transform Your ARGUS Workflow?"
          description="Stop struggling with complex models and questionable assumptions. Partner with Global Guru for ARGUS Enterprise solutions that deliver transparency, accuracy, and defensible valuations. Schedule your free Pulse Check today and discover how our expertise can optimize your underwriting and portfolio management."
          buttonText="Start with Free Pulse Check"
          buttonLink="/contact"
        />

        {/* FAQ moved after CTA */}
        <section className="faq-section">
          <Container>
            <FAQ
              faqs={faqs}
              title="ARGUS Enterprise FAQs"
              subtitle="Expert answers to your most common questions"
              themeColor="#0066cc"
            />
          </Container>
        </section>
      </motion.div>
    </>
  );
});

export default ARGUSModule;