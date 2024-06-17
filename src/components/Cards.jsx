import React from 'react';

const Cards = ({ typeCard, number, cardHolder, expirationDate }) => {
    return (
        <div className="card relative h-[200px] min-w-[300px] flex flex-col justify-end px-6 py-10 text-white rounded-2xl gap-2 bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex flex-col gap-2">
                <p className='text-lg'>{typeCard}</p>
                <div className="flex flex-row ">
                    <div className="flex-1 flex flex-col gap-2">
                        <p className="text-lg font-medium">{number}</p>
                        <div className="flex flex-col gap-1">
                            <p className="">{cardHolder}</p>
                            <div className='flex flex-row gap-4'>
                                <div>
                                    <p className="text-xs">Creation Date</p>
                                    <p className="">{expirationDate}</p>
                                </div>
                                <div>
                                    <p className="text-xs">Valid Date</p>
                                    <p className="">{expirationDate}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="self-center">
                        <img className='w-[55px] h-[55px] rounded-[50%]' src="../../public/img/wolfBank.png" alt="bankLogo" />
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Cards
