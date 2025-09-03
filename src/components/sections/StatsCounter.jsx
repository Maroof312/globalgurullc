import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
    percentage: 98
  },
  { 
    value: 50, 
    suffix: "%", 
    label: "Reduced Payroll Costs", 
    icon: "💰",
    percentage: 50
  }
];

const BarGraphVisual = ({ percentage, isInView, index }) => {
  // Calculate bar color based on percentage
  const getBarColor = () => {
    if (percentage >= 90) return "#10b981"; // Green for high percentages
    if (percentage >= 70) return "#3b82f6"; // Blue for medium-high
    if (percentage >= 50) return "#f59e0b"; // Yellow for medium
    return "#ef4444"; // Red for low percentages
  };

  const barColor = getBarColor();

  return (
    <div className="bar-graph-visual">
      <div className="graph-container">
        <div className="graph-y-axis">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>
        <div className="graph-content">
          <div className="graph-grid">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
          </div>
          <motion.div 
            className="graph-bar"
            initial={{ height: "0%" }}
            animate={isInView ? { height: `${percentage}%` } : { height: "0%" }}
            transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
            style={{ backgroundColor: barColor }}
          >
            <div className="bar-value">{percentage}%</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ stat, controls, delay, isInView, index }) => {
  return (
    <Col md={6} lg={4} className="mb-4">
      <motion.div
        className="real-estate-stat-card"
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ 
          duration: 0.6, 
          delay: delay * 0.15,
          ease: [0.16, 1, 0.3, 1]
        }}
        variants={{
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="stat-icon">
          {stat.icon}
        </div>
        
        <div className="stat-visualization">
          <BarGraphVisual 
            percentage={stat.percentage} 
            isInView={isInView}
            index={index}
          />
        </div>
        
        <div className="stat-content">
          <div className="stat-value">
            <CountUp 
              end={stat.value} 
              suffix={stat.suffix}
              duration={2.5}
              separator=","
            />
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
        
        <div className="stat-background">
          <div className="blueprint-grid"></div>
        </div>
      </motion.div>
    </Col>
  );
};

export default function StatsCounter() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
              <p className="subtitle">Trusted by leading commercial real estate firms nationwide, we streamline financial operations and maximize ROI. With over 10,000 CAM reconciliations successfully completed</p>
            </motion.div>
          </Col>
        </Row>
        
        <Row className="stats-features mb-5">
          <Col md={4}>
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="feature-check">✔</span>
              <span>100% Increased Productivity</span>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="feature-check">✔</span>
              <span>Never Miss a Deadline</span>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div 
              className="feature-item"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="feature-check">✔</span>
              <span>50% Reduced Payroll Costs</span>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              stat={stat}
              controls={controls}
              delay={index}
              isInView={inView}
              index={index}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
}