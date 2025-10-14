import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { lazy, Suspense } from 'react'; // Added Suspense import
import { Container, Row, Col } from 'react-bootstrap';
import HeroSection from '../../components/sections/Hero';
import MissionSection from '../../components/sections/Mission';
import DataExpertise from '../../components/sections/DataExpertise';
import ServicesOverview from '../../components/sections/ServicesOverview';
import Testimonials from '../../components/sections/Testimonials';
import CTA from '../../components/sections/CTA';
import StatsCount from '../../components/sections/StatsCounter';
import TMDifference from '../../components/sections/DifferenceSection'
import DataFlowVisualization from '../../components/sections/DataFlowVisualization';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import TrustedBySection from '../../components/sections/TrustedBySection';

// Add Loader component
const Loader = () => <div className="d-flex justify-content-center py-4"><div className="spinner-border text-primary" role="status"></div></div>;

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      </Helmet>

      {/* LinkedIn Insight Tag */}
      <LinkedInInsightTag />

      {/* 1) Hero */}
      <HeroSection />

      {/* 2) Introduction / Quick Value Prop */}
      <MissionSection />

      {/* 3) What We Do / Our Services (grid) */}
      <Suspense fallback={<Loader />}>
        <ServicesOverview />
      </Suspense>

      {/* 3b) Capabilities overview */}
      <DataExpertise />

      {/* 5) Why Choose Us / Differentiators */}
      <TMDifference/>

      {/* 6) Social Proof: logos + stats */}
      <TrustedBySection pageType="home" />
      <StatsCount/>

      {/* 7) Testimonials (and optional visualization) */}
      <Testimonials />
      <DataFlowVisualization />

      {/* 8) Final CTA */}
      <CTA />
    </>
  );
}