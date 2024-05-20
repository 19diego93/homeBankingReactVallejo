import React from 'react'
import navAnchorArray from '../utils/anchorArray'
import Anchor from './Anchor'
const Header = () => {
  return (
    <>
      <header className="w-full h-[10vh] bg-black flex flex-wrap items-center justify-between text-white">
        <div className="w-[55px] rounded-[50%] ml-2">
          <img className=" h-[90%] object-cover rounded-[50%]" src="/img/wolfBank.png" alt="logo" />
        </div>
        <nav className="w-2/3 flex justify-around" >
          {navAnchorArray.map((link) => <Anchor key={link.name} name={link.name} theRef={link.theRef} />)}
        </nav>
      </header>
    </>
  )
}

export default Header