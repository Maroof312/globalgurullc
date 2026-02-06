import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { lazy, Suspense } from 'react'; // Added Suspense import
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from '../../components/sections/Hero';
import MissionSection from '../../components/sections/Mission';
// import DataExpertise from '../../components/sections/DataExpertise';
import ServicesOverview from '../../components/sections/ServicesOverview';
import Industries from '../../components/sections/Industries';
import Testimonials from '../../components/sections/Testimonials';
import CTA from '../../components/sections/CTA';
import StatsCount from '../../components/sections/StatsCounter';
import TMDifference from '../../components/sections/DifferenceSection'
import DataFlowVisualization from '../../components/sections/DataFlowVisualization';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import useAnalytics from '../../components/hooks/useAnalytics';
import TrustedBySection from '../../components/sections/TrustedBySection';

// Add Loader component
const Loader = () => <div className="d-flex justify-content-center py-4"><div className="spinner-border text-primary" role="status"></div></div>;

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useAnalytics();

  // High-level services overview for Home page grid (links to service pages)
  const homeServicesOverview = [
    { title: 'Property Accounting', description: 'Monthly closes, reporting, and portfolio financials.', link: '/real-estate-accounting-services' },
    { title: 'CAM Reconciliation', description: 'Accurate CAM audits and tenant-ready statements.', link: '/cam-reconciliation-services' },
    { title: 'Lease Administration', description: 'Abstraction, compliance, and lifecycle management.', link: '/lease-admin-accounting-services' },
    { title: 'Accounting & Bookkeeping', description: 'Full-cycle bookkeeping and cash flow control.', link: '/accounting-and-bookkeeping' },
    { title: 'AR & AP Services', description: 'Receivables and payables optimized for cash flow.', link: '/ar-ap-services' },
    { title: 'ARGUS', description: 'Underwriting, valuations, and asset management.', link: '/argus' },
    { title: 'Yardi Consulting', description: 'Implementation, reporting, and optimization.', link: '/yardi-consultation-services' },
  ];

  return (
    <>
      {/* SEO & Analytics Tags */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Global Guru LLC | Commercial Real Estate Data Solutions</title>
        <meta 
          name="description" 
          content="Global Guru LLC provides expert CAM reconciliation, Yardi consulting, and data analytics for commercial real estate." 
        />
        {/* Google / Schema Markup */}
        <meta itemprop="name" content="Global Guru LLC" />
        <meta 
          itemprop="description" 
          content="Commercial real estate data solutions and consulting services." 
        />
        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content={import.meta.env.VITE_GSC_VERIFICATION_CODE} 
        />
        {/* Canonical Tag */}
        <link rel="canonical" href="https://globalgurullc.com/" />

        {/* ORGANIZATION SCHEMA (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Global Guru LLC",
              "url": "https://globalgurullc.com/",
              "logo": "https://globalgurullc.com/assets/Black-logo-CEPdcb01.webp",

              "description": "Providing innovative business solutions to help your company grow and succeed in today's competitive market.",

              "email": "info@globalgurullc.com",
              "telephone": "+1-845-497-6474",

              "address": {
                "@type": "PostalAddress",
                "streetAddress": "228 Park Ave S PMB 702068",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10003",
                "addressCountry": "US"
              },

              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-845-497-6474",
                "contactType": "customer support",
                "areaServed": "US",
                "availableLanguage": ["English"]
              },

              "sameAs": [
                "https://linkedin.com/company/global-guru-llc"
              ]
            }
          `}
        </script>

      </Helmet>

      {/* LinkedIn Insight Tag */}
      <LinkedInInsightTag />

      {/* 1) Hero */}
      <HeroSection />

      {/* 3b) Capabilities overview */}
      {/* <DataExpertise /> */}

      {/* 5) Why Choose Us / Differentiators */}
      <TMDifference/>
      
      {/* 2) Introduction / Quick Value Prop */}
      <MissionSection />

      {/* 3) What We Do / Our Services (grid) */}
      <Suspense fallback={<Loader />}>
        <ServicesOverview />      
      </Suspense>


      {/* 6) Social Proof: logos + stats */}
      <TrustedBySection pageType="home" />
      {/* <StatsCount/> */}
      <Industries />      
      {/* 7) Testimonials (and optional visualization) */}
      <Testimonials />
      <DataFlowVisualization />

      {/* 8) Final CTA */}
      <CTA />
    </>
  );
}