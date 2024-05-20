import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const HeaderMainFooter = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] py-10 flex flex-col items-center justify-center">
        <Outlet />
      </main>
      <footer className="h-[10vh] bg-black flex flex-wrap justify-around items-center text-white">
        <p>© 2024 - All rights reserved</p>
        <img src="" alt="insta" /><img src="" alt="fb" /><img src="" alt="whatsapp" />
      </footer></>
  )
}

export default HeaderMainFooter