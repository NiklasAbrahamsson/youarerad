import { useState } from 'react'
import { supabase } from '../../../libs/utils/supabaseClient'

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string) => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex row flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + Next.js</h1>
        <p className="description">Sign in via magic link with your email below</p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className="block button"
            disabled={isLoading}
          >
            <span>{isLoading ? 'Loading' : 'Send magic link'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
