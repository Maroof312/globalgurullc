import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.scss'; // Reuse the same SCSS file

// Fixed Family Office FAQ content - memoized outside component
const familyOfficeFAQs = [
  {
    question: "Can you tailor reporting to the principals' preferences?",
    answer: "Yes. We deliver a one-page principal summary (NOI, cash yield, liquidity, red flags) and attach the full monthly pack for detail."
  },
  {
    question: "How do you handle complex entity charts?",
    answer: "We map HoldCo/MidCo/OpCo, SPVs, and JVs, then produce consolidated and look-through views with clear elimination entries."
  },
  {
    question: "Do you coordinate with outside advisors (CPAs, attorneys, investment managers)?",
    answer: "Routinely. We manage PBC lists, secure data rooms, and calendar beats so advisors get what they need without pinging you."
  },
  {
    question: "What about confidentiality and data access?",
    answer: "We sign NDAs, enforce least-privilege permissions, and log who can see what. Artifacts are watermarked and indexed."
  },
  {
    question: "Can you manage capital calls and distributions?",
    answer: "Yes—standard templates, notices, payment tracking, waterfall math, and audit trails. Principals see status at a glance."
  },
  {
    question: "How do we communicate day-to-day?",
    answer: "You choose: one inbox, shared channel, or weekly standing call. We keep it simple and quiet."
  }
];

const FamilyOfficeFAQ = ({ 
  title = "Family Office FAQs", 
  subtitle = "Specialized solutions for family office financial management and reporting",
  themeColor = "#0056b3",
  maxWidth = "800px"
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Memoize the fixed FAQs data
  const memoizedFaqs = useMemo(() => familyOfficeFAQs, []);

  const toggleFAQ = useCallback((index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }, [activeIndex]);

  const handleKeyPress = useCallback((event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(index);
    }
  }, [toggleFAQ]);

  const renderAnswer = useCallback((answer) => {
    if (typeof answer === 'string') {
      return <p>{answer}</p>;
    }
    return answer;
  }, []);

  return (
    <section 
      className="faq-section" 
      style={{ 
        '--theme-color': themeColor, 
        '--max-width': maxWidth 
      }}
      aria-label="Family Office Frequently Asked Questions"
    >
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
          {memoizedFaqs.map((faq, index) => (
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
                onKeyDown={(e) => handleKeyPress(e, index)}
                aria-expanded={activeIndex === index}
                aria-controls={`family-faq-answer-${index}`}
                aria-label={`${faq.question} ${activeIndex === index ? 'Collapse' : 'Expand'}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <motion.span 
                  className="faq-icon"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" loading="lazy">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`family-faq-answer-${index}`}
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto' 
                    }}
                    exit={{ 
                      opacity: 0, 
                      height: 0 
                    }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    role="region"
                    aria-labelledby={`family-faq-question-${index}`}
                  >
                    <div className="faq-answer-content">
                      {renderAnswer(faq.answer)}
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

export default React.memo(FamilyOfficeFAQ);