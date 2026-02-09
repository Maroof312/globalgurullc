// Industries.jsx
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useReducedMotion } from 'framer-motion';
import './Industries.scss';

// Icons
import {
  FaUtensils,
  FaBuilding,
  FaHospital,
  FaChartLine,
  FaShoppingBag,
  FaArrowRight,
  FaTruck,
} from 'react-icons/fa';

const INDUSTRIES = [
  {
    id: 1,
    name: 'Restaurants & Hospitality',
    title: 'Inventory, finance, and fulfillment streamlined.',
    description:
      'We standardize operations, accounting, and back-office workflows so restaurants and hospitality brands can scale with confidence.',
    icon: FaUtensils,
    color: '#FF6B6B',
    stats: '500+ restaurants',
  },
  {
    id: 2,
    name: 'Real Estate',
    title: 'Property accounting built for scale.',
    description:
      'From AP and bank reconciliations to CAMs and reporting, we support complex real estate portfolios end to end.',
    icon: FaBuilding,
    color: '#4D96FF',
    stats: '$2B+ assets',
  },
  {
    id: 3,
    name: 'Food Distribution',
    title: 'Accounting built for high-volume distribution.',
    description:
      'We support food distributors with inventory accounting, rebates, billbacks, margin analysis, and high-volume AP/AR workflows.',
    icon: FaTruck,
    color: '#22C55E',
    stats: 'Nationwide distributors',
  },
  {
    id: 4,
    name: 'Healthcare',
    title: 'Compliance-first financial operations.',
    description:
      'Secure and accurate accounting processes designed for regulated healthcare environments.',
    icon: FaHospital,
    color: '#6BCF7F',
    stats: 'HIPAA compliant',
  },
  {
    id: 5,
    name: 'Financial Services',
    title: 'Precision, controls, and transparency.',
    description:
      'Structured workflows with strong internal controls and leadership-level reporting.',
    icon: FaChartLine,
    color: '#FFD166',
    stats: '99.9% accuracy',
  },
  {
    id: 6,
    name: 'Retail & E-Commerce',
    title: 'High-volume transactions handled cleanly.',
    description:
      'Inventory, payments, and reconciliations optimized for modern retail businesses.',
    icon: FaShoppingBag,
    color: '#9D7BEF',
    stats: '1M+ transactions',
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 992);
    check();

    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
};

const DesktopIndustryItem = memo(function DesktopIndustryItem({
  industry,
  isActive,
  onClick,
  onHover,
}) {
  const Icon = industry.icon;

  return (
    <button
      type="button"
      className={`desktop-industry-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseEnter={onHover}
      style={isActive ? { '--active-color': industry.color } : undefined}
      aria-pressed={isActive}
    >
      <span className="desktop-item-icon" aria-hidden="true">
        <Icon />
      </span>

      <span className="desktop-item-content">
        <span className="desktop-item-name">{industry.name}</span>
        <span className="desktop-item-stats">{industry.stats}</span>
      </span>

      <span className="desktop-item-indicator" aria-hidden="true">
        <span className="indicator-dot" />
      </span>
    </button>
  );
});

const MobileIndustryCard = memo(function MobileIndustryCard({
  industry,
  expanded,
  onToggle,
}) {
  const Icon = industry.icon;

  return (
    <div className={`mobile-industry-card ${expanded ? 'expanded' : ''}`}>
      <button
        type="button"
        className="mobile-card-header"
        onClick={onToggle}
        aria-expanded={expanded}
      >
        <span
          className="mobile-card-icon"
          style={{ backgroundColor: `${industry.color}14` }}
          aria-hidden="true"
        >
          <Icon />
        </span>

        <span className="mobile-card-info">
          <span className="mobile-card-name">{industry.name}</span>
          <span className="mobile-card-stats">{industry.stats}</span>
        </span>

        <span className="mobile-card-arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className={`mobile-card-content ${expanded ? 'expanded' : ''}`}>
        <div className="mobile-card-details">
          <h4>{industry.title}</h4>
          <p>{industry.description}</p>
          <a href={`/industries#${industry.name
              .toLowerCase()
              .replace(/ & /g, '-')
              .replace(/\s+/g, '-')}`}
            className="mobile-card-link"
          >
            Explore Solutions <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
});

const Industries = memo(function Industries() {
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const industries = useMemo(() => INDUSTRIES, []);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  // Reset mobile accordion when switching to desktop
  useEffect(() => {
    if (!isMobile) setMobileExpanded(null);
  }, [isMobile]);

  // Auto-rotate active industry on desktop (disabled for reduced motion)
  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [industries.length, isMobile, prefersReducedMotion]);

  const handleIndustryClick = useCallback(
    (index) => {
      if (isMobile) {
        setMobileExpanded((prev) => (prev === index ? null : index));
      } else {
        setActiveIndustry(index);
      }
    },
    [isMobile]
  );

  const handleIndustryHover = useCallback(
    (index) => {
      if (!isMobile) setActiveIndustry(index);
    },
    [isMobile]
  );

  const active = industries[activeIndustry];

  const motionWrapProps = useMemo(() => {
    if (prefersReducedMotion) return {};
    return {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-80px' },
      transition: { duration: 0.5, ease: 'easeOut' },
    };
  }, [prefersReducedMotion]);

  const detailsMotionProps = useMemo(() => {
    if (prefersReducedMotion) return {};
    return {
      key: active.id,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.35, ease: 'easeOut' },
    };
  }, [active.id, prefersReducedMotion]);

  return (
    <section className="industries-section" aria-labelledby="industries-title">
      <Container>
        {/* Header */}
        <motion.div className="industries-header" {...motionWrapProps}>
          <div className="header-content">
            <div className="badge" aria-hidden="true">
              EXPERTISE
            </div>

            <h2 id="industries-title">
              <span className="gradient-text">Industry-Specific</span>
              <br />
              Financial Solutions
            </h2>

            <p className="lead">
              We don&apos;t just do accounting. We understand your industry&apos;s unique
              challenges and deliver tailored financial operations that drive growth.
            </p>
          </div>

          <div className="header-stats" role="list" aria-label="Company stats">
            <div className="stat-item" role="listitem">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item" role="listitem">
              <span className="stat-number">99%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>

        {/* IMPORTANT: do NOT use CSS gap on Row (it causes wrap). Use Bootstrap gutters. */}
        <Row className="industries-main g-3 g-md-4 g-lg-5">
          {/* Left */}
          <Col lg={5} className="industries-list-col">
            {isMobile ? (
              <div className="mobile-industries-cards">
                {industries.map((industry, index) => (
                  <MobileIndustryCard
                    key={industry.id}
                    industry={industry}
                    expanded={mobileExpanded === index}
                    onToggle={() => handleIndustryClick(index)}
                  />
                ))}
              </div>
            ) : (
              <div className="desktop-industries-list" role="list" aria-label="Industries">
                {industries.map((industry, index) => (
                  <DesktopIndustryItem
                    key={industry.id}
                    industry={industry}
                    isActive={activeIndustry === index}
                    onClick={() => handleIndustryClick(index)}
                    onHover={() => handleIndustryHover(index)}
                  />
                ))}
              </div>
            )}
          </Col>

          {/* Right (Desktop Only) */}
          {!isMobile && (
            <Col lg={7} className="desktop-details-col">
              <div
                className="desktop-details-card"
                style={{ '--card-color': active.color }}
              >
                <motion.div className="details-content" {...detailsMotionProps}>
                  <div className="details-header">
                    <span
                      className="details-icon"
                      style={{ backgroundColor: `${active.color}14` }}
                      aria-hidden="true"
                    >
                      <active.icon />
                    </span>

                    <div className="details-header-text">
                      <h3 className="details-name">{active.name}</h3>
                      <p className="details-title">{active.title}</p>
                    </div>
                  </div>

                  <p className="details-description">{active.description}</p>

                  <div className="details-cta">
                    <a href={`/industries#${active.name
                        .toLowerCase()
                        .replace(/ & /g, '-')
                        .replace(/\s+/g, '-')}`}
                      className="view-all-btn"
                    >
                      View All Industries <FaArrowRight />
                    </a>
                  </div>
                </motion.div>

                <div className="details-progress" aria-label="Industry selector">
                  {industries.map((ind, index) => (
                    <button
                      key={ind.id}
                      type="button"
                      className={`progress-dot ${activeIndustry === index ? 'active' : ''}`}
                      onClick={() => handleIndustryClick(index)}
                      aria-label={`View ${ind.name}`}
                    />
                  ))}
                </div>
              </div>
            </Col>
          )}
        </Row>

        {/* Mobile CTA */}
        {isMobile && (
          <div className="mobile-cta" aria-label="Industries call to action">
            <div className="cta-content">
              <h3>Need a Custom Solution?</h3>
              <p>
                Our experts can tailor financial operations specifically for your
                industry&apos;s needs.
              </p>

              <div className="cta-buttons">
                <a href={`/industries#${industries[mobileExpanded ?? activeIndustry].name
                    .toLowerCase()
                    .replace(/ & /g, '-')
                    .replace(/\s+/g, '-')}`}
                  className="btn-primary"
                >
                  <span>View All Industries</span> <FaArrowRight />
                </a>
                <a href="/contact" className="btn-secondary">
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
});

export default Industries;
