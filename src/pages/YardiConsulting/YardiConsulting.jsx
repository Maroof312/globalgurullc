import React, { memo, useMemo } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import yardiBanner from '../../assets/images/yardi.avif?w=800;1200;1600&format=avif&as=srcset';
import yardiBannerFallback from '../../assets/images/yardi.avif?w=1200';
import Testimonials from '../../components/sections/Testimonials';
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/sections/FAQ';
import CTA from '../../components/sections/CTA';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import './YardiConsulting.scss';

// Static data defined outside component (no hooks needed)
const faqs = [
  {
    question: "Do you provide Yardi implementation services?",
    answer: "Yes. Our team has extensive hands on experience implementing Yardi for real estate companies. We configure modules, set up workflows, and design reporting dashboards that optimize daily operations."
  },
  {
    question: "Can you train my staff on Yardi property accounting?",
    answer: "Absolutely. We provide customized Yardi training for property managers, accountants, and finance staff. Our goal is to help your team use Yardi to its full potential."
  },
  {
    question: "What makes your Yardi expertise stand out?",
    answer: "Our Yardi experts go beyond system setup. We help clients unlock advanced features, build customized reports, and optimize usage to improve productivity, compliance, and financial decision making."
  }
];

const YardiConsulting = memo(() => {
  // Memoize arrays that are used in mappings
  const benefitItems = useMemo(() => [
    "Custom solutions aligned with your business goals",
    "Dedicated Global support for real-time collaboration",
    "Seamless onboarding with minimal downtime",
    "Cross-functional expertise in accounting, leasing, operations, and compliance",
    "Transparent project planning with clear milestones and deliverables"
  ], []);

  const modules = useMemo(() => [
    "Voyager Residential, Commercial, and Mixed-Use",
    "Yardi Investment Suite",
    "Yardi RentCafe and CRM",
    "Yardi PAYscan and Bill Pay",
    "Yardi Maintenance",
    "Yardi Budgeting and Forecasting",
    "Construction and Job Cost Modules"
  ], []);

  const clientTypes = useMemo(() => [
    "Multifamily and single-family operators",
    "Commercial real estate developers and managers",
    "Affordable housing providers",
    "Senior living and healthcare communities",
    "Mixed-use developers",
    "REITs and private equity firms"
  ], []);

  const benefits = useMemo(() => [
    "Streamlined leasing and tenant workflows",
    "Faster month-end close and financial reporting",
    "Reduced reliance on manual spreadsheets",
    "Lower compliance risks and stronger audit trails",
    "Better team alignment through customized user roles",
    "Improved data accuracy and system-wide consistency"
  ], []);

  return (
    <div className="yardi-page">
      <LinkedInInsightTag />
      <Helmet>
        <title>Yardi Consultation Services | Yardi Implementation & Optimization </title>
        <link rel="canonical" href="https://globalgurullc.com/yardi-consultation-services" />
        <meta
          name="description"
          content="Get expert Yardi consulting, implementation & training to simplify property management. Global Guru ensures seamless Yardi integration & reporting solutions."
        />

        {/* BREADCRUMB SCHEMA FOR /yardi-consultation-services PAGE */}
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
              "name": "Yardi Consultation Services",
              "item": "https://globalgurullc.com/yardi-consultation-services"
            }]
          }`}
        </script>

        {/* FAQ SCHEMA FOR /yardi-consultation-services PAGE */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Do you provide Yardi implementation services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our team has extensive hands on experience implementing Yardi for real estate companies. We configure modules, set up workflows, and design reporting dashboards that optimize daily operations."
              }
            },{
              "@type": "Question",
              "name": "Can you train my staff on Yardi property accounting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We provide customized Yardi training for property managers, accountants, and finance staff. Our goal is to help your team use Yardi to its full potential."
              }
            },{
              "@type": "Question",
              "name": "What makes your Yardi expertise stand out?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Yardi experts go beyond system setup. We help clients unlock advanced features, build customized reports, and optimize usage to improve productivity, compliance, and financial decision making."
              }
            }]
          }`}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="yardi-hero">
        <div className="hero-image-wrapper">
          <img
            srcSet={yardiBanner}
            src={yardiBannerFallback}
            alt="Yardi Consulting Services"
            className="hero-image"
            loading="eager"
            width={1920}
            height={1080}
          />
          <div className="hero-overlay">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="hero-content"
              >
                <Badge bg="light" text="dark" className="mb-1">
                  Yardi Specialist
                </Badge>
                <h1 className="hero-title">End-to-End Yardi Consultation Services for Real Estate Success</h1>
                <p className="hero-text">
                  Managing real estate with outdated systems or poorly configured software can hold your business back. 
                  Our expert-led Yardi consultation services help property owners, managers, and real estate firms 
                  get the most out of their Yardi investment.
                </p>
                <div className="hero-cta">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    href="/contact"
                    className="me-3 mb-2 mb-md-0"
                  >
                    Request Consultation
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    href="#services"
                  >
                    Our Services
                  </Button>
                </div>
              </motion.div>
            </Container>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h2 className="section-title">Why Choose Global Guru for Yardi Consulting</h2>
                <p className="section-subtitle">
                  Most firms offer generic tech help. Global Guru is different. Our team includes expert Yardi consultants 
                  who understand real estate challenges and how to solve them using Yardi's full capabilities.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {benefitItems.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <motion.div
                  className="benefit-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px" }}
                >
                  <div className="benefit-icon">
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <div className="benefit-text">{item}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Comprehensive Services Section */}
      <section id="services" className="services-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h2 className="section-title">Comprehensive Yardi Services That Fit Your Workflow</h2>
                <p className="section-subtitle">
                  Our Yardi services are built to serve real estate businesses at every stage. Whether you need to launch, 
                  migrate, improve, or train, we provide strategic consulting that removes complexity and delivers value fast.
                </p>
              </motion.div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={6}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h3>Yardi Implementation Support</h3>
                <p>
                  We manage your Yardi launch from start to finish. This includes setup, module configuration, custom field 
                  development, user permissions, and full go-live readiness. Our team ensures your system is built the right 
                  way the first time.
                </p>
              </motion.div>
            </Col>
            <Col md={6} lg={6}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h3>Data Migration and Integration</h3>
                <p>
                  Need to move from another system or combine multiple platforms? We handle secure data transfer and map 
                  everything accurately. We also help connect Yardi with external platforms such as Investran, Salesforce, 
                  and AppFolio for unified operations.
                </p>
              </motion.div>
            </Col>
            <Col md={6} lg={6}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h3>Reporting and Analytics</h3>
                <p>
                  Yardi offers powerful reporting. We help you use it to its full potential. Our Yardi consulting experts 
                  build custom dashboards, automate reports, and visualize your data in a way that supports real-time 
                  decision-making.
                </p>
              </motion.div>
            </Col>
            <Col md={6} lg={6}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h3>System Audits and Optimization</h3>
                <p>
                  If your current Yardi system feels clunky or inefficient, our team can perform a complete system audit. 
                  We check for underused features, misconfigurations, and outdated processes. Then we recommend improvements 
                  that align with your objectives. In general, we have observed 45% plus features of Yardi underutilized by businesses in general.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Supported Modules Section */}
      <section className="modules-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h2 className="section-title">Supported Yardi Modules</h2>
                <p className="section-subtitle">
                  Our Yardi consultation covers the full Yardi product suite, each configured specifically to your property 
                  type, business model, and growth plans.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {modules.map((module, index) => (
              <Col xs={12} sm={6} md={6} lg={4} key={index}>
                <motion.div
                  className="module-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px" }}
                >
                  <div className="module-name">{module}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Who We Help Section */}
      <section className="clients-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h2 className="section-title">Who We Help</h2>
                <p className="section-subtitle">
                  Our Yardi consulting supports clients across a wide range of real estate verticals. Whether you 
                  operate a small local portfolio or a nationwide property group, we have the experience to support your goals.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {clientTypes.map((client, index) => (
              <Col xs={12} sm={6} md={6} lg={4} key={index}>
                <motion.div
                  className="client-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px" }}
                >
                  <div className="client-type">{client}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "0px" }}
              >
                <h2 className="section-title">Benefits of Choosing Global Guru's Yardi Services</h2>
                <p className="section-subtitle">
                  When you choose Global Guru, you gain more than a technical consultant. You gain a business partner 
                  focused on tangible improvements.
                </p>
              </motion.div>
            </Col>
          </Row>
          <Row className="g-4">
            {benefits.map((benefit, index) => (
              <Col xs={12} sm={6} md={6} lg={4} key={index}>
                <motion.div
                  className="benefit-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px" }}
                >
                  <div className="benefit-number">{index + 1}</div>
                  <div className="benefit-text">{benefit}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA 
        title="Let's Optimize Yardi for Your Business Today"
        description={
          <>
            <p>Yardi is powerful, but only when it's tailored to your goals. Let Global Guru show you how our personalized Yardi consultation can unlock its full value.</p>
            <p className="mb-0">Contact us now to book your free consultation. Start building a better, smarter real estate operation with trusted Yardi consulting from Global Guru.</p>
          </>
        }
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />

      {/* FAQ moved after CTA */}
      <section className="faq-section py-5">
        <Container>
          <FAQ 
            faqs={faqs} 
            title="FAQs About Our Yardi Consultation Services"
            subtitle="Find answers to common questions about our Yardi consulting services"
            themeColor="#0066cc"
          />
        </Container>
      </section>
    </div>
  );
});

YardiConsulting.displayName = 'YardiConsulting';
export default YardiConsulting;