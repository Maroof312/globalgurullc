import React, { useState, useMemo, useCallback } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import BlogSidebar from '../../components/sections/BlogSidebar';
import BlogPost from '../../components/sections/BlogPost';
import LinkedInInsightTag from '../../components/layout/LinkedInInsightTag';
import { blogData } from '../../data/BlogData';
import './Blog.scss';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = useMemo(() => {
    return blogData.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchLower) ||
        post.content.some(item => 
          item.text && typeof item.text === 'string' && item.text.toLowerCase().includes(searchLower)
        );
      
      return matchesCategory && matchesSearch;
    });
  }, [blogData, activeCategory, searchQuery]);

  const categories = useMemo(() => 
    ['all', ...new Set(blogData.map(post => post.category))], 
    [blogData]
  );

  const allTags = useMemo(() => 
    [...new Set(blogData.flatMap(post => post.tags))], 
    [blogData]
  );

  const loadMore = useCallback(() => {
    setVisiblePosts(prev => prev + 3);
  }, []);

  const handleCategorySelect = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <div className="modern-blog">
      <LinkedInInsightTag />
      
      {/* Hero Header */}
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
              {/* Category Filters */}
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
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Featured Post */}
              {activeCategory === 'all' && searchQuery === '' && (
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

              {/* Posts Grid */}
              <div className="posts-grid">
                <AnimatePresence>
                  {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                    <motion.div
                      key={post.id}
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

              {/* Load More */}
              {visiblePosts < filteredPosts.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="load-more-container"
                >
                  <Button 
                    variant="outline-primary" 
                    onClick={loadMore}
                    className="load-more-btn"
                  >
                    Load More Articles
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </motion.div>
              )}

              {/* No Results */}
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

            {/* Sidebar */}
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

      {/* Newsletter Section */}
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