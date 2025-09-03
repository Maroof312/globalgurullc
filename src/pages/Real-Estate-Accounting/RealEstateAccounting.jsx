import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ContactForm from '../../components/forms/ContactForm';
import FinancialServices from '../../components/sections/FinancialServices';
import DataExpertise from '../../components/sections/DataExpertise';
import CTA from '../../components/sections/CTA';
import PortfolioList from '../../components/sections/Portfolio';
import FAQ from '../../components/sections/FAQ';
import { Helmet } from 'react-helmet-async'; // Added Helmet import
// Images
import landingBanner from '../../assets/images/landing-banner.webp';
import realEstateImg from '../../assets/images/1st.avif';
import reportingImg from '../../assets/images/2nd.avif';
import './RealEstateAccounting.scss';

const RealEstateAccounting = () => {
  const services = [
    {
      icon: 'bi-building',
      title: 'Property Accounting',
      description: 'Comprehensive accounting for all property types and portfolios'
    },
    {
      icon: 'bi-pie-chart',
      title: 'Financial Reporting',
      description: 'Customized reports for investors and stakeholders'
    },
    {
      icon: 'bi-cash-stack',
      title: 'Accounts Payable',
      description: 'Vendor payment processing and expense management'
    },
    {
      icon: 'bi-receipt',
      title: 'Accounts Receivable',
      description: 'Tenant billing and collections management'
    }
  ];

  const differenceItems = [
    { icon: 'bi-graph-up-arrow', text: '30% Cost Reduction' },
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

  return (
    <div className="real-estate-accounting-page">
      {/* Added Meta Tags with React Helmet */}
      <Helmet>
        <title>Real Estate Accounting Services | Outsourced Finance - Global Guru</title>
        <meta 
          name="description" 
          content="Get Expert real estate accounting, fund accounting, lease & CAM reconciliation, tax compliance and investor reporting service. Book a free consultation with Global Guru" 
        />
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
            loading="lazy"
            className="background-image w-100 h-100 object-fit-cover"
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
                <h1 className="title display-5 fw-bold mb-4">Specialized financial solutions for property owners and investors</h1>
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
                  recaptchaSiteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
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
                  Optimize Your Property Finances
                </h2>
                <p className="section-text text-muted">
                  Real estate accounting requires specialized expertise to properly track income, 
                  expenses, and property performance. Our team provides accurate, timely financials 
                  so you can make informed investment decisions and maximize your returns.
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
            <h2 className="section-title text-center display-6 fw-bold mb-4">Our Real Estate Accounting Services</h2>
            <p className="section-subtitle text-center mb-5 mx-auto">
              Comprehensive financial solutions tailored to your property portfolio needs
            </p>
          </motion.div>
          
          <Row className="d-none d-md-flex g-4">
            {services.map((service, index) => (
              <Col lg={3} key={index}>
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
            ))}
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

      {/* Difference Section */}
      <section className="difference-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center display-6 fw-bold mb-4">Our Competitive Edge</h2>
            <p className="section-subtitle text-center mb-5 mx-auto">
              What sets us apart in real estate accounting and financial management
            </p>
          </motion.div>
          
          {/* Desktop Layout */}
          <div className="d-none d-lg-flex justify-content-center">
            <div className="difference-container">
              {differenceItems.map((item, index) => (
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
              ))}
            </div>
          </div>

          {/* Mobile Carousel - Fixed with equal height */}
          <div className="d-lg-none">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={15}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {differenceItems.map((item, index) => (
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
              ))}
            </Swiper>
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
            <p className="text-center mb-5 mx-auto" style={{ maxWidth: '800px' }}>
              We provide full-service real estate accounting for property companies of all sizes. From monthly bookkeeping to fund-level analysis, our services are designed to keep your financial operations clean, transparent, and optimized.
            </p>
          </motion.div>
          
          <PortfolioList items={portfolioItems} />
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5 bg-light">
        <Container>
          <FAQ 
            faqs={faqs}
            title="FAQs About Real Estate Accounting"
            subtitle="Get answers to common questions about our property accounting services"
            themeColor="#0056b3"
          />
        </Container>
      </section>

      <FinancialServices />
      <DataExpertise />
      <CTA 
        title="Ready to Simplify Your Real Estate Accounting?"
        description={
          <>
            <p>At Global Guru, we bring structure, accuracy, and insight to your financial operations.</p>
            <p className="mb-0">Contact us today for a free consultation and discover why clients across the country trust Global Guru for their property accounting services and financial reporting needs.</p>
          </>
        }
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  );
};

export default RealEstateAccounting;