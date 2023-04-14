import React from 'react'
import './category.css'
import { Link } from 'react-router-dom';
import data from './category.json'

const Category = () => {
  return (
    <div>
      <div className='category-head'>
        <h1>Categories</h1>
      </div>
      <div className='category-section'>
        <div>
          <ul>
            {data.map((category, path) => (
              <li key={path} >
                <Link className='category-link' to={category.path}>{category.categoryName}
                </Link>
                <hr/>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Category