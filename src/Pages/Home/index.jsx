import React, { useState } from 'react'
import Navbar from '../../Components/Home/navbar'
// import Searchbar from '../../Components/Home/Searchbar'
import { blogList } from '../../config/data'
import BlogList from '../../Components/Home/BlogList'
import Landing from '../../Components/Home/landingPage'



const Home = () => {
  const [blogs] = useState(blogList)
  // const [search, setSearch] = useState('')

  // //search function
  // const searchHandlerSubmit = event => {
  //   event.preventDefault()
  //   searchHandlerResult()
  // }

  // //search by category

  // const searchHandlerResult = () => {
  //   const allBlogs = [blogList]
  //   const newBlogs = allBlogs.filter((blog) => 
  //   blog.category.toLowerCase().includes(search.toLowerCase().trim()))
  // setBlogs(newBlogs)
  // }

  return (
    <div>
      {/* {Page Headder} */}
      <Navbar />

      {/* {landing Text and Landing SVG} */}
      <Landing />

      {/* {Blog List} */}
      <BlogList blogs={blogs} />
    </div>
  )
}

export default Home