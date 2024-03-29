import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../Reuseable/categoryLable'
import './BlogItem.css'
import ReadButton from '../../../Reuseable/ReadButton'

const BlogItem = ({ blog: { name, title, createdAt, authorName, authorAvatar, category, cover } }) =>

  <div className='blogItem-wrap'>
    <div>
      <h3 id='main-title'>{title}</h3>
      <img className='blogItem-cover' src={cover} alt="cover" />
      <Chip label={category} />
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${name}`}>
          <ReadButton />
        </Link>
      </footer>
    </div>
  </div>

export default BlogItem;