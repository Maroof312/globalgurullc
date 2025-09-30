import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './BlogPost.scss';

// Import images with responsive srcset
import CAM from '../../assets/images/11.1th - Accounts Receivable Services Built for Better Cash Flow.avif?w=300;600;900&format=avif&as=srcset';
import CAMFallback from '../../assets/images/11.1th - Accounts Receivable Services Built for Better Cash Flow.avif?w=600';
import Audit from '../../assets/images/1st.avif?w=300;600;900&format=avif&as=srcset';
import AuditFallback from '../../assets/images/1st.avif?w=600';
import Book from '../../assets/images/books-1.webp?w=300;600;900&format=webp&as=srcset';
import BookFallback from '../../assets/images/books-1.webp?w=600';
import CRE from '../../assets/images/14.avif?w=300;600;900&format=avif&as=srcset';
import CREFallback from '../../assets/images/14.avif?w=600';

const BlogPost = React.memo(({ blog, isFeatured = false, layout = 'vertical' }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const getBlogImage = useMemo(() => {
    return (blog) => {
      if (blog.featuredImage) return blog.featuredImage;
      if (blog.category === 'Property Management') return { srcset: CAM, fallback: CAMFallback };
      if (blog.category === 'Audit') return { srcset: Audit, fallback: AuditFallback };
      if (blog.category === 'Bookkeeping') return { srcset: Book, fallback: BookFallback };
      if (blog.category === 'Commercial Real Estate') return { srcset: CRE, fallback: CREFallback };
      return { srcset: CAM, fallback: CAMFallback };
    };
  }, []);

  const handleReadMore = () => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  const handleImageError = (e) => {
    setImageError(true);
    e.target.style.backgroundColor = '#f0f0f0';
    e.target.alt = 'Image not available';
  };

  const blogImage = getBlogImage(blog);

  const ImageComponent = () => (
    <>
      <img 
        srcSet={blogImage.srcset || blogImage}
        src={blogImage.fallback || blogImage}
        alt={blog.title}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
        width="400"
        height="200"
        style={{ 
          width: '100%', 
          height: '200px', 
          objectFit: 'contain',
          display: imageError ? 'none' : 'block'
        }}
      />
      {imageError && (
        <div className="image-placeholder" style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '14px'
        }}>
          Image not available
        </div>
      )}
    </>
  );

  if (isFeatured && layout === 'horizontal') {
    return (
      <motion.article 
        className={`blog-post featured-horizontal`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="post-content">
          <div className="post-image">
            <ImageComponent />
            <div className="category-badge">{blog.category}</div>
          </div>
          <div className="post-details">
            <div className="post-meta">
              <span className="post-date">{blog.date}</span>
              <span className="post-read-time">{blog.readTime}</span>
            </div>
            <h2 className="post-title">{blog.title}</h2>
            <p className="post-excerpt">
              {blog.content.find(item => item.type === 'p')?.text?.substring(0, 150) || 'Read more about this topic...'}...
            </p>
            <div className="post-tags">
              {blog.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="post-tag">#{tag}</span>
              ))}
            </div>
            <button className="read-more-btn" onClick={handleReadMore}>
              Read Article
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article 
      className={`blog-post ${isFeatured ? 'featured' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="post-image">
        <ImageComponent />
        <div className="category-badge">{blog.category}</div>
      </div>
      <div className="post-content">
        <div className="post-meta">
          <span className="post-date">{blog.date}</span>
          <span className="post-read-time">{blog.readTime}</span>
        </div>
        <h3 className="post-title">{blog.title}</h3>
        <p className="post-excerpt">
          {blog.content.find(item => item.type === 'p')?.text?.substring(0, 120) || 'Read more about this topic...'}...
        </p>
        <div className="post-footer">
          <div className="post-tags">
            {blog.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="post-tag">#{tag}</span>
            ))}
          </div>
          <button className="read-more-btn" onClick={handleReadMore}>
            Read More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.article>
  );
});

export default BlogPost;