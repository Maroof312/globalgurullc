import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/images/Black-logo.webp';
import './Header.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownHover = (menu) => {
    if (window.innerWidth > 991) {
      setActiveDropdown(menu);
    }
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  const aboutSubmenu = [
    { title: "Who We Are", path: "/who-we-are" },
    { title: "Our Experts", path: "/our-experts" },
    // { title: "Mission & Values", path: "/about/mission-values" },
    // { title: "Testimonials", path: "/about/testimonials" },
    // { title: "Careers", path: "/about/careers" }
  ];

  const servicesSubmenu = [
    { title: "Our Services", path: "/services" },
    { title: "Property Accounting", path: "/real-estate-accounting-services" },
    { title: "CAM Reconciliation", path: "/CAM-Reconciliation-Services" },
    { title: "Lease Administration", path: "/lease-accounting-services" },
    { title: "Accounting and Bookkeeping", path: "/accounting-and-bookkeeping" },
    { title: "AR & AP Services", path: "/ar&ap" }
  ];

  return (
    <Navbar expand="lg" fixed="top" className={scrolled ? 'scrolled' : ''}>
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
              height="30"
              loading="lazy"
            />
          </Navbar.Brand>
        </motion.div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className={isActive('/') ? 'active' : ''}>Home</Nav.Link>
            
            {/* About Dropdown */}
            <div 
              className="nav-item dropdown-container"
              onMouseEnter={() => handleDropdownHover('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <Nav.Link 
                className={`${isActive('/about') ? 'active' : ''}`}
              >
                About
              </Nav.Link>
              <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
                {aboutSubmenu.map((item) => (
                  <Nav.Link 
                    key={item.path}
                    href={item.path}
                    className={`dropdown-item ${isActive(item.path) ? 'active' : ''}`}
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
              <Nav.Link 
                className={`${isActive('/services') ? 'active' : ''}`}
              >
                Services
              </Nav.Link>
              <div className={`dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                {servicesSubmenu.map((item) => (
                  <Nav.Link 
                    key={item.path}
                    href={item.path}
                    className={`dropdown-item ${isActive(item.path) ? 'active' : ''}`}
                  >
                    {item.title}
                  </Nav.Link>
                ))}
              </div>
            </div>
            
            <Nav.Link href="/yardi-consulting" className={isActive('/yardi-consulting') ? 'active' : ''}>
              Yardi Consulting
            </Nav.Link>
            <Nav.Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
              Contact
            </Nav.Link>
            <Nav.Link href="/blog" className={isActive('/contact') ? 'active' : ''}>
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}