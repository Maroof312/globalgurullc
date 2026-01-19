// CPA.jsx
import { memo, useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './CPA.scss';

import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import useAnalytics from '../../components/hooks/useAnalytics';
import CTA from '../../components/sections/CTA';
import AccountingProcess from '../../components/sections/AccountingProcess';

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

  // Updated Primary Keywords from document
  const primaryKeywords = useMemo(
    () => [
      'CPA accounting outsourcing services',
      'Industry-specific CPA services',
      'Certified public accountant firm',
      'Outsourced accounting & tax services',
      'CPA firm services',
    ],
    []
  );

  // Updated Trust Signals from document
  const trustSignals = useMemo(
    () => [
      {
        icon: 'bi-shield-check',
        title: 'Compliance-first',
        desc: 'CPA-led workflows designed to meet regulatory standards.',
      },
      {
        icon: 'bi-briefcase',
        title: 'Industry expertise',
        desc: 'Specialized accounting processes for each industry.',
      },
      {
        icon: 'bi-arrow-up-right-square',
        title: 'Scalable delivery',
        desc: 'Outsourced teams that grow with your business.',
      },
      {
        icon: 'bi-gear',
        title: 'Process-driven',
        desc: 'Standardized close and documentation.',
      },
    ],
    []
  );

  // Updated Core CPA Office Services from document
  const capabilities = useMemo(
    () => [
      {
        k: 'Bookkeeping & General Ledger',
        v: 'Complete bookkeeping and GL management for accurate financial records.',
        icon: 'bi-journal-text',
      },
      {
        k: 'Month-End & Year-End Close',
        v: 'Timely and accurate financial period closures with full documentation.',
        icon: 'bi-calendar2-check',
      },
      {
        k: 'Financial Statement Preparation',
        v: 'CPA-reviewed financial statements that meet regulatory standards.',
        icon: 'bi-file-text',
      },
      {
        k: 'Tax Planning & Compliance',
        v: 'Strategic tax planning and full compliance support.',
        icon: 'bi-receipt',
      },
      {
        k: 'Audit Support & Assurance',
        v: 'Audit-ready documentation and full assurance services.',
        icon: 'bi-clipboard2-check',
      },
      {
        k: 'Accounting Advisory & CFO',
        v: 'Strategic accounting advisory and CFO-level support.',
        icon: 'bi-graph-up',
      },
    ],
    []
  );

  // Updated CPA Services with new structure from document
  const cpaServices = useMemo(
    () => [
      {
        id: 'retail-cpa',
        title: 'Retail CPA Services',
        subtitle: 'Specialized accounting for retail businesses',
        icon: 'bi-bag-check',
        color: '#8b5cf6',
        content: {
          description: 'Comprehensive CPA services tailored for retail businesses including sales tax compliance, inventory accounting, and multi-location reporting.',
          activities: [
            'Sales tax compliance and nexus analysis',
            'Inventory and cost accounting',
            'POS reconciliation and revenue tracking',
            'Retail KPI and margin reporting',
            'Tax planning for multi-location retailers',
          ],
          deliverables: [
            'Multi-state sales tax compliance reports',
            'Inventory valuation and cost analysis',
            'POS reconciliation statements',
            'Retail performance dashboards',
            'Tax planning strategies for retail',
          ],
          benefit: 'Streamlined retail accounting that ensures compliance while maximizing profitability through accurate inventory and sales tracking.',
        },
      },
      {
        id: 'real-estate-cpa',
        title: 'Real Estate CPA Services',
        subtitle: 'Property and portfolio accounting expertise',
        icon: 'bi-building',
        color: '#3b82f6',
        content: {
          description: 'Specialized CPA services for real estate investors, developers, and property management companies.',
          activities: [
            'Property and portfolio accounting',
            'Rent roll tie-outs and owner reporting',
            'Entity structuring and tax planning',
            'Audit and lender reporting',
            'Cash flow and distribution analysis',
          ],
          deliverables: [
            'Portfolio financial statements',
            'Rent roll accuracy reports',
            'Entity structure optimization plans',
            'Audit-ready documentation packages',
            'Cash flow analysis and forecasts',
          ],
          stat: {
            value: '100%',
            description: 'Audit-ready financial packages',
          },
        },
      },
      {
        id: 'restaurant-cpa',
        title: 'Restaurant CPA Services',
        subtitle: 'Food service industry accounting',
        icon: 'bi-cup-straw',
        color: '#ef4444',
        content: {
          description: 'CPA services designed specifically for restaurants and food service businesses with complex operational needs.',
          activities: [
            'Daily sales and POS reconciliation',
            'Food, labor, and operating cost analysis',
            'Tip reporting and payroll coordination',
            'Sales and liquor tax compliance',
            'Multi-location restaurant reporting',
          ],
          deliverables: [
            'Daily sales reconciliation reports',
            'Cost of goods sold analysis',
            'Tip compliance documentation',
            'Multi-location consolidated reporting',
            'Restaurant-specific tax planning',
          ],
          calculation: 'Effective restaurant accounting can improve profitability by 10-15% through accurate cost tracking and tax optimization.',
        },
      },
      {
        id: 'construction-cpa',
        title: 'Construction CPA Services',
        subtitle: 'Project-based accounting expertise',
        icon: 'bi-hammer',
        color: '#f97316',
        content: {
          description: 'CPA services for construction companies with project accounting, job costing, and contract compliance needs.',
          activities: [
            'Job costing and project accounting',
            'Percentage-of-completion revenue recognition',
            'WIP reporting and contract analysis',
            'Contractor tax planning and compliance',
            'Bonding and audit support',
          ],
          deliverables: [
            'Project profitability reports',
            'WIP schedules and analysis',
            'Contract compliance documentation',
            'Construction tax planning strategies',
            'Bond compliance packages',
          ],
          stat: {
            value: '30%',
            description: 'improved project cost tracking accuracy',
          },
        },
      },
      {
        id: 'manufacturing-cpa',
        title: 'Manufacturing CPA Services',
        subtitle: 'Industrial and production accounting',
        icon: 'bi-gear-wide-connected',
        color: '#14b8a6',
        content: {
          description: 'Specialized CPA services for manufacturing companies with complex cost accounting and inventory needs.',
          activities: [
            'Cost accounting and overhead allocation',
            'Inventory valuation and fixed assets',
            'R&D tax credit support',
            'Margin and profitability analysis',
            'Manufacturing financial reporting',
          ],
          deliverables: [
            'Cost accounting system setup',
            'Inventory valuation reports',
            'R&D tax credit documentation',
            'Manufacturing margin analysis',
            'Production efficiency reports',
          ],
          benefit: 'Transform manufacturing data into actionable insights that drive efficiency and profitability improvements.',
        },
      },
      {
        id: 'taxation-services',
        title: 'Taxation Services',
        subtitle: 'Comprehensive tax solutions',
        icon: 'bi-calculator',
        color: '#10b981',
        content: {
          description: 'Full-service tax planning, preparation, and compliance services for businesses of all sizes.',
          activities: [
            'Business tax return preparation and filing',
            'Multi-state tax compliance',
            'Tax planning and quarterly estimates',
            'Entity structuring and optimization',
            'IRS and state notice support',
          ],
          deliverables: [
            'Completed tax returns and filings',
            'Multi-state compliance reports',
            'Tax planning strategies',
            'Entity optimization recommendations',
            'IRS notice response packages',
          ],
          stat: {
            value: '20-30%',
            description: 'potential tax savings through planning',
          },
        },
      },
    ],
    []
  );

  // Updated Industry Verticals from document
  const verticals = useMemo(
    () => [
      {
        title: 'Retail CPA Services',
        eyebrow: 'Retail',
        icon: 'bi-bag-check',
        gradient: 'retail',
        features: [
          {
            title: 'Sales Tax Compliance',
            desc: 'Multi-state sales tax filings and nexus analysis for retailers',
          },
          {
            title: 'Inventory Accounting',
            desc: 'Cost tracking and POS system reconciliation',
          },
          {
            title: 'Revenue Tracking',
            desc: 'POS reconciliation and revenue accuracy verification',
          },
          {
            title: 'Margin Reporting',
            desc: 'Retail KPI and profitability margin analysis',
          },
        ],
      },
      {
        title: 'Manufacturing CPA Services',
        eyebrow: 'Manufacturing',
        icon: 'bi-gear-wide-connected',
        gradient: 'manufacturing',
        features: [
          {
            title: 'Cost Accounting',
            desc: 'Job costing and overhead allocation systems',
          },
          {
            title: 'Inventory Valuation',
            desc: 'Fixed asset and depreciation accounting',
          },
          {
            title: 'R&D Tax Credits',
            desc: 'Tax credit support and compliance documentation',
          },
          {
            title: 'Production Analysis',
            desc: 'Manufacturing efficiency and margin tracking',
          },
        ],
      },
    ],
    []
  );

  // Updated Industries We Serve
  const industries = useMemo(
    () => [
      {
        name: 'Retail Businesses',
        icon: 'bi-shop',
      },
      {
        name: 'Real Estate Companies',
        icon: 'bi-buildings',
      },
      {
        name: 'Restaurant & Hospitality',
        icon: 'bi-cup-straw',
      },
      {
        name: 'Construction Firms',
        icon: 'bi-hammer',
      },
      {
        name: 'Manufacturing Companies',
        icon: 'bi-gear',
      },
      {
        name: 'Professional Services',
        icon: 'bi-briefcase',
      },
    ],
    []
  );

  // Updated Why Choose from document
  const whyChoose = useMemo(
    () => [
      {
        text: 'CPA-led accounting outsourcing model',
        icon: 'bi-person-badge',
      },
      {
        text: 'Industry-specific expertise across sectors',
        icon: 'bi-briefcase',
      },
      {
        text: 'Scalable support without internal overhead',
        icon: 'bi-arrow-up-right-square',
      },
      {
        text: 'Strong focus on accuracy and compliance',
        icon: 'bi-shield-check',
      },
      {
        text: 'Technology-driven workflows and systems',
        icon: 'bi-cpu',
      },
      {
        text: 'Dedicated accounting and CPA support',
        icon: 'bi-headset',
      },
    ],
    []
  );

  // Custom services data for AccountingProcess component
  const customServices = useMemo(
    () => cpaServices.map(service => ({
      id: service.id,
      title: service.title,
      subtitle: service.subtitle,
      icon: service.icon,
      content: {
        description: service.content.description,
        activities: service.content.activities,
        deliverables: service.content.deliverables,
        stat: service.content.stat,
        calculation: service.content.calculation,
        benefit: service.content.benefit,
        example: service.content.example
      }
    })),
    [cpaServices]
  );

  return (
    <div className="cpa-page">
      <LinkedInInsightTag />

      <Helmet>
        <title>CPA Firm Accounting Outsourcing Services | Industry-Specific CPA Services</title>
        <meta
          name="description"
          content="Full-service CPA firm delivering scalable accounting & tax solutions for retail, real estate, restaurant, construction, manufacturing, and professional services industries."
        />
        <link rel="canonical" href="https://globalgurullc.com/cpa-accounting-outsourcing" />
      </Helmet>

      {/* Hero Section - Updated */}
      <motion.section className="cpa-hero" {...motionProps.hero}>
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={8} xl={7}>
              <motion.div className="cpa-hero__content" {...motionProps.fadeUp}>
                <p className="cpa-hero__eyebrow">Premium CPA & Accounting Outsourcing Services</p>
                <h1 className="cpa-hero__title">
                  Full-Service CPA Firm Delivering Scalable Accounting & Tax Solutions
                </h1>
                <p className="cpa-hero__lead">
                  We are an accounting outsourcing company operating as a full-service CPA firm, 
                  delivering accurate financials, regulatory compliance, and strategic insight for 
                  businesses across retail, real estate, restaurant, construction, manufacturing, 
                  and professional services industries.
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
                  Built for businesses seeking scalable accounting solutions with CPA-level expertise.
                </p>
              </motion.div>
            </Col>

            <Col lg={4} xl={5}>
              <motion.div className="cpa-hero__side" {...motionProps.fadeIn}>
                <div className="cpa-sideCard" aria-label="What you get">
                  <h2 className="cpa-sideCard__title">What you get</h2>
                  <ul className="cpa-checkList">
                    <li>Clean month-end and year-end close</li>
                    <li>Industry-specific financial reporting</li>
                    <li>Tax planning and compliance support</li>
                    <li>Audit-ready documentation and controls</li>
                  </ul>
                </div>

                <div className="cpa-sideStat" aria-label="Outcome focus">
                  <div className="cpa-sideStat__label">Outcome</div>
                  <div className="cpa-sideStat__value">Accurate, compliant, decision-ready financials</div>
                  <div className="cpa-sideStat__sub">
                    With scalable support and reduced operational risk.
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Signal Strip - Updated */}
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

      {/* Overview Section - Updated */}
      <section className="cpa-section cpa-section--white">
        <Container>
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <motion.div {...motionProps.fadeUp} className="cpa-overview">
                <p className="cpa-kicker">
                  <span className="cpa-kicker__dot" aria-hidden="true"></span>
                  CPA Firm Services Built for Business Growth
                </p>
                <h2 className="cpa-h2">Core CPA Office Services</h2>
                <p className="cpa-muted">
                  Our full-service CPA firm provides comprehensive accounting outsourcing solutions 
                  designed to help businesses maintain financial accuracy, meet regulatory requirements, 
                  and make confident financial decisions with CPA-level expertise.
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
                  <div className="cpa-sideBento__value">Businesses across industries seeking CPA expertise</div>
                  <div className="cpa-sideBento__sub">
                    Scalable accounting solutions that grow with your business needs.
                  </div>
                </div>

                <div className="cpa-sideBento__tile cpa-sideBento__tile--mid">
                  <div className="cpa-sideBento__label">Best fit</div>
                  <div className="cpa-sideBento__value">Industry-specific CPA services</div>
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
                  <div className="cpa-sideBento__value">Compliance + Strategic Insight</div>
                  <div className="cpa-sideBento__sub">
                    Fewer operational risks. Better financial decisions. Scalable accounting support.
                  </div>
                </div>
              </motion.aside>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services - Using AccountingProcess Component */}
      <AccountingProcess 
        title="Comprehensive CPA Service Portfolio"
        subtitle="Interactive exploration of our industry-specific CPA services. Select any service to view detailed activities, deliverables, and strategic benefits."
        steps={customServices}
      />

      {/* Industry-Specific CPA Services - Updated */}
      <section className="cpa-section cpa-section--white">
        <Container>
          <motion.div {...motionProps.fadeUp} className="cpa-section__intro cpa-section__intro--center">
            <h2 className="cpa-h2">Industry-Specific CPA Expertise</h2>
            <p className="cpa-muted">
              Specialized accounting solutions for different sectors with industry-specific compliance, 
              reporting, and operational considerations.
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

      {/* Industries + Why Choose - Updated */}
      <section className="cpa-section cpa-section--tint">
        <Container>
          <motion.div {...motionProps.fadeUp} className="cpa-section__intro cpa-section__intro--center">
            <h2 className="cpa-h2">Trusted CPA Partner for Businesses</h2>
            <p className="cpa-muted">
              Combining deep industry expertise with professional accounting excellence to deliver exceptional results across sectors.
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
                    Specialized CPA services for diverse business sectors
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
                  <h3 className="cpa-whychoose-compact__title">Why Choose Our CPA Firm</h3>
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

      {/* CTA (existing component) - Updated */}
      <CTA
        title="Partner With a CPA Firm Built for Scale"
        description="Contact us today to schedule a CPA consultation and learn how our accounting outsourcing model supports your business growth."
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