// IndustriesPage.jsx
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useReducedMotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './IndustriesPage.scss';

import {
  FaUtensils,
  FaBuilding,
  FaHospital,
  FaChartLine,
  FaShoppingBag,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa';

const INDUSTRIES = [
  {
    id: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    title: 'Inventory, finance, and fulfillment streamlined.',
    description:
      'We standardize operations, accounting, and back-office workflows so restaurants and hospitality brands can scale with confidence.',
    icon: FaUtensils,
    accent: '#FF6B6B',
    stats: '500+ restaurants',
    bullets: [
      'Clean bookkeeping with category discipline',
      'Vendor bills, approvals, and payments organized',
      'Timely reporting by location / concept',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    title: 'Property accounting built for scale.',
    description:
      'From AP and bank reconciliations to CAMs and reporting, we support complex real estate portfolios end to end.',
    icon: FaBuilding,
    accent: '#4D96FF',
    stats: '$2B+ assets',
    bullets: [
      'AP workflows and coding consistency',
      'Bank and credit card reconciliations',
      'Month-end close support and reporting',
    ],
    whoWeServe: [
      { label: 'Property Management Firms', tone: 'red' },
      { label: 'Commercial Real Estate Groups', tone: 'blue' },
      { label: 'Affordable Housing', tone: 'dark' },
      { label: 'Student Housing', tone: 'muted' },
      { label: 'Senior Living & Mixed Use', tone: 'navy' },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    title: 'Compliance-first financial operations.',
    description:
      'Secure and accurate accounting processes designed for regulated healthcare environments.',
    icon: FaHospital,
    accent: '#6BCF7F',
    stats: 'HIPAA compliant',
    bullets: [
      'Process rigor with strong documentation',
      'Structured close routines and controls',
      'Leadership-ready financial visibility_toggle',
    ],
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    title: 'Precision, controls, and transparency.',
    description:
      'Structured workflows with strong internal controls and leadership-level reporting.',
    icon: FaChartLine,
    accent: '#FFD166',
    stats: '99.9% accuracy',
    bullets: [
      'Consistent approvals and audit trails',
      'High-accuracy processing discipline',
      'Reporting that reduces surprises',
    ],
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    title: 'High-volume transactions handled cleanly.',
    description:
      'Inventory, payments, and reconciliations optimized for modern retail businesses.',
    icon: FaShoppingBag,
    accent: '#9D7BEF',
    stats: '1M+ transactions',
    bullets: [
      'High-volume transaction hygiene',
      'Reconciliations that close fast',
      'Reporting that scales with growth',
    ],
  },
];

const IndustriesPage = memo(function IndustriesPage() {
  const prefersReducedMotion = useReducedMotion();
  const industries = useMemo(() => INDUSTRIES, []);

  const [activeId, setActiveId] = useState(industries[0]?.id || null);
  const refs = useRef({});

  const setRef = useCallback((id) => (node) => {
    if (node) refs.current[id] = node;
  }, []);

  const scrollToId = useCallback(
    (id) => {
      const target = refs.current[id];
      if (!target) return;

      setActiveId(id);

      const behavior = prefersReducedMotion ? 'auto' : 'smooth';
      target.scrollIntoView({ behavior, block: 'start' });
    },
    [prefersReducedMotion]
  );

  // Supports:
  // /industries#real-estate
  // /industries?industry=real-estate
  useEffect(() => {
    const { hash, search } = window.location;
    const params = new URLSearchParams(search);

    const fromQuery = params.get('industry');
    const fromHash = hash?.startsWith('#') ? hash.slice(1) : null;

    const candidate = fromQuery || fromHash;
    if (!candidate) return;

    const exists = industries.some((x) => x.id === candidate);
    if (!exists) return;

    // small delay so layout/refs are ready
    const t = window.setTimeout(() => scrollToId(candidate), 40);
    return () => window.clearTimeout(t);
  }, [industries, scrollToId]);

  const onChipClick = useCallback(
    (id) => {
      const nextHash = `#${id}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${nextHash}`);
      }
      scrollToId(id);
    },
    [scrollToId]
  );

  const heroMotion = useMemo(() => {
    if (prefersReducedMotion) return {};
    return {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55, ease: 'easeOut' },
    };
  }, [prefersReducedMotion]);

  const sectionMotion = useMemo(() => {
    if (prefersReducedMotion) return {};
    return {
      initial: { opacity: 0, y: 10 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: '-90px' },
      transition: { duration: 0.5, ease: 'easeOut' },
    };
  }, [prefersReducedMotion]);

  return (
    <main className="industriesPage">
      <Helmet>
        <title>Industries | Global Guru LLC</title>
        <meta
          name="description"
          content="Industry-specific financial operations with structured controls, consistent close routines, and leadership-ready reporting."
        />
      </Helmet>

      {/* HERO */}
      <section className="ipHero" aria-labelledby="ip-hero-title">
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={8}>
              <motion.div className="ipHero__content" {...heroMotion}>
                <div className="ipHero__badge">INDUSTRIES</div>
                <h1 id="ip-hero-title" className="ipHero__title">
                  Industry-specific financial solutions that feel{' '}
                  <span className="ipHero__accent">enterprise-grade</span>.
                </h1>
                <p className="ipHero__lead">
                  We help operators and finance leaders reduce chaos with structured workflows,
                  clean controls, and reporting they can trust.
                </p>

                <div className="ipHero__actions">
                  <a className="ipBtn ipBtn--primary" href="/contact">
                    Book a Call <FaArrowRight aria-hidden="true" />
                  </a>
                  <a className="ipBtn ipBtn--secondary" href="/services">
                    View Services
                  </a>
                </div>

                <div className="ipHero__chips" role="list" aria-label="Jump to industry">
                  {industries.map((it) => (
                    <button
                      key={it.id}
                      type="button"
                      className={`ipChip ${activeId === it.id ? 'isActive' : ''}`}
                      onClick={() => onChipClick(it.id)}
                      style={{ '--accent': it.accent }}
                      role="listitem"
                      aria-pressed={activeId === it.id}
                    >
                      <span className="ipChip__dot" aria-hidden="true" />
                      <span className="ipChip__text">{it.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col lg={4}>
              <div className="ipHero__card" aria-label="Key outcomes">
                <div className="ipHero__cardTitle">What you can expect</div>
                <ul className="ipHero__cardList">
                  <li>
                    <FaCheckCircle aria-hidden="true" />
                    <span>Cleaner books and faster month-end close</span>
                  </li>
                  <li>
                    <FaCheckCircle aria-hidden="true" />
                    <span>Stronger approvals and audit trails</span>
                  </li>
                  <li>
                    <FaCheckCircle aria-hidden="true" />
                    <span>Decision-ready reporting cadence</span>
                  </li>
                </ul>
                <a className="ipHero__cardLink" href="/contact">
                  Talk to an Expert <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BODY */}
      <section className="ipBody" aria-label="Industries">
        <Container>
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isActive = activeId === industry.id;

            return (
              <section
                key={industry.id}
                id={industry.id}
                ref={setRef(industry.id)}
                className={`ipSection ${isActive ? 'isActive' : ''}`}
                style={{ '--accent': industry.accent }}
                aria-label={industry.name}
              >
                <Row className="g-4 align-items-start">
                  <Col lg={4}>
                    <motion.div className="ipSection__left" {...sectionMotion}>
                      <div className="ipKicker">
                        <span className="ipKicker__icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <span className="ipKicker__label">{industry.name}</span>
                      </div>

                      <div className="ipStat">{industry.stats}</div>
                      <h2 className="ipH2">{industry.title}</h2>
                      <p className="ipP">{industry.description}</p>

                      <ul className="ipList" aria-label={`${industry.name} highlights`}>
                        {industry.bullets.map((b) => (
                          <li key={b}>
                            <FaCheckCircle aria-hidden="true" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="ipCtas">
                        <a className="ipBtn ipBtn--primary" href="/contact">
                          Talk to an Expert <FaArrowRight aria-hidden="true" />
                        </a>
                        <a className="ipBtn ipBtn--ghost" href="/services">
                          Explore Services
                        </a>
                      </div>
                    </motion.div>
                  </Col>

                  <Col lg={8}>
                    <motion.div className="ipSection__right" {...sectionMotion}>
                      {/* Real Estate: client requested layout */}
                      {industry.id === 'real-estate' && Array.isArray(industry.whoWeServe) && (
                        <div className="whoServe">
                          <div className="whoServe__header">
                            <div className="whoServe__titleWrap">
                              <h3 className="whoServe__title">Who We Serve</h3>
                              <p className="whoServe__desc">
                                We provide the infrastructure real estate firms need to grow with confidence.
                                Our clients include:
                              </p>
                            </div>
                            <a className="whoServe__cta" href="/contact">
                              Talk to a Real Estate Expert <FaArrowRight aria-hidden="true" />
                            </a>
                          </div>

                          <div className="whoServe__grid" role="list" aria-label="Real estate client types">
                            {industry.whoWeServe.map((c) => (
                              <div key={c.label} className={`whoCard tone-${c.tone}`} role="listitem">
                                <div className="whoCard__icon" aria-hidden="true">
                                  <FaBuilding />
                                </div>
                                <div className="whoCard__text">{c.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Generic panel (kept enterprise + light) */}
                      <div className="ipPanel">
                        <div className="ipPanel__top">
                          <div className="ipPanel__kicker">How Global Guru helps</div>
                          <h3 className="ipPanel__title">Process-led execution with clear ownership</h3>
                          <p className="ipPanel__desc">
                            We run day-to-day production with discipline so your leadership team gets consistency,
                            fewer surprises, and reliable reporting.
                          </p>
                        </div>

                        <Row className="g-3">
                          <Col md={6}>
                            <div className="ipMiniCard">
                              <div className="ipMiniCard__title">Daily production</div>
                              <div className="ipMiniCard__body">
                                AP processing, coding hygiene, and reconciliations built for repeatability.
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="ipMiniCard">
                              <div className="ipMiniCard__title">Controls & approvals</div>
                              <div className="ipMiniCard__body">
                                Clear review points, audit trails, and structured close routines.
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="ipMiniCard">
                              <div className="ipMiniCard__title">Faster month-end</div>
                              <div className="ipMiniCard__body">
                                Checklists, ownership, and consistent timelines that reduce fire drills.
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="ipMiniCard">
                              <div className="ipMiniCard__title">Leadership reporting</div>
                              <div className="ipMiniCard__body">
                                Reporting cadence that supports faster decisions and better oversight.
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </section>
            );
          })}
        </Container>
      </section>

      {/* CTA */}
      <section className="ipBottom" aria-label="Call to action">
        <Container>
          <div className="ipBottom__card">
            <div className="ipBottom__text">
              <h2 className="ipBottom__title">Want predictable finance operations?</h2>
              <p className="ipBottom__desc">
                Let’s align on workflows, controls, and reporting expectations then we’ll execute with consistency.
              </p>
            </div>
            <div className="ipBottom__actions">
              <a className="ipBtn ipBtn" href="/contact">
                Book a Call <FaArrowRight aria-hidden="true" />
              </a>
              <a className="ipBtn ipBtn" href="/services">
                View Services
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
});

export default IndustriesPage;
