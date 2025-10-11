import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { motion as Motion } from 'framer-motion';
import FAQ from '../../components/sections/FAQ';
import CTA from '../../components/sections/CTA';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import { Helmet } from 'react-helmet-async';
import './BlogDetail.scss';
import { blogData } from '../../data/BlogData';
import { resolveBlogFromParam, resolvePostImage } from '../../utils/blog';

// Image selection is centralized in utils/blog via resolvePostImage

const BlogDetail = React.memo(() => {
  const location = useLocation();
  const params = useParams();
  const { blog } = location.state || {};
  const blogFromParam = useMemo(() => {
    if (blog) return blog;
    if (!params?.title) return undefined;
    return resolveBlogFromParam(params.title, blogData);
  }, [blog, params]);

  const detailImage = useMemo(() => {
    if (!blogFromParam) return undefined;
    return resolvePostImage(blogFromParam);
  }, [blogFromParam]);

  const metaTags = useMemo(() => {
    if (!blogFromParam) return { title: "Global Guru Insights Blog", description: "Expert knowledge and industry insights for property management professionals" };
    
    let title = "Global Guru Insights Blog";
    let description = "Expert knowledge and industry insights for property management professionals";
    
    if (blogFromParam.title.includes("CAM Audit")) {
      title = "How to Prepare for a CAM Audit & Avoid Errors | Global Guru";
      description = "Ensure CAM accuracy & transparency. Learn audit steps, common errors, and how Global Guru helps with CAM reconciliation & reporting.";
    } else if (blogFromParam.title.includes("CAM Reconciliation")) {
      title = "How to Do CAM Reconciliation Right: Best Practices";
      description = "Learn CAM reconciliation meaning, process, and strategies to minimize disputes. Get expert insights from Global Guru for accurate lease management.";
    } else if (blogFromParam.title.includes("Outsourcing Bookkeeping") || blogFromParam.title.includes("Bookkeeping")) {
      title = "10 Benefits of Outsourcing Bookkeeping for Property Management Firms";
      description = "Discover why property management firms outsource bookkeeping. Learn 10 key benefits including cost savings, accuracy, compliance & scalability with experts.";
    } else if (blogFromParam.title.includes("CRE") || blogFromParam.title.includes("Commercial Real Estate")) {
      title = "Why CRE Accounting Outsourcing Is Surging in 2025";
      description = "With historic debt maturities and persistent talent shortages, 2025 demands smarter accounting solutions. Global Guru's specialized CRE accounting services provide the scalability, expertise, and cost efficiency you need to navigate these challenges successfully.";
    } else if (blogFromParam.title.includes("CAMError") || blogFromParam.title.includes("Commercial Real Estate")) {
      title = "CAM Errors: The Hidden Leakage";
      description = "CAM Errors: The Hidden Leakage - why it matters for cash flow and disputes."; 
    } else if (blogFromParam.title.includes("CAMWorkFlow") || blogFromParam.title.includes("Property Management")) {
      title = "The CAM Workflow We Use to Cut Disputes by 60%";
      description = "The CAM Workflow We Use to Cut Disputes by 60%"; 
    } else {
      title = `${blogFromParam.title} | Global Guru`;
      const firstParagraph = blogFromParam.content.find(item => item.type === 'p');
      if (firstParagraph && firstParagraph.text) {
        description = firstParagraph.text.substring(0, 160) + '...';
      }
    }
    
    return { title, description };
  }, [blogFromParam]);

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

  if (!blogFromParam) {
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
            <Motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Blog Header */}
              <div className="blog-header">
                <div className="blog-meta">
                  <span className="blog-date">{blogFromParam.date}</span>
                  <span className="blog-read-time">{blogFromParam.readTime}</span>
                  <span className="blog-category">{blogFromParam.category}</span>
                </div>
                <h1 className="blog-title">{blogFromParam.title}</h1>
                <div className="blog-tags">
                  {blogFromParam.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">#{tag}</span>
                  ))}
                </div>
              </div>

              {/* Featured Image */}
              {detailImage && (
                <div className="blog-featured-image">
                  <img
                    srcSet={detailImage.srcset || detailImage}
                    src={detailImage.fallback || detailImage}
                    alt={blogFromParam.title}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1200px) 960px, (min-width: 992px) 800px, 100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '520px',
                      objectFit: 'cover',
                      borderRadius: '12px'
                    }}
                  />
                </div>
              )}

              {/* Blog Content */}
              <div className="blog-content">
                {blogFromParam.content.map((item, index) => renderContent(item, index))}
              </div>

              {/* FAQ Section */}
              {blogFromParam.faqs && blogFromParam.faqs.length > 0 && (
                <div className="blog-faq-section">
                  <FAQ 
                    faqs={blogFromParam.faqs} 
                    title="Frequently Asked Questions"
                    themeColor="#4361ee"
                  />
                </div>
              )}
              
              {/* CTA Section */}
              {blogFromParam.cta && (
                <div className="blog-cta-section">
                  <CTA
                    title={blogFromParam.cta.title}
                    description={blogFromParam.cta.description}
                    buttonText={blogFromParam.cta.buttonText}
                    buttonLink={blogFromParam.cta.buttonLink}
                    backgroundColor="primary"
                    textColor="white"
                    buttonVariant="light"
                  />
                </div>
              )}
            </Motion.article>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default BlogDetail;