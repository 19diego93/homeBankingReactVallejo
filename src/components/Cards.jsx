import React, { useState } from 'react';

const Cards = ({ cardColor, number, typeCard, cardHolder, creationDate, expirationDate, cvv }) => {
    const [showCvv, setShowCvv] = useState(false);

    const cardColorOptions = {
        titanium: "from-black to-gray-500",

        gold: "from-yellow-600 to-red-400",

        silver: "from-gray-500 to-blue-500"

    }


    const handleClick = () => {
        setShowCvv(!showCvv);
    };
    return (
        <div onClick={handleClick} className={`card relative h-[200px] min-w-[300px] flex flex-col justify-end px-6 py-10 text-white rounded-2xl gap-2 bg-gradient-to-r ${cardColorOptions[cardColor.toLowerCase()]}`}>
            <div className="flex flex-col gap-2">
                <div className="flex flex-wrap flex-row justify-around">
                    <p className='text-lg'>{typeCard}</p>
                    {showCvv ? <p className='text-lg'>{cvv}</p> : "CVV"}
                </div>
                <div className="flex flex-row ">
                    <div className="flex-1 flex flex-col gap-2">
                        <p className="text-lg font-medium">{number}</p>
                        <div className="flex flex-col gap-1">
                            <p className="">{cardHolder}</p>
                            <div className='flex flex-row gap-4'>
                                <div>
                                    <p className="text-xs">Creation Date</p>
                                    <p className="">{creationDate}</p>
                                </div>
                                <div>
                                    <p className="text-xs">Valid Date</p>
                                    <p className="">{expirationDate}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="self-center">
                        <img className='w-[55px] h-[55px] rounded-[50%]' src="../../img/wolfBank.png" alt="bankLogo" />
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Cards
