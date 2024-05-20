import Accounts from "./pages/Accounts"
import HeaderMainFooter from "./layouts/HeaderMainFooter"
import Loans from "./pages/Loans.jsx"
import CreditCards from "./pages/CreditCards.jsx"
import ApplyCard from "./pages/ApplyCard.jsx"
import ApplyLoan from "./pages/ApplyLoan.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import clientsWolfBank from "./utils/clientsArray.js"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const client1 = clientsWolfBank.find(client => client.id == 1)

  const [client, setClient] = useState([]);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        let response = await axios.get('http://localhost:8080/api/clients/1');
        console.log(response);
        let { data } = response
        setClient(data);
        console.log(client)
      } catch (error) {
        console.error('Error fetching client:', error);
      }
    };

    fetchClient();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderMainFooter />}>
            <Route path="clients/account" element={<Accounts wolfClient={client} />} />
            <Route path="clients/loan" element={<Loans wolfClient={client} />} />
            <Route path="clients/card" element={<CreditCards wolfClient={client} />} />
            <Route path="clients/applycard" element={<ApplyCard />} />
            <Route path="clients/applyloan" element={<ApplyLoan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
