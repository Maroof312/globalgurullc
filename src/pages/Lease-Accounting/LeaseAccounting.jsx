import { Container, Row, Col } from 'react-bootstrap';
import { memo, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import ContactForm from '../../components/forms/ContactForm';
import { config } from '../../config';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import { Helmet } from 'react-helmet-async';
import DataExpertise from '../../components/sections/DataExpertise';
import CTA from '../../components/sections/CTA';
import FAQ from '../../components/sections/FAQ';
import PortfolioList from '../../components/sections/Portfolio';

// Images
import landingBanner from '../../assets/images/landing-banner.webp';
import leaseAccountingImg from '../../assets/images/8th.avif';
import complianceImg from '../../assets/images/11th.avif';
import './LeaseAccounting.scss';

// Static data - memoized outside component
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
    icon: 'bi-file-earmark-text',
    title: 'Lease Abstraction',
    description: 'Extract key lease terms—like dates, rent schedules, and renewal clauses—into clear, actionable summaries that save time, support strategic decisions, and enhance efficiency.'
  },
  {
    icon: 'bi-search',
    title: 'Due Diligence',
    description: 'Ensure every lease document is complete and accurate—minimizing legal risks, preventing surprises, and fostering trustworthy lease portfolios through meticulous verification.'
  },
  {
    icon: 'bi-cloud-arrow-up',
    title: 'Lease Data Migration',
    description: 'Seamlessly migrate lease information between systems—preserving data integrity and reducing transition downtime, so your team can stay focused on operations.'
  },
  {
    icon: 'bi-calculator',
    title: 'CAM Reconciliation',
    description: 'Review and reconcile Common Area Maintenance charges—detecting discrepancies and ensuring accuracy to prevent overpayments and improve cash flow control.'
  },
  {
    icon: 'bi-eyeglasses',
    title: 'Lease Audit Services',
    description: 'Identify financial or operational inconsistencies across your lease portfolio—helping uncover savings, enforce compliance, and optimize asset value.'
  },
  {
    icon: 'bi-globe',
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

const LeaseAccounting = memo(() => {
  // Memoize service items
  const serviceItems = useMemo(() => 
    services.map((service, index) => (
      <Col lg={3} key={index}>
        <motion.div
          className="service-item bg-white h-100 p-3 rounded shadow-sm text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="service-icon mb-3">
            <i className={`bi ${service.icon} fs-1 text-primary`}></i>
          </div>
          <h3 className="h5 fw-bold">{service.title}</h3>
          <p className="mb-0 text-muted">{service.description}</p>
        </motion.div>
      </Col>
    )), []);

  // Memoize what we offer items
  const whatWeOfferItems = useMemo(() => 
    whatWeOffer.map((service, index) => (
      <Col lg={4} md={6} key={index}>
        <motion.div
          className="what-we-offer-item bg-white h-100 p-4 rounded-3 shadow-sm"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="d-flex align-items-start mb-3">
            <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 flex-shrink-0 me-3">
              <i className={`bi ${service.icon} fs-2 text-primary`}></i>
            </div>
            <h3 className="h5 fw-bold mb-0">{service.title}</h3>
          </div>
          <p className="mb-0 text-muted text-start">{service.description}</p>
        </motion.div>
      </Col>
    )), []);

  // Memoize difference items for desktop
  const desktopDifferenceItems = useMemo(() => 
    differenceItems.map((item, index) => (
      <motion.div
        key={index}
        className="difference-item bg-white rounded-3 shadow-sm text-center p-3"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "0px" }}
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
    )), []);

  // Memoize what we offer carousel items
  const whatWeOfferCarouselItems = useCallback(() => 
    whatWeOffer.map((service, index) => (
      <SwiperSlide key={index}>
        <div className="what-we-offer-item h-100 p-4 bg-white rounded-3 shadow-sm">
          <div className="d-flex align-items-start mb-3">
            <div className="icon-wrapper bg-primary bg-opacity-10 rounded-circle p-3 flex-shrink-0 me-3">
              <i className={`bi ${service.icon} fs-2 text-primary`}></i>
            </div>
            <h3 className="h5 fw-bold mb-0">{service.title}</h3>
          </div>
          <p className="mb-0 text-muted text-start">{service.description}</p>
        </div>
      </SwiperSlide>
    )), []);

  return (
    <div className="lease-accounting-page">
      <LinkedInInsightTag />
      <Helmet>
        <title>Lease Administration & Accounting Services | Global Guru</title>
        <link rel="canonical" href="https://globalgurullc.com/lease-admin-accounting-services" />
        <meta
          name="description"
          content="Global Guru offers end-to-end lease admin & accounting support, including compliance, abstraction, reporting & automation for real estate businesses. Book a Consultation Today!"
        />
        {/* Preload critical fonts */}
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
          <Row className="align-items-start">
            <Col lg={8} className="pe-lg-5">
              <motion.div 
                className="hero-content text-white"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h4 className="subtitle fs-5 fw-semibold mb-4 text-uppercase">Professional Lease Administration Services</h4>
                <h1 className="title display-5 fw-bold mb-4">Turn Your Leases Into Assets, Not Headaches</h1>
                <p className='section-text text-start'>
                  Behind every property portfolio lies a stack of leases. Some are simple, others read like novels — full of deadlines, escalations, and hidden clauses. Managing them is not just about filing paperwork. It is about protecting your investment, keeping tenants happy, and making sure no dollar is left on the table.
                  At Global Guru Solution, our lease administration services are built to do just that. We help property owners and managers transform their leases from static documents into living assets that create value every single day.
                </p>
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
                  recaptchaSiteKey={config.recaptchaSiteKey}
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
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title display-6 fw-bold mb-4 text-start">
                  Lease Administration and Accounting Made Easy with Global Guru
                </h2>
                <p className="section-text text-muted text-start">
                  Managing leases does not have to be complicated. At Global Guru, we simplify lease administration and lease accounting so you can focus on running your business with confidence. From Move in Move out support to compliance and reporting, we handle the details while you stay in control.
                </p>
                <p className="section-text text-muted text-start">
                  Why Businesses Choose Global Guru:
                </p>
                <ul className="benefits-list text-start">
                  <li><b>Lease Administration Expertise:</b> Skilled professionals in lease abstraction, accounting, compliance, and Move in Move out management.</li>
                  <li><b>Complete Lifecycle Support:</b> Guidance through every stage of the lease lifecycle, from onboarding to closeout.</li>
                  <li><b>ERP and Platform Integration:</b> Seamless connections with your ERP or lease management software to keep processes efficient.</li>
                  <li><b>Audit Ready Financials:</b> Accurate and compliant data prepared for audits at any time.</li>
                  <li><b>Timely Alerts and Reporting:</b> Stay ahead of renewals, deadlines, and compliance requirements with proactive updates.</li>
                  <li><b>Error-Free Operations:</b> Reduce manual work, eliminate costly mistakes, and align with the latest accounting standards.</li>
                </ul>
                <p className="section-text text-muted text-start">
                  With Global Guru, you get clarity, compliance, and confidence in every lease.
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
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8 }}
                width={500}
                height={400}
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
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title display-6 fw-bold mb-4">What We Bring To The Table</h2>
            <p className="section-subtitle mx-auto mb-5 text-start">
              A streamlined lease management process that keeps your team organized and your data clear, ensuring full compliance with lease obligations and delivering better outcomes through data-driven insights.
            </p>
          </motion.div>
          
          {/* Desktop Grid View */}
          <Row className="d-none d-md-flex g-4">
            {whatWeOfferItems}
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
              {whatWeOfferCarouselItems()}
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
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center display-6 fw-bold mb-5">Our Differentiators</h2>
            <p className="section-subtitle text-center mb-5 mx-auto text-start text-md-center">
              What sets us apart in lease accounting and administration
            </p>
          </motion.div>
          
          <div className="d-none d-lg-flex justify-content-center">
            <div className="difference-container">
              {desktopDifferenceItems}
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
              {mobileDifferenceItems}
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
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8 }}
                width={500}
                height={400}
              />
            </Col>
            <Col lg={7}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title display-6 fw-bold mb-4 text-start">Benefits of Our Lease Admin/Accounting Services</h2>
                <p className="section-text text-muted text-start">
                  Partnering with Global Guru gives your organization control, visibility, and peace of mind. With our support, clients experience:
                </p>
                <ul className="benefits-list text-start">
                  <li>Increased lease data accuracy and organization</li>
                  <li>Faster lease audits and month-end close</li>
                  <li>Reduced risk of non-compliance or lease disputes</li>
                  <li>Clear financial visibility with custom dashboards</li>
                  <li>Seamless transition from outdated manual systems to fully automated platforms</li>
                </ul>
                <p className="section-text text-muted text-start">
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
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center display-6 fw-bold mb-4">
              Complete Lease Administration Services That Fit Your Business
            </h2>
            <p className="section-subtitle mb-5 mx-auto text-start">
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
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-center display-6 fw-bold mb-4">
              Comprehensive Lease Accounting Services That Ensure Accuracy
            </h2>
            <p className="section-subtitle mb-5 mx-auto text-start">
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
        description="Let Global Guru take the stress out of lease admin/accounting with smart, scalable solutions that grow with your business. From abstraction to compliance, our team has the tools and experience to deliver results. Contact us today for a free consultation and find out why we are the trusted choice for lease administration services and lease accounting in the world."
        buttonText="Get Started Now"
        buttonLink="/contact"
      />
    </div>
  );
});

LeaseAccounting.displayName = 'LeaseAccounting';
export default LeaseAccounting;