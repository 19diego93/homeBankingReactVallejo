import React from 'react';
import Cards from '../components/Cards';
import { NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';

const CardWallet = ({ wolfClient }) => {


    const cardDebit = wolfClient?.cards?.filter(card => card.cardType == "DEBIT") || [];
    const cardCredit = wolfClient?.cards?.filter(card => card.cardType == "CREDIT") || [];
    return (
        <>
            <h1 className='text-center pt-5 text-4xl'>Your Cards</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg gap-6 lg:w-[80%]'>
                <div className='p-4 bg-white rounded-lg'>
                    <h3 className='pl-10 text-2xl pt-3 '>Credit</h3>
                    <div className=' py-3 flex flex-wrap justify-around items-center w-full gap-4'>
                        {cardCredit.length > 0 ? cardCredit.map(card => <Cards key={card.id} typeCard={card.cardType} number={card.number} cardHolder={card.cardHolder} expirationDate={card.expirationDate} />) : <p>You do not have credit card.</p>}
                    </div>
                </div>
                <div className='p-4 bg-white rounded-lg'>
                    <h3 className='pl-10 text-2xl pt-3 '>Debit</h3>
                    <div className=' py-3 flex flex-wrap justify-around items-center w-full gap-4'>
                        {cardDebit.length > 0 ? cardDebit.map(card => <Cards key={card.id} typeCard={card.cardType} number={card.number} cardHolder={card.cardHolder} expirationDate={card.expirationDate} />) : <p>You do not have debit card.</p>}
                    </div>
                </div>
            </div>
            <Button className='bg-[#AB9144]' color="dark" size="lg" ><NavLink to="/clients/card/applycard">Request Card</NavLink></Button>
        </>
    )
}

export default CardWallet