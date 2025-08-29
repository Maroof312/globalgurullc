import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = () => {
  const location = useLocation();
  
  // Generate breadcrumb items from the current path
  let breadcrumbs = [];
  
  if (location.pathname === '/') {
    breadcrumbs.push({ title: 'Home', path: '/' });
  } else {
    // Split path into segments
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    
    // Create breadcrumb items
    breadcrumbs = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      let title = segment.replace(/-/g, ' ').replace(/&/g, ' & ');
      
      // Capitalize first letter of each word
      title = title.replace(/\w\S*/g, txt => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
      
      // Special cases for custom titles
      if (title === 'Who We Are') title = 'About Us';
      if (title === 'Ar & Ap') title = 'AR & AP';
      if (title === 'Accounting And Bookkeeping') title = 'Accounting & Bookkeeping';
      if (title === 'Yardi Consulting') title = 'Yardi Consulting';
      if (title === 'Our Experts') title = 'Our Experts';
      if (title === 'Cam Reconciliation Services') title = 'CAM Reconciliation';
      if (title === 'Lease Accounting Services') title = 'Lease Accounting';
      if (title === 'Real Estate Accounting Services') title = 'Real Estate Accounting';
      if (title === 'Privacy Policy') title = 'Privacy Policy';
      if (title === 'Thank You') title = 'Thank You';
      
      return { title, path };
    });
    
    // Add Home as the first breadcrumb
    breadcrumbs.unshift({ title: 'Home', path: '/' });
  }
  
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <div className="container">
        <ol className="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <li 
              key={index} 
              className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
              aria-current={index === breadcrumbs.length - 1 ? 'page' : null}
            >
              {index === breadcrumbs.length - 1 ? (
                breadcrumb.title
              ) : (
                <Link to={breadcrumb.path}>{breadcrumb.title}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;