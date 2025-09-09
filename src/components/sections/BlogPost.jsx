import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Import images with correct paths
import CAM from '../../assets/images/11.1th - Accounts Receivable Services Built for Better Cash Flow.avif';
import Audit from '../../assets/images/1st.avif';
import Book from '../../assets/images/books-1.webp';

const BlogPost = ({ blog, isFeatured = false, layout = 'vertical' }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  // Debug: Log the imported images to check if they're loaded
  console.log('Imported images:', { CAM, Audit, Book });

  // Get the correct image based on blog category
  const getBlogImage = (blog) => {
    // If blog has a featuredImage property, use it
    if (blog.featuredImage) {
      console.log('Using featuredImage:', blog.featuredImage);
      return blog.featuredImage;
    }
    
    // Fallback to category-based images
    if (blog.category === 'Property Management') {
      console.log('Using CAM image for Property Management');
      return CAM;
    }
    if (blog.category === 'Audit') {
      console.log('Using Audit image for Audit');
      return Audit;
    }
    if (blog.category === 'Bookkeeping') {
      console.log('Using Book image for Bookkeeping');
      return Book;
    }
    
    console.log('Using default CAM image');
    return CAM; // default image
  };

  const handleReadMore = () => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    setImageError(true);
    
    // Set a fallback image or background color
    e.target.style.backgroundColor = '#f0f0f0';
    e.target.alt = 'Image not available';
  };

  const handleImageLoad = (e) => {
    console.log('Image loaded successfully:', e.target.src);
  };

  const blogImage = getBlogImage(blog);
  console.log('Selected image for blog:', blog.title, 'Image:', blogImage);

  if (isFeatured && layout === 'horizontal') {
    return (
      <motion.article 
        className={`blog-post featured-horizontal`}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="post-content">
          <div className="post-image">
            <img 
              src={blogImage} 
              alt={blog.title}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
              decoding="async"
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover',
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
        <img 
          src={blogImage} 
          alt={blog.title}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ 
            width: '100%', 
            height: '200px', 
            objectFit: 'cover',
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
};

export default BlogPost;