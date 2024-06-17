import React from 'react';
import { Card } from "flowbite-react";
import { useSelector } from 'react-redux';

const ClientHome = () => {

    const user = useSelector(store => store.auth.user);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col gap-2">
            <div className="flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold text-gray-800">Welcome {user.name}!</h1>
                <p className="text-xl text-gray-600 mt-4">Discover our exclusive offers for you.</p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 ">
                <section className="w-full lg:w-4/5 p-4 bg-blue-100 rounded-lg" >
                    <h2 className="text-xl font-bold mb-4">Our Promotions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        <Card
                            className="max-w-sm "
                            imgAlt="Car Loan Offer"
                            imgSrc="https://picsum.photos/100/75"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Car Loan Offer
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Get a discount on your car loan with our partnership with Volkswagen.
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm "
                            imgAlt="Savings Plan"
                            imgSrc="https://picsum.photos/100/75?random=1"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Savings Plan
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Join our savings plan and get a higher return on your investments.
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm "
                            imgAlt="Insurance Discount"
                            imgSrc="https://picsum.photos/100/75?random=2"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Insurance Discount
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Get a discount on your car insurance with our partnership with AXA.
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm "
                            imgAlt="Travel Discounts"
                            imgSrc="https://picsum.photos/100/75?random=3"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Travel Discounts
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Get discounts on your next trip with our partnership with Airbnb.
                            </p>
                        </Card>
                    </div>
                </section>
            </div>
            <div className="flex flex-col items-center justify-center p-4 ">
                <section className="w-full lg:w-4/5 p-4 bg-blue-100 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Our Savings Plans</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        <Card
                            className="max-w-sm "
                            imgAlt="Gold Plan"
                            imgSrc="https://picsum.photos/100/75"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Gold Plan
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Get a higher return on your savings with our Gold Plan.
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm "
                            imgAlt="Silver Plan"
                            imgSrc="https://picsum.photos/100/75?random=1"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Silver Plan
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Enjoy a comfortable savings rate with our Silver Plan.
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm "
                            imgAlt="Bronze Plan"
                            imgSrc="https://picsum.photos/100/75?random=2"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Bronze Plan
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Start your savings journey with our Bronze Plan.
                            </p>
                        </Card>
                    </div>
                </section>
            </div>

            <div className="flex flex-col items-center justify-center p-4 ">
                <section className="w-full lg:w-4/5 p-4 bg-blue-100 rounded-lg">
                    <h2 className="text-xl font-bold mb-4 duration-200 hover:scale-125">Our Partners</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <Card
                            className="max-w-sm "
                            imgAlt="Volkswagen"
                            imgSrc="https://picsum.photos/100/75"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Volkswagen
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Get a discount on your car loan.
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm "
                            imgAlt="AXA"
                            imgSrc="https://picsum.photos/100/75?random=1"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                AXA
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Get a discount on your car insurance.
                            </p>
                        </Card>
                        <Card
                            className="max-w-sm "
                            imgAlt="Airbnb"
                            imgSrc="https://picsum.photos/100/75?random=2"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Airbnb
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Get discounts on your next trip.
                            </p>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ClientHome;

