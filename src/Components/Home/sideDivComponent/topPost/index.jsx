import React from 'react'
import { Link } from 'react-router-dom';
import data from './top-post.json'
import '../../../Reuseable/sideDiv/sideDiv.css'

const TopPost = () => {
    return (
        <div>
            <div className='side-div-section'>
                <div className='side-div-head'>
                    <h2>Top Posts</h2>
                </div>
                <div className='side-div-list'>
                    <div>
                        <ul>
                            {data.map((blog, path) => (
                                <li key={path} >
                                    <Link className='side-div-link' to={blog.path}>{blog.blogName}
                                    </Link>
                                    <p> {blog.blogType}</p>
                                    <p> {blog.date}</p>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPost