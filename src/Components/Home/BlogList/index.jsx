import React from 'react';
import BlogItem from './BlogItem';
import './bloglist.css';
import TopPost from '../topPost';

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
          <TopPost />
        </div>
      </div>
    </div>
  );
};

export default BlogList;    
