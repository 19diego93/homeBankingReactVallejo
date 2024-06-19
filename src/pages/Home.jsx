import React, { useState } from 'react';
import CarouselBanner from '../components/CarouselBanner';
import { Card } from 'flowbite-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { email, message } = formData;

        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message) {
            toast.success('Message sent!');
            setFormData({
                email: '',
                message: '',
            });
        } else {
            toast.error('Message not sent!');
        }
    };

    return (
        <div className="flex flex-wrap flex-col items-center gap-4">
            <h1 className="text-center font-bold pt-5 text-4xl">Welcome to Wolfbank</h1>

            <section className="w-[95%] bg-white rounded-xl shadow-lg p-10 mt-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
                <div className="w-full md:w-3/4">
                    <h2 className="text-center text-2xl bg-[#add8e6] p-3 rounded-lg font-semibold">
                        Our Services
                    </h2>
                    <p className="text-center text-lg mt-5">
                        At WolfBank, we believe in making banking easy, secure, and
                        convenient for you. Our home banking services are designed to bring
                        the bank to your fingertips, offering a comprehensive range of
                        financial solutions from the comfort of your home.
                    </p>
                    <ul className="list-disc mt-5 pl-5 mx-auto w-[66%] ">
                        <li>
                            Create accounts <span className="text-xs">- Apply for an account</span>
                        </li>
                        <li>
                            Transactions <span className="text-xs">- Transfer funds, pay bills, etc.</span>
                        </li>
                        <li>
                            Get cards <span className="text-xs">- Apply for a card for online purchases</span>
                        </li>
                        <li>
                            Loans <span className="text-xs">- Apply for a loan to cover unexpected expenses</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-3/5">
                    <img className="w-full h-full" src="../../img/eCommerce2.png" alt="wolfbank" />
                </div>
            </section>
            <section className="flex flex-col items-center justify-center mt-4 lg:mt-10 w-[95%] bg-white rounded-xl shadow-lg p-10">
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900 bg-[#add8e6] py-3 px-7 rounded-lg">
                    About Us
                </h3>
                <div className="flex flex-col justify-center items-center lg:flex-row mt-10 gap-5 w-full ">
                    {/* Cards */}
                </div>
            </section>
            <section className="flex flex-col items-center justify-center mt-4 lg:mt-10 w-[95%] bg-white rounded-xl shadow-lg p-10">
                <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-700 rounded-lg"
                    />
                    <textarea
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="px-4 py-2 border border-gray-700 rounded-lg"
                    ></textarea>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                        Send
                    </button>
                </form>
            </section>

            <div className="my-5 p-5 rounded-lg flex justify-center w-full h-[300px]">
                <CarouselBanner widthHeight={'w-[90%] h-[90%]'} />
            </div>
            <ToastContainer theme="colored" position="bottom-right" />
        </div>
    );
};

export default Home;
