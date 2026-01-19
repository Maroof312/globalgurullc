// ServicesOverview.jsx
import React, { memo, useMemo, useState, useCallback } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import './ServicesOverview.scss';

const SERVICE_CATEGORIES = [
  {
    key: 'owners',
    label: 'Ownership & Development Partners',
    icon: 'bi-buildings',
    intro: 'Operational accounting support that keeps projects and stabilized assets audit-ready without slowing your team down.',
    items: [
      {
        title: 'Residential Property Accounting',
        desc: 'Day-to-day accounting for multifamily portfolios rent posting, month-end close, reconciliations, and owner-ready reporting.',
        icon: 'bi-house-door',
        tags: ['Month-End Close', 'Reconciliations', 'Owner Reporting'],
      },
      {
        title: 'Affordable Housing',
        desc: 'LIHTC compliance accounting, HUD reporting, tenant income certifications, and subsidy management for affordable housing portfolios.',
        icon: 'bi-house-heart',
        tags: ['LIHTC Compliance', 'HUD Reporting', 'Subsidy Management', 'Income Certifications'],
      },
      {
        title: 'Commercial Property Accounting',
        desc: 'Accurate financials for office/retail/industrial billing, accruals, and clean reporting aligned to lease terms and budgets.',
        icon: 'bi-shop-window',
        tags: ['Accruals', 'Budget vs Actuals', 'Lease-Driven Billing'],
      },
      {
        title: 'HOA / Condo Accounting',
        desc: 'Association accounting built for transparency assessments, payables, reserve tracking, and board-friendly financial packages.',
        icon: 'bi-people',
        tags: ['Assessments', 'Reserves', 'Board Packages'],
      },
      {
        title: 'Construction Accounting',
        desc: 'Project accounting support to track costs, commitments, draws, and reporting so stakeholders always know where the money went.',
        icon: 'bi-hammer',
        tags: ['Job Costing', 'Draws', 'Commitments'],
      },
    ],
  },
  {
    key: 'pm',
    label: 'Property Management',
    icon: 'bi-clipboard-check',
    intro: 'Back-office accounting coverage that helps PM teams stay current on billing, close, and tenant recoveries.',
    items: [
      {
        title: 'CAM Reconciliation Services',
        desc: 'Recover the right expenses with clear support true-ups, tenant statements, and clean backup that reduces disputes.',
        icon: 'bi-calculator',
        tags: ['True-Ups', 'Tenant Statements', 'Backup Support'],
      },
      {
        title: 'Lease Abstraction',
        desc: 'Extract key financial and critical-date terms into a consistent format reducing downstream billing and compliance risk.',
        icon: 'bi-file-earmark-text',
        tags: ['Key Terms', 'Critical Dates', 'Standardized Output'],
      },
      {
        title: 'Back Office Support',
        desc: 'Reliable support for invoice handling, tenant billing follow-ups, document organization, and reporting coordination.',
        icon: 'bi-headset',
        tags: ['AP Support', 'Billing Support', 'Docs & Reporting'],
      },
      {
        title: 'Financial Dashboards',
        desc: 'Decision-ready dashboards that summarize KPIs, variances, and cash position so ownership gets answers fast.',
        icon: 'bi-speedometer2',
        tags: ['KPIs', 'Variances', 'Cash Visibility'],
      },
    ],
  },
  {
    key: 'asset',
    label: 'Asset Management',
    icon: 'bi-graph-up-arrow',
    intro: 'Asset-level reporting and analysis to support performance reviews, lender updates, and investment decisions.',
    items: [
      {
        title: 'Asset Management Services',
        desc: 'Support for performance tracking, variance review, narrative reporting, and coordination across PM/accounting teams.',
        icon: 'bi-bar-chart-line',
        tags: ['Variance Review', 'Monthly Narratives', 'Stakeholder Updates'],
      },
      {
        title: 'Portfolio Accounting',
        desc: 'Consolidated portfolio reporting with consistent definitions so owners can compare assets and spot trends quickly.',
        icon: 'bi-diagram-3',
        tags: ['Consolidations', 'Standard Reports', 'Trend Tracking'],
      },
      {
        title: 'Investment Analysis',
        desc: 'Underwrite performance with practical analysis NOI drivers, cash flow checks, and scenario reviews for clarity.',
        icon: 'bi-pie-chart',
        tags: ['NOI Drivers', 'Cash Flow', 'Scenarios'],
      },
    ],
  },
  {
    key: 'investors',
    label: 'Capital Partners',
    icon: 'bi-cash-coin',
    intro: 'Deal and reporting support that keeps your investment workflow moving from diligence to ongoing visibility.',
    items: [
      {
        title: 'Acquisition Support',
        desc: 'Diligence support for statements, rent rolls, and operating history organized into a clear package for review.',
        icon: 'bi-search',
        tags: ['Diligence', 'Data Room Support', 'Operating History'],
      },
      {
        title: 'Investment Analysis',
        desc: 'Investment-grade analysis with consistent assumptions and clear outputs helping teams evaluate and communicate.',
        icon: 'bi-clipboard-data',
        tags: ['Assumptions', 'Outputs', 'Clarity'],
      },
      {
        title: 'Financial Dashboards',
        desc: 'Executive-level views of portfolio performance built to support quick investor updates and internal decisions.',
        icon: 'bi-window',
        tags: ['Executive View', 'Portfolio KPIs', 'Updates'],
      },
    ],
  },
];

const ServicesOverview = memo(() => {
  const prefersReducedMotion = useReducedMotion();
  const [activeKey, setActiveKey] = useState('owners');
  const [openMobileCategory, setOpenMobileCategory] = useState(null);

  const activeCategory = useMemo(
    () => SERVICE_CATEGORIES.find((c) => c.key === activeKey) || SERVICE_CATEGORIES[0],
    [activeKey]
  );

  const handleSelect = useCallback((key) => {
    if (!key) return;
    setActiveKey(key);
  }, []);

  const toggleMobileCategory = useCallback((key) => {
    setOpenMobileCategory(openMobileCategory === key ? null : key);
  }, [openMobileCategory]);

  const fadeUpVariant = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }), []);

  const staggerVariant = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }), []);

  return (
    <section className="services-overview-section">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col lg={8}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpVariant}
            >
              <h2 className="section-title mb-3">Our Services</h2>
              <p className="section-subtitle">
                Category-focused accounting and finance support for real estate teams built for accuracy, speed, and visibility.
              </p>
            </motion.div>
          </Col>
          <Col lg={4}>
            <motion.div
              className="trust-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUpVariant}
              transition={{ delay: 0.1 }}
            >
              <div className="trust-card-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div className="trust-card-content">
                <div className="trust-card-title">Built for controls</div>
                <div className="trust-card-text">Process + review layers that reduce errors and rework.</div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Desktop Layout */}
        <div className="d-none d-lg-block">
          <Row className="g-4 g-lg-5">
            {/* Navigation Sidebar */}
            <Col lg={4} xl={3}>
              <div className="nav-sidebar">
                <div className="nav-header">
                  <h3 className="nav-title">Service Categories</h3>
                  <p className="nav-subtitle">Select your role to view relevant services</p>
                </div>

                <div className="nav-list">
                  {SERVICE_CATEGORIES.map((category) => (
                    <button
                      key={category.key}
                      className={`nav-item ${activeKey === category.key ? 'active' : ''}`}
                      onClick={() => handleSelect(category.key)}
                      aria-selected={activeKey === category.key}
                    >
                      <div className="nav-item-content">
                        <div className="nav-item-icon">
                          <i className={`bi ${category.icon}`}></i>
                        </div>
                        <div className="nav-item-text">
                          <div className="nav-item-label">{category.label}</div>
                          <div className="nav-item-count">{category.items.length} services</div>
                        </div>
                      </div>
                      <div className="nav-item-arrow">
                        <i className="bi bi-chevron-right"></i>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Col>

            {/* Services Content - Desktop */}
            <Col lg={8} xl={9}>
              <motion.div
                key={activeKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="services-content"
              >
                {/* Category Header */}
                <div className="category-header">
                  <div className="category-badge">
                    <span className="category-badge-dot"></span>
                    <span className="category-badge-text">{activeCategory.label}</span>
                  </div>
                  <h3 className="category-title">{activeCategory.label}</h3>
                  <p className="category-description">{activeCategory.intro}</p>
                </div>

                {/* Services Grid */}
                <motion.div
                  className="services-grid"
                  variants={staggerVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <Row className="g-4">
                    {activeCategory.items.map((service, index) => (
                      <Col key={service.title} md={6} xl={4}>
                        <motion.div variants={fadeUpVariant} className="service-card-wrapper">
                          <div className="service-card">
                            {/* Card Header */}
                            <div className="card-header">
                              <div className="card-icon">
                                <i className={`bi ${service.icon}`}></i>
                              </div>
                              <div className="card-title-section">
                                <h4 className="card-title">{service.title}</h4>
                                <div className="card-tags">
                                  {service.tags.slice(0, 2).map((tag, idx) => (
                                    <Badge key={idx} className="card-tag-badge">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="card-body">
                              <p className="card-description">{service.desc}</p>
                            </div>

                            {/* Card Footer */}
                            <div className="card-footer">
                              <div className="card-tags-list">
                                {service.tags.map((tag, idx) => (
                                  <span key={idx} className="card-tag-item">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </div>

        {/* Mobile Layout - Accordion Style */}
        <div className="d-lg-none">
          <div className="mobile-accordion">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.key}
                className={`mobile-accordion-item ${openMobileCategory === category.key ? 'open' : ''}`}
              >
                <button
                  className="mobile-accordion-header"
                  onClick={() => toggleMobileCategory(category.key)}
                  aria-expanded={openMobileCategory === category.key}
                >
                  <div className="accordion-header-content">
                    <div className="accordion-header-icon">
                      <i className={`bi ${category.icon}`}></i>
                    </div>
                    <div className="accordion-header-text">
                      <h3 className="accordion-header-title">{category.label}</h3>
                      <div className="accordion-header-count">{category.items.length} services</div>
                    </div>
                  </div>
                  <div className="accordion-header-arrow">
                    <i className={`bi bi-chevron-down ${openMobileCategory === category.key ? 'rotated' : ''}`}></i>
                  </div>
                </button>

                <AnimatePresence>
                  {openMobileCategory === category.key && (
                    <motion.div
                      className="mobile-accordion-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="accordion-content-inner">
                        <div className="mobile-category-description">
                          {category.intro}
                        </div>

                        <div className="mobile-services-grid">
                          <Row className="g-3">
                            {category.items.map((service, index) => (
                              <Col key={service.title} xs={12}>
                                <motion.div
                                  className="mobile-service-card"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  <div className="mobile-card-header">
                                    <div className="mobile-card-icon">
                                      <i className={`bi ${service.icon}`}></i>
                                    </div>
                                    <div className="mobile-card-title-section">
                                      <h4 className="mobile-card-title">{service.title}</h4>
                                      <div className="mobile-card-tags">
                                        {service.tags.slice(0, 2).map((tag, idx) => (
                                          <Badge key={idx} className="mobile-card-tag-badge">
                                            {tag}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="mobile-card-body">
                                    <p className="mobile-card-description">{service.desc}</p>
                                  </div>

                                  <div className="mobile-card-footer">
                                    <div className="mobile-card-tags-list">
                                      {service.tags.map((tag, idx) => (
                                        <span key={idx} className="mobile-card-tag-item">
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
});

ServicesOverview.displayName = 'ServicesOverview';
export default ServicesOverview;