import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; 
import { blogList } from '../../config/data';
import Blogheader from '../../Components/Blog/blog-header';
import AuthorIcons from '../../Components/Reuseable/socialIcon';
import './blog.css';

const Blog = () => {
  const { name } = useParams();
  const [blog, setBlog] = useState(null);
  const { authorName, authorAvatar, createdAt } = blog || {};
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const foundBlog = blogList.find((blog) => blog.name === name);
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [name]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`blog-page ${isDarkMode ? 'dark' : 'light'}`}>
      {blog ? (
        <div className={`blog-wrap ${isDarkMode ? 'dark' : 'light'}`}>
          <header>
            <div className={`header-content ${isDarkMode ? 'dark' : 'light'}`}>
              <div className='blog-nav'>
                <Blogheader />
                <div className='mode-toggle'>
                  <button onClick={toggleMode}>
                    <img
                      src={isDarkMode ? '/Assets/images/dark-mode.png' : '/Assets/images/light-mode.png'}
                      alt={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className={`blog-title-div ${isDarkMode ? 'dark' : 'light'}`}>
              <h1>{blog.title}</h1>
            </div>

            <div className={`author-detail-holder ${isDarkMode ? 'dark' : 'light'}`}>
              <div className="blogItem-author">
                <img src={authorAvatar} alt="avatar" />
                <div>
                  <h6 className={`author-name ${isDarkMode ? 'dark' : 'light'}`}>{authorName}</h6>
                  <p className={`created-at ${isDarkMode ? 'dark' : 'light'}`}>{createdAt}</p>
                </div>
              </div>
              <div className='social-div'>
                <div className='social-icon'>
                  <AuthorIcons />
                </div>
              </div>
            </div>

            <div className={`blog-subCategory ${isDarkMode ? 'dark' : 'light'}`}>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <categoryLable label={category} />
                </div>
              ))}
            </div>
          </header>

          <div className='image-div'>
            <img src={blog.cover} alt='cover' />
          </div>
          <div className={`blog-desc ${isDarkMode ? 'dark' : 'light'}`}>
            {/* Render Markdown content as HTML */}
            <ReactMarkdown>{blog.description}</ReactMarkdown>
          </div>
        </div>
      ) : (
        <h1>Blog Not Found</h1>
      )}
    </div>
  );
};

export default Blog;