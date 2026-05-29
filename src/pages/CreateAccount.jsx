import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateAccount() {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [isAgency, setIsAgency] = useState('yes')
  const [errors, setErrors] = useState({})

  function handleSubmit() {
    let newErrors = {}

    if (fullName.trim() === '') newErrors.fullName = 'Full name is required'
    if (phone.trim() === '') newErrors.phone = 'Phone number is required'
    else if (phone.trim().length < 10) newErrors.phone = 'Enter a valid phone number'
    if (email.trim() === '') newErrors.email = 'Email is required'
    else if (!email.includes('@')) newErrors.email = 'Enter a valid email'
    if (password.trim() === '') newErrors.password = 'Password is required'
    else if (password.length < 6) newErrors.password = 'Minimum 6 characters'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const userData = { fullName, phone, email, password, companyName, isAgency }
    localStorage.setItem('popx_user', JSON.stringify(userData))
    navigate('/account-settings')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="bg-white w-full max-w-[390px] min-h-[calc(100vh-80px)] rounded-2xl shadow-lg flex flex-col px-6 py-8 overflow-y-auto">

        {/* Back → Welcome page */}
        <button onClick={() => navigate('/')} className="mb-6 text-gray-800 text-xl w-fit">
          ←
        </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-snug">
          Create your <br /> PopX account
        </h1>

        <div className="mb-4">
          <label className="block text-xs font-medium mb-1" style={{ color: '#6C4EF6' }}>Full Name*</label>
          <input
            type="text"
            placeholder="Marry Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium mb-1" style={{ color: '#6C4EF6' }}>Phone number*</label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium mb-1" style={{ color: '#6C4EF6' }}>Email address*</label>
          <input
            type="email"
            placeholder="marry@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium mb-1" style={{ color: '#6C4EF6' }}>Password*</label>
          <input
            type="password"
            placeholder="Min 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium mb-1" style={{ color: '#6C4EF6' }}>Company name</label>
          <input
            type="text"
            placeholder="Acme Inc."
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500"
          />
        </div>

        <div className="mb-8">
          <p className="text-sm text-gray-700 mb-2">Are you an Agency?*</p>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={isAgency === 'yes'}
                onChange={() => setIsAgency('yes')}
                className="accent-purple-600"
              />
              Yes
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={isAgency === 'no'}
                onChange={() => setIsAgency('no')}
                className="accent-purple-600"
              />
              No
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg text-white font-semibold text-sm"
          style={{ backgroundColor: '#6C4EF6' }}
        >
          Create Account
        </button>

      </div>
    </div>
  )
}