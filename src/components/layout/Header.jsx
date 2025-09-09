import { useState, useEffect, useRef } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../../assets/images/Black-logo.webp';
import './Header.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event) => {
      // Close navbar if clicked outside of it and it's expanded
      if (navbarExpanded && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarExpanded(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarExpanded]);

  const handleDropdownHover = (menu) => {
    if (window.innerWidth > 991) {
      setActiveDropdown(menu);
    }
  };

  const handleDropdownLeave = () => {
    if (window.innerWidth > 991) {
      setActiveDropdown(null);
    }
  };

  const handleNavLinkClick = () => {
    // Collapse only in mobile after link navigation
    if (window.innerWidth < 992) {
      setNavbarExpanded(false);
      setActiveDropdown(null);
    }
  };

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const toggleMobileDropdown = (menu) => {
    // Only for mobile view: toggle dropdown without collapsing navbar
    if (window.innerWidth < 992) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  const aboutSubmenu = [
    { title: "Who We Are", path: "/who-we-are" },
    { title: "Our Experts", path: "/our-experts" },
  ];

  const servicesSubmenu = [
    { title: "Our Services", path: "/services" },
    { title: "Property Accounting", path: "/real-estate-accounting-services" },
    { title: "CAM Reconciliation", path: "/cam-reconciliation-services" },
    { title: "Lease Administration", path: "/lease-admin-accounting-services" },
    { title: "Accounting and Bookkeeping", path: "/accounting-and-bookkeeping" },
    { title: "AR & AP Services", path: "/ar-ap-services" }
  ];

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={scrolled ? 'scrolled' : ''}
      expanded={navbarExpanded}
      ref={navbarRef}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar.Brand href="/">
            <img 
              src={logo} 
              alt="Global Guru LLC" 
              width="140"
              height="70"
              loading="lazy"
              decoding="async"
            />
          </Navbar.Brand>
        </motion.div>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={handleNavbarToggle}
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              Home
            </Nav.Link>
            
            {/* About Dropdown */}
            <div 
              className="nav-item dropdown-container"
              onMouseEnter={() => handleDropdownHover('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="d-flex align-items-center">
                <Nav.Link 
                  href="/who-we-are"
                  className={`${isActive('/about') ? 'active' : ''}`}
                  onClick={handleNavLinkClick}
                >
                  About
                </Nav.Link>
                <span 
                  className="dropdown-toggle-icon"
                  onClick={() => toggleMobileDropdown('about')}
                >
                  <ChevronDown size={18} />
                </span>
              </div>
              <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
                {aboutSubmenu.map((item) => (
                  <Nav.Link 
                    key={item.path}
                    href={item.path}
                    className={`dropdown-item ${isActive(item.path) ? 'active' : ''}`}
                    onClick={handleNavLinkClick}
                  >
                    {item.title}
                  </Nav.Link>
                ))}
              </div>
            </div>
            
            {/* Services Dropdown */}
            <div 
              className="nav-item dropdown-container"
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="d-flex align-items-center">
                <Nav.Link 
                  href="/services"
                  className={`${isActive('/services') ? 'active' : ''}`}
                  onClick={handleNavLinkClick}
                >
                  Services
                </Nav.Link>
                <span 
                  className="dropdown-toggle-icon"
                  onClick={() => toggleMobileDropdown('services')}
                >
                  <ChevronDown size={18} />
                </span>
              </div>
              <div className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                {servicesSubmenu.map((item) => (
                  <Nav.Link 
                    key={item.path}
                    href={item.path}
                    className={`dropdown-item ${isActive(item.path) ? 'active' : ''}`}
                    onClick={handleNavLinkClick}
                  >
                    {item.title}
                  </Nav.Link>
                ))}
              </div>
            </div>
            
            <Nav.Link 
              href="/yardi-consulation-services" 
              className={isActive('/yardi-consulation-services') ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              Yardi Consulting
            </Nav.Link>
            <Nav.Link 
              href="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              href="/blog" 
              className={isActive('/blog') ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
