import React, { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
  FaCalculator,
  FaChartLine,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";
import { GiCash, GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import CTA from "../../components/sections/CTA";
import heroImage from "../../assets/images/accounting-new.webp";
import accountingImage from "../../assets/images/10.avif";
import LinkedInInsightTag from "../../components/layout/LinkedInInsightTag";
import useAnalytics from "../../components/hooks/useAnalytics";
import "./Acc&Book.scss";

// Static data defined outside component (no hooks needed)
const services = [
  {
    icon: <FaCalculator size={40} />,
    title: "Full-Cycle Bookkeeping",
    description:
      "Comprehensive transaction recording, bank reconciliations, and financial statement preparation to keep your records accurate and up-to-date.",
    features: [
      "Daily transaction recording",
      "Bank/credit card reconciliations",
      "Financial statement preparation",
    ],
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Financial Reporting",
    description:
      "Customized reports that provide actionable insights into your business performance and financial health.",
    features: [
      "Profit & Loss statements",
      "Balance sheets",
      "Cash flow analysis",
      "KPI dashboards",
    ],
  },
  {
    icon: <FaFileInvoiceDollar size={40} />,
    title: "Accounts Management",
    description:
      "End-to-end management of your payables and receivables to optimize cash flow and vendor relationships.",
    features: [
      "Invoice processing",
      "Payment scheduling",
      "Collections management",
      "Vendor management",
    ],
  },
  {
    icon: <GiCash size={40} />,
    title: "Cash Flow Management",
    description:
      "Strategic oversight of your cash position with forecasting to ensure operational stability and growth capacity.",
    features: [
      "Cash flow projections",
      "Working capital analysis",
      "Liquidity management",
    ],
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Compliance & Tax Prep",
    description:
      "Accurate record-keeping and documentation to meet regulatory requirements and simplify tax filing.",
    features: [
      "US GAAP-compliant reporting",
      "Tax-ready financials",
      "Audit support",
    ],
  },
  {
    icon: <FaCloud size={40} />,
    title: "Cloud Accounting",
    description:
      "Modern accounting solutions using leading platforms for real-time financial visibility from anywhere.",
    features: [
      "QuickBooks Online setup",
      "Xero integration",
      "Automated data sync",
    ],
  },
];

const processSteps = [
  {
    title: "Discovery & Setup",
    description:
      "We learn about your business and configure our systems to match your workflows",
  },
  {
    title: "Data Collection",
    description:
      "Secure transfer of your financial documents and access to necessary systems",
  },
  {
    title: "Processing & Review",
    description: "Our team processes transactions and performs quality checks",
  },
  {
    title: "Reporting & Analysis",
    description: "Delivery of financial reports with expert insights",
  },
  {
    title: "Ongoing Optimization",
    description: "Continuous improvement of your financial processes",
  },
];

const AccBook = memo(() => {
  useAnalytics();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="acc-book-page"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Helmet>
        <link
          rel="canonical"
          href="https://globalgurullc.com/accounting-and-bookkeeping"
        />
        <link
          rel="canonical"
          href="https://globalgurullc.com/accounting-and-bookkeeping"
        />

        {/* BREADCRUMB SCHEMA FOR /accounting-and-bookkeeping PAGE */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://globalgurullc.com/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Accounting & Bookkeeping",
              "item": "https://globalgurullc.com/accounting-and-bookkeeping"
            }]
          }`}
        </script>

        {/* FAQ SCHEMA FOR /accounting-and-bookkeeping PAGE */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What do your outsourced property accounting services include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our outsourced property accounting services cover the full cycle of real estate financial management. This includes accounts receivable, accounts payable, complex bank reconciliations, monthly financial reporting, budgeting, and compliance tracking. By outsourcing property accounting, clients gain accurate reports, cost savings, and streamlined financial operations."
              }
            },{
              "@type": "Question",
              "name": "How do you ensure accuracy in property accounting reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use standardized workflows, multi-level review processes, and advanced property management platforms such as Yardi and MRI. This ensures complete accuracy, transparency, and consistency in every financial report we deliver."
              }
            },{
              "@type": "Question",
              "name": "Can you integrate outsourced property accounting with my existing software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our team has expertise in Yardi, MRI, RealPage, and QuickBooks. We integrate seamlessly into your preferred accounting system to maintain efficiency while reducing errors and manual work."
              }
            }]
          }`}
        </script>
      </Helmet>
      <LinkedInInsightTag />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-container">
          <img
            src={heroImage}
            alt="Professional Accounting Services"
            className="hero-image"
            loading="eager"
            width={1200}
            height={630}
          />
        </div>

        <div className="hero-overlay">
          <Container>
            <Row>
              <Col lg={10} className="mx-auto">
                <motion.h1
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                  className="hero-title"
                >
                  Precision Accounting & Bookkeeping Services
                </motion.h1>
                <motion.p
                  className="hero-subtitle"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Expert financial management that scales with your business
                </motion.p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.h2 className="section-title" variants={itemVariants}>
                Strategic Financial Management
              </motion.h2>
              <motion.p className="section-text" variants={itemVariants}>
                Our comprehensive accounting services provide more than just
                number crunching - we deliver actionable financial insights to
                help you make informed business decisions. With a focus on
                accuracy, timeliness, and strategic value, we become an
                extension of your finance team.
              </motion.p>
              <motion.div variants={itemVariants}>
                <ul className="benefits-list">
                  <li>Real-time financial visibility</li>
                  <li>Reduced accounting overhead</li>
                  <li>Improved cash flow management</li>
                  <li>Tax-ready financial records</li>
                  <li>Scalable solutions for growth</li>
                </ul>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                className="image-wrapper"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <img
                  src={accountingImage}
                  alt="Accounting Process"
                  className="img-fluid rounded-lg shadow-lg"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Container>
          <motion.div className="text-center mb-5" variants={containerVariants}>
            <motion.h2 className="section-title" variants={itemVariants}>
              Comprehensive Accounting Solutions
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Tailored services to meet your business needs
            </motion.p>
          </motion.div>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  className="service-card"
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="service-icon-wrapper">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <Container>
          <motion.div className="mb-5" variants={containerVariants}>
            <motion.h2 className="section-title" variants={itemVariants}>
              Our Proven Process
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              How we deliver exceptional accounting services
            </motion.p>
          </motion.div>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <motion.div
                className="process-step"
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Value Section */}
      <section className="value-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2 className="section-title" variants={itemVariants}>
                  Why Professional Accounting Matters
                </motion.h2>
                <motion.p className="section-text" variants={itemVariants}>
                  Accurate financial records are the foundation of business
                  success. Our services help you:
                </motion.p>
                <motion.ul className="value-list" variants={containerVariants}>
                  <motion.li variants={itemVariants}>
                    <GiPayMoney size={24} className="value-icon" />
                    <span>
                      Optimize cash flow and reduce unnecessary expenses
                    </span>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <GiReceiveMoney size={24} className="value-icon" />
                    <span>
                      Identify profitable opportunities and growth potential
                    </span>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <FaShieldAlt size={20} className="value-icon" />
                    <span>
                      Maintain compliance with tax laws and regulations
                    </span>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <FaChartLine size={20} className="value-icon" />
                    <span>Make data-driven decisions with confidence</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                className="value-image-wrapper"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="value-card">
                  <h4>Key Benefits</h4>
                  <ul>
                    <li>Save 15-30 hours per month on accounting tasks</li>
                    <li>Reduce accounting errors by 90%+</li>
                    <li>Get financial reports 5-7 days faster</li>
                    <li>Improve tax planning with accurate records</li>
                    <li>Scale effortlessly as your business grows</li>
                  </ul>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <CTA
        title="Ready to Streamline Your Accounting?"
        description="Let our expert team handle your financial management so you can focus on growing your business. Get accurate, timely financial insights tailored to your specific needs."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </motion.div>
  );
});

AccBook.displayName = "AccBook";
export default AccBook;
