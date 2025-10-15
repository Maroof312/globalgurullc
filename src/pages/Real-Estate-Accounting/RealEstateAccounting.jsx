import { Container, Row, Col } from 'react-bootstrap';
import { memo, useMemo, lazy, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ContactForm from '../../components/forms/ContactForm';
import { config } from '../../config'
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import useAnalytics from '../../components/hooks/useAnalytics';
import { Helmet } from 'react-helmet-async';
// Lazy load heavy components
const FinancialServices = lazy(() => import('../../components/sections/FinancialServices'));
const DataExpertise = lazy(() => import('../../components/sections/DataExpertise'));
const CTA = lazy(() => import('../../components/sections/CTA'));
const PortfolioList = lazy(() => import('../../components/sections/Portfolio'));
const AccountingProcess = lazy(() => import('../../components/sections/AccountingProcess'));
const FAQ = lazy(() => import('../../components/sections/FAQ'));
const FamilyOfficeFAQ = lazy(() => import('../../components/sections/FamilyOfficeFAQ'));
const TrustedBySection = lazy(() => import('../../components/sections/TrustedBySection'));
// Images
import landingBanner from '../../assets/images/landing-banner.webp';
import realEstateImg from '../../assets/images/1st.avif';
import reportingImg from '../../assets/images/2nd.avif';
import './RealEstateAccounting.scss';

// Simple loader component
const Loader = () => <div className="d-flex justify-content-center py-4"><div className="spinner-border text-primary" role="status"></div></div>;

// Static data - memoized outside component
const services = [
  {
    icon: 'bi-cash-coin',
    title: 'Income Tracking',
    description: 'We record and reconcile rental income along with any additional revenue to give you a complete financial picture'
  },
  {
    icon: 'bi-graph-down',
    title: 'Expense Management',
    description: 'All operating costs, utilities, maintenance, and vendor payments are carefully captured and organized'
  },
  {
    icon: 'bi-bank',
    title: 'Bank Reconciliation',
    description: 'We review and match bank statements with your accounting records so you always know your numbers are correct'
  },
  {
    icon: 'bi-journal-text',
    title: 'Tenant Ledger Updates',
    description: 'Tenant balances, security deposits, and adjustments are kept up to date for complete transparency'
  },
  {
    icon: 'bi-receipt',
    title: 'Accounts Payable & Receivable',
    description: 'Bills, vendor payments, and tenant collections are managed smoothly so nothing is missed'
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Budgeting & Forecasting',
    description: 'We prepare financial plans and projections that help you stay ahead and maximize returns'
  },
  {
    icon: 'bi-file-earmark-text',
    title: 'Financial Reporting',
    description: 'Each month you receive clear statements, cash flow reports, and performance insights that are audit ready'
  },
  {
    icon: 'bi-shield-check',
    title: 'Compliance Checks',
    description: 'Your financials are reviewed to ensure they align with accounting standards and lease obligations'
  }
];

const differenceItems = [
  { icon: 'bi-graph-up-arrow', text: '50% Cost Reduction' },
  { icon: 'bi-check-all', text: '99.9% Accuracy' },
  { icon: 'bi-people', text: 'Dedicated Team' },
  { icon: 'bi-arrow-up', text: 'Scalable Solutions' },
  { icon: 'bi-shield-check', text: 'Audit Ready' },
  { icon: 'bi-lightning', text: 'Quick Implementation' }
];

const portfolioItems = [
  {
    title: 'Property-Level Accounting',
    description: 'We track and report income and expenses for each property, handle reconciliations, manage vendor payments, and generate rent rolls and P&L statements. Our team ensures that every asset\'s performance is measured accurately.'
  },
  {
    title: 'Lease Accounting',
    description: 'Accurate lease administration is essential for maintaining healthy landlord-tenant relationships and ensuring compliance with accounting standards. Our lease accounting services cover every detail from recording and tracking lease terms, rent escalations, and concessions to managing renewals, terminations, and recoveries. We ensure that all financial aspects of your leases are reported precisely, helping you avoid costly errors, stay compliant with ASC 842 and IFRS 16 regulations, and make informed decisions about your portfolio.'
  },
  {
    title: 'CAM Reconciliation',
    description: 'Our CAM (Common Area Maintenance) reconciliation services protect both landlords and tenants from billing discrepancies and disputes while promoting transparency and trust. We review all shared expense charges, compare them against actual usage, and adjust accordingly to ensure fairness. By providing clear, detailed statements, we help you recover the correct amounts from tenants, avoid overbilling, and maintain long-term, positive relationships with all stakeholders. Whether you manage retail, office, or mixed-use properties, our process ensures accuracy and compliance every step of the way.'
  },
  {
    title: 'Real Estate Fund Accounting',
    description: 'If you manage pooled capital across multiple deals, our real estate fund accounting services offer complete financial transparency. We track investor contributions, distributions, waterfall structures, and NAV calculations with precision.'
  },
  {
    title: 'Financial Statement Preparation',
    description: 'Our team prepares GAAP-compliant financials, balance sheets, and income statements. These reports are customized for your stakeholders and include all supporting documentation required for year-end reviews and audits.'
  },
  {
    title: 'Real Estate Tax Compliance',
    description: 'Working with a real estate tax accountant from Global Guru means staying ahead of IRS deadlines and state requirements. We prepare and file entity-level returns, manage 1031 exchange reporting, and track depreciation schedules for maximum benefit.'
  }
];

const faqs = [
  {
    question: "What do your outsourced property accounting services include?",
    answer: "Our outsourced property accounting services cover the full cycle of real estate financial management. This includes accounts receivable, accounts payable, complex bank reconciliations, monthly financial reporting, budgeting, and compliance tracking. By outsourcing property accounting, clients gain accurate reports, cost savings, and streamlined financial operations. "
  },
  {
    question: " How do you ensure accuracy in property accounting reports?",
    answer: "We use standardized workflows, multi-level review processes, and advanced property management platforms such as Yardi and MRI. This ensures complete accuracy, transparency, and consistency in every financial report we deliver."
  },
  {
    question: "Can you integrate outsourced property accounting with my existing software?",
    answer: "Yes. Our team has expertise in Yardi, MRI, RealPage, and QuickBooks. We integrate seamlessly into your preferred accounting system to maintain efficiency while reducing errors and manual work."
  }
];

const RealEstateAccounting = memo(() => {

  useAnalytics();

  // Memoize service items
  const serviceItems = useMemo(() => 
    services.map((service, index) => (
      <Col lg={3} md={6} key={index}>
        <motion.div
          className="service-item bg-white h-100 p-4 rounded-3 shadow-sm text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="service-icon mb-4">
            <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex">
              <i className={`bi ${service.icon} fs-2 text-primary`}></i>
            </div>
          </div>
          <h3 className="h5 fw-bold mb-3">{service.title}</h3>
          <p className="mb-0 text-muted">{service.description}</p>
        </motion.div>
      </Col>
    )), []);

  // Memoize difference items for desktop
  const desktopDifferenceItems = useMemo(() => 
    differenceItems.map((item, index) => (
      <motion.div
        key={index}
        className="difference-item bg-white rounded-3 shadow-sm text-center p-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <div className="difference-icon mb-3">
          <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex">
            <i className={`bi ${item.icon} fs-3 text-primary`}></i>
          </div>
        </div>
        <p className="mb-0 fw-medium">{item.text}</p>
      </motion.div>
    )), []);

  // Memoize difference items for mobile
  const mobileDifferenceItems = useMemo(() => 
    differenceItems.map((item, index) => (
      <SwiperSlide key={index} style={{ height: 'auto' }}>
        <div className="difference-item h-100 p-3 bg-white rounded-3 shadow-sm text-center d-flex flex-column justify-content-center" style={{ minHeight: '180px' }}>
          <div className="difference-icon mb-2 mx-auto">
            <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-2 d-inline-flex">
              <i className={`bi ${item.icon} fs-4 text-primary`}></i>
            </div>
          </div>
          <p className="mb-0 fw-medium fs-6">{item.text}</p>
        </div>
      </SwiperSlide>
    )), []);

  return (
    <div className="real-estate-accounting-page">
      <LinkedInInsightTag />
      <Helmet>
        <title>Real Estate Accounting Services | Outsourced Finance - Global Guru</title>
        <link rel="canonical" href="https://globalgurullc.com/real-estate-accounting-services" />
        <meta 
          name="description" 
          content="Get Expert real estate accounting, fund accounting, lease & CAM reconciliation, tax compliance and investor reporting service. Book a free consultation with Global Guru" 
        />
        {/* Preload critical fonts to prevent layout shift */}
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" as="style" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      {/* Hero Banner Section */}
      <motion.section 
        className="hero-banner position-relative py-5 py-lg-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-background position-absolute top-0 start-0 w-100 h-100">
          <img 
            src={landingBanner}
            alt="Background" 
            loading="eager"
            className="background-image w-100 h-100 object-fit-cover"
            width={1920}
            height={1080}
          />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>
        <Container>
          <Row className="align-item-start">
            <Col lg={8} className="pe-lg-5">
              <motion.div 
                className="hero-content text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h4 className="subtitle fs-5 fw-semibold mb-4 text-uppercase">Professional Real Estate Accounting</h4>
                <h1 className="hero-title display-5 fw-bold mb-4">Smarter Real Estate Accounting. Stronger Returns.</h1>
                <p className="hero-description fs-6 mb-4">
                  At Global Guru, we take the stress out of property finances. Our team looks after all the details so you can focus on growing your investments with confidence. Every month, we make sure your accounts are accurate, your reports are clear, and your decisions are backed by reliable data.
                </p>
                <ul className="benefits-list ps-0">
                  <li>50% reduction in accounting costs</li>
                  <li>99.9% accuracy guarantee</li>
                  <li>Real-time financial visibility</li>
                  <li>Dedicated accounting team</li>
                </ul>
              </motion.div>
            </Col>
            <Col lg={4}>
              <motion.div
                className="bg-white rounded-3 p-4 shadow"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h3 className="text-center mb-4 fw-bold">Get Expert Advice</h3>
                <ContactForm 
                  formTitle="Real Estate Accounting Consultation"
                  showPrivacyPolicy={true}
                  recaptchaSiteKey={config.recaptchaSiteKey}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Why Real Estate Accounting Matters Section */}
      <section className="why-section py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={7}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title display-6 fw-bold mb-4">
                  Monthly Property Accounting with Global Guru
                </h2>
                <p className="section-text text-muted">
                  With Global Guru, your real estate portfolio is supported by accurate numbers, timely reports, and smart insights. You get more than accounting. You get peace of mind and the confidence to make better financial decisions every day.
                </p>
              </motion.div>
            </Col>
            <Col md={5}>
              <motion.img 
                src={realEstateImg} 
                alt="Real Estate Accounting" 
                loading="lazy"
                className="img-fluid rounded-3 shadow"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                width={500}
                height={400}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title display-6 fw-bold mb-4">Our Real Estate Accounting Services</h2>
            <p className="section-subtitle mb-5 mx-auto">
              Comprehensive financial solutions tailored to your property portfolio needs
            </p>
          </motion.div>
          
          <Row className="d-none d-md-flex g-4">
            {serviceItems}
          </Row>

          {/* Mobile Carousel */}
          <div className="d-md-none">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                576: { slidesPerView: 2 }
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-item h-100 p-4 bg-white rounded-3 shadow-sm text-center">
                    <div className="service-icon mb-4">
                      <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex">
                        <i className={`bi ${service.icon} fs-2 text-primary`}></i>
                      </div>
                    </div>
                    <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                    <p className="mb-0 text-muted">{service.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>

      {/* Process Section moved up after Services */}
      <Suspense fallback={<Loader />}>
  <AccountingProcess />
</Suspense>

      {/* Why Global Guru Section */}
      <Suspense fallback={<Loader />}>
        <TrustedBySection pageType="realEstate" />
      </Suspense>

      {/* Difference Section - Smooth Scrolling */}
      <section className="difference-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title display-6 fw-bold mb-4">Our Competitive Edge</h2>
            <p className="section-subtitle text-center mb-5 mx-auto">
              What sets us apart in real estate accounting and financial management
            </p>
          </motion.div>
          
          {/* Smooth Scrolling Container */}
          <div className="difference-scroll-container">
            <div className="difference-scroll-track">
              {/* Duplicate array for seamless scrolling */}
              {[...differenceItems, ...differenceItems].map((item, index) => (
                <div key={index} className="difference-item bg-white rounded-3 shadow-sm text-center">
                  <div className="difference-icon mb-3">
                    <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex">
                      <i className={`bi ${item.icon} fs-3 text-primary`}></i>
                    </div>
                  </div>
                  <p className="mb-0 fw-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Reporting Section */}
      <section className="reporting-section py-6 bg-light">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <motion.img 
                src={reportingImg} 
                alt="Financial Reporting" 
                loading="lazy"
                className="img-fluid rounded-3 shadow"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                width={500}
                height={400}
              />
            </Col>
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title display-6 fw-bold mb-4">Investor-Grade Financial Reporting</h2>
                <p className="section-text text-muted">
                  Our financial reporting provides the clarity and detail investors demand, with 
                  customizable dashboards and performance metrics tailored to your specific needs.
                </p>
                <ul className="benefits-list">
                  <li>Monthly financial packages delivered on time</li>
                  <li>Custom dashboards with real-time metrics</li>
                  <li>Audit-ready documentation for all transactions</li>
                </ul>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Portfolio Services Section */}
      <section className="portfolio-services-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center display-6 fw-bold mb-4">
              Comprehensive Property Accounting Services
            </h2>
            <p className="mb-5 mx-auto" style={{ maxWidth: '800px' }}>
              We provide full-service real estate accounting for property companies of all sizes. From monthly bookkeeping to fund-level analysis, our services are designed to keep your financial operations clean, transparent, and optimized.
            </p>
          </motion.div>
          
          <Suspense fallback={<Loader />}>
            <PortfolioList 
              title="Comprehensive Property Accounting Services"
              items={portfolioItems} 
            />
          </Suspense>
        </Container>
      </section>

      <Suspense fallback={<Loader />}>
        <FinancialServices />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <DataExpertise />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <CTA 
          title="Ready to Simplify Your Real Estate Accounting?"
          description={
            <div>
              <p>At Global Guru, we bring structure, accuracy, and insight to your financial operations.</p>
              <p className="mb-0">Contact us today for a free consultation and discover why clients across the country trust Global Guru for their property accounting services and financial reporting needs.</p>
            </div>
          }
          buttonText="Schedule a Consultation"
          buttonLink="/contact"
        />
      </Suspense>

      {/* FAQ Section moved after CTA */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <Suspense fallback={<Loader />}>
            <FAQ 
              faqs={faqs}
              title="FAQs About Real Estate Accounting"
              subtitle="Get answers to common questions about our property accounting services"
              themeColor="#0056b3"
            />
          </Suspense>
        </Container>
      </section>
      <section>
        <Suspense fallback={<Loader />}>
          <FamilyOfficeFAQ/>
        </Suspense>
      </section>
    </div>
  );
});

RealEstateAccounting.displayName = 'RealEstateAccounting';
export default RealEstateAccounting;