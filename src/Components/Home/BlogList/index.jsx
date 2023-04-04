import React from 'react';
import BlogItem from './BlogItem';
import './bloglist.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blogs) => (
        <BlogItem blog={blogs} key={blogs.id}/>
      ))}
    </div>
  );
};

export default BlogList;