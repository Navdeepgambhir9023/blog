import React from 'react'
import { Link } from 'react-router-dom';
import data from './category.json'
import '../../Reuseable/sideDiv/sideDiv.css'

const Category = () => {
  return (
    <div>
      <div className='side-div-section'>
        <div className='side-div-head'>
          <h1>Categories</h1>
        </div>
        <div className='side-div-list'>
          <div>
            <ul>
              {data.map((category, path) => (
                <li key={path} >
                  <Link className='side-div-link' to={category.path}>{category.categoryName}
                  </Link>
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

export default Category