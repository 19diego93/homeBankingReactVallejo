import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const ApplyCard = () => {

    const [selectedCardType, setSelectedCardType] = useState("");
    const [selectedCardColor, setSelectedCardColor] = useState("");

    const { token } = useSelector(store => store.auth);

    const requestNewCard = async (e) => {
        e.preventDefault();

        const payload = {
            cardType: selectedCardType,
            cardColor: selectedCardColor
        };

        // Set the headers for the POST request.
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try {
            const response = await axios.post('https://homebanking-app-2u3u.onrender.com/api/clients/current/cards', payload, config);
            alert("Card created successfully")
        } catch (error) {
            console.log(error)
            console.log(error.response.data)
            alert("Error creating card")
        }
    }


    return (
        <div className='w-full flex flex-col items-center gap-5'>
            <h1 className='text-center pt-5 text-4xl '>Apply for a Card!</h1>
            <div className='flex flex-row items-center w-[80%] h-[80%] gap-5 bg-gray-700 rounded-2xl'>
                <form className="w-full flex justify-center" >
                    <div className='rounded-2xl pt-4 pb-10 w-[80%] bg-black'>
                        <div className=" text-white px-12">

                            <div className="mt-5 flex flex-col ">
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="cardType" >Select card type</label >
                                    <select
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="cardType"
                                        onChange={(e) => setSelectedCardType(e.target.value)}
                                        value={selectedCardType}
                                    >
                                        <option value="">Select a type</option>
                                        <option value="DEBIT">Debit</option>
                                        <option value="CREDIT">Credit</option>

                                    </select>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="gender" >Select card membership</label >
                                    <select
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="gender"
                                        onChange={(e) => setSelectedCardColor(e.target.value)}
                                        value={selectedCardColor}
                                    >
                                        <option value="">Select a color</option>
                                        <option value="SILVER">Silver</option>
                                        <option value="GOLD">Gold</option>
                                        <option value="TITANIUM">Titanium</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5">
                                <button className="py-2 px-4 bg-[#AB9100] hover:bg-[#ffde44] hover:text-black focus:ring-grey-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" onClick={requestNewCard}>Apply</button>
                            </div>
                            <div className="mt-5">
                                <NavLink to="/clients/card"><button className="py-2 px-4 bg-red-600 hover:bg-red-400 hover:text-black focus:ring-grey-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer">Cancel</button></NavLink>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='w-2/3 h-full'>
                    <img className='object-cover w-full h-full rounded-r-xl' src="https://i.pinimg.com/564x/df/46/89/df4689a5b8ce111bf09d4d81c1d1184c.jpg" alt="credit and hand" />
                </div>
            </div>

        </div>
    )
}

export default ApplyCard
