import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import "./StatsCounter.scss";

const stats = [
  { value: 100, suffix: "%", label: "Increased Productivity", icon: "📈", percentage: 100 },
  { value: 100, suffix: "%", label: "On-Time Delivery", icon: "⏱️", percentage: 100 },
  { value: 50, suffix: "%", label: "Reduced Payroll Costs", icon: "💰", percentage: 50 },
];

// Ring component (SVG progress ring)
function StatRing({ stat, index, inView }) {
  const size = 152;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;

  const progress = Math.max(0, Math.min(100, stat.percentage));
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      className="ring-card"
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <div className="ring-top">
        <span className="ring-icon" aria-hidden="true">{stat.icon}</span>
        <span className="ring-label">{stat.label}</span>
      </div>

      <div className="ring-wrap">
        <svg className="ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* background track */}
          <circle
            className="ring-track"
            cx={size / 2}
            cy={size / 2}
            r={r}
            strokeWidth={stroke}
          />

          {/* animated progress */}
          <motion.circle
            className="ring-progress"
            cx={size / 2}
            cy={size / 2}
            r={r}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.6, delay: index * 0.18, ease: "easeOut" }}
          />
        </svg>

        <div className="ring-center">
          <div className="ring-number">
            {inView ? <CountUp end={stat.value} duration={1.8} /> : 0}
            <span className="ring-suffix">{stat.suffix}</span>
          </div>
          <div className="ring-sub">Outcome</div>
        </div>
      </div>

      <div className="ring-foot">
        <span className="pill">{progress}% benchmark</span>
      </div>
    </motion.div>
  );
}

export default function StatsCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
    rootMargin: "-50px 0px",
  });

  return (
    <section className="stats-rings" ref={ref}>
      <div className="stats-container">
        <motion.div
          className="stats-header"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>Excellence in Commercial Real Estate Accounting</h2>
          <p>
            Trusted by leading CRE firms nationwide streamlined workflows, fewer escalations,
            and predictable delivery. <strong>50K+ CAM reconciliations completed.</strong>
          </p>
        </motion.div>

        <div className="rings-grid">
          {stats.map((stat, index) => (
            <StatRing key={index} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
