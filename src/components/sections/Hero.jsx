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
      { title: "Month-End Close", subtitle: "Reliable cadence", accent: "blue" },
      { title: "AP / AR", subtitle: "Clean vendor & tenant flows", accent: "gold" },
      { title: "Owner Statements", subtitle: "Consistent reporting", accent: "blue" },
      { title: "Yardi Support", subtitle: "Configuration + cleanup", accent: "gold" },
    ],
    []
  );

  const contentAnim = useMemo(
    () => ({
      initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
      animate: isInView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.7, ease: "easeOut" },
    }),
    [isInView, reduceMotion]
  );

  const listAnim = useMemo(
    () => ({
      initial: { opacity: 0, y: reduceMotion ? 0 : 12 },
      animate: isInView ? { opacity: 1, y: 0 } : {},
      transition: { duration: 0.6, delay: 0.12, ease: "easeOut" },
    }),
    [isInView, reduceMotion]
  );

  const cardsContainerVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: reduceMotion
          ? {}
          : {
              staggerChildren: 0.08,
              delayChildren: 0.1,
            },
      },
    }),
    [reduceMotion]
  );

  const cardVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    }),
    [reduceMotion]
  );

  const renderCard = useCallback(
    (item, idx) => (
      <motion.div
        key={`${item.title}-${idx}`}
        className={`hero-feature-card accent-${item.accent}`}
        variants={cardVariants}
      >
        <div className="hero-feature-left" aria-hidden="true" />
        <div className="hero-feature-text">
          <div className="hero-feature-title">{item.title}</div>
          <div className="hero-feature-subtitle">{item.subtitle}</div>
        </div>
        <div className="hero-feature-dot" aria-hidden="true" />
      </motion.div>
    ),
    [cardVariants]
  );

  const cards = useMemo(() => featureCards.map(renderCard), [featureCards, renderCard]);

  return (
    <section className="hero2" ref={sectionRef} aria-label="Hero">
      {/* Background (CSS-only, Lighthouse-safe) */}
      <div className="hero2-bg" aria-hidden="true" />
      <div className="hero2-fx" aria-hidden="true" />

      <Container className="hero2-container">
        <Row className="align-items-center hero2-row">
          {/* LEFT */}
          <Col lg={7} className="hero2-left">
            <motion.div className="hero2-left-inner" {...contentAnim}>
              <div className="hero2-pill">Outsource with confidence</div>

              <h1 className="hero2-title">Outsourced Accounting for Commercial Real Estate</h1>

              <p className="hero2-subtitle">
                Accurate books, faster closes, and investor-ready reporting handled by specialists who know CRE.
              </p>

              <motion.ul className="hero2-bullets" {...listAnim}>
                <li>Monthly close &amp; reconciliations</li>
                <li>AP/AR + owner statements</li>
                <li>Secure, transparent workflows</li>
              </motion.ul>

              <div className="hero2-buttons">
                <Button
                  href="/services"
                  className="btn-holographic"
                  as={motion.a}
                  whileHover={!reduceMotion ? { scale: 1.04 } : undefined}
                  whileTap={!reduceMotion ? { scale: 0.97 } : undefined}
                >
                  Our Services
                </Button>

                <Button
                  href="/contact"
                  className="btn-glass"
                  as={motion.a}
                  whileHover={!reduceMotion ? { scale: 1.04 } : undefined}
                  whileTap={!reduceMotion ? { scale: 0.97 } : undefined}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </Col>

          {/* RIGHT */}
          <Col lg={5} className="hero2-right">
            <motion.div
              className="hero2-cards"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardsContainerVariants}
            >
              {cards}
            </motion.div>
          </Col>
        </Row>

        {/* Data Expertise embedded under hero grid (still part of hero) */}
        <div className="hero2-expertise">
          <DataExpertise />
        </div>
      </Container>
    </section>
  );
});

export default HeroSection;
