import React from "react";
import { Link } from "react-router-dom";
import "./Sitemap.scss";

const Sitemap = () => {
  // Define site structure in a clean, organized way
  const siteStructure = {
    main: [
      {
        path: "/",
        name: "Home",
        description: "Welcome to our professional services",
      },
      {
        path: "/who-we-are",
        name: "Who We Are",
        description: "Learn about our company and mission",
      },
      {
        path: "/our-experts",
        name: "Our Experts",
        description: "Meet our team of professionals",
      },
      {
        path: "/contact",
        name: "Contact Us",
        description: "Get in touch with our team",
      },
    ],
    services: [
      {
        path: "/services",
        name: "All Services",
        description: "Overview of our comprehensive services",
      },
      {
        path: "/real-estate-accounting-services",
        name: "Property Accounting",
        description: "Professional property accounting services",
      },
      {
        path: "/cam-reconciliation-services",
        name: "CAM Reconciliation",
        description: "Common Area Maintenance reconciliation",
      },
      {
        path: "/lease-admin-accounting-services",
        name: "Lease Administration",
        description: "Comprehensive lease management solutions",
      },
      {
        path: "/accounting-and-bookkeeping",
        name: "Accounting & Bookkeeping",
        description: "Professional financial record management",
      },
      {
        path: "/ar-ap-services",
        name: "AR & AP Services",
        description: "Accounts Receivable & Payable management",
      },
    ],
    technology: [
      {
        path: "/yardi-consultation-services",
        name: "Yardi Consulting",
        description: "Expert Yardi system implementation and support",
      },
      {
        path: "/argus",
        name: "Argus Consulting",
        description: "Argus software expertise and solutions",
      },
    ],
    resources: [
      {
        path: "/blog",
        name: "Blog",
        description: "Industry insights and updates",
      },
      {
        path: "/privacy-policy",
        name: "Privacy Policy",
        description: "Our privacy and data protection policies",
      },
    ],
  };

  return (
    <div className="sitemap-container">
      {/* Header Section */}
      <div className="sitemap-header">
        <div className="sitemap-breadcrumb">
          <Link to="/">Home</Link> / <span>Sitemap</span>
        </div>
        <h1 className="sitemap-title">Website Sitemap</h1>
        <p className="sitemap-subtitle">
          Explore our complete website structure and find exactly what you're
          looking for
        </p>
      </div>

      {/* Main Content */}
      <div className="sitemap-content">
        {/* Main Pages Section */}
        <section className="sitemap-section">
          <div className="section-header">
            <div className="section-icon">🏠</div>
            <h2>Main Pages</h2>
          </div>
          <div className="pages-grid">
            {siteStructure.main.map((page, index) => (
              <Link key={index} to={page.path} className="page-card main-card">
                <h3>{page.name}</h3>
                <p>{page.description}</p>
                <span className="card-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="sitemap-section">
          <div className="section-header">
            <div className="section-icon">⚡</div>
            <h2>Our Services</h2>
          </div>
          <div className="pages-grid">
            {siteStructure.services.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="page-card service-card"
              >
                <h3>{page.name}</h3>
                <p>{page.description}</p>
                <span className="card-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="sitemap-section">
          <div className="section-header">
            <div className="section-icon">💻</div>
            <h2>Technology Solutions</h2>
          </div>
          <div className="pages-grid">
            {siteStructure.technology.map((page, index) => (
              <Link key={index} to={page.path} className="page-card tech-card">
                <h3>{page.name}</h3>
                <p>{page.description}</p>
                <span className="card-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="sitemap-section">
          <div className="section-header">
            <div className="section-icon">📚</div>
            <h2>Resources</h2>
          </div>
          <div className="pages-grid">
            {siteStructure.resources.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="page-card resource-card"
              >
                <h3>{page.name}</h3>
                <p>{page.description}</p>
                <span className="card-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sitemap;
