import React from 'react';
import CarouselBanner from '../components/CarouselBanner';
const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center pt-5 text-4xl">Welcome to Wolfbank</h1>
            <p className="text-center text-lg mt-5">About Us</p>
            <p className="text-center text-base mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, nisl sit amet eleifend ultricies, orci nibh euismod velit, ac pretium nisl ipsum nec nibh. </p>
            <div className="flex mt-10 gap-5 w-full justify-around">
                <img className="w-[300px]" src="https://source.unsplash.com/random" alt="wolfbank" />
                <img className="w-[300px]" src="https://source.unsplash.com/random" alt="wolfbank" />
            </div>
            <section className="bg-white rounded-xl shadow-lg p-10 mt-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div className="w-full md:w-3/4">
                    <h2 className="text-center text-3xl">Our Services</h2>
                    <p className="text-center text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, nisl sit amet eleifend ultricies, orci nibh euismod velit, ac pretium nisl ipsum nec nibh.</p>
                    <ul className="list-disc mt-5 pl-5 mx-auto w-[66%] ">
                        <li>Create accounts <span className="text-xs">- Apply for an account</span></li>
                        <li>Transactions <span className="text-xs">- Transfer funds, pay bills, etc.</span></li>
                        <li>Get cards <span className="text-xs">- Apply for a card for online purchases</span></li>
                        <li>Loans <span className="text-xs">- Apply for a loan to cover unexpected expenses</span></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4">
                    <img className="w-full  mx-auto" src="https://source.unsplash.com/random" alt="wolfbank" />
                </div>
            </section>
            <div className='my-5 p-5 rounded-lg flex justify-center w-full h-[300px]'>
                <CarouselBanner widthHeight={"w-[90%] h-[90%]"} />
            </div>
        </div>
    )
}

export default Home;
