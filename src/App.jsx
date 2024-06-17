import React from "react"
import Accounts from "./pages/Accounts"
import HeaderMainFooter from "./layouts/HeaderMainFooter"
import Loans from "./pages/Loans.jsx"
import CardWallet from "./pages/CardWallet.jsx"
import ApplyCard from "./pages/ApplyCard.jsx"
import ApplyLoan from "./pages/ApplyLoan.jsx"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"
import ClientHome from "./pages/ClientHome.jsx"
import Transactions from "./pages/Transactions.jsx"
import { useSelector } from "react-redux"

function App() {
  const { loggedIn } = useSelector(store => store.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderMainFooter />}>
            {loggedIn ? [
              <Route path="clients/account" element={<Accounts />} />,
              <Route path="clients/loan" element={<Loans />} />,
              <Route path="clients/card" element={<CardWallet />} />,
              <Route path="clients/transaction" element={<Transactions />} />,
              <Route path="clients/card/applycard" element={<ApplyCard />} />,
              <Route path="clients/loan/applyloan" element={<ApplyLoan />} />,
              <Route path="clientHome" element={<ClientHome />} />
            ] : [
              <Route path="/" element={<Home />} />,
              <Route path="login" element={<Login />} />,
              <Route path="register" element={<Register />} />,
            ]}

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
