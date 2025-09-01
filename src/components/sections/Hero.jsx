import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Button } from "react-bootstrap";
import ParticleCanvas from "./ParticleCanvas";
import "./Hero.scss";
import heroBanner from "../../assets/images/home_banner-transformed_logo.webp";

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="hero-section" ref={ref}>
      {/* Original Image with Lazy Loading */}
      <img
        src={heroBanner}
        alt="Commercial Real Estate Accounting"
        className="hero-background-image"
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
            Outsourced Accounting Services for Commercial Real Estate Companies
            Streamline Your Property Finances with Accurate Transparent and
            Scalable Solutions
          </h1>

          <motion.p
            className="hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           We help commercial real estate businesses grow by providing expert outsourced accounting services tailored to the unique needs of multifamily, office, and industrial property owners and managers. From individual assets to large-scale portfolios, we deliver precise financial reporting, cash flow management, and regulatory compliance – so you can focus on maximizing returns and scaling your operations. 
          </motion.p>

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
