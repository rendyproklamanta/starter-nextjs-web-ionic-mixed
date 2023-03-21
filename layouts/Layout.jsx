import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {

   useEffect(() => {
      AOS.init({
         delay: 400,
         duration: 800,
      });
   }, [])

   return (
      <>
         <Navbar />

         <main className="w-100 overflow-hidden position-relative bg-black text-white">
            {children}
         </main>

         <Footer />
      </>

   )
}

export default Layout