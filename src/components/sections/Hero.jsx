import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Button } from "react-bootstrap";
import ParticleCanvas from "./ParticleCanvas";
import "./Hero.scss";
import heroBannerSrc from "../../assets/images/16 - Website 2nd Illustration.avif?w=800;1200;1600&format=avif;webp&as=srcset";
import heroBannerFallback from "../../assets/images/16 - Website 2nd Illustration.avif?w=800";

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="hero-section" ref={ref}>
      {/* Optimized Image with Responsive srcset */}
      <img
        srcSet={heroBannerSrc}
        src={heroBannerFallback}
        alt="Commercial Real Estate Accounting"
        className="hero-background-image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        loading="lazy"
      />

      {/* Particle Canvas Overlay */}
      <ParticleCanvas />

      {/* Dark Overlay */}
      <div className="hero-image-overlay"></div>

      <Container className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Outsource With Confidence
          </h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Tailored for Family Offices
          </motion.p>

          <motion.p
            className="hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Exclusive dedicated teams delivering accuracy, accountability, and trust for commercial real estate portfolios.
          </motion.p>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span>End-to-End Accounting</span>
            <span>•</span>
            <span>CAM Reconciliations</span>
            <span>•</span>
            <span>Lease Administration</span>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              href="/services"
              className="btn-holographic"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </Button>
            <Button
              href="/contact"
              className="btn-glass"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <i className="bi bi-chevron-down"></i>
      </motion.div>
    </section>
  );
}