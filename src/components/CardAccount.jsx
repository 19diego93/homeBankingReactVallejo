import React from 'react'

const CardAccount = ({ number, balance, creationDate }) => {
  return (
    <article className="w-[300px] h-[150px] hover:shadow-[0px_0px_10px_3px_#e53e3e] hover:cursor-pointer border border-red-400 rounded-md bg-red-300 py-2 pl-9 flex flex-col justify-around items-start">
      <div className="flex felx-wrap pl-">
        <p className=''>Account number:</p>
        <p className='pl-[5px]'>{number}</p>
      </div>
      <div className="flex felx-wrap">
        <p className=''>Amount:</p>
        <p className=" pl-3 text-2xl">${balance}</p>
      </div>
      <p className=''>creation date: {creationDate}</p>
    </article>
  )
}

export default CardAccount