import React from 'react'
import Header from '../components/Header'
import { Outlet, NavLink, Link } from 'react-router-dom'

const HeaderMainFooter = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] py-3 flex flex-col items-center gap-5 bg-[#EBF5F9]">
        <Outlet />
      </main>
      <footer className="min-h-[10vh] bg-black flex flex-col flex-wrap justify-around items-center py-3 gap-2 text-white">
        <p>© 2024 - All rights reserved</p>
        <div className='flex felx-wrap justify-around w-full'>
          <Link to="https://www.instagram.com/" target='_blank'><img src="../../img/insta.png" alt="insta" /></Link>
          <Link to="https://web.facebook.com/" target='_blank'><img src="../../img/faceb.png" alt="fb" /></Link >
          <Link to="https://www.whatsapp.com/" target='_blank' ><img src="../../img/wassap.png" alt="whatsapp" /></Link>
          <Link to="https://www.linkedin.com/" target='_blank'><img src="../../img/linke.png" alt="linkedin" /></Link>
        </div>
      </footer></>
  )
}

export default HeaderMainFooter