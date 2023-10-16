import React from 'react'
import Navbar from '../../Components/About/Navbar'
import AboutLanding from '../../Components/About/About-Landing'

// import HomeFooter from '../../Components/Home/home-footer'



const Home = () => {
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
      {/* Custom Cursor */}


      {/* {Page Headder} */}
      <Navbar />

      {/* {landing Text and Landing SVG} */}
      <AboutLanding />


    </div>

  )
}

export default Home