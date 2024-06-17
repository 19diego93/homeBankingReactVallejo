import React from 'react'
import Anchor from './Anchor'
import { navAnchorArray, clientAnchorArray } from '../utils/anchorArray.js'
import { useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions.js'
import { useDispatch } from 'react-redux'
const Header = () => {

  const user = useSelector(store => store.auth);
  console.log(user)
  const dispatch = useDispatch();
  const clientLogout = (name) => {
    if (name === "Logout") {
      dispatch(logout());
      console.log(user);
    }
  }
  const isLoggedIn = user.loggedIn
  console.log(isLoggedIn)
  return (
    <>
      <header className="w-full min-h-[10vh]  bg-[#2c3e50] flex flex-col flex-wrap items-center justify-between gap-2 pt-3 lg:pt-0 lg:flex-row">
        <div className="w-full lg:w-1/3 h-full flex items-center justify-center ">
          <img className="w-[250px]" src="/img/wolfPng.png" alt="logo" />
        </div>
        <nav className="flex flex-wrap w-full md:w-3/5 md:justify-center md:gap-[2px] lg:self-end lg:justify-end lg:gap-1 lg:w-3/5" >
          {isLoggedIn ? clientAnchorArray.map((link) => <Anchor key={link.name} name={link.name} theRef={link.theRef} clickHandler={() => clientLogout(link.name)} />) : navAnchorArray.map((link) => <Anchor key={link.name} name={link.name} theRef={link.theRef} clickHandler={() => clientLogout(link.name)} />)}
        </nav>
      </header>
    </>
  )
}

export default Header