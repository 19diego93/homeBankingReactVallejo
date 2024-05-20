import React from 'react'

const CreditCard = ({ typeCard, number, cardHolder, expirationDate }) => {
    return (
        <div className="card relative h-[200px] w-[350px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-4 bg-gradient-to-r from-purple-500 to-pink-500">
            <p className='text-xl'>{typeCard}</p>
            <p className="text-2xl font-medium">{number}</p>
            <div className="flex justify-between gap-10">
                <p className="text-md font-medium">{cardHolder}</p>
                <div className="flex-1 flex flex-col justify-end">
                    <p className="self-end">Valid Date</p>
                    <p className="self-end">{expirationDate}</p>
                </div>
                <div className="self-center">
                    <img className=' w-[55px] h-[55px] rounded-[50%]' src="../../public/img/wolfBank.png" alt="bankLogo" />
                </div>
            </div>
        </div>
    )
}
export default CreditCard
