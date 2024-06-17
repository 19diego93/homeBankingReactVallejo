import React, { useEffect, useState } from 'react';
import CarouselBanner from "../components/CarouselBanner";
import CardAccount from '../components/CardAccount';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Accounts = () => {
  const token = useSelector(store => store.auth.token);
  const [accountList, setAccountList] = useState(null);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/clients/accounts/current`, { headers: { Authorization: `Bearer ${token}` } });
        setAccountList(response.data);
      } catch (error) {
        console.error(error);
        alert(error.response.data);
      }
    }

    fetchData();
  }, [token]);

  if (!accountList) {
    return <div>Loading...</div>;
  }

  const handleCreatAccount = async () => {
    try {
      const postResponse = await axios.post(`http://localhost:8080/api/clients/accounts/current`, { hello: 'world' }, { headers: { Authorization: `Bearer ${token}` } });
      alert(postResponse.message);
      console.log(postResponseP);
    } catch (error) {
      console.error(error);
      alert(error.postResponse.message);

    }
  }

  return (
    <>
      <h1 className="text-center pt-5 text-4xl "> Welcome client !</h1>
      <div className=' w-[90%] mt-5 mb-5 border border-gray-200 rounded-xl bg-gray-300'>
        <div className=' w-full'>
          <h2 className='relative bottom-6 rounded-t-xl w-[200px] bg-gray-300 px-5 pt-2 font-semibold text-center text-xl'>Your Accounts</h2>
        </div>
        <section className="flex flex-wrap flex-row justify-around gap-4 w-full mb-7">
          {accountList.map(account => <CardAccount key={account.id} number={account.number} balance={account.balance} creationDate={account.creationDate} />)}
        </section>
      </div>
      <div className='my-5 rounded-lg hover:shadow-[0px_0px_10px_3px_#e53e3e]'>
        <Button className='bg-[#AB9144]' color="dark" size="lg" onClick={handleCreatAccount} >Request Account</Button>
      </div>

      <CarouselBanner widthHeight={"w-[90%] h-[220px]"} />


    </>
  )
}

export default Accounts
