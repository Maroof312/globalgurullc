// CPA.jsx
import { memo, useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './CPA.scss';

import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import useAnalytics from '../../components/hooks/useAnalytics';
import CTA from '../../components/sections/CTA';

const CPA = memo(() => {
  useAnalytics();
  const prefersReducedMotion = useReducedMotion();
  const [activeService, setActiveService] = useState(0);
  const [openMobileService, setOpenMobileService] = useState(null);

  const motionProps = useMemo(() => {
    const baseViewport = { once: true, margin: '-90px' };
    if (prefersReducedMotion) {
      return {
        hero: {},
        fadeUp: { viewport: baseViewport },
        fadeIn: { viewport: baseViewport },
        stagger: {},
        slideLeft: { viewport: baseViewport },
      };
    }

    return {
      hero: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, ease: 'easeOut' },
      },
      fadeUp: {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: baseViewport,
        transition: { duration: 0.55, ease: 'easeOut' },
      },
      fadeIn: {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: baseViewport,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
      stagger: {
        initial: 'hidden',
        whileInView: 'show',
        viewport: baseViewport,
        variants: {
          hidden: {},
          show: {
            transition: { staggerChildren: 0.07 },
          },
        },
      },
      slideLeft: {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: baseViewport,
        transition: { duration: 0.6, ease: 'easeOut' },
      },
    };
  }, [prefersReducedMotion]);

  const primaryKeywords = useMemo(
    () => [
      'Real estate CPA activities',
      'Property management CPA services',
      'CPA accounting services',
      'Certified public accountant services',
      'CPA firm services',
      'Professional accounting services',
    ],
    []
  );

  const trustSignals = useMemo(
    () => [
      {
        icon: 'bi-shield-check',
        title: 'Compliance-first',
        desc: 'Controls and documentation designed for audit readiness.',
      },
      {
        icon: 'bi-graph-up-arrow',
        title: 'Owner-level clarity',
        desc: 'Decision-ready reporting across assets and entities.',
      },
      {
        icon: 'bi-lightning-charge',
        title: 'Faster close rhythm',
        desc: 'Repeatable month-end workflows without surprises.',
      },
      {
        icon: 'bi-diagram-3',
        title: 'Scales with you',
        desc: 'Multi-property and multi-entity structures supported.',
      },
    ],
    []
  );

  const capabilities = useMemo(
    () => [
      {
        k: 'Close discipline',
        v: 'Month-end and year-end close management, reconciliations, cleanup.',
        icon: 'bi-calendar2-check',
      },
      {
        k: 'Portfolio reporting',
        v: 'Owner packs, rent roll tie-outs, variance analysis, KPI reporting.',
        icon: 'bi-journal-text',
      },
      {
        k: 'Tax coordination',
        v: 'Entity compliance support, planning, and document readiness.',
        icon: 'bi-receipt',
      },
      {
        k: 'Audit support',
        v: 'Internal controls review, audit preparation, evidence organization.',
        icon: 'bi-clipboard2-check',
      },
    ],
    []
  );

  const cpaServices = useMemo(
    () => [
      {
        id: 'property-management',
        title: 'Property Management Accounting and Reporting',
        subtitle: 'Financial oversight for portfolio performance',
        icon: 'bi-building',
        color: '#3b82f6',
        content: {
          description: 'Comprehensive accounting and reporting solutions designed specifically for property management operations. We ensure accurate financial tracking, owner reporting, and portfolio-wide visibility.',
          activities: [
            'Monthly property financial statements with variance analysis',
            'Custom owner reporting packages tailored to investor requirements',
            'Rent roll review and tie-outs to ensure data accuracy',
            'Bank and balance sheet reconciliations for all accounts',
            'Portfolio-level reporting with comparative analytics',
          ],
          deliverables: [
            'Monthly financial package by property and portfolio',
            'Rent roll accuracy reports with exception tracking',
            'Cash flow forecasting and working capital analysis',
            'Owner distribution calculations and statements',
          ],
          benefit: 'Transform raw property data into actionable insights that drive better decision-making and enhance portfolio performance.',
        },
      },
      {
        id: 'financial-statement',
        title: 'Financial Statement Preparation and CPA Review',
        subtitle: 'GAAP-compliant reporting excellence',
        icon: 'bi-file-text',
        color: '#6366f1',
        content: {
          description: 'Professional financial statement preparation and CPA review services that ensure accuracy, compliance, and clarity for stakeholders and regulatory requirements.',
          activities: [
            'Monthly, quarterly, and annual financial statements prepared to GAAP standards',
            'Balance sheet and income statement review for accuracy and compliance',
            'Cash flow statement preparation and analysis',
            'Adjusting journal entries and account reconciliations',
            'Financial statement footnote preparation and disclosure review',
          ],
          deliverables: [
            'Complete financial statement packages ready for distribution',
            'CPA review reports and management letters',
            'Adjusting entry documentation and support',
            'Compliance checklist and regulatory filing support',
          ],
          stat: {
            value: '100%',
            description: 'Audit-ready financial statements',
          },
        },
      },
      {
        id: 'tax-planning',
        title: 'CPA Tax Planning and Tax Compliance for Real Estate',
        subtitle: 'Strategic tax optimization and compliance',
        icon: 'bi-calculator',
        color: '#14b8a6',
        content: {
          description: 'Comprehensive tax planning and compliance services designed specifically for real estate entities. We navigate complex tax regulations to optimize your tax position while ensuring full compliance.',
          activities: [
            'Entity tax filings and multi-state compliance support',
            'Strategic tax planning for real estate owners and operators',
            'Tax document organization, review, and coordination',
            'Year-round tax planning and quarterly estimate preparation',
            'Tax credit identification and optimization strategies',
          ],
          deliverables: [
            'Tax planning strategies and implementation roadmap',
            'Tax return preparation and filing for all entities',
            'Quarterly tax estimate calculations and payment schedules',
            'Tax position documentation and support files',
          ],
          calculation: 'Effective tax planning can reduce overall tax liability by 15-25% through proper entity structuring, timing strategies, and credit optimization.',
        },
      },
      {
        id: 'audit-support',
        title: 'Audit Support and CPA Assurance Services',
        subtitle: 'Audit readiness and process excellence',
        icon: 'bi-clipboard-data',
        color: '#8b5cf6',
        content: {
          description: 'Comprehensive audit support and assurance services that prepare your organization for successful financial audits while maintaining operational efficiency.',
          activities: [
            'Audit preparation and documentation management',
            'Internal control review and improvement recommendations',
            'Financial audit support and liaison with audit teams',
            'Regulatory compliance assistance and documentation',
            'Audit evidence organization and presentation',
          ],
          deliverables: [
            'Audit-ready workpapers and supporting documentation',
            'Internal control assessment and improvement plan',
            'Audit response coordination and management',
            'Post-audit implementation recommendations',
          ],
          stat: {
            value: '40%',
            description: 'reduction in audit preparation time',
          },
        },
      },
      {
        id: 'accounting-advisory',
        title: 'Accounting Advisory and CPA Consulting for Real Estate',
        subtitle: 'Strategic financial guidance',
        icon: 'bi-graph-up',
        color: '#06b6d4',
        content: {
          description: 'Expert accounting advisory and consulting services that provide strategic guidance on complex accounting issues, process optimization, and financial system implementation.',
          activities: [
            'Accounting policy development and implementation',
            'Revenue recognition and expense classification support',
            'Process improvement and month-end close optimization',
            'Financial system setup guidance and workflow design',
            'Complex transaction accounting and technical guidance',
          ],
          deliverables: [
            'Accounting policy manual and implementation guide',
            'Process improvement roadmap and implementation plan',
            'System configuration documentation and best practices',
            'Technical accounting position papers and memos',
          ],
          benefit: 'Transform accounting from a compliance function to a strategic advantage with optimized processes and clear financial insights.',
        },
      },
      {
        id: 'bookkeeping-oversight',
        title: 'Bookkeeping Oversight and Month End Close Management',
        subtitle: 'Process discipline and quality control',
        icon: 'bi-journal-bookmark',
        color: '#f97316',
        content: {
          description: 'Professional bookkeeping oversight and month-end close management that ensures accuracy, timeliness, and consistency in your financial reporting processes.',
          activities: [
            'Bookkeeping supervision and quality control procedures',
            'Month-end and year-end close process management',
            'Account reconciliations and cleanup projects',
            'Financial error review, correction, and prevention',
            'Close calendar management and deadline tracking',
          ],
          deliverables: [
            'Standardized close checklist and timeline',
            'Reconciliation templates and review procedures',
            'Error tracking and resolution documentation',
            'Close process efficiency metrics and reporting',
          ],
          stat: {
            value: '50%',
            description: 'faster month-end close cycles',
          },
        },
      },
      {
        id: 'financial-analysis',
        title: 'Real Estate Financial Analysis and Decision Support',
        subtitle: 'Data-driven strategic insights',
        icon: 'bi-bar-chart',
        color: '#10b981',
        content: {
          description: 'Advanced financial analysis and decision support services that transform raw data into actionable insights for real estate investment and management decisions.',
          activities: [
            'Budgeting and forecasting model development',
            'Cash flow planning and analysis for properties and portfolios',
            'Profitability analysis by property, sector, and geography',
            'KPI development, tracking, and reporting for portfolios',
            'Investment analysis and return calculations',
          ],
          deliverables: [
            'Dynamic financial models and forecasting tools',
            'Cash flow analysis and working capital optimization',
            'Portfolio performance dashboards and scorecards',
            'Investment analysis reports and recommendations',
          ],
          example: 'Portfolio optimization analysis typically identifies 5-15% performance improvement opportunities through reallocation, expense reduction, and operational improvements.',
        },
      },
    ],
    []
  );

  const verticals = useMemo(
    () => [
      {
        title: 'Retail CPA Activities and Tax Services',
        eyebrow: 'Retail',
        icon: 'bi-bag-check',
        gradient: 'retail',
        features: [
          {
            title: 'Sales Tax Compliance',
            desc: 'Multi-state sales tax filings and nexus analysis',
          },
          {
            title: 'Inventory Accounting',
            desc: 'Cost tracking and POS system reconciliation',
          },
          {
            title: 'Revenue Recognition',
            desc: 'Retail-specific reporting and compliance support',
          },
          {
            title: 'Tax Planning',
            desc: 'Strategic planning and compliance optimization',
          },
        ],
      },
      {
        title: 'Manufacturing CPA Activities and Tax Services',
        eyebrow: 'Manufacturing',
        icon: 'bi-gear-wide-connected',
        gradient: 'manufacturing',
        features: [
          {
            title: 'Cost Accounting',
            desc: 'Job costing and overhead allocation',
          },
          {
            title: 'Inventory Valuation',
            desc: 'Fixed asset and depreciation accounting',
          },
          {
            title: 'R&D Tax Credits',
            desc: 'Tax credit support and compliance',
          },
          {
            title: 'Margin Analysis',
            desc: 'Profitability and manufacturing margin tracking',
          },
        ],
      },
    ],
    []
  );

  const industries = useMemo(
    () => [
      {
        name: 'Property management companies',
        icon: 'bi-building',
      },
      {
        name: 'Commercial real estate operators',
        icon: 'bi-buildings',
      },
      {
        name: 'Multi entity real estate portfolios',
        icon: 'bi-layers',
      },
      {
        name: 'Professional services firms',
        icon: 'bi-briefcase',
      },
    ],
    []
  );

  const whyChoose = useMemo(
    () => [
      {
        text: 'Licensed and experienced CPA professionals',
        icon: 'bi-person-badge',
      },
      {
        text: 'Strong focus on accuracy, compliance, and risk reduction',
        icon: 'bi-shield-check',
      },
      {
        text: 'Scalable support for multi property structures',
        icon: 'bi-arrow-up-right-square',
      },
      {
        text: 'Technology driven workflows',
        icon: 'bi-cpu',
      },
      {
        text: 'Dedicated accounting support',
        icon: 'bi-headset',
      },
    ],
    []
  );

  // Memoized navigation for desktop
  const serviceNavigation = useMemo(
    () =>
      cpaServices.map((service, index) => (
        <motion.button
          key={service.id}
          className={`cpa-service-nav-item ${activeService === index ? 'active' : ''}`}
          onClick={() => setActiveService(index)}
          whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="nav-icon" style={{ backgroundColor: `${service.color}15` }}>
            <i className={`bi ${service.icon}`} style={{ color: service.color }}></i>
          </div>
          <div className="nav-content">
            <span className="nav-title">{service.title}</span>
            {service.subtitle && (
              <span className="nav-subtitle">{service.subtitle}</span>
            )}
          </div>
          <div className="nav-indicator" style={{ backgroundColor: service.color }}></div>
        </motion.button>
      )),
    [activeService, cpaServices, prefersReducedMotion]
  );

  // Memoized mobile accordion
  const mobileAccordionItems = useMemo(
    () =>
      cpaServices.map((service, index) => (
        <motion.div
          key={service.id}
          className={`cpa-mobile-accordion-item ${openMobileService === index ? 'open' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            className="accordion-header"
            onClick={() =>
              setOpenMobileService(openMobileService === index ? null : index)
            }
          >
            <div className="header-content">
              <div 
                className="step-icon-wrapper rounded-circle p-2 me-3"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <i className={`bi ${service.icon} fs-5`} style={{ color: service.color }}></i>
              </div>
              <div className="header-text">
                <h4 className="accordion-title mb-1">{service.title}</h4>
                {service.subtitle && (
                  <p className="accordion-subtitle mb-0 text-muted">
                    {service.subtitle}
                  </p>
                )}
              </div>
            </div>
            <div className="accordion-arrow">
              <i
                className={`bi bi-chevron-down ${openMobileService === index ? 'rotated' : ''}`}
              ></i>
            </div>
          </button>

          <AnimatePresence>
            {openMobileService === index && (
              <motion.div
                className="accordion-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="content-inner p-3">
                  <div className="cpa-service-content">
                    <div className="content-description-block mb-4">
                      <p className="content-description text-muted">
                        {service.content.description}
                      </p>
                    </div>

                    <div className="content-grid">
                      <div className="content-column">
                        {service.content.activities && (
                          <div className="content-block mb-4">
                            <h5 className="content-subtitle h6 fw-semibold mb-3">
                              Core Activities
                            </h5>
                            <ul className="content-list activities-list">
                              {service.content.activities.map((activity, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + idx * 0.1 }}
                                >
                                  <i className="bi bi-arrow-right-circle me-2" style={{ color: service.color }}></i>
                                  {activity}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="content-column">
                        {service.content.deliverables && (
                          <div className="content-block mb-4">
                            <h5 className="content-subtitle h6 fw-semibold mb-3">
                              Key Deliverables
                            </h5>
                            <ul className="content-list deliverables-list">
                              {service.content.deliverables.map((deliverable, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.4 + idx * 0.1 }}
                                >
                                  <i className="bi bi-file-earmark-text text-success me-2"></i>
                                  {deliverable}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.content.stat && (
                          <div className="content-block mb-4">
                            <div className="stat-card rounded-3 p-3 text-center" style={{ backgroundColor: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                              <div className="stat-value h4 fw-bold mb-1" style={{ color: service.color }}>
                                {service.content.stat.value}
                              </div>
                              <div className="stat-description small text-muted">
                                {service.content.stat.description}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {service.content.calculation && (
                      <div className="calculation-block rounded-3 p-3 mb-3" style={{ backgroundColor: `${service.color}08`, borderLeft: `4px solid ${service.color}` }}>
                        <h6 className="fw-semibold mb-2">Financial Impact</h6>
                        <p className="mb-0 small text-muted">{service.content.calculation}</p>
                      </div>
                    )}

                    {service.content.benefit && (
                      <div className="benefit-block rounded-3 p-3 mb-3" style={{ backgroundColor: '#10b98110', borderLeft: '4px solid #10b981' }}>
                        <h6 className="fw-semibold mb-2">Strategic Advantage</h6>
                        <p className="mb-0 small text-muted">{service.content.benefit}</p>
                      </div>
                    )}

                    {service.content.example && (
                      <div className="example-block rounded-3 p-3 mb-3" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #6b7280' }}>
                        <h6 className="fw-semibold mb-2">Practical Example</h6>
                        <p className="mb-0 small text-muted">{service.content.example}</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )),
    [openMobileService, cpaServices]
  );

  const currentService = cpaServices[activeService];

  return (
    <div className="cpa-page">
      <LinkedInInsightTag />

      <Helmet>
        <title>Real Estate CPA Activities for Property Management | CPA Accounting Services</title>
        <meta
          name="description"
          content="Real estate CPA activities for property management, owners, and operators. Accurate financial reporting, tax support, month end close, audit readiness, and portfolio insights."
        />
        <link rel="canonical" href="https://globalgurullc.com/real-estate-cpa-activities" />
      </Helmet>

      {/* Hero — DO NOT CHANGE */}
      <motion.section className="cpa-hero" {...motionProps.hero}>
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={8} xl={7}>
              <motion.div className="cpa-hero__content" {...motionProps.fadeUp}>
                <p className="cpa-hero__eyebrow">Premium CPA Accounting Services</p>
                <h1 className="cpa-hero__title">
                  Real Estate CPA Activities and Accounting Services for Property Management
                </h1>
                <p className="cpa-hero__lead">
                  Our real estate CPA activities help property management companies and real estate businesses maintain
                  accurate financials, stay compliant, and improve reporting across portfolios.
                </p>

                <div className="cpa-hero__pillRow" role="list" aria-label="Primary keywords">
                  {primaryKeywords.map((k) => (
                    <span key={k} className="cpa-pill" role="listitem">
                      {k}
                    </span>
                  ))}
                </div>

                <div className="cpa-hero__actions">
                  <a className="btn btn-primary cpa-hero__btn" href="/contact">
                    Schedule a CPA Consultation
                  </a>
                  <a className="btn btn-outline-light cpa-hero__btnSecondary" href="/services">
                    Explore Services
                  </a>
                </div>

                <p className="cpa-hero__trust" aria-label="Trust statement">
                  Built for multi property and multi entity portfolios with audit ready workflows.
                </p>
              </motion.div>
            </Col>

            <Col lg={4} xl={5}>
              <motion.div className="cpa-hero__side" {...motionProps.fadeIn}>
                <div className="cpa-sideCard" aria-label="Highlights">
                  <h2 className="cpa-sideCard__title">What you get</h2>
                  <ul className="cpa-checkList">
                    <li>Clean month end close and reconciliations</li>
                    <li>Decision ready reporting for owners and operators</li>
                    <li>Tax support coordination and documentation</li>
                    <li>Audit preparation and control review</li>
                  </ul>
                </div>

                <div className="cpa-sideStat" aria-label="Outcome focus">
                  <div className="cpa-sideStat__label">Outcome</div>
                  <div className="cpa-sideStat__value">Accurate, compliant financials</div>
                  <div className="cpa-sideStat__sub">
                    With clearer portfolio visibility and fewer reporting surprises.
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Signal Strip */}
      <section className="cpa-signalStrip" aria-label="Key benefits">
        <Container>
          <Row className="g-3 g-lg-4">
            {trustSignals.map((s) => (
              <Col sm={6} lg={3} key={s.title}>
                <motion.div className="cpa-signalCard" {...motionProps.fadeUp}>
                  <div className="cpa-signalCard__icon" aria-hidden="true">
                    <i className={`bi ${s.icon}`}></i>
                  </div>
                  <div className="cpa-signalCard__body">
                    <h2 className="cpa-signalCard__title">{s.title}</h2>
                    <p className="cpa-signalCard__desc">{s.desc}</p>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Overview */}
      <section className="cpa-section cpa-section--white">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <motion.div {...motionProps.fadeUp} className="cpa-overview">
                <p className="cpa-kicker">
                  <span className="cpa-kicker__dot" aria-hidden="true"></span>
                  CPA Services Built for Property Management
                </p>
                <h2 className="cpa-h2">CPA Activities and Professional Accounting Services</h2>
                <p className="cpa-muted">
                  Our CPA activities provide reliable, compliant, and strategic accounting solutions designed to help
                  businesses maintain financial accuracy, meet regulatory requirements, and make confident financial
                  decisions. Our licensed CPA professionals deliver expert support tailored to your business needs.
                </p>

                <div className="cpa-overview__grid" role="list" aria-label="Core capabilities">
                  {capabilities.map((c) => (
                    <div className="cpa-cap" role="listitem" key={c.k}>
                      <div className="cpa-cap__icon" aria-hidden="true">
                        <i className={`bi ${c.icon}`}></i>
                      </div>
                      <div className="cpa-cap__content">
                        <div className="cpa-cap__k">{c.k}</div>
                        <div className="cpa-cap__v">{c.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col lg={5}>
              <motion.aside {...motionProps.fadeIn} className="cpa-sideBento" aria-label="Service outcomes">
                <div className="cpa-sideBento__tile cpa-sideBento__tile--top">
                  <div className="cpa-sideBento__label">Designed for</div>
                  <div className="cpa-sideBento__value">Owners, operators, and multi-entity portfolios</div>
                  <div className="cpa-sideBento__sub">
                    Consistent close discipline, clean documentation, and reporting that scales.
                  </div>
                </div>

                <div className="cpa-sideBento__tile cpa-sideBento__tile--mid">
                  <div className="cpa-sideBento__label">Best fit</div>
                  <div className="cpa-sideBento__value">Property management CPA services</div>
                  <div className="cpa-sideBento__chips" role="list" aria-label="Keywords">
                    {primaryKeywords.slice(0, 3).map((k) => (
                      <span className="cpa-chip" role="listitem" key={k}>
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="cpa-sideBento__tile cpa-sideBento__tile--bottom">
                  <div className="cpa-sideBento__label">Outcome</div>
                  <div className="cpa-sideBento__value">Clarity + compliance</div>
                  <div className="cpa-sideBento__sub">
                    Fewer surprises. Faster closes. Stronger control over reporting quality.
                  </div>
                </div>
              </motion.aside>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services - NEW INTERACTIVE DESIGN */}
      <section className="cpa-section cpa-section--tint">
        <Container>
          <motion.div {...motionProps.fadeUp} className="cpa-section__intro cpa-section__intro--center">
            <h2 className="cpa-h2">Comprehensive CPA Service Portfolio</h2>
            <p className="cpa-muted">
              Interactive exploration of our complete CPA services for real estate. Select any service to view detailed activities, deliverables, and strategic benefits.
            </p>
          </motion.div>

          {/* Desktop Layout */}
          <div className="d-none d-lg-block">
            <Row>
              <Col lg={4}>
                <motion.div
                  className="cpa-service-navigation bg-light rounded-3 shadow-sm p-4 sticky-top"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="h5 fw-bold mb-4 text-primary">
                    CPA Services
                  </h3>
                  <div className="nav-items">{serviceNavigation}</div>
                </motion.div>
              </Col>

              <Col lg={8}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="cpa-service-content-panel"
                  >
                    <div 
                      className="content-header rounded-3 p-4 p-lg-5 mb-4"
                      style={{ 
                        background: `linear-gradient(135deg, ${currentService.color} 0%, ${currentService.color}cc 100%)`,
                        color: '#ffffff'
                      }}
                    >
                      <div>
                        <h3 className="h2 fw-bold mb-2">{currentService.title}</h3>
                        {currentService.subtitle && (
                          <p className="fs-5 mb-0 opacity-90">
                            {currentService.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="cpa-service-content">
                      <div className="content-description-block mb-4">
                        <p className="content-description text-muted">
                          {currentService.content.description}
                        </p>
                      </div>

                      <div className="content-grid">
                        <div className="content-column">
                          {currentService.content.activities && (
                            <div className="content-block mb-4">
                              <h5 className="content-subtitle h6 fw-semibold mb-3">
                                Core Activities
                              </h5>
                              <ul className="content-list activities-list">
                                {currentService.content.activities.map((activity, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                  >
                                    <i className="bi bi-arrow-right-circle me-2" style={{ color: currentService.color }}></i>
                                    {activity}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="content-column">
                          {currentService.content.deliverables && (
                            <div className="content-block mb-4">
                              <h5 className="content-subtitle h6 fw-semibold mb-3">
                                Key Deliverables
                              </h5>
                              <ul className="content-list deliverables-list">
                                {currentService.content.deliverables.map((deliverable, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                  >
                                    <i className="bi bi-file-earmark-text text-success me-2"></i>
                                    {deliverable}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {currentService.content.stat && (
                            <div className="content-block mb-4">
                              <div className="stat-card rounded-3 p-3 text-center" style={{ backgroundColor: `${currentService.color}15`, border: `1px solid ${currentService.color}30` }}>
                                <div className="stat-value h4 fw-bold mb-1" style={{ color: currentService.color }}>
                                  {currentService.content.stat.value}
                                </div>
                                <div className="stat-description small text-muted">
                                  {currentService.content.stat.description}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {currentService.content.calculation && (
                        <div className="calculation-block rounded-3 p-3 mb-3" style={{ backgroundColor: `${currentService.color}08`, borderLeft: `4px solid ${currentService.color}` }}>
                          <h6 className="fw-semibold mb-2">Financial Impact</h6>
                          <p className="mb-0 small text-muted">{currentService.content.calculation}</p>
                        </div>
                      )}

                      {currentService.content.benefit && (
                        <div className="benefit-block rounded-3 p-3 mb-3" style={{ backgroundColor: '#10b98110', borderLeft: '4px solid #10b981' }}>
                          <h6 className="fw-semibold mb-2">Strategic Advantage</h6>
                          <p className="mb-0 small text-muted">{currentService.content.benefit}</p>
                        </div>
                      )}

                      {currentService.content.example && (
                        <div className="example-block rounded-3 p-3 mb-3" style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #6b7280' }}>
                          <h6 className="fw-semibold mb-2">Practical Example</h6>
                          <p className="mb-0 small text-muted">{currentService.content.example}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Col>
            </Row>
          </div>

          {/* Mobile Accordion */}
          <div className="d-lg-none">
            <div className="cpa-mobile-accordion">{mobileAccordionItems}</div>
          </div>

          <motion.div {...motionProps.fadeUp} className="text-center mt-5">
            <div className="cpa-service-cta rounded-3 p-4" style={{ backgroundColor: `${currentService.color}08`, border: `1px solid ${currentService.color}20` }}>
              <i className="bi bi-arrow-repeat cpa-service-cta__icon" style={{ color: currentService.color }}></i>
              <p className="cpa-service-cta__text mb-3">
                Each CPA service integrates seamlessly with the next, creating a complete solution for your real estate portfolio.
              </p>
              <a href="/contact" className="btn btn-primary">
                Get Full CPA Assessment
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Industry-Specific CPA Activities */}
      <section className="cpa-section cpa-section--white">
        <Container>
          <motion.div {...motionProps.fadeUp} className="cpa-section__intro cpa-section__intro--center">
            <h2 className="cpa-h2">Industry-Specific CPA Expertise</h2>
            <p className="cpa-muted">
              Specialized accounting solutions for adjacent sectors with complex compliance, reporting, 
              and operational considerations unique to each industry.
            </p>
          </motion.div>

          <Row className="g-4 g-lg-5">
            {verticals.map((vertical) => (
              <Col lg={6} key={vertical.title}>
                <motion.article 
                  className={`cpa-industry-card cpa-industry-card--${vertical.gradient}`}
                  {...motionProps.fadeUp}
                  whileHover={prefersReducedMotion ? {} : { y: -4 }}
                >
                  <div className="cpa-industry-card__header">
                    <div className="cpa-industry-card__badge">
                      <span className="cpa-industry-card__eyebrow">{vertical.eyebrow}</span>
                      <i className={`bi ${vertical.icon} cpa-industry-card__icon`}></i>
                    </div>
                    <h3 className="cpa-industry-card__title">{vertical.title}</h3>
                    <p className="cpa-industry-card__subtitle">
                      Tailored accounting solutions for {vertical.eyebrow.toLowerCase()} operations
                    </p>
                  </div>

                  <div className="cpa-industry-card__features">
                    {vertical.features.map((feature, index) => (
                      <div className="cpa-industry-feature" key={feature.title}>
                        <div className="cpa-industry-feature__progress" aria-hidden="true">
                          <div className="cpa-industry-feature__progress-bar"></div>
                          <div className="cpa-industry-feature__progress-index">{index + 1}</div>
                        </div>
                        <div className="cpa-industry-feature__content">
                          <h4 className="cpa-industry-feature__title">{feature.title}</h4>
                          <p className="cpa-industry-feature__desc">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cpa-industry-card__footer">
                    <div className="cpa-industry-card__pill">
                      <i className="bi bi-check-circle-fill cpa-industry-card__pill-icon"></i>
                      <span>Specialized CPA support</span>
                    </div>
                  </div>
                </motion.article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Industries + Why Choose */}
      <section className="cpa-section cpa-section--tint">
        <Container>
          <motion.div {...motionProps.fadeUp} className="cpa-section__intro cpa-section__intro--center">
            <h2 className="cpa-h2">Trusted CPA Partner for Real Estate</h2>
            <p className="cpa-muted">
              Combining deep industry expertise with professional accounting excellence to deliver exceptional results.
            </p>
          </motion.div>

          <Row className="g-4 g-lg-5">
            <Col lg={6}>
              <motion.div {...motionProps.fadeUp} className="cpa-industries-compact">
                <div className="cpa-industries-compact__header">
                  <div className="cpa-industries-compact__icon" aria-hidden="true">
                    <i className="bi bi-buildings"></i>
                  </div>
                  <h3 className="cpa-industries-compact__title">Industries We Serve</h3>
                  <p className="cpa-industries-compact__subtitle">
                    Specialized CPA services for the real estate ecosystem
                  </p>
                </div>
                
                <div className="cpa-industries-compact__grid">
                  {industries.map((industry, index) => (
                    <div key={industry.name} className="cpa-industry-item">
                      <div className="cpa-industry-item__icon">
                        <i className={`bi ${industry.icon}`}></i>
                      </div>
                      <div className="cpa-industry-item__content">
                        <h4 className="cpa-industry-item__title">{industry.name}</h4>
                        <div className="cpa-industry-item__accent" aria-hidden="true"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div {...motionProps.fadeUp} className="cpa-whychoose-compact">
                <div className="cpa-whychoose-compact__header">
                  <div className="cpa-whychoose-compact__icon" aria-hidden="true">
                    <i className="bi bi-award"></i>
                  </div>
                  <h3 className="cpa-whychoose-compact__title">Why Choose Our CPA Team</h3>
                  <p className="cpa-whychoose-compact__subtitle">
                    The competitive advantages of partnering with us
                  </p>
                </div>
                
                <div className="cpa-whychoose-compact__list">
                  {whyChoose.map((item, index) => (
                    <div key={item.text} className="cpa-advantage">
                      <div className="cpa-advantage__number">{(index + 1).toString().padStart(2, '0')}</div>
                      <div className="cpa-advantage__icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div className="cpa-advantage__content">
                        <p className="cpa-advantage__text">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA (existing component) */}
      <CTA
        title="Contact Our Real Estate CPA Team"
        description="Contact us today to schedule a CPA consultation."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
        backgroundColor="primary"
        textColor="white"
        buttonVariant="light"
        animationDirection={prefersReducedMotion ? 'none' : 'horizontal'}
      />
    </div>
  );
});

CPA.displayName = 'CPA';
export default CPA;