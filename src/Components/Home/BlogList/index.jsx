import React, { useState } from 'react';
import BlogItem from './BlogItem';
import './bloglist.css';
import TopPost from '../sideDivComponent/topPost';
import CategoryBar from '../CategoryBar';

const ITEMS_PER_PAGE = 6; // Number of blogs to display per page

const BlogList = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedBlogs, setSortedBlogs] = useState(blogs);

  const handleCategorySelect = (category) => {
    const filteredBlogs = category === 'All' ? blogs : blogs.filter(blog => blog.category === category);
    setSortedBlogs(filteredBlogs);
    setCurrentPage(1); // Reset to first page when category changes
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
    setCurrentPage(1); // Reset to first page after sorting
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Get the blogs to display for the current page
  const visibleBlogs = sortedBlogs.slice(startIndex, endIndex);

  // Calculate total number of pages
  const totalPages = Math.ceil(sortedBlogs.length / ITEMS_PER_PAGE);

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
          {visibleBlogs.map((blog) => (
            <BlogItem blog={blog} key={blog.name} />
          ))}
        </div>
        <div className='side-div'>
          <div className='topPost-div'>
            <TopPost />
          </div>
        </div>
      </div>
      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
