import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyLoan = () => {

    const token = useSelector(store => store.auth.token);
    const [loans, setLoans] = useState([]);
    const [clientAccounts, setClientAccounts] = useState([]);
    const [destinyAccount, setDestinyAccount] = useState("");
    const [amount, setAmount] = useState(0);
    const [selectedLoan, setSelectedLoan] = useState("");
    const [maxAmount, setMaxAmount] = useState(0);
    const [installments, setInstallments] = useState([]);
    const [selectedInstallment, setSelectedInstallment] = useState("");
    const [idLoan, setIdLoan] = useState(0);


    useEffect(() => {
        const fetchClientAccounts = async () => {
            try {
                const response = await axios.get('https://homebanking-app-2u3u.onrender.com/api/clients/accounts/current', { headers: { Authorization: `Bearer ${token}` } });
                setClientAccounts(response.data);
            } catch (error) { console.log(error) };
        }
        const fetchLoans = async () => {
            try {
                const listLoans = await axios.get('https://homebanking-app-2u3u.onrender.com/api/loans', { headers: { Authorization: `Bearer ${token}` } });
                setLoans(listLoans.data);
            } catch (error) { console.log(error) }
        }

        fetchClientAccounts();
        fetchLoans();
    }, [token]);

    useEffect(() => {
        const loan = loans.find(loan => loan.name === selectedLoan);
        if (loan) {
            setMaxAmount(loan.maxAmount);
            setInstallments(loan.payments)
            setIdLoan(loan.id)
            console.log(loan)
        } else {
            setMaxAmount(0);
            setInstallments([]);
            setIdLoan(null)
        }
    }, [selectedLoan, loans]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            amount,
            idLoan: idLoan,
            payments: selectedInstallment,
            accountNumber: destinyAccount
        };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        try {
            const response = await axios.post('https://homebanking-app-2u3u.onrender.com/api/loans', payload, config);
            console.log(response.data);
            toast.success('Loan applied successfully!');
        } catch (error) {
            console.log(error);
            toast.warn(error.response.data);
        }
    };

    return (
        <div className='w-full flex flex-col items-center gap-5'>
            <h1 className='text-center pt-5 text-4xl '>Apply for a Loan!</h1>
            <div className='flex flex-row items-center w-[80%] h-[80%] gap-5 bg-gray-700 rounded-2xl'>
                <form className="w-full flex justify-center">
                    <div className='rounded-2xl pt-4 pb-10 w-[80%] bg-black'>
                        <div className=" text-white px-12">

                            <div className="mt-5 flex flex-col ">
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="loanType" >Select loan</label >
                                    <select
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="loanType" onChange={(e) => setSelectedLoan(e.target.value)}
                                    >
                                        <option value="Select">Select one</option>
                                        {loans.map((loan) => (
                                            <option key={loan.id} value={loan.name}>
                                                {loan.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="account" >Select an Account</label >
                                    <select
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="account" onChange={(e) => setDestinyAccount(e.target.value)}
                                    >   <option value="Select">Select one</option>
                                        {clientAccounts.map((account) => (
                                            <option key={account.id} value={account.number}>
                                                {account.number}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="amount" >Max amount to apply for: ${maxAmount} </label >
                                    <input className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500" type="number" name="amount" id="amount" onChange={(e) => setAmount(e.target.value)} />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block"
                                        htmlFor="payment" >Payment</label >
                                    <select
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        id="payment" onChange={(e) => setSelectedInstallment(e.target.value)}
                                    ><option value="">Select one</option>
                                        {installments.sort((a, b) => a - b).map((insta) => (
                                            <option key={insta} value={insta}>
                                                {insta}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5">
                                <button className="py-2 px-4 bg-[#AB9100] hover:bg-[#ffde44] hover:text-black focus:ring-grey-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg" type="submit" onClick={handleSubmit}>Apply</button>
                            </div>
                            <div className="mt-5">
                                <NavLink to={"/clients/loan"}> <button className="py-2 px-4 bg-red-600 hover:bg-red-400 hover:text-black focus:ring-grey-400 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer">Cancel</button></NavLink>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='w-2/3 h-full'>
                    <img className='object-cover w-full h-full rounded-r-xl ' src="https://i.pinimg.com/564x/91/46/82/914682b99ea64242b8cc3d68ffa40a12.jpg" alt="credit and hand" />
                </div>
            </div>
            <ToastContainer position='bottom-right' theme='dark' />
        </div>
    )
}

export default ApplyLoan
