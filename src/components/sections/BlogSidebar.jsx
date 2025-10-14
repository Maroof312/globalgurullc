import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './BlogSidebar.scss';

// Import images with srcset
import CAM from '../../assets/images/accounting.webp?w=100;200&format=webp&as=srcset';
import CAMFallback from '../../assets/images/accounting.webp?w=200';
import Audit from '../../assets/images/books-2.webp?w=100;200&format=webp&as=srcset';
import AuditFallback from '../../assets/images/books-2.webp?w=200';
import Book from '../../assets/images/books-1.webp?w=100;200&format=webp&as=srcset';
import BookFallback from '../../assets/images/books-1.webp?w=200';
import CRE from '../../assets/images/14.avif?w=300;600;900&format=avif&as=srcset';
import CREFallback from '../../assets/images/14.avif?w=600';
import CAMError from '../../assets/images/CAM_Reconciliation_Blog1_KPI_FINAL.avif?w=300;600;900&format=avif&as=srcset';
import CAMErrorFallback from '../../assets/images/CAM_Reconciliation_Blog1_KPI_FINAL.avif';
import CAMWorkFlow from '../../assets/images/11-10.avif?w=300;600;900&format=avif&as=srcset';
import CAMWorkFlowFallback from '../../assets/images/11-10.avif?w=600';
import ARCRE from '../../assets/images/13-10.avif?w=300;600;900&format=avif&as=srcset';
import ARCREFallback from '../../assets/images/13-10.avif?w=600';

const BlogSidebar = React.memo(({ categories, tags, onCategorySelect, onSearch }) => {
  const popularPosts = useMemo(() => [
    {
      id: 1,
      title: "CAM Reconciliation Best Practices",
      date: "Mar 15, 2024",
      image: { srcset: CAM, fallback: CAMFallback },
    },
    {
      id: 2,
      title: "Preparing for CAM Audit",
      date: "Mar 10, 2024",
      image: { srcset: Audit, fallback: AuditFallback },
    },
    {
      id: 3,
      title: "Outsourcing Bookkeeping Benefits",
      date: "Mar 5, 2024",
      image: { srcset: Book, fallback: BookFallback },
    },
    {
      id: 4,
      title: "Why CRE Accounting Outsourcing Is Surging in 2025",
      date: "September 27, 2025",
      image: { srcset: CRE, fallback: CREFallback },
    },
    {
      id: 5,
      title: "CAM Errors: The Hidden Leakage",
      date: "October 6, 2025",
      image: { srcset: CAMError, fallback: CAMErrorFallback },
    },
    {
      id: 6,
      title: "The CAM Workflow We Use to Cut Disputes by 60%",
      date: "October 11, 2025",
      image: { srcset: CAMWorkFlow, fallback: CAMWorkFlowFallback },
    },
    {
      id: 7,
      title: "AR for CRE: How to Shrink Days Sales Outstanding by 18-30%",
      date: "October 13, 2025",
      image: { srcset: ARCRE, fallback: ARCREFallback },
    }
  ], []);

  return (
    <motion.div 
      className="blog-sidebar"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {/* Categories */}
      <div className="sidebar-widget">
        <h4 className="widget-title">Categories</h4>
        <div className="widget-content">
          {categories.map((category, index) => (
            <button
              key={index}
              className="category-item"
              onClick={() => onCategorySelect(category)}
            >
              <span className="category-name">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="sidebar-widget">
        <h4 className="widget-title">Popular Articles</h4>
        <div className="widget-content">
          {popularPosts.map((post) => (
            <div key={post.id} className="popular-post">
              <div className="post-image">
                <img 
                  srcSet={post.image.srcset} 
                  src={post.image.fallback} 
                  alt={post.title} 
                  loading="lazy" 
                  decoding="async"
                  width="60"
                  height="60"
                />
              </div>
              <div className="post-info">
                <h5 className="post-title">{post.title}</h5>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Cloud */}
      <div className="sidebar-widget">
        <h4 className="widget-title">Topics</h4>
        <div className="widget-content tags-cloud">
          {tags.map((tag, index) => (
            <button
              key={index}
              className="tag-btn"
              onClick={() => onSearch(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="sidebar-widget newsletter-widget">
        <h4 className="widget-title">Stay Updated</h4>
        <div className="widget-content">
          <p>Get the latest insights delivered to your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default BlogSidebar;