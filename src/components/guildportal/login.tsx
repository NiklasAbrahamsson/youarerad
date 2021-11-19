import Image from 'next/image'
import { useState } from 'react'
import { supabase } from '@/libs/utils/supabaseClient'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errormessage, setErrorMessage] = useState(false)
  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email, password })
      if (error) throw error
    } catch (error) {
      console.log(error)
      setErrorMessage(true)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <div className="flex flex-col items-center h-screen md:flex-row">
        <div className="relative hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
          <Image
            src="https://res.cloudinary.com/df23ubjbb/image/upload/v1628614015/General%20Media/The%20Guild.jpg"
            alt="A screenshot featuring the original World of Warcraft guild together before a Blizzard Game Master."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex items-center justify-center w-full h-screen px-6 bg-white border border-black shadow-2xl md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 drop-shadow-2xl ">
          <div className="w-full h-screen">
            <a className="flex items-center mb-4 md:mb-0">
              <h5 className="mt-12">Guild Member Login</h5>
            </a>
            <h2>IRL Healers. Mental Health Champions.</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="email">Email Address:</label>
                <input
                  className="mt-2"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  className="mt-2"
                  name="password"
                  type="password"
                  required
                  autoComplete="email"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>{errormessage ? 'login unsuccessful' : ''}</div>
              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-sm font-semibold leading-relaxed text-gray-700 hover:text-black focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleLogin(email, password)
                }}
                disabled={loading}
                className="form-button"
              >
                Log In
              </button>
            </form>
            <hr className="w-full my-12 border-gray-400" />
            <h5 className="-mt-6">Or Login With:</h5>
            <div className="flex justify-center gap-10 mt-6">
              <button
                aria-label="log in with Twitch"
                className="flex items-center justify-center w-full px-3 py-2 border-2 border-[#9146FF] rounded-xl bg-[#9146FF] hover:drop-shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <svg
                  id="prefix__Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x={0}
                  y={0}
                  viewBox="0 0 2400 2800"
                  xmlSpace="preserve"
                  width="2em"
                  height="2em"
                >
                  <path fill="#9146FF" d="M2200 1300l-400 400h-400l-350 350v-350H600V200h1600z" />
                  <g id="prefix__Layer_1-2">
                    <path
                      fill="#fff"
                      className="prefix__st1"
                      d="M500 0L0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300l-400 400h-400l-350 350v-350H600V200h1600v1100z"
                    />
                    <path
                      fill="#fff"
                      className="prefix__st1"
                      d="M1700 550h200v600h-200zM1150 550h200v600h-200z"
                    />
                  </g>
                </svg>
              </button>
              <button
                aria-label="log in with Discord"
                className="flex items-center justify-center w-full px-3 py-2 border-2 border-[#5865f2] rounded-xl bg-[#5865f2] hover:drop-shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <svg
                  fill="none"
                  height="2em"
                  viewBox="0 0 71 55"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <clipPath id="prefix__a">
                    <path d="M0 0h71v55H0z" />
                  </clipPath>
                  <g clipPath="url(#prefix__a)">
                    <path
                      d="M60.105 4.898A58.55 58.55 0 0045.653.415a.22.22 0 00-.233.11 40.784 40.784 0 00-1.8 3.697c-5.456-.817-10.885-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 00-.233-.11 58.386 58.386 0 00-14.451 4.483.207.207 0 00-.096.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 00.093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 00.249-.082 42.08 42.08 0 003.627-5.9.225.225 0 00-.123-.312 38.772 38.772 0 01-5.539-2.64.228.228 0 01-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 01.23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 01.233.027c.356.293.728.586 1.103.865a.228.228 0 01-.02.378 36.384 36.384 0 01-5.54 2.637.227.227 0 00-.121.315 47.249 47.249 0 003.624 5.897.225.225 0 00.249.085c5.801-1.795 11.684-4.503 17.757-8.962a.228.228 0 00.092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 00-.093-.084zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156s2.827-7.156 6.38-7.156c3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156s2.826-7.156 6.38-7.156c3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156z"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
