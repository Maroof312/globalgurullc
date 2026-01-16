import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import missionSectionSrc from "../../assets/images/15 - Website 1st Illustration.avif?w=600;900;1200&format=avif;webp&as=srcset";
import missionSectionFallback from "../../assets/images/15 - Website 1st Illustration.avif?w=900";
import "./Mission.scss";

export default function MissionSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] },
    },
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
                srcSet={missionSectionSrc}
                src={missionSectionFallback}
                alt="Commercial real estate accounting team"
                loading="lazy"
                className="mission-image"
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 600px"
              />
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
                <span className="text-gradient">Redefining</span> Real Estate Accounting{" "}
                {/* <br className="d-none d-md-block" />
                Estate Accounting */}
              </h2>

              <div className="mission-divider"></div>

              <div className="mission-text">
                <p className="lead">
                  At Global Guru, we help real estate businesses run cleaner, faster, 
                  and more accurately through specialized outsourced accounting services.
                </p>
                <p>
                  You get a dedicated team that ensures accurate books, faster month-end close, 
                  and consistent reporting without the cost and burden of hiring internally.
                </p>
                <div className="highlight-box">
                  We support commercial and residential property managers, HOAs/condos/co-ops, real estate owners, 
                  developers, and investment/asset management teams with reliable financial 
                  operations and investor-ready reporting. We take confidentiality and data security extremely seriously, with controlled access, 
                  secure workflows, and strict internal review processes.
                </div>
                <p>
                  With experience across Yardi, AppFolio, QuickBooks, and ARGUS, 
                  we deliver scalable accounting support built for long-term growth
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