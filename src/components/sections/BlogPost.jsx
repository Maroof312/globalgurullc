import React, { useState, useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { slugify, resolvePostImage } from '../../utils/blog';
import './BlogPost.scss';

// Image selection is centralized in utils/blog via resolvePostImage

const BlogPost = React.memo(({ blog, isFeatured = false, layout = 'vertical' }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const getBlogImage = useMemo(() => {
    return (blog) => resolvePostImage(blog);
  }, []);

  const handleReadMore = () => {
    const slug = slugify(blog.title);
    navigate(`/blog/${slug}`, { state: { blog } });
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
      <Motion.article 
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
      </Motion.article>
    );
  }

  return (
    <Motion.article 
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
    </Motion.article>
  );
});

export default BlogPost;