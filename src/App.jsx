import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'; // <-- IMPORT LAZY AND SUSPENSE
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import GoogleAnalytics from './components/analytics/GoogleAnalytics'
import Home from './pages/Home/Home'
// LAZY LOAD ALL OTHER PAGES
const About = lazy(() => import('./pages/About/About'));
const Services = lazy(() => import('./pages/Services/Services'));
const YardiConsulting = lazy(() => import('./pages/YardiConsulting/YardiConsulting'));
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

// Create a simple loading component
const PageLoading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh' 
  }}>
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <Router>
      <GoogleAnalytics />
      <Header />
      <Breadcrumb />
      {/* Wrap Routes in Suspense for lazy loading */}
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/yardi-consulation-services" element={<YardiConsulting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/our-experts" element={<OurExperts />} />
          <Route path="/cam-reconciliation-services" element={<CAMReconciliation />} />
          <Route path="/lease-admin-accounting-services" element={<LeaseAccount />} />
          <Route path="/real-estate-accounting-services" element={<RealEstate />} />
          <Route path="/ar-ap-services" element={<AR_AP />} />
          <Route path="/accounting-and-bookkeeping" element={<AccBook />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Suspense>
      <Footer />
      {/* Fixed Book a Call Button */}
      <a 
        href="/contact" 
        className="fixed-call-button"
      >
        Book a Call
      </a>
    </Router>
  )
}

export default App