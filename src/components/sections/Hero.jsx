import { memo, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container, Button } from "react-bootstrap";
import DataExpertise from "./DataExpertise";
import "./Hero.scss";

const HeroSection = memo(() => {
  const reduceMotion = useReducedMotion();

  const heroContentMotion = useMemo(
    () => ({
      initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, ease: "easeOut" },
    }),
    [reduceMotion]
  );

  return (
    <section className="hero-section" aria-label="Hero Section">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-fx" aria-hidden="true" />

      <Container className="hero-container">
        <motion.div className="hero-content" {...heroContentMotion}>
          <h1>Outsource With Confidence</h1>

          <div className="hero-buttons">
            <Button
              href="/services"
              className="btn-holographic"
              as={motion.a}
              whileHover={!reduceMotion ? { scale: 1.05 } : undefined}
              whileTap={!reduceMotion ? { scale: 0.96 } : undefined}
            >
              Our Services
            </Button>

            <Button
              href="/contact"
              className="btn-glass"
              as={motion.a}
              whileHover={!reduceMotion ? { scale: 1.05 } : undefined}
              whileTap={!reduceMotion ? { scale: 0.96 } : undefined}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* DataExpertise embedded INSIDE hero as trust bar */}
        <div className="hero-expertise" aria-label="Data Expertise Strip">
          <DataExpertise />
        </div>
      </Container>
    </section>
  );
});

export default HeroSection;
