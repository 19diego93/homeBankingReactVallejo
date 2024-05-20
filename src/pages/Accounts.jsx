import React from 'react';
import CarouselBanner from "../components/CarouselBanner";
import CardAccount from '../components/CardAccount';
import { Button } from 'flowbite-react';

// cada vista debera tener su acceso a la bd
const Accounts = ({ wolfClient }) => {
  return (
    <>
      <h1 className="w-full text-center p-5 text-3xl font-bold " >Welcome, {wolfClient.name}!</h1>
      <div className='my-5 rounded-lg hover:shadow-[0px_0px_10px_3px_#e53e3e]'>
        <Button className='bg-[#AB9144]' color="dark" size="lg" >Request Account</Button>
      </div>
      <div className=' w-[90%] mt-5 mb-7 border border-gray-200 rounded-xl bg-gray-300'>
        <div className=' w-full'>
          <h2 className='relative bottom-6 rounded-t-xl w-[200px] bg-gray-300 px-5 pt-2 font-semibold text-center text-xl'>Your Account</h2>
        </div>
        <section className="flex flex-wrap flex-row justify-around  w-full mb-7">
          {wolfClient.accounts.map(account => <CardAccount key={account.id} number={account.number} balance={account.balance} creationDate={account.creationDate} />)}
        </section>
      </div>

      <CarouselBanner widthHeight={"w-[90%] h-[220px]"} />


    </>
  )
}

export default Accounts