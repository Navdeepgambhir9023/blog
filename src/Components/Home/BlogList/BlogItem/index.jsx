import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../Reuseable/categoryLable'
import './BlogItem.css'

const BlogItem = ({ blog: { id, description, title, createdAt, authorName, authorAvatar, category, cover } }) =>

  <div className='blogItem-wrap'>
    <h3>{title}</h3>
    <img className='blogItem-cover' src={cover} alt="cover" />
    <Chip label={category} />
    <p className='blogItem-discription'>{description}</p>
    <footer>
      <div className="blogItem-author">
        <img src={authorAvatar} alt="avatar" />
        <div>
          <h6>{authorName}</h6>
          <p>{createdAt}</p>
        </div>
      </div>
      <Link className='blogItem-link' to={`/blog/${id}`}>
        <div class="read-button-wrapper">
          <button className='read-button'>
            Start Reading
          </button>
        </div>
      </Link>

    </footer>
  </div>

export default BlogItem;