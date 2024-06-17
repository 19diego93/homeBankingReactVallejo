import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

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
          <img src="" alt="insta" /><img src="" alt="fb" /><img src="" alt="whatsapp" />
        </div>
      </footer></>
  )
}

export default HeaderMainFooter