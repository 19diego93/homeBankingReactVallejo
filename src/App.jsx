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
import AccountDetails from "./pages/AccountDetails.jsx"
import { useSelector } from "react-redux"

function App() {
  const { loggedIn } = useSelector(store => store.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderMainFooter />}>
            {loggedIn ? [
              <Route key="1" path="clients/account" element={<Accounts />} />,
              <Route key="2" path="clients/account/:id" element={<AccountDetails />} />,
              <Route key="3" path="clients/loan" element={<Loans />} />,
              <Route key="4" path="clients/card" element={<CardWallet />} />,
              <Route key="5" path="clients/transaction" element={<Transactions />} />,
              <Route key="6" path="clients/card/applycard" element={<ApplyCard />} />,
              <Route key="7" path="clients/loan/applyloan" element={<ApplyLoan />} />,
              <Route key="8" path="clientHome" element={<ClientHome />} />
            ] : [
              <Route key="9" path="/" element={<Home />} />,
              <Route key="10" path="login" element={<Login />} />,
              <Route key="11" path="register" element={<Register />} />,
            ]}

            {loggedIn ? <Route key="default" path="*" element={<Navigate to="/clientHome" />} /> : <Route key="default" path="*" element={<Navigate to="/" />} />}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
