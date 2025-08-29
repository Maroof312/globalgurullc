import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import missionSection from '../../assets/images/accounting-new.webp';
import './Mission.scss';

export default function MissionSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }
    }
  };

  return (
    <section className="mission-section" ref={ref}>
      <Container fluid className="px-0">
        <Row className="g-0 align-items-stretch">
          <Col lg={6} className="order-lg-2">
            <motion.div 
              className="mission-image-wrapper"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 0.4 }}
            >
              <div className="image-overlay"></div>
              <img
                src={missionSection}
                alt="Commercial real estate accounting team"
                loading="lazy"
                className="mission-image"
              />
              <div className="floating-shapes">
                <div className="shape-1"></div>
                <div className="shape-2"></div>
              </div>
            </motion.div>
          </Col>
          <Col lg={6} className="order-lg-1">
            <motion.div
              className="mission-content"
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <div className="section-label">Our Purpose</div>
              <h2>
                <span className="text-gradient">Redefining</span> Commercial Real 
                <br />Estate Accounting
              </h2>
              
              <div className="mission-divider"></div>
              
              <div className="mission-text">
                <p className="lead">
                  At Global Guru LLC, we transform commercial real estate accounting
                  through specialized outsourcing solutions that enhance accuracy
                  and operational efficiency.
                </p>
                <p>
                  Our team delivers comprehensive financial management services
                  tailored to the unique needs of property owners and investors.
                </p>
                <div className="highlight-box">
                  We combine industry-specific expertise with robust technology
                  to provide real-time financial insights while ensuring
                  uncompromised data security.
                </div>
                <p>
                  Partner with us to streamline your back-office operations,
                  reduce overhead costs, and gain a competitive edge.
                </p>
              </div>

              <Button
                variant="primary"
                className="btn-holographic mt-4"
                href="#solutions"
              >
                Explore Our Solutions
                <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}