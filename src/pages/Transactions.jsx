import { React, useState, useEffect } from 'react';
import { Button } from "flowbite-react"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// This component handles the transactions between accounts.
const Transactions = () => {
    // State variables to hold account data and form inputs.
    const [accounts, setAccounts] = useState([]); // Holds the list of accounts.
    const [selectedAccount, setSelectedAccount] = useState(""); // Holds the selected account number.
    const [amount, setAmount] = useState(0); // Holds the amount to be transferred.
    const [destinyAccount, setDestinyAccount] = useState(""); // Holds the destination account number.

    // Get the client data from the Redux store.
    const client = useSelector(store => store.auth);
    const token = client.token; // Get the token from the client data.

    // Fetch the list of accounts when the component mounts and when the token changes.
    useEffect(() => {
        const fetchAccounts = async () => {
            // Make a GET request to the server to fetch the list of accounts.
            const response = await axios.get('https://homebanking-app-2u3u.onrender.com/api/auth/current', { headers: { Authorization: `Bearer ${token}` } });
            setAccounts(response.data.accounts); // Update the accounts state with the fetched data.
        };
        fetchAccounts();
    }, [token]);

    // Hook to navigate between pages.
    const navigate = useNavigate();

    // Function to handle the form submission.
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior.

        // Create the payload for the POST request.
        const payload = {
            amount,
            description: `Transaction ${amount}`,
            toAccountNumber: destinyAccount,
            fromAccountNumber: selectedAccount
        };

        // Set the headers for the POST request.
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try {
            // Make a POST request to the server to process the transaction.
            const response = await axios.post('https://homebanking-app-2u3u.onrender.com/api/transactions', payload, config);
            console.log(response.data); // Log the response data.
        } catch (error) {
            console.log(error); // Log any errors.
            toast.warn(error.response.data);
        }
    };

    // Render the component.
    return (
        <div className="my-5 flex items-center justify-center bg-gray-100 min-h-70vh p-8 rounded-lg">
            <div className="w-[400px]">
                <h1 className="text-2xl font-bold mb-6">Transactions</h1>
                <form className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="account" className="text-sm font-medium">Accounts</label>
                        {selectedAccount && <p>Balance: ${selectedAccount.balance}</p>}
                        <select
                            id="account"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            value={selectedAccount}
                            onChange={(e) => setSelectedAccount(e.target.value)}
                        >
                            <option disabled>Choose one</option>
                            {accounts.map((account) => (
                                <option key={account.id} value={account.number}>{account.number}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="amount" className="text-sm font-medium">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Ingrese el monto"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="destinyAccount" className="text-sm font-medium">Destiny account</label>
                        <input
                            type="text"
                            id="destinyAccount"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Ingrese la cuenta destino"
                            value={destinyAccount}
                            onChange={(e) => setDestinyAccount(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-around space-x-2">
                        <Button onClick={handleSubmit}>Confirm</Button> {/* Button to submit the form. */}
                        <Button onClick={() => navigate("/clientHome")} >Cancel</Button> {/* Button to navigate back. */}
                    </div>
                </form>
            </div >
        </div >
    );
};
export default Transactions;
