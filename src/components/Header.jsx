import React from 'react'
import Anchor from './Anchor'
import { navAnchorArray, clientAnchorArray } from '../utils/anchorArray.js'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions/authActions.js';
import { Button } from 'flowbite-react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector(store => store.auth);
  const isLoggedIn = user.loggedIn;

  const clientLogout = () => {
    toast.success('Logging out...');
    setTimeout(() => {

      dispatch(logout());
    }, 1500);
  };

  return (
    <>
      <header className="w-full min-h-[10vh]  bg-[#2c3e50] flex flex-col flex-wrap items-center justify-between gap-2 pt-3 lg:pt-0 lg:flex-row">
        <div className="w-full lg:w-1/3 h-full flex items-center justify-center py-2 ">
          <img className="w-[250px] lg:w-[320px]" src="/img/wolfPng.png" alt="logo" />
        </div>{isLoggedIn && <Button className='bg-[#AB9144] sm:self-end xl:mt-4 xl:mr-8  mr-[10px]' size="xs" onClick={clientLogout}>Logout</Button>}
        <nav className="flex flex-wrap w-full md:w-3/5 md:justify-center md:gap-[2px] lg:self-end lg:justify-end lg:gap-1 lg:w-3/5" >
          {isLoggedIn ? clientAnchorArray.map((link) => <Anchor key={link.name} name={link.name} theRef={link.theRef} />) : navAnchorArray.map((link) => <Anchor key={link.name} name={link.name} theRef={link.theRef} />)}
        </nav>
      </header>
      <ToastContainer position="bottom-right" autoClose={1500} />
    </>
  )
}

export default Header
