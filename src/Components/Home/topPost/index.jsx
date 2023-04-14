import React from 'react'
import { Link } from 'react-router-dom';
import data from './top-post.json'
import './topPost.css'

const TopPost = () => {
    return (
        <div>
            <div className='top-posts-section'>
                <div>
                    <h1>Top Posts</h1>
                </div>
                <div className='top-list'>
                    <ul>
                        {data.map((blog, path) => (
                            <li key={path} >
                                <Link className='topPost-link' to={blog.path}>{blog.blogName}
                                </Link>
                                <p> {blog.blogType}</p>
                                <p>{blog.date}</p>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopPost