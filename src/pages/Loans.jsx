import React from 'react'
import LoanCard from '../components/LoanCard'


const Loans = ({ wolfClient }) => {
    return (
        <>
            <h1 className='w-full py-8 text-2xl text-center'>Your Loans</h1>
            <div className='flex flex-wrap flex-row justify-center w-full gap-10 mb-10'>
                {wolfClient.loans.length > 0 ? wolfClient.loans.map(client => <LoanCard Cardkey={client.id} name={wolfClient.name} amount={client.amount} payments={client.payments} />) : <p>You do not have any loan.</p>}
            </div>
        </>
    )
}

export default Loans