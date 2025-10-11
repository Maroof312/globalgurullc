import { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './WhyGlobalGuru.scss';

const WhyGlobalGuru = memo(({ 
  title = "Why Global Guru Stands Out",
  points = [],
  ctaPrimary = { text: "Book a Call", link: "/contact" },
  ctaSecondary = { text: "Book a Property Accounting Pulse Check", link: "/contact" }
}) => {
  return (
    <section className="why-global-guru-section py-5 bg-white">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title display-6 fw-bold mb-5 text-center">
                {title}
              </h2>
              
              <div className="standout-points mb-5">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    className="point-item d-flex align-items-start mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="point-icon bg-primary bg-opacity-10 rounded-circle p-2 me-4 flex-shrink-0">
                      <i className="bi bi-check-circle-fill text-primary fs-5"></i>
                    </div>
                    <p className="point-text mb-0 fs-6 text-muted">{point}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="cta-buttons text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <a 
                    href={ctaSecondary.link} 
                    className="btn btn-outline-primary btn-lg px-4 py-3 fw-semibold"
                  >
                    {ctaSecondary.text}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

WhyGlobalGuru.displayName = 'WhyGlobalGuru';
export default WhyGlobalGuru;