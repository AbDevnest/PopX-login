import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="bg-white w-full max-w-[390px] min-h-[calc(100vh-80px)] rounded-2xl shadow-lg flex flex-col justify-end pb-10 px-6">

        <div className="flex-1" />

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-gray-500 text-sm ">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/create-account')}
            className="w-full py-3 rounded-lg text-white font-semibold text-sm"
            style={{ backgroundColor: '#6C4EF6' }}
          >
            Create Account
          </button>

          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 rounded-lg font-semibold text-sm"
            style={{ backgroundColor: '#EDE9FE', color: '#6C4EF6' }}
          >
            Already Registered? Login
          </button>
        </div>

      </div>
    </div>
  )
}