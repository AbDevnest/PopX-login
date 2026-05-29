import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCamera } from "react-icons/fa"

export default function Account() {
  const navigate = useNavigate()

  const savedUser = localStorage.getItem('popx_user')

  useEffect(() => {
    if (!savedUser) {
      navigate('/')
    }
  }, [])

  if (!savedUser) return null

  const user = JSON.parse(savedUser)

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="bg-white w-full max-w-[390px] min-h-[calc(100vh-80px)] rounded-2xl shadow-lg flex flex-col">

        <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
          <button onClick={() => navigate('/')} className="text-gray-800 text-xl bg-gray-500 rounded-full p-3">
            ←
          </button>
          <h1 className="text-base font-semibold text-gray-900">Account Settings</h1>
        </div>

        {/* Profile section */}
        <div className="px-6 py-6 border-b border-dashed border-gray-200">
          <div className="flex items-center gap-4">

            {/* Eagle image avatar */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://png.pngtree.com/png-clipart/20250101/original/pngtree-picture-of-a-eagle-png-image_18462284.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Camera badge */}
              <div
                className="absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                style={{ backgroundColor: '#6C4EF6' }}
              >
                <FaCamera />
              </div>
            </div>

            {/* Real user name and email from localStorage */}
            <div>
              <p className="font-semibold text-gray-900 text-sm">{user.fullName}</p>
              <p className="text-gray-500 text-xs mt-1">{user.email}</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

      </div>
    </div>
  )
}