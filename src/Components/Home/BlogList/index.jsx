import React, { useState } from 'react';
import BlogItem from './BlogItem';
import './bloglist.css';
import TopPost from '../sideDivComponent/topPost';
import CategoryBar from '../CategoryBar';

const BlogList = ({ blogs }) => {
  const [sortedBlogs, setSortedBlogs] = useState(blogs);

  const handleCategorySelect = (category) => {
    const filteredBlogs = category === 'All' ? blogs : blogs.filter(blog => blog.category === category);
    setSortedBlogs(filteredBlogs);
  };

  const handleSortBy = () => {
    const sorted = [...sortedBlogs].sort((a, b) => {
      // First, compare by category
      const categoryComparison = a.category.localeCompare(b.category);

      // If categories are the same, then compare by title
      if (categoryComparison === 0) {
        return a.title.localeCompare(b.title);
      }

      return categoryComparison;
    });

    setSortedBlogs(sorted);
  };

  return (
    <div className='blogList-parent-div'>
      <div className='category-bar'>
        <CategoryBar
          onSelectCategory={handleCategorySelect}
          onSortBy={handleSortBy}
        />
      </div>
      <div className='blogList-wrap'>
        <div className='blog-div'>
          {sortedBlogs.map((blog) => (
            <BlogItem blog={blog} key={blog.name} />
          ))}
        </div>
        <div className='side-div'>
          <div className='topPost-div'>
            <TopPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
