import React, { useState, useMemo, useCallback } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import BlogSidebar from '../../components/sections/BlogSidebar';
import BlogPost from '../../components/sections/BlogPost';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import useAnalytics from '../../components/hooks/useAnalytics';
import { blogData } from '../../data/BlogData';
import './Blog.scss';

const Blog = () => {
  useAnalytics();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // You can change this to 4 if you prefer

  const filteredPosts = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();
    return blogData.filter((post) => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      if (!searchLower) return matchesCategory;
      const inTitle = post.title.toLowerCase().includes(searchLower);
      const inContent = post.content?.some((item) =>
        typeof item?.text === 'string' && item.text.toLowerCase().includes(searchLower)
      );
      return matchesCategory && (inTitle || inContent);
    });
  }, [activeCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Get current posts for the page
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage]);

  const categories = useMemo(() => {
    return ['all', ...new Set(blogData.map((post) => post.category))];
  }, []);

  const allTags = useMemo(() => {
    return [...new Set(blogData.flatMap((post) => post.tags))];
  }, []);

  // Pagination handlers
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const handleCategorySelect = useCallback((category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  return (
    <div className="modern-blog">
      <Helmet>
        <title>Global Guru LLC | Blog</title>
        <link rel="canonical" href="https://globalgurullc.com/blog" />
        <meta
          name="description"
          content=""
        />
      </Helmet>
      <LinkedInInsightTag />
      
      {/* Hero Header - NO CHANGES */}
      <section className="blog-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-content"
              >
                <h1 className="hero-title">Global Guru Insights</h1>
                <p className="hero-subtitle">
                  Expert knowledge and industry insights for property management professionals
                </p>
                <div className="hero-search">
                  <Form.Group className="search-box">
                    <Form.Control
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Form.Group>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <section className="blog-main">
        <Container>
          <Row>
            {/* Blog Posts */}
            <Col lg={8} className="blog-content">
              {/* Category Filters - NO CHANGES */}
              <motion.div 
                className="category-filters"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="filter-scroll">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Featured Post - Only on first page */}
              {activeCategory === 'all' && searchQuery === '' && currentPage === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="featured-post-container"
                >
                  <div className="section-label">Featured Article</div>
                  <BlogPost 
                    blog={blogData[0]} 
                    isFeatured={true} 
                    layout="horizontal"
                  />
                </motion.div>
              )}

              {/* Posts Grid - Showing current page posts */}
              <div className="posts-grid">
                <AnimatePresence>
                  {currentPosts.map((post, index) => (
                    <motion.div
                      key={`${post.title}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      layout
                    >
                      <BlogPost blog={post} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination - REPLACING Load More */}
              {filteredPosts.length > postsPerPage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pagination-container"
                >
                  <div className="pagination">
                    <Button
                      variant="outline-primary"
                      className="pagination-btn prev-btn"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    
                    <div className="page-numbers">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          className={`page-number ${currentPage === page ? 'active' : ''}`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline-primary"
                      className="pagination-btn next-btn"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                  
                  <div className="page-info">
                    Page {currentPage} of {totalPages}
                  </div>
                </motion.div>
              )}

              {/* No Results - NO CHANGES */}
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="no-results"
                >
                  <h3>No articles found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </Col>

            {/* Sidebar - NO CHANGES */}
            <Col lg={4} className="blog-sidebar">
              <BlogSidebar 
                categories={categories.filter(cat => cat !== 'all')} 
                tags={allTags}
                onCategorySelect={handleCategorySelect}
                onSearch={handleSearch}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section - NO CHANGES */}
      <section className="blog-newsletter">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="newsletter-content"
              >
                <div className="newsletter-icon">📬</div>
                <h2>Stay Updated with Industry Insights</h2>
                <p>Get the latest articles and expert tips delivered to your inbox</p>
                <Form className="newsletter-form">
                  <Form.Group className="newsletter-input">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </Form.Group>
                  <Button variant="primary" className="newsletter-btn">
                    Subscribe
                  </Button>
                </Form>
                <p className="newsletter-note">No spam. Unsubscribe anytime.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default React.memo(Blog);