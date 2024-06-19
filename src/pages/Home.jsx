import React, { useState } from 'react';
import CarouselBanner from '../components/CarouselBanner';
import { Card } from 'flowbite-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message) {
            toast.success('Message sent!');
        } else {
            toast.error('Message not sent!');
        }

        setEmail('');
        setMessage('');
    };
    return (
        <div className="flex flex-wrap flex-col items-center gap-4">
            <h1 className="text-center font-bold pt-5 text-4xl">Welcome to Wolfbank</h1>

            <section className="w-[95%] bg-white rounded-xl shadow-lg p-10 mt-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div className="w-full md:w-3/4">
                    <h2 className="text-center text-2xl bg-[#add8e6] p-3 rounded-lg font-semibold">Our Services</h2>
                    <p className="text-center text-lg mt-5">At WolfBank, we believe in making banking easy, secure, and convenient for you. Our home banking services are designed to bring the bank to your fingertips, offering a comprehensive range of financial solutions from the comfort of your home.</p>
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
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 bg-[#add8e6] py-2 px-4 rounded-lg">About Us</h3>
                <div className="flex flex-wrap flex-col justify-center items-center xl:flex-row mt-10 gap-5 w-full ">
                    <Card className="w-[95%] lg:w-[500px] bg-[#add8e6]" imgSrc="../../img/eCommerce3.png" horizontal>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                            WolfBank Offers Competitive Loan and Credit Services
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            WolfBank is now offering a range of competitive loan and credit services to meet your financial needs. Whether you're looking for a personal loan, mortgage, or business credit, our streamlined application process and attractive rates make borrowing easy. Visit our website to learn more and apply online today.
                        </p>
                    </Card>
                    <Card className="w-[95%] lg:w-[500px] bg-[#add8e6]" imgSrc="../../img/eCommerce1.png" horizontal>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                            WolfBank Launches Innovative Financial Planning Tools
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            WolfBank is excited to introduce a new suite of financial planning tools designed to help you achieve your financial goals. Our tools offer personalized budgeting assistance, savings goal trackers, and investment advice tailored to your unique needs.
                        </p>
                    </Card>
                    <Card className="w-[95%] lg:w-[500px] bg-[#add8e6]" imgSrc="../../img/iaBank1.png" horizontal>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                            WolfBank Recognized for Excellence in Customer Support
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            We are proud to announce that WolfBank has received the "Excellence in Customer Support" award from the Financial Services Association. This award highlights our dedication to providing exceptional 24/7 customer service.
                        </p>
                    </Card>
                    <Card className="w-[95%] lg:w-[500px] bg-[#add8e6]" imgSrc="../../img/aiBank2.jpg" horizontal>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                            WolfBank Named "Most Innovative Bank" of the Year
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            WolfBank has been honored with the "Most Innovative Bank" award by the International Finance Awards 2024. This recognition celebrates our commitment to bringing cutting-edge technology and innovative banking solutions to our customers.

                        </p>
                    </Card>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center mt-4 lg:mt-10 w-[95%] bg-white rounded-xl shadow-lg p-10">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-semibold tracking-tight text-gray-900 bg-[#add8e6] py-3 px-7 rounded-lg">Contact Us</h3>
                        <p className="mt-4 text-lg">If you have any questions or need further information, please don't hesitate to contact us. We're here to help and would love to assist you with anything you need. Your satisfaction is our priority, and we look forward to hearing from you.</p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' className="px-4 py-2 border border-gray-700 rounded-lg" />
                            <input type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                                className="px-4 py-2 border border-gray-700 rounded-lg"
                            />
                            <textarea
                                placeholder="Message"
                                value={message}
                                onChange={handleMessageChange}
                                rows={5}
                                className="px-4 py-2 border border-gray-700 rounded-lg"
                            ></textarea>
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </section>


            <div className='my-5 p-5 rounded-lg flex justify-center w-full h-[300px]'>
                <CarouselBanner widthHeight={"w-[90%] h-[90%]"} />
            </div>
            <ToastContainer theme='colored' position='bottom-right' />
        </div >
    )
}

export default Home;
