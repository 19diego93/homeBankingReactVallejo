import React from 'react'

const LoanCard = ({ name, amount, payments }) => {
    return (
        <div className='border border-gray-500 rounded-md w-[300px] h-[200px] flex flex-col justify-around items-start pl-5 bg-gray-300'>
            <p>{name}</p>
            <div className=' flex flex-wrap w-full'>
                <p>Amount:</p>
                <p className='w-2/3 text-center text-2xl'>${amount}</p>
            </div>
            <div className=' flex flex-wrap w-full'>
                <p>Installments:</p>
                <p className='w-2/3 text-center text-2xl'>{payments}</p>
            </div>
            <div className=' flex flex-wrap justify-between w-[75%]'>
                <p>Application date:</p>
                <p>25/05/23</p>
            </div>
        </div>
    )
}

export default LoanCard