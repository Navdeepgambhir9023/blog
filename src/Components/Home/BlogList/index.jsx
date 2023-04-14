import React from 'react';
import BlogItem from './BlogItem';
import './bloglist.css';
import TopPost from '../topPost';
import Category from '../category';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-parent-div'>
      {/* <h1 className='divider'>Blogs</h1> */}
      <div className='blogList-wrap'>
        <div className='blog-div'>
          {blogs.map((blogs) => (
            <BlogItem blog={blogs} key={blogs.name} />
          ))}
        </div>
        <div className='side-div'>
          <div className='category-div'>
            <Category />
          </div>
          <div className='topPost-div'>
            <TopPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;    
