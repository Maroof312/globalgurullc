import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/about-us.avif';
import arImage1 from '../../assets/images/11.1th - Accounts Receivable Services Built for Better Cash Flow.webp';
import arImage2 from '../../assets/images/12th- The Smart Way to Manage AR & AP Services.webp';
import arImage3 from '../../assets/images/13.1th - Accounts Payable Services That Put You in Control.webp';
import FinancialServices from '../../components/sections/FinancialServices';
import FAQ from '../../components/sections/FAQ';
import CTA from '../../components/sections/CTA';
import { Helmet } from 'react-helmet-async';
import './AR&AP.scss';

const ARAP = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const faqs = [
    {
      question: "What are AR/AP services, and why are they important?",
      answer: "AR/AP services refer to the processes that manage incoming revenue (accounts receivable) and outgoing payments (accounts payable). Effective AR/AP management ensures cash flow stability, reduces financial risk, and improves operational efficiency."
    },
    {
      question: "How do your accounts receivable services improve collections?",
      answer: "We implement automated invoice tracking, proactive communication, and payment reminders to ensure faster collections and reduced delinquency rates."
    },
    {
      question: "Can your accounts payable services integrate with our current software?",
      answer: "Yes. We work with most ERP, accounting, and payment platforms to seamlessly integrate and automate your AP services without disrupting your existing workflows."
    },
    {
      question: "Why should we outsource our AR/AP to Global Guru?",
      answer: "Outsourcing to Global Guru brings you specialized knowledge, cost efficiency, reduced errors, and scalability, all without the overhead of hiring and training an in-house team."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Accounts Receivable & Payable Services | Global Guru</title>
        <meta
          name="description"
          content="Take AR/AP services from Global Guru to streamline receivables & payables. Ensure accuracy, compliance, and improved cash flow for your business."
        />
      </Helmet>
      <motion.div
        className="arap-page"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Section */}
        <section className="hero-section">
          {/* background image (full-cover) */}
          <div className="hero-image-container">
            <img
              src={heroImage}
              alt="Financial Services"
              className="hero-image"
              loading="lazy"
            />
          </div>

          {/* dark / mirror-like overlay */}
          <div className="overlay"></div>

          {/* content above overlay */}
          <div className="hero-overlay">
            <Container>
              <Row>
                <Col lg={12}>
                  <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Accounts Payable & <br/>Accounts Receivable Billing Services
                  </motion.h1>
                  <motion.p
                    className="lead"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Streamline your financial operations with our comprehensive AP/AR solutions
                  </motion.p>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        {/* Section 1: Streamlined AR/AP Services */}
        <section className="streamlined-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} className="text-center">
                <motion.div variants={itemVariants}>
                  <h1 className="section-title">Streamlined AR/AP Services That Power Your Financial Efficiency</h1>
                  <p className="section-description">
                    Managing receivables and payables shouldn't hinder your progress. At Global Guru, our expert-led AR/AP services are designed to help businesses across the globe maintain financial clarity, improve cash flow, and stay ahead of the curve. From invoice processing to payment reconciliation, we provide the accuracy, scalability, and speed your business demands.
                  </p>
                  <p className="section-description">
                    Whether you need help optimizing your accounts receivable services, restructuring accounts payable services, or managing the full spectrum of AR/AP services, Global Guru is your go-to partner.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Section 2: The Smart Way */}
        <section className="smart-way-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">The Smart Way to Manage AR/AP Services</h2>
                  <p className="section-description">
                    Outdated, error-prone accounting practices hurt your bottom line. That's why our comprehensive AR/AP services eliminate inefficiencies and manual bottlenecks so your finance team can focus on strategic growth instead of chasing invoices or juggling due dates.
                  </p>
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">Automated billing and payment systems</div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">Real-time reporting of receivables and payables</div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">Timely collections and vendor disbursements</div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">Audit-compliant documentation</div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">Reduced DSO (Days Sales Outstanding)</div>
                    </div>
                    <div className="benefit-item">
                      <div className="benefit-icon">✓</div>
                      <div className="benefit-text">Streamlined vendor management</div>
                    </div>
                  </div>
                  <p className="section-description mt-4">
                    As a top-tier AR/AP service provider, we don't just process data, we transform it into actionable insights.
                  </p>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.img
                  src={arImage1}
                  alt="Smart AR/AP Management"
                  className="img-fluid rounded shadow"
                  loading="lazy"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Section 3: Accounts Receivable Services */}
        <section className="ar-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.img
                  src={arImage2}
                  alt="Accounts Receivable Services"
                  className="img-fluid rounded shadow"
                  loading="lazy"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </Col>
              <Col lg={6}>
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Accounts Receivable Services Built for Better Cash Flow</h2>
                  <p className="section-description">
                    Cash flow is the lifeblood of any business. Our accounts receivable services are built to ensure you collect what you're owed faster and more efficiently. We work as an extension of your team, managing everything from invoice generation to payment follow-ups.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Invoice creation and delivery</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Credit control and customer communication</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Payment tracking and collection</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Dispute resolution</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Real-time receivables reporting</div>
                    </div>
                  </div>
                  <p className="section-description mt-3">
                    With our expert AR services, you'll experience improved collection rates and predictable revenue streams.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Section 4: Accounts Payable Services */}
        <section className="ap-section">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="order-lg-1">
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Accounts Payable Services That Put You in Control</h2>
                  <p className="section-description">
                    Your vendors are essential to your success, and timely, accurate payments keep those relationships strong. Our accounts payable services ensure your obligations are managed with precision and professionalism.
                  </p>
                  <div className="service-features">
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Invoice receipt and processing</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">3-way match verification (PO, invoice, and receipt)</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Approval workflows</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Scheduled payments and vendor notifications</div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">→</div>
                      <div className="feature-text">Comprehensive reporting for compliance</div>
                    </div>
                  </div>
                  <p className="section-description mt-3">
                    Our goal is to reduce errors, eliminate late payments, and provide full transparency at every step. With our support, your AP function becomes a value driver, not a risk.
                  </p>
                </motion.div>
              </Col>
              <Col lg={6} className="order-lg-2">
                <motion.img
                  src={arImage3}
                  alt="Accounts Payable Services"
                  className="img-fluid rounded shadow"
                  loading="lazy"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Section 5: Why Choose Us */}
        <section className="why-choose-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} className="text-center">
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Why Choose Global Guru for AR/AP Services</h2>
                  <p className="section-description">
                    You don't need another vendor. You need a financial partner who understands your business, your industry, and your challenges. At Global Guru, we tailor every solution to your goals, backed by technology, compliance, and expert human support.
                  </p>
                </motion.div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={6} lg={3}>
                <motion.div
                  className="reason-card"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="reason-icon">🏆</div>
                  <h3 className="reason-title">Deep financial expertise</h3>
                  <p className="reason-description">Our team brings years of specialized accounting knowledge to every client engagement.</p>
                </motion.div>
              </Col>
              <Col md={6} lg={3}>
                <motion.div
                  className="reason-card"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="reason-icon">🛡️</div>
                  <h3 className="reason-title">24/7 U.S. support</h3>
                  <p className="reason-description">Round-the-clock assistance from our U.S.-based professionals.</p>
                </motion.div>
              </Col>
              <Col md={6} lg={3}>
                <motion.div
                  className="reason-card"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="reason-icon">🔒</div>
                  <h3 className="reason-title">Secure systems</h3>
                  <p className="reason-description">End-to-end encryption and robust security protocols protect your data.</p>
                </motion.div>
              </Col>
              <Col md={6} lg={3}>
                <motion.div
                  className="reason-card"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="reason-icon">💲</div>
                  <h3 className="reason-title">Transparent pricing</h3>
                  <p className="reason-description">No hidden fees or surprise charges—just straightforward pricing.</p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Section 6: Industries We Serve */}
        <section className="industries-section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <motion.div variants={itemVariants}>
                  <h2 className="section-title">Industries We Serve</h2>
                  <p className="section-description">
                    Whether you're a startup or a growing enterprise, our scalable AR/AP services can be tailored to your sector's unique needs:
                  </p>
                </motion.div>
              </Col>
            </Row>
            <Row className="mt-4">
              {['E-commerce and retail', 'Healthcare and medical practices', 'Professional services', 'Real estate and construction', 'Manufacturing and logistics', 'SaaS and tech startups'].map((industry, index) => (
                <Col sm={6} md={4} key={index}>
                  <motion.div
                    className="industry-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="industry-name">{industry}</div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Section 7: FAQ */}
        <section className="faq-section">
          <Container>
            <FAQ
              faqs={faqs}
              title="FAQs About AR/AP Services"
              subtitle="Find answers to common questions about our services"
              themeColor="#0066cc"
            />
          </Container>
        </section>
        {/* Financial Services Component */}
        <FinancialServices />
        {/* CTA Section */}
        <CTA
          title="Take Control of Your Finance Operations with Global Guru"
          description="Say goodbye to delayed payments, disorganized invoices, and mounting inefficiencies. Choose Global Guru and transform your AR/AP process into a streamlined, scalable solution that powers your business growth. Contact us today to schedule a free consultation and discover how our expert AR/AP services can save you time, money, and stress."
          buttonText="Schedule a Consultation"
          buttonLink="/contact"
        />
      </motion.div>
    </>
  );
};

export default ARAP;
