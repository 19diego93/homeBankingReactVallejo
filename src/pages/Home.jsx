import React from 'react';
import CarouselBanner from '../components/CarouselBanner';
import { Card } from 'flowbite-react';
const Home = () => {
    return (
        <div className="flex flex-wrap flex-col items-center gap-4">
            <h1 className="text-center font-bold pt-5 text-4xl">Welcome to Wolfbank</h1>

            <section className="w-[95%] bg-white rounded-xl shadow-lg p-10 mt-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div className="w-full md:w-3/4">
                    <h2 className="text-center text-2xl bg-[#add8e6] p-3 rounded-lg font-semibold">Our Services</h2>
                    <p className="text-center text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, nisl sit amet eleifend ultricies, orci nibh euismod velit, ac pretium nisl ipsum nec nibh.</p>
                    <ul className="list-disc mt-5 pl-5 mx-auto w-[66%] ">
                        <li>Create accounts <span className="text-xs">- Apply for an account</span></li>
                        <li>Transactions <span className="text-xs">- Transfer funds, pay bills, etc.</span></li>
                        <li>Get cards <span className="text-xs">- Apply for a card for online purchases</span></li>
                        <li>Loans <span className="text-xs">- Apply for a loan to cover unexpected expenses</span></li>
                    </ul>
                </div>
                <div className=" w-full md:w-3/5">
                    <img className="w-full h-full" src="../../img/eCommerce2.png" alt="wolfbank" />
                </div>
            </section>
            <section className='flex flex-col items-center justify-center mt-4 lg:mt-10 w-[95%] bg-white rounded-xl shadow-lg p-10' >
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 bg-[#add8e6] py-3 px-7 rounded-lg">About Us</h3>
                <div className="flex flex-col justify-center items-center lg:flex-row mt-10 gap-5 w-full ">
                    <Card className="w-[95%] bg-[#add8e6]" imgSrc="../../img/eCommerce3.png" horizontal>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                    <Card className="w-[95%] bg-[#add8e6]" imgSrc="../../img/eCommerce1.png" horizontal>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
            </section>


            <div className='my-5 p-5 rounded-lg flex justify-center w-full h-[300px]'>
                <CarouselBanner widthHeight={"w-[90%] h-[90%]"} />
            </div>
        </div>
    )
}

export default Home;
