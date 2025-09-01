import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../../components/sections/Hero';
import MissionSection from '../../components/sections/Mission';
import DataExpertise from '../../components/sections/DataExpertise';
// import ServicesOverview from '../../components/sections/ServicesOverview';
import Testimonials from '../../components/sections/Testimonials';
import CTA from '../../components/sections/CTA';
import StatsCount from '../../components/sections/StatsCounter';
import TMDifference from '../../components/sections/DifferenceSection'
import DataFlowVisualization from '../../components/sections/DataFlowVisualization';


export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
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

        {/* GA4 Tracking */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA4_MEASUREMENT_ID}`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${import.meta.env.VITE_GA4_MEASUREMENT_ID}');
          `}
        </script>

        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content={import.meta.env.VITE_GSC_VERIFICATION_CODE} 
        />
      </Helmet>

      {/* Page Sections (Keep existing structure) */}
      <HeroSection />
      <MissionSection />
      <DataExpertise />
      {/* <ServicesOverview /> */}
      {/* <QuantumSolutions/> */}
      <DataFlowVisualization />
      <TMDifference/>
      <StatsCount/>
      <Testimonials />
      <CTA />
    </>
  );
}