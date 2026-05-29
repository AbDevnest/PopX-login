import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import CreateAccount from './pages/CreateAccount'
import LoginPage from './pages/Login'
import Account from './pages/Account'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account-settings" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}
