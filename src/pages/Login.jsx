import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const bothFilled = email.trim() !== '' && password.trim() !== ''

  function handleLogin() {
    let newErrors = {}

    if (email.trim() === '') newErrors.email = 'Email is required'
    if (password.trim() === '') newErrors.password = 'Password is required'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const savedUser = localStorage.getItem('popx_user')

    if (!savedUser) {
      alert('No account found. Please sign up first.')
      return
    }

    const user = JSON.parse(savedUser)

    if (user.email !== email) {
      setErrors({ email: 'Email not registered' })
      return
    }

    if (user.password !== password) {
      setErrors({ password: 'Wrong password' })
      return
    }

    navigate('/account-settings')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="bg-white w-full max-w-[390px] min-h-[calc(100vh-80px)] rounded-2xl shadow-lg flex flex-col px-6 py-8">

        {/* Back → Welcome page */}
        <button onClick={() => navigate('/')} className="mb-6 text-gray-800 text-xl w-fit">
          ←
        </button>

        <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">
          Signin to your <br /> PopX account
        </h1>

        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <div className="mb-4">
          <label className="block text-xs font-medium mb-1" style={{ color: '#6C4EF6' }}>
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="mb-8">
          <label className="block text-xs font-medium mb-1" style={{ color: '#6C4EF6' }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-purple-500"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg text-white font-semibold text-sm"
          style={{
            backgroundColor: bothFilled ? '#6C4EF6' : '#C4C4C4',
            cursor: bothFilled ? 'pointer' : 'not-allowed',
          }}
        >
          Login
        </button>

      </div>
    </div>
  )
}