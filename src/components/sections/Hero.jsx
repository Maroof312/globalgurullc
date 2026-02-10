// HeroSection.jsx - CORRECTED VERSION
import { memo, useCallback, useMemo, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, useInView, useReducedMotion } from "framer-motion";
import DataExpertise from "./DataExpertise";
import "./Hero.scss";

const HeroSection = memo(() => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  const featureCards = useMemo(
    () => [
      { 
        title: "Property Accounting", 
        // subtitle: "Comprehensive property financial management",
        accent: "blue" 
      },
      { 
        title: "AP / AR", 
        // subtitle: "Accounts payable and receivable processing",
        accent: "gold" 
      },
      { 
        title: "Lease Admin", 
        // subtitle: "Lease accounting and administration",
        accent: "blue" 
      },
      { 
        title: "Bookkeeping", 
        // subtitle: "Accurate daily bookkeeping services",
        accent: "gold" 
      },
    ],
    []
  );

  const animations = useMemo(() => ({
    content: {
      initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
      animate: isInView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.7, ease: "easeOut" },
    },
    list: {
      initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
      animate: isInView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.6, delay: 0.12, ease: "easeOut" },
    },
    cardsContainer: {
      hidden: {},
      visible: {
        transition: reduceMotion
          ? {}
          : {
              staggerChildren: 0.08,
              delayChildren: 0.1,
            },
      },
    },
    card: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    },
  }), [isInView, reduceMotion]);

  const renderCard = useCallback(
    (item, idx) => (
      <motion.div
        key={`${item.title}-${idx}`}
        className={`hero-feature-card accent-${item.accent}`}
        variants={animations.card}
        role="listitem"
      >
        <div className="hero-feature-left" aria-hidden="true" />
        <div className="hero-feature-text">
          <div className="hero-feature-title">{item.title}</div>
          {item.subtitle && (
            <div className="hero-feature-subtitle">{item.subtitle}</div>
          )}
        </div>
        <div className="hero-feature-dot" aria-hidden="true" />
      </motion.div>
    ),
    [animations.card]
  );

  const cards = useMemo(
    () => featureCards.map(renderCard), 
    [featureCards, renderCard]
  );

  return (
    <section className="hero2" ref={sectionRef} aria-label="Hero">
      <div className="hero2-bg" aria-hidden="true" />
      <div className="hero2-fx" aria-hidden="true" />

      <Container className="hero2-container">
        <Row className="align-items-center hero2-row">
          <Col lg={7} className="hero2-left">
            <motion.div className="hero2-left-inner" {...animations.content}>
              <div className="hero2-pill" role="status">
                Outsource with confidence
              </div>
              
              <div className="hero2-heading">
                <h1 className="hero2-main-heading">
                  <span className="hero2-preheading">
                    Specialized Outsourced
                  </span>
                  <span className="hero2-main-text">
                    Real Estate Accounting Services
                  </span>
                  <span className="hero2-subheading">
                    for Owners, Investors & Property Managers
                  </span>
                </h1>
              </div>

              <p className="hero2-subtitle">
                Accurate books, faster closes, and investor-ready reporting, for real estate portfolios of any size.
              </p>

              <motion.ul className="hero2-bullets" role="list" {...animations.list}>
                <li>Dedicated accounting team + ongoing support</li>
                <li>Month end close + bank/CAM reconciliations</li>
                <li>AP/AR + owner statements + board reporting</li>
                <li>Yardi, AppFolio, QuickBooks, ARGUS support</li>
                <li>Secure, transparent workflows</li>
              </motion.ul>

              <div className="hero2-buttons">
                <Button
                  href="/services"
                  className="btn-holographic"
                  as={motion.a}
                  whileHover={!reduceMotion ? { scale: 1.04 } : undefined}
                  whileTap={!reduceMotion ? { scale: 0.97 } : undefined}
                  aria-label="View our services"
                >
                  Our Services
                </Button>

                <Button
                  href="/contact"
                  className="btn-glass"
                  as={motion.a}
                  whileHover={!reduceMotion ? { scale: 1.04 } : undefined}
                  whileTap={!reduceMotion ? { scale: 0.97 } : undefined}
                  aria-label="Contact us"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </Col>

          <Col lg={5} className="hero2-right">
            <motion.div
              className="hero2-cards"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animations.cardsContainer}
              role="list"
              aria-label="Our services"
            >
              {cards}
            </motion.div>
          </Col>
        </Row>

        <div className="hero2-expertise">
          <DataExpertise />
        </div>
      </Container>
    </section>
  );
});

export default HeroSection;