import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.scss';

const FAQ = ({ 
  faqs, 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services",
  themeColor = "#0056b3",
  maxWidth = "800px"
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" style={{ '--theme-color': themeColor, maxWidth }}>
      <div className="faq-container">
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="faq-title">{title}</h2>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        </motion.div>

        <div className="faq-items">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2 className="faq-question-text">{faq.question}</h2>
                <motion.span 
                  className="faq-icon"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="faq-answer-content">
                      {typeof faq.answer === 'string' ? (
                        <p>{faq.answer}</p>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;