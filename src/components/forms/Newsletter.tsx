import { ChangeEvent, FormEvent, useState } from 'react'

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)
  const [query, setQuery] = useState({
    email: '',
  })

  const handleParam = () => (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const formSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })
    fetch('https://getform.io/f/9b7d40c7-8f6b-4da3-afc3-c7747a54cc47', {
      method: 'POST',
      body: formData,
    }).then(() => setQuery({ email: '' }))
  }

  return (
    <form onSubmit={formSubmit} className="">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="hey@youarerad.org"
        autoComplete="email"
        value={query.email}
        onChange={handleParam()}
        required
      />

      <button
        disabled={submitted}
        type="submit"
        className={
          submitted === true
            ? 'bg-black text-white mt-2 form-button cursor-default'
            : 'form-button mt-2'
        }
      >
        {submitted ? <div className="font-bold">Success!</div> : 'Sign Up'}
      </button>
    </form>
  )
}
