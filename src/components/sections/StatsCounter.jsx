import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import './StatsCounter.scss';

const stats = [
  { 
    value: 100, 
    suffix: "%", 
    label: "Increased Productivity", 
    icon: "📈",
    percentage: 100
  },
  { 
    value: 100, 
    suffix: "%", 
    label: "On-Time Delivery", 
    icon: "⏱️",
    percentage: 100
  },
  { 
    value: 50, 
    suffix: "%", 
    label: "Reduced Payroll Costs", 
    icon: "💰",
    percentage: 50
  }
];

const BarChartRow = ({ stat, index, isInView }) => {
  return (
    <div className="bar-chart-row">
      <div className="bar-info">
        <span className="bar-icon">{stat.icon}</span>
        <span className="bar-label">{stat.label}</span>
      </div>
      <div className="bar-track">
        <motion.div
          className="bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${stat.percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.3, ease: "easeOut" }}
        >
          <span className="bar-value">
            {isInView && <CountUp end={stat.value} suffix={stat.suffix} duration={2} />}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default function StatsCounter() {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  return (
    <section className="real-estate-stats" ref={ref}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div 
              className="stats-header text-center mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2>Excellence in Commercial Real Estate Accounting</h2>
              <p className="subtitle">
                Trusted by leading commercial real estate firms nationwide, we streamline financial operations and maximize ROI. 
                With over 50K CAM reconciliations successfully completed
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="stats-features mb-5">
          <Col md={4}>
            <div className="feature-item"><span className="feature-check">✔</span>100% Increased Productivity</div>
          </Col>
          <Col md={4}>
            <div className="feature-item"><span className="feature-check">✔</span>Never Miss a Deadline</div>
          </Col>
          <Col md={4}>
            <div className="feature-item"><span className="feature-check">✔</span>50% Reduced Payroll Costs</div>
          </Col>
        </Row>

        <div className="bar-chart-wrapper">
          {stats.map((stat, index) => (
            <BarChartRow 
              key={index} 
              stat={stat} 
              index={index} 
              isInView={inView} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
}