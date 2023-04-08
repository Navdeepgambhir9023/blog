import React from 'react';
import BlogItem from './BlogItem';
import './bloglist.css';

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h1 className='divider'>Blogs</h1>
      <div className='blogList-wrap'>
        <div className='side-div'>
          <div className='top-posts-section'>

          </div>

          <div className='subscription-section'>

          </div>

          <div>

          </div>

        </div>
        <div className='blog-div'>
          {blogs.map((blogs) => (
            <BlogItem blog={blogs} key={blogs.id} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlogList;