import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';

// ✅ Lazy-load layout + pages to shrink initial bundle (Treemap + initial JS)
const Header = lazy(() => import('./components/layout/Header'));
const Footer = lazy(() => import('./components/layout/Footer'));
const Breadcrumb = lazy(() => import('./components/Breadcrumb/Breadcrumb'));
const GoogleAnalytics = lazy(() => import('./components/analytics/GoogleAnalytics'));

// Keep Home eager for best initial UX (we’ll optimize Home sections next)
import Home from './pages/Home/Home';

// Lazy-load the rest (including previously eager pages)
const YardiConsulting = lazy(() => import('./pages/YardiConsulting/YardiConsulting'));
const CPA = lazy(() => import('./pages/CPA/CPA'));

const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const Industries = lazy(() => import('./pages/IndustriesPage/IndustriesPage'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const BlogDetail = lazy(() => import('./pages/Blog/BlogDetail'));
const OurExperts = lazy(() => import('./pages/Experts/Experts'));
const CAMReconciliation = lazy(() => import('./pages/CAMReconciliation/CAMReconciliation'));
const LeaseAccount = lazy(() => import('./pages/Lease-Accounting/LeaseAccounting'));
const RealEstate = lazy(() => import('./pages/Real-Estate-Accounting/RealEstateAccounting'));
const AR_AP = lazy(() => import('./pages/AR&AP/AR&AP'));
const AccBook = lazy(() => import('./pages/Accounting&Bookkeeping/Acc&Book'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy'));
const ThankYou = lazy(() => import('./pages/Thankyou/ThankYou'));
const Argus = lazy(() => import('./pages/Args/ARGUSModule'));
const Sitemap = lazy(() => import('./pages/Sitemap/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Loading fallback (kept stable to reduce CLS)
const PageLoading = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
    }}
  >
    <div>Loading...</div>
  </div>
);

// ✅ Layout fallbacks with reserved space (reduces layout shift while chunks load)
const HeaderFallback = () => <div style={{ height: 78 }} aria-hidden="true" />;
const FooterFallback = () => <div style={{ height: 240 }} aria-hidden="true" />;

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* ✅ Analytics lazy-loaded to reduce initial JS weight (we’ll defer execution next step) */}
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>

      <Suspense fallback={<HeaderFallback />}>
        <Header />
      </Suspense>

      <Suspense fallback={null}>
        <Breadcrumb />
      </Suspense>

      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/yardi-consultation-services" element={<YardiConsulting />} />
          <Route path="/real-estate-cpa-activities" element={<CPA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:category/:slug" element={<BlogDetail />} />
          <Route path="/our-experts" element={<OurExperts />} />
          <Route path="/cam-reconciliation-services" element={<CAMReconciliation />} />
          <Route path="/lease-admin-accounting-services" element={<LeaseAccount />} />
          <Route path="/real-estate-accounting-services" element={<RealEstate />} />
          <Route path="/ar-ap-services" element={<AR_AP />} />
          <Route path="/accounting-and-bookkeeping" element={<AccBook />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/argus" element={<Argus />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Suspense fallback={<FooterFallback />}>
        <Footer />
      </Suspense>

      {/* Fixed Book a Call Button (global CLS fix will be done in Header/Footer phase) */}
      <a href="/contact" className="fixed-call-button">
        Book a Call
      </a>
    </Router>
  );
}

export default App;
