import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogList } from '../../config/data'
import Blogheader from '../../Components/Blog/blog-header'
import AuthorIcons from '../../Components/Reuseable/socialIcon'
import './blog.css'

const Blog = () => {
  const { name } = useParams()
  const [blog, setBlog] = useState(null)
  const { authorName, authorAvatar, createdAt } = blog || {};

  useEffect(() => {
    const foundBlog = blogList.find(blog => blog.name === name);
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [name]);
  return (
    <div>

      {blog ? (
        <div className='blog-wrap'>
          <header>
            <div>
              <Blogheader />
            </div>

            <div className='blog-title-div'>
              <h1>{blog.title}</h1>
            </div>

            <div className='author-detail-holder'>
              <div className="blogItem-author">
                <img src={authorAvatar} alt="avatar" />
                <div>
                  <h6>{authorName}</h6>
                  <p>{createdAt}</p>
                </div>
              </div>
              <div className='social-div'>
                <div className='social-icon'>
                  <AuthorIcons />
                </div>
              </div>
            </div>

            <div className='blog-subCategory'>
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
          <div className='blog-desc'>
          <p>{blog.description}</p>
          </div>
        </div>
      ) : (
        <h1>Blog Not Found</h1>
      )}
    </div>
  )
}

export default Blog