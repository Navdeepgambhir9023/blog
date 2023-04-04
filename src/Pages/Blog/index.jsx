import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {blogList} from '../../config/data'
import {Link} from 'react-router-dom'

const Blog = () => {
  const {id}=useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id))
    if (blog) {
      setBlog(blog)
    }
  }, [id])
  return (
    <div>
          <Link>
          <span> &#8592;</span> <span>Go Back</span>
          </Link>
          {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <categoryLable label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <h1>Blog Not Found</h1>
      )}
    </div>
  )
}

export default Blog