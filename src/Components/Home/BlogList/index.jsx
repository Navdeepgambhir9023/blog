import React from 'react';
import BlogItem from './BlogItem';
import './bloglist.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-parent-div'>
      <h1 className='divider'>Blogs</h1>
      <div className='blogList-wrap'>
        <div className='blog-div'>
          {blogs.map((blogs) => (
            <BlogItem blog={blogs} key={blogs.name} />
          ))}
        </div>

        <div className='side-div'>
          <div className='top-posts-section'>
            <h1>Top Posts</h1>
          </div>
          <div className='subscription-section'>

          </div>

          <div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default BlogList;    
