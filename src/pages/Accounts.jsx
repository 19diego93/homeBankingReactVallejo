import React, { useEffect, useState } from 'react';
import CarouselBanner from "../components/CarouselBanner";
import CardAccount from '../components/CardAccount';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Accounts = () => {
  const token = useSelector(store => store.auth.token);
  const [accountList, setAccountList] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://homebanking-app-2u3u.onrender.com/api/clients/accounts/current`, { headers: { Authorization: `Bearer ${token}` } });
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
      const postResponse = await axios.post(`https://homebanking-app-2u3u.onrender.com/api/clients/accounts/current`, { hello: 'world' }, { headers: { Authorization: `Bearer ${token}` } });
      alert(postResponse.data);
      console.log(postResponseP);
    } catch (error) {
      console.error(error);
      alert(error);

    }
  }
  const handleAccountId = (id) => {
    navigate(`/clients/account/${id}`);
  }


  return (
    <>
      <h1 className="text-center font-bold pt-5 text-4xl "> Welcome client !</h1>
      <div className=' w-[90%] mt-5 mb-5 border border-gray-200 rounded-xl bg-gray-300'>
        <div className=' w-full'>
          <h2 className='relative bottom-6 rounded-t-xl w-[200px] bg-gray-300 px-5 pt-2 font-semibold text-center text-xl'>Your Accounts</h2>
        </div>
        <section className="flex flex-wrap flex-row justify-around gap-4 w-full mb-7">
          {accountList.sort((a, b) => a.id - b.id).map(account => (
            <div key={account.id} className='m-2 flex flex-col items-center justify-center gap-2'>
              <CardAccount number={account.number} balance={account.balance} creationDate={account.creationDate} />
              <Button className='bg-[#AB9144] hover:bg-[#add8e6] px-5' color="dark" size="xs" onClick={() => handleAccountId(account.id)}>Details</Button>
            </div>
          ))}
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
