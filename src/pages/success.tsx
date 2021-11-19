import Login from '@/components/guildportal/login'
import { trpc } from '@/libs/utils/trpc-client'
import { Session } from '@supabase/gotrue-js'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Account from '../components/forms/Guild/Account'
import { supabase } from '../libs/utils/supabaseClient'

const Success: React.FC<{ id: string; session: Session | null }> = ({ id, session }) => {
  const { data, error } = trpc.useQuery(['checkout.get-guild-session', { id }])

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

const SuccessWrapper = () => {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const {
    query: { session_id },
  } = useRouter()

  if (!session_id || typeof session_id !== 'string')
    return (
      <div>
        <Login />
      </div>
    )

  return <Success id={session_id} session={session} />
}

export default SuccessWrapper
