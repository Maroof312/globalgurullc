import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import FAQ from '../../components/sections/FAQ';
import CTA from '../../components/sections/CTA';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import { Helmet } from 'react-helmet-async';
import './BlogDetail.scss';

const BlogDetail = React.memo(() => {
  const location = useLocation();
  const { blog } = location.state || {};

  const metaTags = useMemo(() => {
    if (!blog) return { title: "Global Guru Insights Blog", description: "Expert knowledge and industry insights for property management professionals" };
    
    let title = "Global Guru Insights Blog";
    let description = "Expert knowledge and industry insights for property management professionals";
    
    if (blog.title.includes("CAM Audit")) {
      title = "How to Prepare for a CAM Audit & Avoid Errors | Global Guru";
      description = "Ensure CAM accuracy & transparency. Learn audit steps, common errors, and how Global Guru helps with CAM reconciliation & reporting.";
    } else if (blog.title.includes("CAM Reconciliation")) {
      title = "How to Do CAM Reconciliation Right: Best Practices";
      description = "Learn CAM reconciliation meaning, process, and strategies to minimize disputes. Get expert insights from Global Guru for accurate lease management.";
    } else if (blog.title.includes("Outsourcing Bookkeeping") || blog.title.includes("Bookkeeping")) {
      title = "10 Benefits of Outsourcing Bookkeeping for Property Management Firms";
      description = "Discover why property management firms outsource bookkeeping. Learn 10 key benefits including cost savings, accuracy, compliance & scalability with experts.";
    } else {
      title = `${blog.title} | Global Guru`;
      const firstParagraph = blog.content.find(item => item.type === 'p');
      if (firstParagraph && firstParagraph.text) {
        description = firstParagraph.text.substring(0, 160) + '...';
      }
    }
    
    return { title, description };
  }, [blog]);

  const renderContent = useMemo(() => {
    return (item, index) => {
      switch (item.type) {
        case 'h2':
          return <h2 key={index} className="blog-content-h2">{item.text}</h2>;
        case 'h3':
          return <h3 key={index} className="blog-content-h3">{item.text}</h3>;
        case 'p':
          return <p key={index} className="blog-content-p">{item.text}</p>;
        case 'list':
          return (
            <ul key={index} className="blog-content-list">
              {item.items.map((listItem, i) => (
                <li key={i}>{listItem}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    };
  }, []);

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blog-detail">
      <LinkedInInsightTag />
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
      </Helmet>
      
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Blog Header */}
              <div className="blog-header">
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                  <span className="blog-category">{blog.category}</span>
                </div>
                <h1 className="blog-title">{blog.title}</h1>
                <div className="blog-tags">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">#{tag}</span>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              {blog.featuredImage && (
                <div className="blog-featured-image">
                  <img 
                    src={blog.featuredImage} 
                    alt={blog.title} 
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="400"
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="blog-content">
                {blog.content.map((item, index) => renderContent(item, index))}
              </div>

              {/* FAQ Section */}
              {blog.faqs && blog.faqs.length > 0 && (
                <div className="blog-faq-section">
                  <FAQ 
                    faqs={blog.faqs} 
                    title="Frequently Asked Questions"
                    themeColor="#4361ee"
                  />
                </div>
              )}
              
              {/* CTA Section */}
              {blog.cta && (
                <div className="blog-cta-section">
                  <CTA
                    title={blog.cta.title}
                    description={blog.cta.description}
                    buttonText={blog.cta.buttonText}
                    buttonLink={blog.cta.buttonLink}
                    backgroundColor="primary"
                    textColor="white"
                    buttonVariant="light"
                  />
                </div>
              )}
            </motion.article>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default BlogDetail;