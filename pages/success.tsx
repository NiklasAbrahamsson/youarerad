import { Session } from '@supabase/gotrue-js'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import Account from '../components/forms/Guild/Account'
import { fetchGetJSON } from '../components/utils/api-helpers'
import { supabase } from '../components/utils/supabaseClient'

const Success = () => {
  const [session, setSession] = useState<Session | null>(null)
  const {
    query: { session_id },
  } = useRouter()

  const { data, error } = useSWR(() => `/api/checkout_sessionsguild/${session_id}`, fetchGetJSON)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div>
      {error ? (
        ''
      ) : !data ? (
        <div>loading</div>
      ) : (
        <section className="max-w-screen-md">
          {!session ? '' : <Account key={session?.user?.id} session={session} />}
        </section>
      )}
    </div>
  )
}

export default Success
