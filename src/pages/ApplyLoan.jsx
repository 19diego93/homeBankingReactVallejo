import React from 'react'

const ApplyLoan = () => {
    return (
        <div className='w-full flex flex-col items-center '>
            <h1 className='w-full text-center font-bold text-4xl mb-8 '>Apply for a Loan!</h1>
            <div className='flex flex-row items-center w-[80%] h-[80%] gap-5 bg-gray-700 rounded-2xl'>
                <form className="w-full flex justify-center" action="">
                    <div className='rounded-2xl pt-4 pb-10 w-[80%] bg-black'>
                        <div className=" text-white px-12">

                            <div className="mt-5 flex flex-col ">
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="loanType" >Select loan</label >
                                    <select
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="loanType"
                                    >
                                        <option value="Mortgage">Mortgage</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Automotive">Automotive</option>

                                    </select>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="account" >Select an Account</label >
                                    <select
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="account"
                                    >
                                        <option value="VIN001">VIN001</option>
                                        <option value="VIN002">VIN002</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="amount" >Amount</label >
                                    <input className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500" type="number" name="amount" id="amount" />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="payment" >Payment</label >
                                    <select
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="payment"
                                    >
                                        <option value="3">3 installments</option>
                                        <option value="6">6 installments</option>
                                        <option value="12">12 installments</option>
                                        <option value="24">24 installments</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5">
                                <button className="py-2 px-4 bg-[#AB9100] hover:bg-[#ffde44] hover:text-black focus:ring-grey-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit">Apply</button>
                            </div>
                            <div className="mt-5">
                                <button className="py-2 px-4 bg-red-600 hover:bg-red-400 hover:text-black focus:ring-grey-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer">Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='w-2/3 h-full'>
                    <img className='object-cover rounded-r-xl ' src="https://i.pinimg.com/564x/91/46/82/914682b99ea64242b8cc3d68ffa40a12.jpg" alt="credit and hand" />
                </div>
            </div>

        </div>
    )
}

export default ApplyLoan