import React, { useEffect, useState } from 'react'
import LoanCard from '../components/LoanCard'
import { NavLink } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Loans = () => {
    const token = useSelector(store => store.auth.token);
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const fetchClientLoans = async () => {
            try {
                const response = await axios.get('https://homebanking-app-2u3u.onrender.com/api/auth/current', { headers: { Authorization: `Bearer ${token}` } });
                setLoans(response.data.loans);
            } catch (error) {
                console.error(error);
            }
        }

        fetchClientLoans();
    }, [token]);
    if (!loans) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1 className='text-center pt-5 text-4xl'>Your Loans</h1>
            <div className='flex flex-wrap flex-row justify-center w-full gap-10 mb-10'>
                {loans.length > 0 ? loans.map(loan => <LoanCard Cardkey={loan.id} name={loan.name} amount={loan.amount} payments={loan.payments} />) : <p>"You do not have any loan."</p>}
            </div>

            <Button className='bg-[#AB9144]' color="dark" size="lg" ><NavLink to="/clients/loan/applyloan">Request Loan</NavLink></Button>


            <ToastContainer position="bottom-right" theme='dark' />
        </>
    )
}
export default Loans;
