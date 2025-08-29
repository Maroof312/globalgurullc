import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './StatsCounter.scss';

const stats = [
  { value: 10, suffix: "+", label: "Domains Served", color: "#2563eb", trend: "up" },
  { value: 1, suffix: "B+", label: "Assets Analyzed", color: "#7c3aed", trend: "up" },
  { value: 100, suffix: "%", label: "Client Retention", color: "#059669", trend: "steady" },
  { value: 24, suffix: "/7", label: "Support Availability", color: "#d97706", trend: "steady" }
];

const TrendIndicator = ({ trend }) => {
  return (
    <div className={`trend-indicator ${trend}`}>
      {trend === "up" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14m7-7l-7 7-7-7"/>
        </svg>
      )}
    </div>
  );
};

const StatCard = ({ stat, controls, delay }) => {
  return (
    <motion.div
      className="stat-card"
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
      style={{ '--stat-color': stat.color }}
    >
      <div className="stat-graphic">
        <div className="stat-bar" />
        <div className="stat-dots">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="stat-dot" />
          ))}
        </div>
      </div>
      <div className="stat-content">
        <div className="stat-header">
          <div className="stat-value">
            <CountUp 
              end={stat.value} 
              suffix={stat.suffix}
              duration={2.5}
              separator=","
            />
          </div>
          <TrendIndicator trend={stat.trend} />
        </div>
        <div className="stat-label">{stat.label}</div>
        <div className="stat-line" />
      </div>
    </motion.div>
  );
};

export default function UltraModernStats() {
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
    <section className="ultra-modern-stats" ref={ref}>
      <div className="stats-container">
        <motion.div 
          className="stats-grid"
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              stat={stat}
              controls={controls}
              delay={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}