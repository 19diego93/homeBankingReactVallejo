import React from "react";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CardAccount from "../components/CardAccount";
import { Button } from "flowbite-react";

const AccountDetails = () => {
    const { token } = useSelector(store => store.auth);
    const [transactions, setTransactions] = useState([]);
    const [account, setAccount] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`https://homebanking-app-2u3u.onrender.com/api/accounts/${id}`, { headers: { Authorization: `Bearer ${token}` } });

                setAccount(response.data);
                setTransactions(response.data.transactions);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTransactions();
    }, [id]);
    if (account == {} && transactions == []) return <div>Loading...</div>
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-5 w-full lg:flex-row lg:justify-between min-h-70vh">
                <div className="w-full lg:w-2/5 lg:min-h-[350px] flex  flex-col items-center ">
                    <h2 className="text-2xl text-center font-bold mt-1 mb-4">Your account details</h2>
                    <div className="flex justify-center">
                        <CardAccount className="w-[90%]" number={account.number} balance={account.balance} creationDate={account.creationDate} />
                    </div>
                </div>
                <div className="w-full  lg:w-3/5 min-h-[350px] flex flex-col items-center">
                    <h2 className="text-2xl text-center font-bold mt-1 mb-4">Transactions resume: </h2>
                    <table className="table-auto w-[90%] ">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">Type</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2">Date</th>
                                <th className="px-4 py-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.sort((a, b) => b.id - a.id).map(transaction => (
                                <tr key={transaction.id} className="hover:bg-yellow-200 border-b border-gray-300">
                                    <td className="px-4 py-2">{transaction.transactionType}</td>
                                    <td className="px-4 py-2">${transaction.amount}</td>
                                    <td className="px-4 py-2">{new Date(transaction.date).toLocaleDateString('es-ES')}</td>
                                    <td className="px-4 py-2">{transaction.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            <Button className="bg-[#AB9144] hover:bg-[#add8e6] px-5" onClick={() => navigate("/clients/account")}>Back to Accounts</Button>
        </>
    );
};
export default AccountDetails;
