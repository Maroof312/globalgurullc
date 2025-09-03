import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import YardiConsulting from './pages/YardiConsulting/YardiConsulting'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import BlogDetail from './pages/Blog/BlogDetail'
import OurExperts from './pages/Experts/Experts'
import CAMReconciliation from './pages/CAMReconciliation/CAMReconciliation'
import LeaseAccount from './pages/Lease-Accounting/LeaseAccounting'
import RealEstate from './pages/Real-Estate-Accounting/RealEstateAccounting'
import AR_AP from './pages/AR&AP/AR&AP'
import AccBook from './pages/Accounting&Bookkeeping/Acc&Book'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import ThankYou from './pages/Thankyou/ThankYou'

function App() {
  return (
    <Router>
      <Header />
      <Breadcrumb /> 
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