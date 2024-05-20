import React from 'react'
import CreditCard from '../components/CreditCard'

const CreditCards = ({ wolfClient }) => {

    const cardDebit = wolfClient?.cards?.filter(card => card.cardType == "DEBIT") || [];
    const cardCredit = wolfClient?.cards?.filter(card => card.cardType == "CREDIT") || [];
    return (
        <>
            <h1 className='w-full text-center text-4xl pt-10 pb-2'>Your Cards</h1>
            <h3 className='w-full ml-10 text-2xl py-8'>Credit</h3>
            <div className='flex flex-wrap justify-around items-center w-full gap-10'>
                {cardCredit.length > 0 ? cardCredit.map(card => <CreditCard key={card.id} typeCard={card.cardType} number={card.number} cardHolder={card.cardHolder} expirationDate={card.expirationDate} />) : <p>You do not have credit card.</p>}
            </div>
            <h3 className='w-full ml-10 text-2xl py-8'>Debit</h3>
            <div className='flex flex-wrap justify-around items-center w-full gap-10'>
                {cardDebit.length > 0 ? cardDebit.map(card => <CreditCard key={card.id} typeCard={card.cardType} number={card.number} cardHolder={card.cardHolder} expirationDate={card.expirationDate} />) : <p>You do not have credit card.</p>}
            </div>
        </>
    )
}

export default CreditCards