import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ContactForm from '../../components/forms/ContactForm';
import DataExpertise from '../../components/sections/DataExpertise';
import CTA from '../../components/sections/CTA';
import FAQ from '../../components/sections/FAQ';
import PortfolioList from '../../components/sections/Portfolio';
// Images
import landingBanner from '../../assets/images/landing-banner.webp';
import leaseAccountingImg from '../../assets/images/8th.avif';
import complianceImg from '../../assets/images/11th.avif';
import './LeaseAccounting.scss';

const LeaseAccounting = () => {
  const services = [
    {
      icon: 'bi-file-earmark-text',
      title: 'Lease Abstraction',
      description: 'Extract critical lease data points to ensure compliance with accounting standards'
    },
    {
      icon: 'bi-calculator',
      title: 'Lease Classification',
      description: 'Accurately classify leases as operating or finance leases under ASC 842 and IFRS 16'
    },
    {
      icon: 'bi-graph-up',
      title: 'ROU Asset Calculation',
      description: 'Precise calculation of right-of-use assets and lease liabilities'
    },
    {
      icon: 'bi-clock-history',
      title: 'Lease Modifications',
      description: 'Handle lease changes with proper accounting treatment'
    }
  ];

  // New "What We Bring To The Table" services
  const whatWeOffer = [
  {
    icon: 'bi-file-earmark-text', // icon suggestion for abstraction
    title: 'Lease Abstraction',
    description: 'Extract key lease terms—like dates, rent schedules, and renewal clauses—into clear, actionable summaries that save time, support strategic decisions, and enhance efficiency.'
  },
  {
    icon: 'bi-search', // appropriate for due diligence
    title: 'Due Diligence',
    description: 'Ensure every lease document is complete and accurate—minimizing legal risks, preventing surprises, and fostering trustworthy lease portfolios through meticulous verification.'
  },
  {
    icon: 'bi-cloud-arrow-up', // data migration
    title: 'Lease Data Migration',
    description: 'Seamlessly migrate lease information between systems—preserving data integrity and reducing transition downtime, so your team can stay focused on operations.'
  },
  {
    icon: 'bi-calculator', // CAM reconciliation
    title: 'CAM Reconciliation',
    description: 'Review and reconcile Common Area Maintenance charges—detecting discrepancies and ensuring accuracy to prevent overpayments and improve cash flow control.'
  },
  {
    icon: 'bi-eyeglasses', // audit services
    title: 'Lease Audit Services',
    description: 'Identify financial or operational inconsistencies across your lease portfolio—helping uncover savings, enforce compliance, and optimize asset value.'
  },
  {
    icon: 'bi-globe', // multilingual leases
    title: 'Multilingual Leases',
    description: 'Handle leases in multiple languages with precision—bridging linguistic barriers accurately so global lease operations remain consistent and secure.'
  }
];


  const differenceItems = [
    { icon: 'bi-check-circle', text: 'ASC 842 & IFRS 16 Compliance' },
    { icon: 'bi-currency-dollar', text: 'Reduced Implementation Costs' },
    { icon: 'bi-file-earmark-bar-graph', text: 'Improved Financial Reporting' },
    { icon: 'bi-database-check', text: 'Accurate Lease Data' },
    { icon: 'bi-people', text: 'Dedicated Lease Experts' },
    { icon: 'bi-puzzle', text: 'Software Integration' }
  ];

  const leaseAdminServices = [
    {
      title: 'Lease Data Abstraction and Multi-Lingual Support',
      description: 'We extract critical data from lease agreements and structure it into usable formats. Our lease admin and multi-lingual abstraction team can handle global documents in English, Spanish, French, German, and more. This ensures your portfolio remains standardized and centralized.'
    },
    {
      title: 'Lease Management and Compliance',
      description: 'We track lease milestones including renewals, rent escalations, CAM reconciliations, and termination clauses. Our systems are built to manage alerts, documents, and workflows so that you never miss a critical update.'
    },
    {
      title: 'Document Management',
      description: 'Centralized digital storage allows your team to access any lease document securely, from any location. We tag, organize, and classify every file to make retrieval easy and audit processes stress-free.'
    },
    {
      title: 'Custom Reporting',
      description: 'With our lease administration platform, you receive reports that are tailored to your organization\'s structure. These include rent rolls, financial obligations, variance reports, and trend analyses for executive teams.'
    }
  ];

  const accountingServices = [
    {
      title: 'Financial Statement Preparation',
      description: 'We calculate right-of-use assets, liabilities, amortization, and interest expenses for capitalized leases. Our team works alongside your finance department or external auditors to ensure alignment with your chart of accounts and financial policies.'
    },
    {
      title: 'Lease Modifications and Reassessments',
      description: 'When terms change, we update lease schedules and recalculate journal entries to reflect the revised arrangement. Whether it\'s a contract extension or a partial termination, our accounting support keeps your financials accurate and up to date.'
    },
    {
      title: 'ASC 842 and IFRS 16 Compliance',
      description: 'We help organizations meet the requirements of the latest accounting standards by preparing compliant calculations, disclosures, and footnotes. Our team ensures your auditors have the documentation and clarity they need.'
    }
  ];

  const faqs = [
    {
      question: "What does your lease administration service cover?",
      answer: "Our lease administration services include lease abstraction, tracking, and monitoring of critical lease terms, renewals, rent escalations, and compliance deadlines. We help reduce risk, avoid missed deadlines, and ensure landlords and tenants are always aligned."
    },
    {
      question: "How do you handle multilingual lease administration?",
      answer: "Our team provides multilingual lease abstraction and review, making sure important lease obligations are clear and accurate in every language. This ensures global investors and tenants can operate with full transparency."
    },
    {
      question: "Do you support lease due diligence during acquisitions?",
      answer: "Yes. We provide complete lease audits and due diligence services during acquisitions or mergers. Our lease administration experts validate lease data, identify risks, and ensure a smooth transition of assets."
    }
  ];

  return (
    <div className="lease-accounting-page">
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
          <Row className="align-items-start">
            <Col lg={8} className="pe-lg-5">
              <motion.div 
                className="hero-content text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h4 className="subtitle fs-5 fw-semibold mb-4 text-uppercase">Professional Lease Administration Services</h4>
                <h1 className="title display-5 fw-bold mb-4">ASC 842 & IFRS 16 compliant solutions for accurate lease portfolio management</h1>
                <ul className="benefits-list ps-0">
                  <li>Preparation and delivery of comprehensive lease reports</li>
                  <li>Thorough review of lease agreements and supporting documents</li>
                  <li>Accurate tracking and documentation of all lease-related expenses</li>
                  <li>Personalized lease accounting solutions for your business</li>
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
                  formTitle="Lease Accounting Consultation"
                  showPrivacyPolicy={true}
                  recaptchaSiteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.section>

      {/* Why Lease Accounting Matters Section */}
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
                  Why Choose Global Guru for Lease Admin/Accounting
                </h2>
                <p className="section-text text-muted">
                  At Global Guru, our priority is to make lease management easier, faster, and more reliable. We bring structure to your lease operations and help you gain real-time control over your financials and obligations.
                </p>
                <p className="section-text text-muted">
                  Here is why clients trust us for lease admin/accounting:
                </p>
                <ul className="benefits-list">
                  <li>Dedicated experts in lease abstraction, accounting, and compliance</li>
                  <li>End-to-end support for every lease lifecycle stage</li>
                  <li>Seamless integration with your ERP or lease management platform</li>
                  <li>Accurate, audit-ready financial data</li>
                  <li>Timely alerts and reporting to avoid missed deadlines or penalties</li>
                </ul>
                <p className="section-text text-muted">
                  We help reduce manual workload, eliminate costly errors, and ensure your leases align with current accounting standards.
                </p>
              </motion.div>
            </Col>
            <Col md={5}>
              <motion.img 
                src={leaseAccountingImg} 
                alt="Lease Accounting" 
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

      {/* What We Bring To The Table Section */}
      <section className="what-we-offer-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title display-6 fw-bold mb-4">What We Bring To The Table</h2>
            <p className="section-subtitle mx-auto mb-5" style={{maxWidth: '800px', fontSize: '1.1rem', color: '#64748b'}}>
              A streamlined lease management process that keeps your team organized and your data clear, ensuring full compliance with lease obligations and delivering better outcomes through data-driven insights.
            </p>
          </motion.div>
          
          {/* Desktop Grid View */}
          <Row className="d-none d-md-flex g-4">
            {whatWeOffer.map((service, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  className="what-we-offer-item bg-white h-100 p-4 rounded-3 shadow-sm"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="d-flex align-items-start mb-3">
                    <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 flex-shrink-0 me-3">
                      <i className={`bi ${service.icon} fs-2 text-primary`}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">{service.title}</h3>
                  </div>
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
              {whatWeOffer.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="what-we-offer-item h-100 p-4 bg-white rounded-3 shadow-sm">
                    <div className="d-flex align-items-start mb-3">
                      <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 flex-shrink-0 me-3">
                        <i className={`bi ${service.icon} fs-2 text-primary`}></i>
                      </div>
                      <h3 className="h5 fw-bold mb-0">{service.title}</h3>
                    </div>
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
            <h2 className="section-title text-center display-6 fw-bold mb-5">Our Differentiators</h2>
            <p className="section-subtitle text-center mb-5 mx-auto">
              What sets us apart in lease accounting and administration
            </p>
          </motion.div>
          
          <div className="d-none d-lg-flex justify-content-center">
            <div className="difference-container">
              {differenceItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="difference-item bg-white rounded-3 shadow-sm text-center p-3"
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

          {/* Mobile Carousel */}
          <div className="d-lg-none">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={20}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {differenceItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="difference-item h-100 p-4 bg-white rounded-3 shadow-sm text-center">
                    <div className="difference-icon mb-3">
                      <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex">
                        <i className={`bi ${item.icon} fs-3 text-primary`}></i>
                      </div>
                    </div>
                    <p className="mb-0 fw-medium">{item.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>

      {/* Compliance Section */}
      <section className="compliance-section py-6 bg-light">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={5}>
              <motion.img 
                src={complianceImg} 
                alt="Compliance Services" 
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
                <h2 className="section-title display-6 fw-bold mb-4">Benefits of Our Lease Admin/Accounting Services</h2>
                <p className="section-text text-muted">
                  Partnering with Global Guru gives your organization control, visibility, and peace of mind. With our support, clients experience:
                </p>
                <ul className="benefits-list">
                  <li>Increased lease data accuracy and organization</li>
                  <li>Faster lease audits and month-end close</li>
                  <li>Reduced risk of non-compliance or lease disputes</li>
                  <li>Clear financial visibility with custom dashboards</li>
                  <li>Seamless transition from outdated manual systems to fully automated platforms</li>
                </ul>
                <p className="section-text text-muted">
                  Our team becomes an extension of yours, working behind the scenes to protect your business from financial surprises and operational headaches.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Lease Administration Services Section */}
      <section className="lease-admin-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center display-6 fw-bold mb-4">
              Complete Lease Administration Services That Fit Your Business
            </h2>
            <p className="section-subtitle text-center mb-5 mx-auto">
              Our lease administration services cover every detail, from document abstraction to real-time monitoring and reporting.
            </p>
          </motion.div>
          
          <PortfolioList items={leaseAdminServices} />
        </Container>
      </section>

      {/* Comprehensive Lease Accounting Section */}
      <section className="comprehensive-accounting-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center display-6 fw-bold mb-4">
              Comprehensive Lease Accounting Services That Ensure Accuracy
            </h2>
            <p className="section-subtitle text-center mb-5 mx-auto">
              Lease accounting is more complex than ever, especially with ASC 842, IFRS 16, and GASB 87 regulations.
            </p>
          </motion.div>
          
          <PortfolioList items={accountingServices} />
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <Container>
          <FAQ 
            faqs={faqs}
            title="FAQs About Lease Admin/Accounting"
            subtitle="Get answers to common questions about our lease services"
            themeColor="#0056b3"
          />
        </Container>
      </section>

      <DataExpertise />
      
      {/* CTA Section */}
      <CTA
        title="Take Control of Your Leases Today"
        description="Let Global Guru take the stress out of lease admin/accounting with smart, scalable solutions that grow with your business. From abstraction to compliance, our team has the tools and experience to deliver results. Contact us today for a free consultation and find out why we are the trusted choice for lease administration services and lease accounting in the USA."
        buttonText="Get Started Now"
        buttonLink="/contact"
      />
    </div>
  );
};

export default LeaseAccounting;