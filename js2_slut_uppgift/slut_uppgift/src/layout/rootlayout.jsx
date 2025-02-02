import React from 'react'
import{Outlet} from "react-router"
import Navbar from '../components/navbar'
import Providers from '../components/Providers'
import Footer from '../components/footer'
const Rootlayout = () => {
  return (
    <div className='mediacontainer'>
        <Navbar/>
        <div className="container">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Rootlayout