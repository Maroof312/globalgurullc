import { Container, Row, Col } from 'react-bootstrap';
import { lazy, memo, useMemo, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import './Experts.scss';

// Only lazy load heavy components
const TeamMembers = lazy(() => import('../../components/sections/TeamMembers'));

// Extract static content to constants for memoization
const META_PROPS = {
  title: 'Professional Accounting & Financial Services | Global Solutions',
  description: 'Get expert accounting, tax, and financial management services. Specializing in real estate, fund accounting, compliance, and reporting for businesses.'
};

const HERO_CONTENT = {
  preTitle: 'Meet Our Experts',
  titlePart1: 'The Minds Behind ',
  titlePart2: 'Global Guru',
  description: 'Discover the talented professionals who drive innovation and excellence at Global Guru. Our team combines decades of industry experience with cutting-edge expertise to deliver exceptional results.'
};

const VALUES = [
  {
    icon: '✨',
    title: 'Quality First',
    description: 'We prioritize delivering exceptional quality in every project, ensuring client satisfaction and long-term success.'
  },
  {
    icon: '🔄',
    title: 'Continuous Innovation',
    description: 'Staying ahead of industry trends and implementing cutting-edge solutions for our clients.'
  },
  {
    icon: '🤝',
    title: 'Client Partnership',
    description: 'Building strong, collaborative relationships with our clients to achieve their business goals.'
  }
];

// Simple loading component
const Loader = () => <div className="team-loading">Loading team...</div>;

function Experts() {
  const valuesContent = useMemo(() => (
    VALUES.map((value, index) => (
      <Col md={4} className="value-item" key={index}>
        <div className="value-icon" aria-hidden="true">{value.icon}</div>
        <h4>{value.title}</h4>
        <p>{value.description}</p>
      </Col>
    ))
  ), []);

  return (
    <div className="experts-page">
      <LinkedInInsightTag />
      
      <Helmet>
        <title>{META_PROPS.title}</title>
        <link rel="canonical" href="https://globalgurullc.com/our-experts" />
        <meta name="description" content={META_PROPS.description} />
      </Helmet>
      
      <section className="creative-hero">
        <Container>
          <Row className="align-items-center min-vh-80">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content"
              >
                <div className="pre-title">{HERO_CONTENT.preTitle}</div>
                <h1 className="hero-title">
                  {HERO_CONTENT.titlePart1}
                  <span className="text-gradient">{HERO_CONTENT.titlePart2}</span>
                </h1>
                <p className="hero-description">{HERO_CONTENT.description}</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="team-display">
        <Container>
          <Suspense fallback={<Loader />}>
            <TeamMembers variant="team" />
          </Suspense>
        </Container>
      </section>

      <section className="values-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="values-content"
              >
                <h2 className="values-title">Our Approach to Excellence</h2>
                <Row>
                  {valuesContent}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default memo(Experts);