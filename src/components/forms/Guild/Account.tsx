import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import { Session } from '@supabase/gotrue-js'

export default function Account({ session }: { session: Session }) {
  const [isLoading, setIsLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatar_url, setAvatarUrl] = useState('')

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setIsLoading(true)
      const user = supabase.auth.user()! // Is null possible?

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string
    website: string
    avatar_url: string
  }) {
    try {
      setIsLoading(true)
      const user = supabase.auth.user()! // Is null possible?

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error: any) {
      alert(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user?.email ?? ''} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          value={username ?? ''}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="website"
          value={website ?? ''}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div>
        <button
          className="block button primary"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={isLoading}
        >
          {isLoading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <button className="block button" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
